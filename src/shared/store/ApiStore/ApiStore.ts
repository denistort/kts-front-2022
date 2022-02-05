import {ApiResponse, IApiStore, RequestParams} from './types';

export default class ApiStore implements IApiStore {
	constructor(readonly baseUrl: string) {
        // TODO: Примите из параметров конструктора baseUrl
        // и присвойте его в this.baseUrl
				this.baseUrl = baseUrl;
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
			const response = await fetch(`${this.baseUrl}${params.endpoint}`, params);
			return await response.json();
		}
}