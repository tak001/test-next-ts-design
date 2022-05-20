import userUseCase from '@/application/users';
import UserIndexTemplate from '@/components/templates/users';

const UserIndex = () => {
  const { data } = userUseCase.findSWR();

  return (
    <>
      <UserIndexTemplate users={data} />
    </>
  );
};

export default UserIndex;
