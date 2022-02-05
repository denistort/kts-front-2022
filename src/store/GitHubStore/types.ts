// /** Интерфейс класса для работы с GitHub API
//  * названия getOrganizationReposList
//  * (а также типов GetOrganizationReposListParams и RepoItem)
//  * поменяйте в соответствии с выполняемым запросом.
//  * Или не меняйте, если делаете запрос за списком репоизториев для организации)
//  * Выберите любой запрос из публичного API GitHub.
//  */
enum sort {
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
	sort?: sort
}

export interface RepoItem {
	name: string,
	id: string,
	owner: owner
}
interface owner{
	id: string,
	url: 'string'
}
export type ApiResp<T = []> = {}
export interface IGitHubStore {
	getOrganizationReposList: (params: GetOrganizationReposListParams) => Promise<ApiResp<RepoItem[]>>;
}
