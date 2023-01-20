import {FC} from 'react';
import {useHistory} from 'react-router-dom';

import {useItemsContext} from '~/context/ItemsContext';
import {Routes} from '~/constants/routes';
import logout from '~/services/logout';

import './header-style.scss';

interface HeaderProps {
  username: string;
}

const Header: FC<HeaderProps> = ({username}) => {
  const {push} = useHistory();

  const {vulnerableItemsCount} = useItemsContext();

  const handleLogout = async () => {
    await logout();
    push(Routes.Login);
  };

  return (
    <div className={`header ${vulnerableItemsCount > 0 ? 'danger' : ''}`}>
      <div className="user-section">
        <button onClick={handleLogout}>{`Logout ${username}`}</button>
      </div>
      <h1>{`${vulnerableItemsCount} Items are vulnerable`}</h1>
      <span>Create new complex passwords to protect your accounts</span>
    </div>
  );
};

export default Header;
