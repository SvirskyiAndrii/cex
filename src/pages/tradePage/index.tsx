import styles from './styles.module.scss';
import { OrderBlock } from './orderBlock';
import { AssetsOverview } from './assetsOverview';
import { OpenOrders } from './openOrders';

export const TradePage = () => {
  return (
    <div className={styles.tradePage}>
      <div className={styles.left}>
        <div className={styles.graph}>graph</div>
        <AssetsOverview />
        <OpenOrders />
      </div>
      <OrderBlock />
    </div>
  );
};
