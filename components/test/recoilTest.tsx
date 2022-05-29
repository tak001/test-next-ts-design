import { useRecoilState } from 'recoil';
import { usersSelector } from '@/store/users/usersSelector';

export const RecoilTest = () => {
  const [storeUsers] = useRecoilState(usersSelector);

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
