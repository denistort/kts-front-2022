import GitHubStore from '@store/GitHubStore/GitHubStore';
import RepositoryList from '@app/components/Repository-List';
const gitHubStore = new GitHubStore();
const EXAMPLE_ORGANIZATION = 'ktsstudio';

gitHubStore.getOrganizationReposList({
  org: EXAMPLE_ORGANIZATION
}).then(result => {
  console.log(result);
})

function App() {
  return (
    <div className="App">
      <RepositoryList />
    </div>
  );
}

export default App;
