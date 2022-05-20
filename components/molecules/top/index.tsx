import LinkButton from '@/components/atoms/linkButton';
import NormalText from '@/components/atoms/normalText';
import PageTitleText from '@/components/atoms/pageTitleText';

const apiUrlNode = process.env.API_URL && (
  <>
    <NormalText text={process.env.API_URL} />
    <NormalText text={process.env.APP_ENV!} />
  </>
);

// TODO: きっちりしたAtomic designにする
const TopMolecule = () => {
  return (
    <>
      <PageTitleText title={'Home'} />
      {apiUrlNode}
      <LinkButton text="to User" href="/users" />
      <LinkButton text="to SWR" href="/users/swr" />
    </>
  );
};

export default TopMolecule;
