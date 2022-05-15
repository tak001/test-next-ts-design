import { User } from '@/domain/models/users/user';
import UserIndexOrganism from '@/components/organisms/users';

interface Props {
  users?: User[];
}

const UserIndexTemplate = ({ users }: Props) => {
  return <UserIndexOrganism users={users} />;
};

export default UserIndexTemplate;
