import styles from './styles.module.scss';
import { ReactComponent as Bell } from '../../../assets/img/bell.svg';
import { ReactComponent as Info } from '../../../assets/img/info-grey.svg';

export const OpenOrders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ordersHeader}>
        <div className={styles.title}>Open Orders</div>
        <Bell className={styles.bell} />
      </div>
      <div className={styles.tableHeader}>
        <div>Time</div>
        <div className={styles.sort}>All Pairs</div>
        <div>All Types</div>
        <div className={styles.sort}>Buy/Sell</div>
        <div>Price</div>
        <div>Amount</div>
        <div className={styles.cancel}>Cancel All</div>
      </div>
      <div className={styles.tableContent}>
        <div className={styles.noData}>No Data</div>
        <div className={styles.paragraph}>
          Found 0 Result(s). Only the most recent 30 order details in the past
          three months are displayed. <Info className={styles.info} />
        </div>
      </div>
    </div>
  );
};
