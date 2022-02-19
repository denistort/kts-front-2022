import { useEffect, useState } from 'react';

interface UseStateState {
  data: any | null;
  loading: boolean;
  error: unknown;
}
const UseFetch = (fetchingDataFunc: Function) => {
  const [state, setState] = useState<UseStateState>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingDataFunc;
        setState({ ...state, loading: true });
        setState({ ...state, loading: false, data: data });
      } catch (e) {
        setState({ ...state, loading: false, error: e });
      }
    };
    fetchData();
  }, []);
  return state;
};

export default UseFetch;
