import { atom, useRecoilState } from 'recoil';

export const feedListState = atom({
  key: 'feedListState',
  default: [
    {
      id: 1,
      name: 'Christopher Gjelten',
      content: 'Har noen tid til å dra ut og handle litt mat for meg?',
      reply: {
        id: 1,
        name: 'Ola havlorsen',
        content: 'Seff, det fikser jeg!'
      }
      
    }
  ]
})

export const useFeed = () => {
  const [feedList, setFeedList] = useRecoilState(feedListState);
  return { feedList, setFeedList }
}