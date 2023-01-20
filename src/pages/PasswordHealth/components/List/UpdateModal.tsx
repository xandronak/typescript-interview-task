import {FC} from 'react';
import Modal from 'react-modal';

import {ItemData} from '~/types/userItems.types';
import {useUpdateModalData} from './useUpdateModalData';

type UpdateModalProps = {
  item: ItemData;
}

const UpdateModal: FC<UpdateModalProps> = ({ item }) => {
  const {
    newPass,
    showModal,
    handleShowModal,
    handleHideModal,
    onPasswordChange,
    onUpdateClick,
    onCancelClick,
  } = useUpdateModalData(item);

  return (
    <>
      <button className="update" onClick={handleShowModal}>
        Update Password
      </button>
      <Modal
        className="modal"
        contentLabel="Example Modal"
        isOpen={showModal}
        appElement={document.getElementById('app')}
        onRequestClose={handleHideModal}
      >
        <h1>Update Password</h1>
        <input
          placeholder="new password"
          className="input"
          value={newPass}
          onChange={onPasswordChange}
        />
        <div className="pt-12px text-center">
          <button className="button" onClick={onUpdateClick}>
            Change
          </button>
          <button className="button ml-12px" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UpdateModal;
