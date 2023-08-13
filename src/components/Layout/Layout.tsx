import { ReactNode, FC, useState } from 'react';

import Box from '@mui/material/Box';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import DrawerHeader from 'components/Header/components/DrawerHeader';

import RegisterModal from 'components/Modals/RegisterModal/RegisterModal';
import LoginModal from 'components/Modals/LoginModal/LoginModal';

import styles from './layout.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Box className={styles.box}>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Box component="main" className={styles.main}>
        <DrawerHeader />
        {children}
      </Box>
      <RegisterModal />
      <LoginModal />
    </Box>
  );
};

export default Layout;
