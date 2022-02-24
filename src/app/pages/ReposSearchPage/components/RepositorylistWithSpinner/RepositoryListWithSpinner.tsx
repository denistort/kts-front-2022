import RepositoryList from '@app/components/Repository-List';
import { WithSpinner } from '@app/components/WithSpinnerHOC/WithSpinnerHoc';

const RepositoryListWithSpinner = WithSpinner(RepositoryList);

export default RepositoryListWithSpinner;
