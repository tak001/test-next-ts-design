import Link from 'next/link';
import styles from './linkButton.module.scss';

interface Props {
  text: string;
  href: string;
}

const LinkButton = ({ text, href }: Props) => {
  return (
    <div className={styles.linkButton}>
      <Link href={href}>
        <a className={styles.text}>{text}</a>
      </Link>
    </div>
  );
};

export default LinkButton;
