import {SyntheticEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Routes} from '~/constants/routes';
import login from '~/services/login';

export const useLoginData = () => {
  const {push} = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setLoading] = useState(false);
  
  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!isLoading) {
      setErrorMessage(null);
      setLoading(true);
    
      try {
        await login(username, password);
        setLoading(false);
        push(Routes.PasswordHealth);
      } catch (error) {
        setLoading(false);
        setErrorMessage(error.message);
      }
    }  
  };
  
  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return {
    username,
    password,
    errorMessage,
    isLoading,
    handleSubmit,
    onUsernameChange,
    onPasswordChange,
  };
};
