import styles from './styles.module.scss';

export enum ColorType {
  red,
  green,
  white,
}

type NumValueProps = {
  num: string;
  color: ColorType;
  maxDecimalLength: number;
};

export const NumValue = ({ num, color, maxDecimalLength }: NumValueProps) => {
  let numberWithComas = '';
  const hasDecimals = num.includes('.');
  const numberWithoutDecimals = hasDecimals
    ? num.slice(0, num.indexOf('.'))
    : num;
  let counter = 0;
  const positionForComa =
    numberWithoutDecimals.length % 3 ? numberWithoutDecimals.length % 3 : 3;
  for (let i = 0; i < numberWithoutDecimals.length; i++) {
    if (positionForComa === i || counter === 3) {
      numberWithComas += ',';
      counter = 0;
    }

    numberWithComas += numberWithoutDecimals[i];
    counter++;
  }
  const decimals = hasDecimals ? num.slice(num.indexOf('.') + 1) : '';
  let decimalsResult = '';
  for (let i = 0; i < decimals.length; i++) {
    if (decimals[i]) {
      decimalsResult += decimals[i];
    }
    if (decimalsResult.length === maxDecimalLength) {
      break;
    }
  }

  return (
    <div className={`${styles.number} ${styles[ColorType[color]]}`}>
      {`${numberWithComas}.${decimalsResult}`}
      {decimalsResult.length !== maxDecimalLength && (
        <span className={styles.decimal}>
          {'0'.repeat(maxDecimalLength - decimalsResult.length)}
        </span>
      )}
    </div>
  );
};
