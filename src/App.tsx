import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';

import {Routes} from './constants/routes';
import {UserContextProvider} from './context/UserContext';
import {ItemsContextProvider} from './context/ItemsContext';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import PasswordHealth from './pages/PasswordHealth/PasswordHealth';
import Login from '~/pages/Login';

import './style/styles.scss';

const App = () => {
  const PasswordHealthComponent = () => (
    <UserContextProvider>
      <ItemsContextProvider>
        <PasswordHealth />
      </ItemsContextProvider>
    </UserContextProvider>
  );

  return (
    <Router>
      <Switch>
        <PublicRoute
          path={Routes.Login}
          component={Login}
        />
        <PrivateRoute
          path={Routes.PasswordHealth}
          component={PasswordHealthComponent}
        />
        <PrivateRoute
          path={Routes.Root}
          component={() => <Redirect to={Routes.PasswordHealth}/>}
        />
      </Switch>
    </Router>
  );
};

export default App;
