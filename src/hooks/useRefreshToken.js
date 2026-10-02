import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/users/refresh', {
      withCredentials: true,
    });
    setAuth((prev) => {
      // console.log(JSON.stringify(prev));
      // console.log('<<REFRESH >>',response.data);
      return {
        ...prev,
        fio: response.data.fio,
        roles: response.data.roles,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
