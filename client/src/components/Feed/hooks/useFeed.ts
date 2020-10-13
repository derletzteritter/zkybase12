import { atom, useRecoilState } from 'recoil';

export const feedListState = atom({
  key: 'feedListState',
  default: []
})

export const useFeed = () => {
  const [feedList, setFeedList] = useRecoilState(feedListState);
  return { feedList, setFeedList }
}