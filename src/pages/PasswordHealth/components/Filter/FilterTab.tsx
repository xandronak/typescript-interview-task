import {FC} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import {Routes} from '~/constants/routes';

interface FilterTabProps {
  title: string;
  count: number;
  path: string;
}

const FilterTab: FC<FilterTabProps> = ({
  title,
  count,
  path,
}) => {
  const {push} = useHistory();
  const location = useLocation();

  const isActive = location.pathname === path;

  const onTabClick = () => {
    if (isActive) {
      push(Routes.PasswordHealth);
    } else {
      push(path);
    }
  };

  return (
    <div className={`filter-tab${isActive ? ' active' : ''}`} onClick={onTabClick}>
      <span>{`${title} (${count})`}</span>
    </div>
  );
};

export default FilterTab;
