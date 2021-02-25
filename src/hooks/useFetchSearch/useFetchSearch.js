import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import { fetchSearch, getUrlSearch } from '~/services';
import { search } from '~/store/actions';

const useFetchSearch = (q, date) => {
  const url = getUrlSearch(q);
  const dispatch = useDispatch();
  const fetcher = () => fetchSearch(q, date);

  useEffect(() => {
    if (q && date) {
      const searchData = {
        search: q,
        date,
      };
      dispatch(search.addSearchList(searchData));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, date]);

  const response = useSWR(q ? url : null, fetcher);

  return response;
};

export default useFetchSearch;
