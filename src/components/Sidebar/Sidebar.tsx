import { useCallback } from 'react';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { IModalsReducer, closeSidebarkModal } from 'pages/modals/reducer';
import { IReducer } from 'reducer';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import DrawerHeader from 'components/Header/components/DrawerHeader';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';

import styles from './sidebar.module.scss';

import logotypeImg from 'assets/images/logotype.png';

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
        <img
          src={logotypeImg}
          className={cn(styles.logotype, { [styles.hidden]: !isSidebarOpen })}
          alt="Dashboard website"
        />
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
