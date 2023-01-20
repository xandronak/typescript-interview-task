import {FC} from 'react';
import {Route, RouteProps, useHistory} from 'react-router-dom';

import {Routes} from '~/constants/routes';
import {getToken} from '~/utils/tokenManager';

const PrivateRoute: FC<RouteProps> = ({
  path,
  component,
}) => {
  const {push} = useHistory();

  if (!getToken()) {
    push(Routes.Login);
    return null;
  }

  return <Route path={path} component={component}/>;
};

export default PrivateRoute;
