enum Sort {
  created = 'created',
  updated = 'updated',
  pushed = 'pushed',
  full_name = 'full_name',
}
export type GetOrganizationReposListParams = {
  org: string;
  direction?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
  sort?: Sort;
};

export interface RepoItem {
  name: string;
  updated_at: string;
  stargazers_count: number;
  id: string;
  owner: Owner;
}
interface Owner {
  login: string;
  avatar_url: string;
  id: string;
  url: 'string';
}
export type ApiResp<T = []> = any;

export interface IGitHubStore {
  getOrganizationReposList: (
    params: GetOrganizationReposListParams
  ) => Promise<ApiResp<RepoItem[]>>;
}
