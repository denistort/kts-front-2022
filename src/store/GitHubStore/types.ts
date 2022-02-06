enum Sort {
	created = 'created',
	updated = 'updated',
	pushed = 'pushed',
	full_name= 'full_name'
}
export type GetOrganizationReposListParams = {
	org: string,
	direction?: 'asc' | 'desc',
	per_page?: number,
	page?: number,
	sort?: Sort
}

export interface RepoItem {
	name: string,
	id: string,
	owner: Owner
}
interface Owner{
	id: string,
	url: 'string'
}
export type ApiResp<T = []> = {}

export interface IGitHubStore {
	getOrganizationReposList: (params: GetOrganizationReposListParams) => Promise<ApiResp<RepoItem[]>>;
}
