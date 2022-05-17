import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hook/hook';
import { cleanMessage, login } from '../../store/authSlice/authSlice';

import styles from './Authorization.module.scss';

import {
  Container,
  Box,
  FormLabel,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import { AccountIntrface } from '../../services/authorization/interface.account';

import { useEffect } from 'react';

const Authorization = () => {
  const { isLoading, message } = useAppSelector((state) => state.authReducer);
  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AccountIntrface>({ mode: 'onChange' });

  const onSubmit = async (data: AccountIntrface) => {
    try {
      await dispatch(login(data)).unwrap();
      navigation('/main', { replace: true });
    } catch (error) {
      console.log('eeerrror!!!');
    }
    reset();
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(cleanMessage());
      }, 3000);
    }
  }, [dispatch, message]);

  return (
    <Container>
      <form className={styles.form} onSubmit={handleSubmit<FieldValues>(onSubmit)}>
        {isLoading && (
          <CircularProgress
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
        <div className={styles.form__element}>
          <h2 className={styles.form__title}>Авторизация</h2>
        </div>
        <Box className={styles.form__element}>
          <FormLabel htmlFor="login" className={styles.form__label}>
            Login:*
          </FormLabel>
          <TextField
            variant="outlined"
            type="text"
            {...register('login', { required: `reqeired field` })}
            id="login"
            error={!!errors?.login}
            defaultValue={`user001`}
          />
          <div className={styles.form__feedback}>{errors.login?.message}</div>
        </Box>
        <Box className={styles.form__element}>
          <FormLabel htmlFor="password" className={styles.form__label}>
            Password:*
          </FormLabel>
          <TextField
            variant="outlined"
            type="password"
            {...register('password', { required: true })}
            id="password"
            error={!!errors?.password}
            defaultValue={`userpass@123`}
          />
          <div className={styles.form__feedback}>{errors.password?.message}</div>
        </Box>
        <Button variant="contained" type="submit" disabled={!isValid}>
          Submit
        </Button>
      </form>

      {message && <Alert severity="error">{message}</Alert>}

      <Link to="/registration">Зарегистрироваться</Link>
    </Container>
  );
};

export default Authorization;
