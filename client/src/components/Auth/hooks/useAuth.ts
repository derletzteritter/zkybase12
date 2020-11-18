import { useRecoilState } from 'recoil';
import { authState } from './state';

export const useAuth = () => {
  const [user, setUser ] = useRecoilState(authState.loggedIn);
  return { user, setUser };
}