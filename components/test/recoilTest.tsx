import { useRecoilState } from 'recoil';
import { usersState } from '@/store/users/usersAtom';

export const RecoilTest = () => {
  const [storeUsers] = useRecoilState(usersState);

  const getRandomInt = () => {
    return Math.random();
  };

  return (
    <div>
      <p suppressHydrationWarning>{getRandomInt()}</p>
      {storeUsers.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))}
    </div>
  );
};
