import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import userUseCase from '@/application/users';
import { User } from '@/domain/models/users/user';

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchFunction = async () => {
      const user = await userUseCase.find(Number(id));
      setUser(user);
    };
    fetchFunction();
  }, [id]);

  return (
    user && (
      <>
        <p>{user?.id}</p>
        <p>{user?.name}</p>
        <p>{user?.mailAddress}</p>
        <div>
          <Link href="/user">to User</Link>
        </div>
      </>
    )
  );
};

export default UserDetail;
