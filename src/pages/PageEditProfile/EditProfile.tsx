import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/hook/hook';
import styles from './EditProfile.module.scss';

import { Container, Box, TextField, Button, Alert, InputLabel } from '@mui/material';
import { AccountIntrface } from '../../services/authorization/interface.account';
import { deleteProfile, getProfile, updateProfile } from '../../store/userSlice/userSlice';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadSpinner } from '../../components/Spinner/Spinner';

const EditProfile = () => {
  const navigation = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isErrorAPI, setIsErrorAPI] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AccountIntrface>({
    mode: 'onChange',
  });

  const onSubmit = async (data: AccountIntrface) => {
    try {
      setIsLoading(true);
      dispatch(updateProfile(data)).unwrap();

      setIsErrorAPI(false);
      setMessage('Данные сохранены');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errorMessage: any) {
      setIsErrorAPI(true);
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    try {
      setIsLoading(true);
      const deleteUser = await dispatch(deleteProfile()).unwrap();
      console.log('handleDeleteUser', deleteUser);

      navigation('/', { replace: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof Error) {
        setMessage(error.message);
        return;
      }
      setMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await dispatch(getProfile()).unwrap();

      reset({
        name: result.name,
        login: result.login,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsErrorAPI(true);
      if (error instanceof Error) {
        setMessage(error.message);
        return;
      }
      setMessage(error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, reset]);

  useEffect(() => {
    console.log(`useEffect first`);
    loadUser();
  }, [loadUser]);

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
          <h2 className={styles.form__title}> Edit profile</h2>
        </div>
        <Box className={styles.form__element}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <TextField
            type="text"
            variant="standard"
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

          <div>{errors.name?.message}</div>
        </Box>
        <Box className={styles.form__element}>
          <InputLabel htmlFor="login">Login</InputLabel>
          <TextField
            variant="standard"
            type="text"
            {...register('login', { required: `reqeired field` })}
            id="login"
            error={!!errors?.login}
          />
          <div>{errors.login?.message}</div>
        </Box>
        <Box className={styles.form__element}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            variant="standard"
            type="password"
            {...register('password', { required: true })}
            id="password"
            error={!!errors?.password}
          />
          <div>{errors.password?.message}</div>
        </Box>

        <Box className={styles.form__controls}>
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            Submit
          </Button>

          <Button variant="outlined" color="error" onClick={handleDeleteUser}>
            Удалить user
          </Button>
        </Box>

        {message && (
          <Alert sx={{ possition: 'absolute' }} severity={isErrorAPI ? 'error' : 'success'}>
            {message}
          </Alert>
        )}
      </form>
    </Container>
  );
};

export default EditProfile;
