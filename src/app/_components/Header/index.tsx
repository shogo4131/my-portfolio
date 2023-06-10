import Link from 'next/link';
import styles from './index.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Uncle React Portfolio Site</Link>
      </h1>
      <nav>
        <a href="https://react-uncle-blog.netlify.app/">Tech Blog</a>
      </nav>
    </header>
  );
};
