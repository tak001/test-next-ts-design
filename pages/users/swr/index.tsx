import userUseCase from '@/application/users';
import UserIndexTemplate from '@/components/templates/users';

const UserIndex = () => {
  const { data } = userUseCase.fetchSWR();

  return (
    <>
      <UserIndexTemplate users={data} />
    </>
  );
};

export default UserIndex;
