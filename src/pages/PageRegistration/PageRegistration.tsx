import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/hook/hook';

import { Container, Box, FormLabel, TextField, Button, CircularProgress } from '@mui/material';
import { AccountIntrface } from '../../services/authorization/interface.account';
import { registerUser } from '../../store/authSlice/authSlice';

import styles from './PageRegistration.module.scss';

const PageRegistration = () => {
  const { isLoading } = useAppSelector((state) => state.authReducer);
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
      await dispatch(registerUser(data)).unwrap();
      navigation('/authorization', { replace: true });
    } catch (error) {}
    reset();
  };

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
          <h2 className={styles.form__title}>Регистрация</h2>
        </div>
        <Box className={styles.form__element}>
          <FormLabel htmlFor="name" className={styles.form__label}>
            Name:*
          </FormLabel>
          <TextField
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
          <FormLabel htmlFor="login" className={styles.form__label}>
            Login:*
          </FormLabel>
          <TextField
            variant="outlined"
            type="text"
            {...register('login', { required: `reqeired field` })}
            id="login"
            error={!!errors?.login}
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
          />
          <div className={styles.form__feedback}>{errors.password?.message}</div>
        </Box>
        <Button variant="contained" type="submit" disabled={!isValid}>
          Submit
        </Button>
      </form>

      <Link to="/authorization">авторизация</Link>
    </Container>
  );
};

export default PageRegistration;
