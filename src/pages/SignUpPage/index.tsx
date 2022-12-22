import { useState } from 'react';
import styles from './styles.module.scss';
import { Input } from 'components/Input';
import { ReactComponent as Eye } from 'assets/img/eye.svg';
import { ReactComponent as EyeOff } from 'assets/img/eye-off.svg';

export const SignUpPage = ({ signIn }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ password: null, email: null });
  return (
    <div className={styles.logInContainer}>
      <div className={styles.signIn}>
        Already have an account? <span onClick={signIn}>Log in </span>
      </div>
      <div className={styles.title}>Sign Up</div>
      <div className={styles.options}>
        <div>Email</div>
        <div>Phone Number</div>
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor='signup-email' className={styles.label}>
          Email
        </label>
        <Input
          id='signup-email'
          placeholder='Email'
          status={''}
          value={data.email}
          onChange={(e: { target: { value: any } }) => {
            const { password } = data;
            setData({
              password,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor='signup-password' className={styles.label}>
          Password
        </label>
        <Input
          id='signup-password'
          placeholder='Password'
          status={''}
          value={data.password}
          type={showPassword ? 'text' : 'password'}
          onChange={(e: { target: { value: any } }) => {
            const { email } = data;
            setData({
              password: e.target.value,
              email,
            });
          }}
        />
        <div
          className={styles.eye}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </div>
      </div>
      <div className={styles.referralCode}>
        Referral Code (Optional)<div className={styles.arrow}></div>
      </div>
      <div className={styles.checkContainer}>
        <div className={styles.check}></div>
        <div className={styles.terms}>
          I have read and agree to the <span>Terms of Use.</span>
        </div>
      </div>
      <div className={styles.button}>Sign Up</div>
    </div>
  );
};
