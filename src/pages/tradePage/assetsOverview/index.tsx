import styles from './styles.module.scss';

export const AssetsOverview = () => {
  return (
    <div className={styles.container}>
      <a href='#' className={styles.overviewLink}>
        Asset Overview
      </a>
      <div className={styles.mainAccount}>Main Account</div>
      <div className={styles.balances}>
        <div>
          BTC Balance<span>:--</span>
        </div>
        <div>
          USD Balance<span>:--</span>
        </div>
      </div>
      <button className={styles.login}>
        Log / <span>Reg</span>
      </button>
    </div>
  );
};
