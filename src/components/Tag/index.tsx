import styles from './index.module.css';

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.tag}>{children}</span>;
};
