import {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import {useLocation, useHistory} from 'react-router-dom';

import {Routes} from '~/constants/routes';
import getUserItems from '~/services/getUserItems';
import {ItemData} from '~/types/userItems.types';
import {removeToken} from '~/utils/tokenManager';

type ItemsContextData = {
  items: Array<ItemData>;
  isLoading: boolean;
  errorMessage: string;
  vulnerableItemsCount: number;
  oldItemsCount: number;
  reusedItemsCount: number;
  weakItemsCount: number;
  refetch: () => void;
}

const ItemsContext = createContext<ItemsContextData>({
  items: [],
  isLoading: false,
  errorMessage: '',
  vulnerableItemsCount: 0,
  oldItemsCount: 0,
  reusedItemsCount: 0,
  weakItemsCount: 0,
  refetch: () => null,
});

export const useItemsContext = () => useContext(ItemsContext);

export const ItemsContextProvider: FC = ({ children }) => {
  const {push} = useHistory();
  const {pathname} = useLocation();

  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Array<ItemData>>([]);

  const fetchItems = useCallback(async () => {
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const items = await getUserItems();
      setItems(items);
    } catch(error) {
      // Redirect to Login page and remove token on backend error
      if (pathname !== Routes.Login) {
        removeToken();
        push(Routes.Login);
      }
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchItems();
  }, []);

  const countItems = (checkItemCallback) => (
    items.reduce((count, item) => (
      checkItemCallback(item) ? count + 1 : count
    ), 0)
  );

  const vulnerableItemsCount = countItems((item) => item.isPasswordOld || item.isPasswordReused || item.isPasswordWeak);
  const oldItemsCount = countItems((item) => item.isPasswordOld);
  const reusedItemsCount = countItems((item) => item.isPasswordReused);
  const weakItemsCount = countItems((item) => item.isPasswordWeak);

  const value = {
    items,
    vulnerableItemsCount,
    oldItemsCount,
    reusedItemsCount,
    weakItemsCount,
    errorMessage,
    isLoading,
    refetch: fetchItems,
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
};
