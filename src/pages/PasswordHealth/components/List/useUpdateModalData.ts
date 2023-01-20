import {useState} from 'react';

import {useItemsContext} from '~/context/ItemsContext';
import updateItem from '~/services/updateItem';
import {ItemData} from '~/types/userItems.types';

export const useUpdateModalData = (item: ItemData) => {
  const {refetch} = useItemsContext();

  const [showModal, setShowModal] = useState(false);
  const [newPass, setNewPass] = useState('');
  
  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  
  const onPasswordChange = (event) => {
    setNewPass(event.target.value);
  };
  
  const onUpdateClick = async () => {
    try {
      await updateItem({
        id: item.id,
        password: newPass,
      });
    
      setNewPass('');
      setShowModal(false);
  
      refetch();
    } catch(error) {
      // handle error
    }
  };
  
  const onCancelClick = () => {
    setNewPass('');
    setShowModal(false);
  };

  return {
    newPass,
    showModal,
    handleShowModal,
    handleHideModal,
    onPasswordChange,
    onUpdateClick,
    onCancelClick,
  };
};
