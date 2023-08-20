import { useEffect, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { Typography, Box } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { IMainReducer } from 'pages/main/reducer';
import { closeAddStockModal, IModalsReducer } from 'pages/modals/reducer';
import { IReducer } from 'reducer';

import AddStock from 'components/Forms/AddStock/AddStock';

const AddStockModal = () => {
  const dispatch = useDispatch();

  const {
    modals: { isAddStockOpen },
  } = useSelector<IReducer, IModalsReducer>((state) => state.modals);

  const handleClose = useCallback(() => {
    dispatch(closeAddStockModal());
  }, [dispatch]);

  return (
    <div>
      <Modal
        open={isAddStockOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex' }}
      >
        <Box
          sx={{
            background: 'white',
            maxWidth: '600px',
            width: '100%',
            p: 2,
            m: 'auto',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          <AddStock />
        </Box>
      </Modal>
    </div>
  );
};

export default AddStockModal;
