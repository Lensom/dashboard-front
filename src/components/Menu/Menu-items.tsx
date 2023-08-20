import { useState } from 'react';
import { userLogout } from 'pages/main/reducer';
import { openLoginModal } from 'pages/modals/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { IReducer } from 'reducer';
import { IMainReducer } from 'pages/main/reducer';
import { Link } from 'react-router-dom';

import { Popover, Paper, Box, Typography, Divider, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

import { StyledMenuItem } from './styled';

import styles from './menu.module.scss';

const UserPopover = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    user: { info, isAuth },
  } = useSelector<IReducer, IMainReducer>((state) => state.main);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
    handleClose();
  };

  const logoutUser = () => dispatch(userLogout());

  const open = Boolean(anchorEl);
  const id = open ? 'user-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon className={styles['icon-gray']} />
      </IconButton>
      <Popover
        className={styles.popover}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper className={styles.paper}>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle2">
              {info.username || 'Hello, anonymous'}
            </Typography>
            <Typography variant="body2">
              {info.email || 'Please, Log in or register'}
            </Typography>
          </Box>
          <Divider />

          {isAuth ? (
            <>
              <Stack spacing={0} sx={{ p: 1 }}>
                <StyledMenuItem>
                  <Link to="/" className={styles.link}>
                    Home
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link to="/profile" className={styles.link}>
                    Profile
                  </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                  <Link to="/settings" className={styles.link}>
                    Settings
                  </Link>
                </StyledMenuItem>
              </Stack>
              <Divider sx={{ my: 0 }} />
              <Stack spacing={0} sx={{ p: 1 }}>
                <StyledMenuItem sx={{ p: 1 }} onClick={logoutUser}>
                  Logout
                </StyledMenuItem>
              </Stack>
            </>
          ) : (
            <Stack spacing={0} sx={{ p: 1 }}>
              <StyledMenuItem sx={{ p: 1 }} onClick={handleOpenLoginModal}>
                Login
              </StyledMenuItem>
            </Stack>
          )}
        </Paper>
      </Popover>
    </div>
  );
};

export default UserPopover;
