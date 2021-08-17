import { useState, FormEvent } from 'react';
import { useActions } from '../../../hooks/useActions';
import Button from '../../UI/button/button';
import Input from '../../UI/input/input';
import classes from './auth-form.module.css';

const AuthForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useActions();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
  }

  return (
    <form className={classes.auth} onSubmit={submitHandler}>
      <Input 
        id='email' 
        type='text' 
        label='Email' 
        value={email} 
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input 
        id='password'
        type='password'
        label='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button primary>Login</Button>
    </form>
  )
}

export default AuthForm;