import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store/hook/hook';
import { login } from '../../store/authSlice/authSlice';

import { Container, Box, FormLabel, TextField, Button } from '@mui/material';
import { useState } from 'react';

export interface AuthorizationFields {
  login: string;
  password: string;
}

const Authorization = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigate();

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<AuthorizationFields>();

  const onSubmit = async (data: AuthorizationFields) => {
    try {
      setIsLoading(true);
      await dispatch(login(data)).unwrap();
      navigation('/main', { replace: true });
    } catch (error) {
      console.log('result error: ', error);
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <form className="form" onSubmit={handleSubmit<FieldValues>(onSubmit)}>
        <div className="form__title">
          <h2>Авторизация</h2>
          {isLoading && <p>....loading</p>}
        </div>
        <Box className="form__element">
          <FormLabel htmlFor="login">Login:*</FormLabel>
          <TextField
            variant="outlined"
            type="text"
            {...register('login', { required: `reqeired field` })}
            id="login"
            defaultValue={`user001`}
          />
        </Box>
        <Box className="form__element">
          <FormLabel htmlFor="password">Password:*</FormLabel>
          <TextField
            error={false}
            variant="outlined"
            type="password"
            {...register('password', { required: true })}
            id="password"
            defaultValue={`userpass@123`}
          />
        </Box>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>

      <Link to="/registration">Зарегистрироваться</Link>
    </Container>
  );
};

export default Authorization;
