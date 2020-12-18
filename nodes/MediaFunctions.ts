import {
	BINARY_ENCODING,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
} from 'n8n-core';

import {
	IBinaryData,
	IDataObject,
} from 'n8n-workflow';

import { shopwareApiRequest } from './GenericFunctions';

export async function setMedia(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, mediaId: string, file: string | IBinaryData, optinalFileName: string,  overrideMode: string): Promise<any> {
	let fileName: string = '';
	let extension: string = '';
	const query: IDataObject = {};
	const option: IDataObject = {};
	const header: IDataObject = {};
	let body: IDataObject | Buffer;

	if(typeof file === 'string') {
		if(optinalFileName !== '') {
			fileName = optinalFileName;
		} else {
			fileName = file.substring(file.lastIndexOf('/')+1);
		}

		// @ts-ignore
		extension = file.split('/').pop().split('?')[0].split('.')[1] || 'jpg';
	
		Object.assign(query, {
			extension: extension,
			fileName: fileName, 
			'_response': true,
		});

		body = {
			url: file,
		};
	} else {
		if(file.fileName === undefined) {
			throw Error("Filename from binary data must not be empty");
		}

		if(optinalFileName !== '') {
			fileName = optinalFileName;
		} else {
			fileName = file.fileName.split('.').slice(0, -1).join('.');
		}

		// @ts-ignore
		extension = file.fileName.split('/').pop().split('?')[0].split('.')[1] || 'jpg';
	
		Object.assign(query, {
			extension: extension,
			fileName: fileName, 
		});

		Object.assign(option, {
			json: false,
		});
	
		Object.assign(header, {
			'content-type': file.mimeType,
			'Accept': 'application/json', // Otherwise the server response with http error 415
		});

		body = Buffer.from(file.data, BINARY_ENCODING);
	}

	try {
		await shopwareApiRequest.call(this, 'POST', '/_action/media/' + mediaId + '/upload', body, query, '' , option, header);

		return {
			fileName: fileName,
			extension: extension,
			mediaId: mediaId,
		} as IDataObject;
	} catch (error) {
		if(error.name === 'CONTENT__MEDIA_DUPLICATED_FILE_NAME') {
			try{
				if(overrideMode === 'rename') {
					const newFileName = await getNewFilename.call(this, fileName, extension);

					const newQuery = {
						extension: extension,
						fileName: newFileName.fileName,
						'_response': true,
					};
					await shopwareApiRequest.call(this, 'POST', '/_action/media/' + mediaId + '/upload', body, newQuery, '', option, header);

					return {
						fileName: fileName,
						extension: extension,
						mediaId: mediaId,
					} as IDataObject;
				} else if (overrideMode === 'replace') {
					// Get the existing file
					const getOldIdBody = {"limit":1,"filter":[{"type":"multi","operator":"AND","queries":[{"type":"equals","field":"fileName","value":fileName},{"type":"equals","field":"fileExtension","value":extension}]}]};
					const oldId = await shopwareApiRequest.call(this, 'POST', '/search/media/', getOldIdBody);

					// Replace
					await shopwareApiRequest.call(this, 'POST', '/_action/media/' + oldId[oldId.length - 1].id + '/upload', body, query, '', option, header);
					
					// Delete newly created asset
					await shopwareApiRequest.call(this, 'DELETE', '/media/' + mediaId, {});

					return {
						fileName: fileName,
						extension: extension,
						mediaId: oldId[oldId.length - 1].id,
					} as IDataObject;
				} else if (overrideMode === 'skip') {
					// Delete newly created asset
					await shopwareApiRequest.call(this, 'DELETE', '/media/' + mediaId, {});

					return {
						fileName: 'skipped',
						extension: '',
						mediaId: '',
					} as IDataObject;
				} else {
					// Delete newly created asset
					await shopwareApiRequest.call(this, 'DELETE', '/media/' + mediaId, {});
				
					throw Error("Asset already exists: " + fileName);	
				}
			} catch(error) {
				throw error;
			}
		}
	}

	return {
		fileName: 'error',
		extension: '',
		mediaId: '',
	} as IDataObject;
}

async function getNewFilename(this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions, fileName: string, extension: string) {
	// https://denkteich-test.shopware.store/api/v2/_action/media/provide-name?fileName=113063098_A_519NEU&extension=jpg
	const query = {
		extension: extension,
		fileName: fileName,
	};

	return shopwareApiRequest.call(this, 'GET', '/_action/media/provide-name', {}, query);
}