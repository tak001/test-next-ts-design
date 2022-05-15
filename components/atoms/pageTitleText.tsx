import styles from './pageTitleText.module.scss';

interface Props {
  title: string;
}

const PageTitleText = ({ title }: Props) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default PageTitleText;
