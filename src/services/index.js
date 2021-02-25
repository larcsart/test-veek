import fetch from 'isomorphic-fetch';
import config from '~/config';

const getUrlSearch = () => `${config.apiUrl}/search`;

const fetchSearch = async (q, date) => {
  if (!q) return null;
  const url = getUrlSearch();
  console.log(q);

  try {
    const body = {
      search: q,
      date,
    };
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
    });
    console.log(response);
    return response.status;
  } catch (e) {
    return null;
  }
};

export {
  getUrlSearch,
  fetchSearch,
};
