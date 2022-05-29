import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { usersState } from '@/store/users/usersAtom';
import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';
import UserIndexTemplate from '@/components/templates/users';
import { RecoilTest } from '~/components/test/recoilTest';

const UserIndex = () => {
  const [users, setUsers] = useState<User[]>();
  const [storeUsers, setStoreUsers] = useRecoilState(usersState);

  console.log('storeUsers', storeUsers);

  const handleClick = async () => {
    const users = await userUseCase.findAll();
    setUsers(users);
  };

  const ChangeHandle = (e: string) => {
    setStoreUsers([new User(1, e, 'foo')]);
  };

  return (
    <>
      <UserIndexTemplate users={users} />
      <div>
        <button onClick={handleClick}>FetchAll</button>
      </div>
      <div>
        <p>recoil</p>
        {storeUsers.map((item) => (
          <p key={item.id}>{item.id}</p>
        ))}
      </div>
      <div>
        <p>rendering test</p>
        <input type="text" onChange={(e) => ChangeHandle(e.target.value)} />
        <RecoilTest />
      </div>
    </>
  );
};

export default UserIndex;
