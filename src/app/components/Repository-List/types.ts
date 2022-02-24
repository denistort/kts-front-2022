import { RepoItem } from '@store/GitHubStore/types';

export interface ReposListProps {
  data: RepoItem[] | null;
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
