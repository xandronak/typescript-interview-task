import {FC, createContext, useContext, useEffect, useState} from 'react';
import {API} from '~/constants/api';
import httpClient from '~/httpClient';

interface UserContextData {
  errorMessage: string;
  isLoading: boolean;
  username: string;
  email: string;
  id: string;
  updateUser: () => void;
  deleteData: () => void;
}

const UserContext = createContext<UserContextData>({
  errorMessage: null,
  isLoading: true,
  username: null,
  email: null,
  id: null,
  updateUser: () => null,
  deleteData: () => null,
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: FC = ({children}) => {
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [id, setId] = useState<string>(null);

  const updateUser = async () => {
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const {data} = await httpClient.fetch(API.User);

      setUsername(data?.username);
      setEmail(data?.email);
      setId(data?.id);
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  const deleteData = () => {
    setErrorMessage(null);
    setIsLoading(false);
    setUsername(null);
    setEmail(null);
    setId(null);
  };

  useEffect(() => {
    updateUser();
  }, []);

  const value = {
    errorMessage,
    isLoading,
    username,
    email,
    id,
    updateUser,
    deleteData,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
