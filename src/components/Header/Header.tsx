import { FC, useCallback } from 'react';
import cn from 'classnames';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import AppBar from './components/AppBar';

import styles from './header.module.scss';

interface IProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
}

const Header: FC<IProps> = ({ open, setOpen }) => {
  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, []);

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
        <Typography variant="h6" noWrap component="div">
          Sidebar Collapse
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
