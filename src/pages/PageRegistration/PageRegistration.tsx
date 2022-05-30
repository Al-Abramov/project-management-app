import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/hook/hook';

import { Container, Box, TextField, Button, Alert } from '@mui/material';
import { AccountIntrface } from '../../services/authorization/interface.account';
import { registerUser } from '../../store/userSlice/userSlice';

import styles from './PageRegistration.module.scss';
import { useEffect, useState } from 'react';
import { LoadSpinner } from '../../components/Spinner/Spinner';

const PageRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<AccountIntrface>({ mode: 'onChange' });

  const onSubmit = async (data: AccountIntrface) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      navigation('/authorization', { replace: true });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errorMessage: any) {
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  }, [message]);

  return (
    <Container className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit<FieldValues>(onSubmit)}>
        {isLoading && <LoadSpinner size={80} />}
        <div className={styles.form__element}>
          <h2 className={styles.form__title}>Регистрация</h2>
        </div>
        <Box className={styles.form__element}>
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            {...register('name', {
              required: `reqeired field`,
              minLength: { value: 3, message: 'minimum 3 chair' },
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
                message: 'using letter',
              },
            })}
            id="name"
            error={!!errors?.name}
          />
          <div className={styles.form__feedback}>{errors.name?.message}</div>
        </Box>
        <Box className={styles.form__element}>
          <TextField
            label="Login"
            variant="outlined"
            type="text"
            {...register('login', { required: `reqeired field` })}
            id="login"
            error={!!errors?.login}
          />
          <div className={styles.form__feedback}>{errors.login?.message}</div>
        </Box>
        <Box className={styles.form__element}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            {...register('password', { required: true })}
            id="password"
            error={!!errors?.password}
          />
          <div className={styles.form__feedback}>{errors.password?.message}</div>
        </Box>
        <Button variant="contained" type="submit" disabled={!isValid || isSubmitting}>
          Submit
        </Button>
      </form>

      {message && <Alert severity="error">{message}</Alert>}

      <Link to="/authorization">авторизация</Link>
    </Container>
  );
};

export default PageRegistration;
