import LinkButton from '@/components/atoms/linkButton';
import { User } from '@/domain/models/users/user';

interface Props {
  users?: User[];
}

const UserListMolecule = ({ users }: Props) => {
  const userListNode =
    users &&
    users.map((user) => (
      <>
        <p key={user.id}>
          ID: {user.id}、NAME: {user.name}、MailAddress: {user.mailAddress}
        </p>
        <LinkButton text="to Detail" href={`/users/detail/${user.id}`} />
      </>
    ));

  return <>{userListNode}</>;
};

export default UserListMolecule;
