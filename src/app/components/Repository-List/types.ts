import { RepoItem } from '@store/GitHubStore/types';

export interface GitReposListState {
  currentInputState: string;
  isLoading: boolean;
  data: RepoItem[] | null;
}
