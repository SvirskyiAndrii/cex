import styles from './styles.module.scss';

export const WithdrawalPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Cryptocurrency Withdrawal</div>
      <div className={styles.coinContainer}>
        <div className={styles.coinTitle}>Coin</div>
        <div className={styles.select}>
          <div className={styles.input}>
            <img src={undefined} alt='' className={styles.img} />
            <div className={styles.inputTitle}>1 EARTH</div>
            <div className={styles.inputSubtitle}>Earth Fund</div>
          </div>
          <div className={styles.label}>Select Coin</div>
        </div>
        <div className={styles.coinDropdown}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div className={styles.withdrawToContainer}>
        <div className={styles.labels}>
          <div>Withdraw to</div>
          <div>Wallet Address</div>
          <div>Coin User</div>
        </div>
        <div className={styles.walletAddress}>
          <label htmlFor='wallet-address' className={styles.walletAddressLabel}>
            Wallet Address
          </label>
          <div className={styles.inputContainer}>
            <input
              type='text'
              placeholder='Enter your withdrawal address'
              className={styles.addressInput}
            />
            <div className={styles.icon} />
          </div>
        </div>
        <div className={styles.net}>
          <label htmlFor='wallet-address' className={styles.netLabel}>
            Net
          </label>
          <div className={styles.inputContainer}>
            <input
              type='text'
              placeholder='Choose a network'
              className={styles.netInput}
            />
          </div>
          <div className={styles.netDropdown}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className={styles.outputContainer}>
          <div className={styles.availableBalance}>
            <div className={styles.availableBalanceTitle}>
              Available balance
            </div>
            <div className={styles.availableCurrency}>
              <div>0.00 1EARTH</div>
              <button>Transfer {'< >'}</button>
            </div>
          </div>
          <div className={styles.minimumWithdrawal}>
            <div>Minimum withdrawal</div>
            <div>0.00 1EARTH</div>
          </div>
          <div className={styles.commissions}>
            <div>Commissions</div>
            <div>1000.00 1EARTH</div>
          </div>
          <div className={styles.remaining}>
            <div>Remaining daily withdrawal amount</div>
            <div>1 BTC</div>
          </div>
        </div>
      </div>
      <div className={styles.confirm}>Confirm</div>
    </div>
  );
};
