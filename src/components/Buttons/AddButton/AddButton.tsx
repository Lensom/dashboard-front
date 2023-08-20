import { FC } from 'react';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

interface IProps {
  onClick: () => void;
}

const AddButton: FC<IProps> = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        borderRadius: '50%',
        minWidth: '40px',
        width: '40px',
        height: '40px',
        marginLeft: 'auto',
        display: 'flex',
        bgcolor: 'rgb(0, 167, 111)',
        color: 'white',
        '&:hover': {
          bgcolor: 'rgb(0, 167, 111, .8)',
        },
      }}
    >
      <AddIcon />
    </IconButton>
  );
};

export default AddButton;
