import { useState } from 'react';
import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';
import UserIndexTemplate from '@/components/templates/users';

const UserIndex = () => {
  const [users, setUsers] = useState<User[]>();

  const handleClick = () => {
    const { data } = userUseCase.findSWR();
    setUsers(data);
  };

  return (
    <>
      <UserIndexTemplate users={users} />
      <div>
        <button onClick={handleClick}>FetchSWR</button>
      </div>
    </>
  );
};

export default UserIndex;
