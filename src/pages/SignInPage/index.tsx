import { useState } from 'react';
import styles from './styles.module.scss';
import { Input } from 'components/Input';
import { ReactComponent as Eye } from 'assets/img/eye.svg';
import { ReactComponent as EyeOff } from 'assets/img/eye-off.svg';

export const SignInPage = ({ signUp }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ password: null, email: null });
  return (
    <div className={styles.logInContainer}>
      <div className={styles.title}>Log in</div>
      <div className={styles.options}>
        <div>Phone Number</div>
        <div>Email</div>
        <div>With QR Code</div>
      </div>
      <div className={styles.inputWithLabel}>
        <label htmlFor='login-email' className={styles.label}>
          Email/Sub-Account
        </label>
        <Input
          id='login-email'
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
        <label htmlFor='login-password' className={styles.label}>
          Login Password
        </label>
        <Input
          id='login-password'
          placeholder='Password'
          status={''}
          value={data.email}
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
      <div className={styles.button}>Log In</div>
      <div className={styles.forgot}>Forgot password?</div>
      <div className={styles.signUp}>
        Don't have an account? <span onClick={signUp}>Sign up now</span>
      </div>
    </div>
  );
};
