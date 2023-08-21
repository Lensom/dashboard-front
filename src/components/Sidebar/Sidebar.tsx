import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { IModalsReducer, closeSidebarkModal } from 'pages/modals/reducer';
import { IReducer } from 'reducer';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import DrawerHeader from 'components/Header/components/DrawerHeader';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';

// import Logotype from 'images/icons/logotype.svg';

const Sidebar = () => {
  const dispatch = useDispatch();
  const {
    modals: { isSidebarOpen },
  } = useSelector<IReducer, IModalsReducer>((state) => state.modals);

  const handleDrawerClose = useCallback(() => {
    dispatch(closeSidebarkModal());
  }, []);

  return (
    <Drawer variant="permanent" open={isSidebarOpen}>
      <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <Logotype /> */}
        {isSidebarOpen && (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <Navigation open={isSidebarOpen} />
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
