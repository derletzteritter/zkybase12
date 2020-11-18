import { atom } from 'recoil';

export const authState = {
  loggedIn: atom({
    key: 'authUserState',
    default: false
  })
}