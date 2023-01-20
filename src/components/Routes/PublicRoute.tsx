import {FC} from 'react';
import {Route, RouteProps, useHistory} from 'react-router-dom';

import {Routes} from '~/constants/routes';
import {getToken} from '~/utils/tokenManager';

const PublicRoute: FC<RouteProps> = ({
  path,
  component,
}) => {
  const {push} = useHistory();

  if (getToken()) {
    push(Routes.PasswordHealth);
    return null;
  }

  return <Route path={path} component={component}/>;
};

export default PublicRoute;
