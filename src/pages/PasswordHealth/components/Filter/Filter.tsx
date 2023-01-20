import {FC} from 'react';

import {useItemsContext} from '~/context/ItemsContext';
import {Routes} from '~/constants/routes';
import FilterTab from './FilterTab';

import './filter-style.scss';

const Filter: FC = () => {
  const {oldItemsCount, weakItemsCount, reusedItemsCount} = useItemsContext();

  return (
    <div className="filter">
      <FilterTab title="Weak" count={weakItemsCount} path={Routes.Weak}/>
      <FilterTab title="Reused" count={reusedItemsCount} path={Routes.Reused}/>
      <FilterTab title="Old" count={oldItemsCount} path={Routes.Old}/>
    </div>
  );
};

export default Filter;
