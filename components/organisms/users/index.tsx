import { User } from '@/domain/models/users/user';
import PageTitleText from '@/components/atoms/pageTitleText';
import UserListMolecule from '@/components/molecules/users/list';

interface Props {
  users?: User[];
}

// TODO: きっちりしたAtomic designにする
const UserIndexOrganism = ({ users }: Props) => {
  return (
    <>
      <PageTitleText title={'User'} />
      <UserListMolecule users={users} />
    </>
  );
};

export default UserIndexOrganism;
