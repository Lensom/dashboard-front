import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton, SvgIcon } from '@mui/material';
import Box from '@mui/material/Box';

import MenuItems from './Menu-items';

import styles from './menu.module.scss';

const BasicMenu = () => {
  return (
    <Box className={styles.wrapper}>
      <IconButton>
        <SvgIcon component={SettingsIcon} className={styles['icon-gray']} />
      </IconButton>
      <MenuItems />
    </Box>
  );
};

export default BasicMenu;
