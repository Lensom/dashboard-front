import { ReactElement, forwardRef } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from '../sidebar.module.scss';

interface ListItemLinkProps {
  icon?: ReactElement;
  primary: string;
  to: string;
}

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (itemProps, ref) => (
    <RouterLink
      ref={ref}
      {...itemProps}
      role={undefined}
      className={styles.link}
    />
  )
);

const ListItemLink = ({ icon, primary, to }: ListItemLinkProps) => (
  <li>
    <ListItem component={Link} to={to}>
      {icon && (
        <ListItemIcon
          sx={{
            minWidth: 'auto',
            marginRight: '20px',
            color: 'rgb(99, 115, 129)',
          }}
        >
          {icon}
        </ListItemIcon>
      )}
      <ListItemText primary={primary} />
    </ListItem>
  </li>
);

export default ListItemLink;
