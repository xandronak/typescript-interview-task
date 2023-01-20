import {FC} from 'react';

import {ItemData} from '~/types/userItems.types';
import UpdateModal from './UpdateModal';
import ItemIcon from './ItemIcon';

import './list-style.scss';

type ListProps = {
  items: Array<ItemData>;
}

const List: FC<ListProps> = ({items}) => (
  <ul className="list">
    {
      items.map((item) => (
        <li key={item.id} className="item">
          <ItemIcon title={item.title}/>
          <div>
            <div className="title">
              {item.title}
            </div>
            <div className="description">
              {item.description}
            </div>
          </div>
          <UpdateModal item={item} />
        </li>
      ))
    }
  </ul>
);

export default List;
