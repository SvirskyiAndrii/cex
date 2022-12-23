import { useState } from 'react';
import styles from './styles.module.scss';

const data = [
  {
    coin: {
      title: '1 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '2 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '3 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '4 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '5 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '6 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '7 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '8 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
  {
    coin: {
      title: '9 EARTH',
      subtitle: 'Earth Fund',
    },
    total: '0.00',
    available: '0.00',
    inOrders: '0.00',
  },
];

export const BalancePage = () => {
  const [filteredCoins, setFilteredCoins] = useState<any>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isSmallBalancesHidden, setIsSmallBalancesHidden] = useState(true);

  const handleSearch = (arr: any[], searchInput: string) => {
    setSearchValue(searchInput);
    setFilteredCoins(
      arr.filter((obj) =>
        Object.values(obj.coin)
          .flat()
          .some((v) =>
            `${v}`.toLowerCase().includes(`${searchInput}`.toLowerCase())
          )
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.currencies}>
        <div>0.00BTC</div>
        <div>~ 0.00 USD</div>
      </div>
      <div className={styles.filters}>
        <div className={styles.searchContainer}>
          <input
            type='text'
            placeholder='Search'
            className={styles.search}
            value={searchValue}
            onChange={(e) => {
              handleSearch(data, e.target.value);
            }}
          />
          <span className={styles.icon} />
        </div>
        <div className={styles.hide}>
          <input
            type='checkbox'
            id='hide-small-balances'
            className={`${styles.check} ${
              isSmallBalancesHidden ? styles.checked : ''
            }`}
            onClick={() => {
              setIsSmallBalancesHidden(!isSmallBalancesHidden);
            }}
            checked={isSmallBalancesHidden}
          />
          <label htmlFor='hide-small-balances'> Hide small balances</label>
        </div>
      </div>
      <div className={styles.message}>
        To trade the token, please first click "Transfer" and transfer the
        assets from the Master Account to the Trading Account.
      </div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>Coin</div>
          <div>Total</div>
          <div>Available</div>
          <div>In Orders</div>
          <div>Operation</div>
        </div>
        <div className={styles.tableContent}>
          {filteredCoins.length
            ? filteredCoins.map(
                ({ coin, total, available, inOrders }: any, i: number) => (
                  <div key={i} className={styles.tableRow}>
                    <div className={styles.coinContainer}>
                      <img src={undefined} alt='icon' className={styles.icon} />
                      <div className={styles.coin}>
                        <div>{coin.title}</div>
                        <div>{coin.subtitle}</div>
                      </div>
                    </div>
                    <div className={styles.total}>
                      <div>{total}</div>
                      <div>- {total} USD</div>
                    </div>
                    <div className={styles.available}>
                      <div>{available}</div>
                      <div>- {available} USD</div>
                    </div>
                    <div className={styles.inOrders}>
                      <div>{inOrders}</div>
                      <div>- {inOrders} USD</div>
                    </div>
                    <div className={styles.operations}>
                      <button>Trade</button>
                      <button>Transfer</button>
                    </div>
                  </div>
                )
              )
            : data.map(({ coin, total, available, inOrders }, i) => (
                <div key={i} className={styles.tableRow}>
                  <div className={styles.coinContainer}>
                    <img src={undefined} alt='icon' className={styles.icon} />
                    <div className={styles.coin}>
                      <div>{coin.title}</div>
                      <div>{coin.subtitle}</div>
                    </div>
                  </div>
                  <div className={styles.total}>
                    <div>{total}</div>
                    <div>- {total} USD</div>
                  </div>
                  <div className={styles.available}>
                    <div>{available}</div>
                    <div>- {available} USD</div>
                  </div>
                  <div className={styles.inOrders}>
                    <div>{inOrders}</div>
                    <div>- {inOrders} USD</div>
                  </div>
                  <div className={styles.operations}>
                    <button>Trade</button>
                    <button>Transfer</button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
