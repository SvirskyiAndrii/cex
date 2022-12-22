import styles from './styles.module.scss';
import { OrderBlock } from './orderBlock';
import { AssetsOverview } from './assetsOverview';
import { OpenOrders } from './openOrders';
import { Charts } from './charts';

export const TradePage = () => {
  return (
    <div className={styles.tradePage}>
      <div className={styles.left}>
        {/* <div className={styles.graph}>graph</div> */}
        <Charts />
        <AssetsOverview />
        <OpenOrders />
      </div>
      <OrderBlock />
    </div>
  );
};
