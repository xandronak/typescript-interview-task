import { FC } from 'react';

interface ItemIconProps {
  title: string,
}

const ItemIcon: FC<ItemIconProps> = ({title}) => (
  <div className="item-icon">
    {title.substring(0, 2)}
  </div>
);

export default ItemIcon;
