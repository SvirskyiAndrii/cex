import styles from './styles.module.scss';

type Props = {
  type?: string;
  status: string;
  value: string | any;
  error?: string;
  placeholder?: string | any;
  onChange: any;
  id?: string;
};

export const Input = ({
  type = 'text',
  status,
  placeholder,
  error,
  onChange,
  value,
  id,
}: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        className={`${styles.input} ${error ? styles.error : ''}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
