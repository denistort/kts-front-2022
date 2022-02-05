import '@/App.css';
import RepositoryList from './Components/Repository-List/Repository-list.component';

import GitHubStore from '@/store/GitHubStore/GitHubStore';

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';

gitHubStore.getOrganizationReposList({
  org: EXAMPLE_ORGANIZATION
}).then(result => {
  console.log(result); // в консоли появится список репозиториев в ktsstudio
})


function App() {
  return (
    <div className="App">
			<RepositoryList />			
    </div>
  );
}

export default App;
