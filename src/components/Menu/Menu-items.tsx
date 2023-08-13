import { useState } from 'react';
import { openRegistrationModal, userLogout } from 'pages/main/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { IReducer } from 'reducer';
import { IMainReducer } from 'pages/main/reducer';

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

  const handleOpenRegistrationModal = () => dispatch(openRegistrationModal());
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
            <Typography variant="subtitle2">{info.username}</Typography>
            <Typography variant="body2">{info.email}</Typography>
          </Box>
          <Divider />
          <Stack spacing={0} sx={{ p: 1 }}>
            <StyledMenuItem>Home</StyledMenuItem>
            <StyledMenuItem>Profile</StyledMenuItem>
            <StyledMenuItem>Settings</StyledMenuItem>
          </Stack>
          <Divider sx={{ my: 0 }} />
          <Stack spacing={0} sx={{ p: 1 }}>
            {isAuth ? (
              <StyledMenuItem onClick={logoutUser}>Logout</StyledMenuItem>
            ) : (
              <StyledMenuItem onClick={handleOpenRegistrationModal}>
                Login
              </StyledMenuItem>
            )}
          </Stack>
        </Paper>
      </Popover>
    </div>
  );
};

export default UserPopover;
