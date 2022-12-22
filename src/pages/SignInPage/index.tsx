import { useState } from 'react';
import styles from './styles.module.scss';
import { Input } from 'components/Input';
import { ReactComponent as Eye } from 'assets/img/eye.svg';
import { ReactComponent as EyeOff } from 'assets/img/eye-off.svg';

const users = [
  { email: 'user@gmail.com', password: 'password' },
  { email: 'email@gmail.com', password: '!password' },
];

export const SignInPage = ({ signUp }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ password: null, email: null });
  const [errors, setErrors] = useState<any>({ password: null, email: null });

  const logIn = () => {
    const isExist = users.find((user) => {
      return user.email === data.email;
    });
    if (!isExist) {
      const { password } = errors;
      setErrors({ password, email: "User doesn't exist" });
    }
    if (isExist) {
      if (isExist.password !== data.password) {
        const { email } = errors;
        setErrors({ password: 'Wrong password', email });
      } else {
        setData({ password: null, email: null });
        alert('SUCCESS LOG IN');
      }
    }
  };

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
          error={errors.email}
          onChange={(e: { target: { value: any } }) => {
            if (errors.email) {
              const { password } = errors;
              setErrors({
                password,
                email: null,
              });
            }
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
          error={errors.password}
          value={data.password}
          type={showPassword ? 'text' : 'password'}
          onChange={(e: { target: { value: any } }) => {
            if (errors.password) {
              const { email } = errors;
              setErrors({
                password: null,
                email,
              });
            }
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
      <div className={styles.button} onClick={logIn}>
        Log In
      </div>
      <div className={styles.forgot}>Forgot password?</div>
      <div className={styles.signUp}>
        Don't have an account? <span onClick={signUp}>Sign up now</span>
      </div>
    </div>
  );
};
