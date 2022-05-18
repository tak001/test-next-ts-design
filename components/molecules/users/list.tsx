import LinkButton from '@/components/atoms/linkButton';
import { User } from '@/domain/models/users/user';

interface Props {
  users?: User[];
}

// TODO: きっちりしたAtomic designにする
const UserListMolecule = ({ users }: Props) => {
  const userListNode =
    users &&
    users.map((user) => (
      <div key={user.id}>
        <p>
          ID: {user.id}、NAME: {user.name}、MailAddress: {user.mailAddress}
        </p>
        <LinkButton text="to Detail" href={`/users/detail/${user.id}`} />
      </div>
    ));

  return <>{userListNode}</>;
};

export default UserListMolecule;
