import styles from './styles.module.scss';

type ModalProps = {
  close: () => void;
  children: any;
};

export const Modal = ({ children, close }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBody}>
        <div className={styles.close} onClick={close} />
        {children}
      </div>
    </div>
  );
};
