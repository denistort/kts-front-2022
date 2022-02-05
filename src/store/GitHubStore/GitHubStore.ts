import ApiStore from '../../shared/store/ApiStore/ApiStore';
import {IGitHubStore} from "./types";
import { GetOrganizationReposListParams, RepoItem, ApiResp } from './types';

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore('https://api.github.com'); // TODO: не забудьте передать baseUrl в конструктор

    // TODO: реализовать интерфейс IGitHubStore

    async getOrganizationReposList({ org }: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
        // TODO: Здесь сделайте вызов из this.apiStore и верните результат
				const data = await this.apiStore.request({
					method: 'GET',
					endpoint: `/orgs/${org}/repos`,
					headers: {
						Accept: 'application/vnd.github.v3+json'
					},
					data: {}
				})
				return data;
        // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
    }
}