import { ColorType, NumValue } from 'components/NumberValue';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type OrderProps = {
  price: string;
  amount: string;
  total: string;
};

export const OrderBlock = () => {
  const [sellOrders, setSellOrders] = useState<OrderProps[]>([]);
  const [buyOrders, setBuyOrders] = useState<OrderProps[]>([]);
  const [decimal, setDecimal] = useState<any>('1 decimal');
  const [openedDecimal, setOpenedDecimal] = useState(false);
  const [firstLimit, setFirstLimit] = useState<any>({ from: null, to: null });
  const [secondLimit, setSecondLimit] = useState<any>({ from: null, to: null });

  const blockInvalidChar = (e: any) =>
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  useEffect(() => {
    setTimeout(() => {
      const sellOrders = [];
      const buyOrders = [];
      for (let i = 0; i < 20; i++) {
        const priceData = {
          price: `${17000 + i * 50}`,
          amount: `${1 + i / 10}`,
          total: `${10 + i / 10}`,
        };
        sellOrders.push(priceData);
        buyOrders.push(priceData);
      }
      setSellOrders(sellOrders);
      setBuyOrders(sellOrders);
    }, 2000);
  }, []);
  return (
    <div className={styles.orderBlock}>
      <div className={styles.orders}>
        <div className={styles.sellBlock}>
          <div className={styles.orderBlockTitle}>Order Book</div>
          <div className={styles.orderTableHeader}>
            <div>Price USDT</div>
            <div>Amount (BTC)</div>
            <div>Total (BTC)</div>
          </div>
          <div className={styles.sellList}>
            {sellOrders.length ? (
              sellOrders.map((el, i) => {
                return (
                  <div className={styles.orderTableBody} key={i}>
                    <NumValue
                      num='1234.1'
                      maxDecimalLength={3}
                      color={ColorType.red}
                    />

                    <div>{el.amount}</div>
                    <div>{el.total}</div>
                    <div></div>
                  </div>
                );
              })
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
        <div className={styles.buyBlock}>
          <div className={styles.buyBlockSubtitle}>
            17801.0 <span>~17,757,4 USD</span>
          </div>
          <div className={styles.sellList}>
            {sellOrders.length ? (
              sellOrders.map((el, i) => {
                return (
                  <div className={styles.orderTableBody} key={i}>
                    <NumValue
                      num='17801'
                      maxDecimalLength={3}
                      color={ColorType.green}
                    />

                    <div>{el.amount}</div>
                    <div>{el.total}</div>
                    <div></div>
                  </div>
                );
              })
            ) : (
              <div>loading...</div>
            )}
          </div>
          <div className={styles.decimalContainer}>
            <div
              className={`${styles.decimalTitle} ${
                openedDecimal ? styles.active : ''
              }`}
              onClick={() => {
                setOpenedDecimal(!openedDecimal);
              }}
            >
              {decimal}
            </div>
            {openedDecimal && (
              <div className={styles.decimalDropdown}>
                <div>1 decimal</div>
                <div>Ones</div>
                <div>Tens</div>
                <div>Hundreds</div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.recentTrades}>
          <div className={styles.sellBlock}>
            <div className={styles.tradesBlockTitle}>
              Recent Trades <span>Market Depth</span>
            </div>
            <div className={styles.orderTableHeader}>
              <div>Price USDT</div>
              <div>Amount (BTC)</div>
              <div>Time</div>
            </div>
            <div className={styles.recentList}>
              {sellOrders.length ? (
                sellOrders.map((el, i) => {
                  return (
                    <div className={styles.orderTableBody} key={i}>
                      <NumValue
                        num='1234.1'
                        maxDecimalLength={3}
                        color={ColorType.red}
                      />

                      <div>{el.amount}</div>
                      <div>23:06:10</div>
                      <div></div>
                    </div>
                  );
                })
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spot}>
        <div className={styles.spotTitle}>Spot</div>
        <div className={styles.spotContent}>
          <div className={styles.converter}>
            <div className={styles.converterTitle}>Limit</div>
            <div className={styles.inputContainer}>
              <input
                type='number'
                placeholder='Price'
                className={styles.input}
                value={firstLimit.from}
                onKeyDown={blockInvalidChar}
                onChange={(e) => {
                  const { to } = firstLimit;
                  const limitFrom = e.target.value;
                  setFirstLimit({
                    to,
                    from: limitFrom ? Number(limitFrom) : null,
                  });
                }}
              />
              <div className={styles.currency}>USDT</div>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    const { to } = firstLimit;
                    const from = firstLimit.from + 1;
                    setFirstLimit({
                      to,
                      from,
                    });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    const { to } = firstLimit;
                    const from = firstLimit.from - 1;
                    setFirstLimit({
                      to,
                      from,
                    });
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input
                type='number'
                placeholder='Price'
                className={styles.input}
                value={firstLimit.to}
                onKeyDown={blockInvalidChar}
                onChange={(e) => {
                  const { from } = firstLimit;
                  const limitTo = e.target.value;
                  setFirstLimit({
                    from,
                    to: limitTo ? Number(limitTo) : null,
                  });
                }}
              />
              <div className={styles.currency}>USDT</div>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    const { from } = firstLimit;
                    const to = firstLimit.to + 1;
                    setFirstLimit({
                      to,
                      from,
                    });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    const { from } = firstLimit;
                    const to = firstLimit.to - 1;
                    setFirstLimit({
                      to,
                      from,
                    });
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className={styles.percentage}>
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.row}>
                <div className={styles.label}>Available:</div>
                <div className={styles.value}>
                  0 USDT <span className={styles.arrows}>{'< >'}</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Volume :</div>
                <div className={styles.value}>0 USDT</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Advanced: -</div>
                <div className={styles.value}>Settings</div>
              </div>
            </div>
            <button className={styles.login}>Log / Reg</button>
          </div>
          <div className={styles.converter}>
            <div className={styles.converterTitle}>Limit</div>
            <div className={styles.inputContainer}>
              <input
                type='number'
                placeholder='Price'
                className={styles.input}
                value={secondLimit.from}
                onKeyDown={blockInvalidChar}
                onChange={(e) => {
                  const { to } = secondLimit;
                  const limitFrom = e.target.value;
                  setSecondLimit({
                    to,
                    from: limitFrom ? Number(limitFrom) : null,
                  });
                }}
              />
              <div className={styles.currency}>USDT</div>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    const { to } = secondLimit;
                    const from = secondLimit.from + 1;
                    setSecondLimit({
                      to,
                      from,
                    });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    const { to } = secondLimit;
                    const from = secondLimit.from - 1;
                    setSecondLimit({
                      to,
                      from,
                    });
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <input
                type='number'
                placeholder='Price'
                className={styles.input}
                value={secondLimit.to}
                onKeyDown={blockInvalidChar}
                onChange={(e) => {
                  const { from } = secondLimit;
                  const limitTo = e.target.value;
                  setSecondLimit({
                    from,
                    to: limitTo ? Number(limitTo) : null,
                  });
                }}
              />
              <div className={styles.currency}>USDT</div>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    const { from } = secondLimit;
                    const to = secondLimit.to + 1;
                    setSecondLimit({
                      to,
                      from,
                    });
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    const { from } = secondLimit;
                    const to = secondLimit.to - 1;
                    setSecondLimit({
                      to,
                      from,
                    });
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className={styles.percentage}>
              <div>25%</div>
              <div>50%</div>
              <div>75%</div>
              <div>100%</div>
            </div>
            <div className={styles.statistics}>
              <div className={styles.row}>
                <div className={styles.label}>Available:</div>
                <div className={styles.value}>
                  0 USDT <span className={styles.arrows}>{'< >'}</span>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Volume :</div>
                <div className={styles.value}>0 USDT</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Advanced: -</div>
                <div className={styles.value}>Settings</div>
              </div>
            </div>
            <button className={styles.login}>Log / Reg</button>
          </div>
        </div>
      </div>
    </div>
  );
};
