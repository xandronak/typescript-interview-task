import {useLoginData} from './useLoginData';
import ErrorMessage from '~/components/ErrorMessage';

import './login-style.scss';

const Login = () => {
  const {
    username,
    password,
    errorMessage,
    isLoading,
    handleSubmit,
    onUsernameChange,
    onPasswordChange,
  } = useLoginData();

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">
          Password Health
        </h1>
        <input
          value={username}
          onChange={onUsernameChange}
          placeholder="Username"
          type="text"
          className="input mt-52px"
        />
        <input
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          type="password"
          className="input mt-24px"
        />
        <ErrorMessage error={errorMessage}/>
        <button type="submit" className="button mt-24px">
          {isLoading ? <img className='loader' src='public/assets/loader.gif' /> : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
