import { useEffect, useState } from 'react';
import { renderNumber, getPriceOdds } from 'utils';
import styles from './styles.module.scss';
import { Modal } from 'components/Modal';
import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/SignUpPage';

type HeaderData = {
  price: null | string;
  hight: null | string;
  low: null | string;
  amount: null | string;
  volume: null | string;
  prevPrice: null | string;
};

export const Header = () => {
  const [data, setData] = useState<HeaderData>({
    price: null,
    hight: null,
    low: null,
    amount: null,
    volume: null,
    prevPrice: null,
  });
  const [modalType, setModalType] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        price: '17479.0',
        hight: '17479.0',
        low: '16960.9',
        amount: '4604.0',
        volume: '79489792.26',
        prevPrice: '16824.5',
      });
    }, 2000);
  }, []);

  const { price, hight, low, amount, volume, prevPrice } = data;
  const { isPositive, priceOdds } = getPriceOdds(price, prevPrice);
  return (
    <>
      <header className={styles.header}>
        <div>logo</div>
        <div>
          <span>()</span>
          BTC / USDT
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>Price</div>
          <span>{renderNumber(price)}</span>
          {priceOdds !== null && (
            <span className={isPositive ? styles.positive : styles.negative}>
              {isPositive ? '+' : ''}
              {priceOdds}%
            </span>
          )}
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>24h Hight</div>
          <div>{renderNumber(hight)}</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>24h Low</div>
          <div>{renderNumber(low)}</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>24h Amount</div>
          <div>{renderNumber(amount)}</div>
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.title}>24h Volume</div>
          <div>{renderNumber(volume)}</div>
        </div>
        <button
          className={styles.login}
          onClick={() => {
            setModalType('sign-in');
          }}
        >
          Log / Reg
        </button>
      </header>
      {modalType && (
        <Modal
          close={function (): void {
            setModalType(null);
          }}
        >
          {modalType === 'sign-in' && (
            <SignInPage
              signUp={() => {
                setModalType('sign-up');
              }}
            />
          )}
          {modalType === 'sign-up' && (
            <SignUpPage
              signIn={() => {
                setModalType('sign-in');
              }}
            />
          )}
        </Modal>
      )}
    </>
  );
};
