import { useEffect, useState } from 'react';

import { gitHubStore } from '@app/App';

interface UseStateState {
  data: any | null;
  loading: boolean;
  error: unknown;
}
const useFetchRepos = (whatToFind: string) => {
  const [state, setState] = useState<UseStateState>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true});
        const data = await gitHubStore.getOrganizationReposList({
          org: whatToFind,
        });
        setState({ ...state, data: data, loading: false });
      } catch (error) {
        setState({ ...state, error: error, loading: false });
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return state;
};

export default useFetchRepos;
