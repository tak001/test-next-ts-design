import { useState } from 'react';
import { userUseCase } from '@/application/users';
import { User } from '@/domain/models/users/user';
import UserIndexTemplate from '@/components/templates/users';

const UserIndex = () => {
  const [users, setUsers] = useState<User[]>();

  const handleClick = async () => {
    const users = await userUseCase.fetchAll();
    setUsers(users);
  };

  return (
    <>
      <UserIndexTemplate users={users} />
      <div>
        <button onClick={handleClick}>FetchAll</button>
      </div>
    </>
  );
};

export default UserIndex;
