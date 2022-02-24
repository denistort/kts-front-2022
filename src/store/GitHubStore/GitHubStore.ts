import ApiStore from '@shared/store/ApiStore/ApiStore';
import { HTTPMethod } from '@shared/store/ApiStore/types';

import {
  BranchesItem,
  GetReposBranchesByOwnerParams,
  IGitHubStore,
} from './types';
import { GetOrganizationReposListParams, RepoItem, ApiResp } from './types';

export const GITBASEURL = 'https://api.github.com';

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore(GITBASEURL);

  async getOrganizationReposList({
    org,
  }: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
    const data = await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/orgs/${org}/repos`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      data: {},
    });
    return data;
  }
  async getOwnerRepoBranchesList({
    repo,
    owner,
  }: GetReposBranchesByOwnerParams): Promise<ApiResp<BranchesItem[]>> {
    const data = await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/repos/${owner}/${repo}/branches`,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      data: {},
    });
    return data;
  }
}
