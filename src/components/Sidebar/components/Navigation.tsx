import { FC } from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

import { navigation } from 'config';

import Link from './Link';

interface IProps {
  open: boolean;
}

const Navigation: FC<IProps> = ({ open }) => {
  return (
    <Paper elevation={0}>
      <List aria-label="Main navigation menu">
        {navigation &&
          navigation.map(({ id, url, name, Icon, subItems }) => (
            <Link
              key={id}
              to={url}
              primary={name}
              icon={<Icon />}
              subItems={subItems ? subItems : null}
              isMenuOpen={open}
            />
          ))}
      </List>
    </Paper>
  );
};

export default Navigation;
