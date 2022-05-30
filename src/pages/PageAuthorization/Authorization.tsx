import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/hook/hook';
import styles from './Authorization.module.scss';

import { Container, Box, TextField, Button, Alert } from '@mui/material';
import { AccountIntrface } from '../../services/authorization/interface.account';

import { useEffect, useState } from 'react';
import { login } from '../../store/userSlice/userSlice';
import { LoadSpinner } from '../../components/Spinner/Spinner';

const Authorization = () => {
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
      setIsLoading(true);
      await dispatch(login(data)).unwrap();
      navigation('/main', { replace: true });
    } catch (errorMessage) {
      setMessage(errorMessage as string);
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
          <h2 className={styles.form__title}>Авторизация</h2>
        </div>
        <Box className={styles.form__element}>
          <TextField
            label="Login"
            variant="outlined"
            type="text"
            {...register('login', { required: `reqeired field` })}
            id="login"
            error={!!errors?.login}
            defaultValue={``}
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
            defaultValue={``}
          />

          <div className={styles.form__feedback}>{errors.password?.message}</div>
        </Box>
        <Button variant="contained" type="submit" disabled={!isValid || isSubmitting}>
          Submit
        </Button>
      </form>

      {message && <Alert severity="error">{message}</Alert>}

      <Link to="/registration">Зарегистрироваться</Link>
    </Container>
  );
};

export default Authorization;
