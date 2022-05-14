import Link from 'next/link';

const Index = () => {
  return (
    <>
      {/* <div>{process.env.API_URL}</div> */}
      <Link href="/user">
        <a>to User</a>
      </Link>
    </>
  );
};

export default Index;
