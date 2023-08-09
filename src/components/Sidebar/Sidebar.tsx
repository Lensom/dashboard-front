import { FC, useCallback } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import DrawerHeader from 'components/Header/components/DrawerHeader';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';

interface IProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
}

const Sidebar: FC<IProps> = ({ open, setOpen }) => {
  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Navigation />
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
