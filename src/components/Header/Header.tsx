import { FC, useCallback } from 'react';
import cn from 'classnames';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import AppBar from './components/AppBar';
import BasicMenu from '../Menu/Menu';

import styles from './header.module.scss';

interface IProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
}

const Header: FC<IProps> = ({ open, setOpen }) => {
  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={cn(styles.icon, { [styles.closed]: open })}
        >
          <MenuIcon />
        </IconButton>
        <Box className={styles.top}>
          <IconButton>
            <SearchIcon sx={{ color: 'white' }} />
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
