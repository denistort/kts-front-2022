import { FC } from 'react';

import GitHubStore from '@store/GitHubStore/GitHubStore';

import ReposSearchPage from './pages/ReposSearchPage';
export const gitHubStore = new GitHubStore();
export const EXAMPLE_ORGANIZATION = 'ktsstudio';

const App: FC = () => {
  return (
    <div className="App">
      <ReposSearchPage />
    </div>
  );
};

export default App;
