import { ReactNode, FC, useState } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import DrawerHeader from 'components/Header/components/DrawerHeader';

import styles from './layout.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box className={styles.box}>
      <CssBaseline />
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Box component="main" className={styles.main}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
