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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ApiResp<T = []> = any;

export interface GetReposBranchesByOwnerParams {
  readonly owner: string;
  readonly repo: string;
  readonly protected?: boolean;
  readonly per_page: number;
  readonly page: number;
}
export interface BranchesItem {
  name: string;
  commit: object;
  protected: boolean;
  protection_url: string;
}
export interface IGitHubStore {
  getOrganizationReposList: (
    params: GetOrganizationReposListParams
  ) => Promise<ApiResp<RepoItem[]>>;
  getOwnerRepoBranchesList: (
    params: GetReposBranchesByOwnerParams
  ) => Promise<ApiResp<BranchesItem[]>>;
}
