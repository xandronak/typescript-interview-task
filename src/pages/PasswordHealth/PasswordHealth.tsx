import {Route, Switch} from 'react-router-dom';

import {Routes} from '~/constants/routes';
import {useUserContext} from '~/context/UserContext';
import {useItemsContext} from '~/context/ItemsContext';
import ErrorMessage from '~/components/ErrorMessage';
import LoadingScreen from '~/components/LoadingScreen';
import Header from '~/components/Header';
import List from './components/List';
import Filter from './components/Filter';

const PasswordHealth = () => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    items,
    isLoading: itemsDataIsLoading,
    errorMessage: itemsErrorMessage,
  } = useItemsContext();

  if (itemsDataIsLoading || userDataIsLoading) {
    return <LoadingScreen/>;
  }

  if (userProviderErrorMessage || itemsErrorMessage) {
    return <ErrorMessage error={userProviderErrorMessage || itemsErrorMessage}/>;
  }

  return (
    <div className="container">
      <Header username={username} />
      <Filter />
      <Switch>
        <Route exact path={Routes.PasswordHealth}>
          <List items={items} />
        </Route>
        <Route path={Routes.Weak}>
          <List items={items.filter((item) => item.isPasswordWeak)} />
        </Route>
        <Route path={Routes.Reused}>
          <List items={items.filter((item) => item.isPasswordReused)} />
        </Route>
        <Route path={Routes.Old}>
          <List items={items.filter((item) => item.isPasswordOld)} />
        </Route>
      </Switch>
    </div>
  );
};

export default PasswordHealth;
