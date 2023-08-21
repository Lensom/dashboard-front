import { useCallback } from 'react';
import cn from 'classnames';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { IModalsReducer, openSidebarkModal } from 'pages/modals/reducer';
import { IReducer } from 'reducer';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import AppBar from './components/AppBar';
import BasicMenu from '../Menu/Menu';

import styles from './header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const {
    modals: { isSidebarOpen },
  } = useSelector<IReducer, IModalsReducer>((state) => state.modals);

  const handleDrawerOpen = useCallback(() => {
    dispatch(openSidebarkModal());
  }, []);

  return (
    <AppBar position="fixed" open={isSidebarOpen}>
      <Toolbar>
        {!isSidebarOpen && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={cn(styles.icon, { [styles.closed]: isSidebarOpen })}
          >
            <MenuIcon className={styles.menu} />
          </IconButton>
        )}

        <Box className={styles.top}>
          <IconButton>
            <SearchIcon
              className={cn(styles.search, { [styles.opened]: !isSidebarOpen })}
            />
          </IconButton>
          <Box>
            <BasicMenu />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
