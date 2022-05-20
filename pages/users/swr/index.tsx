import { useState } from 'react';
import { userUseCase } from '@/application/users';
import { User } from '@/domain/models/users/user';
import UserIndexTemplate from '@/components/templates/users';

const UserIndex = () => {
  // const [users, setUsers] = useState<User[]>();
  const { data } = userUseCase.useFetchUser();

  return (
    <>
      <UserIndexTemplate users={data} />
    </>
  );
};

export default UserIndex;
