import React, { forwardRef, useState } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
} from 'react-router-dom';
import cn from 'classnames';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

import styles from '../sidebar.module.scss';

interface SubItem {
  id: number;
  url: string;
  name: string;
  Icon: any;
}

interface ListItemLinkProps {
  icon?: React.ReactNode;
  primary: string;
  to: string;
  subItems?: SubItem[] | null;
  isMenuOpen: boolean;
}

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (itemProps, ref) => <RouterLink ref={ref} {...itemProps} role={undefined} />
);

const renderSubItems = (subItems: SubItem[]) =>
  subItems.map(({ id, url, name, Icon }) => (
    <ListItem
      component={Link}
      to={url}
      key={id}
      className={styles.link}
      sx={{ m: 0 }}
    >
      <ListItemIcon
        sx={{
          minWidth: 'auto',
          marginLeft: '4px',
          marginRight: '20px',
          color: 'rgb(99, 115, 129)',
        }}
      >
        <Icon />
      </ListItemIcon>

      <ListItemText primary={name} />
    </ListItem>
  ));

const ListItemLink = ({
  icon,
  primary,
  to,
  subItems,
  isMenuOpen,
}: ListItemLinkProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const hasSubItems = subItems && subItems.length > 0;

  return (
    <li>
      <ListItem
        component={hasSubItems ? 'span' : Link}
        to={to}
        onClick={hasSubItems ? handleClick : undefined}
        className={cn(styles.link, { [styles.active]: isActive })}
      >
        <ListItemIcon
          sx={{
            minWidth: 'auto',
            marginRight: '20px',
            marginLeft: '4px',
            color: 'rgb(99, 115, 129)',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
      {hasSubItems && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{ ml: isMenuOpen ? 4 : 0, transition: 'all .3s ease' }}
        >
          <List component="div" disablePadding className={styles.list}>
            {renderSubItems(subItems)}
          </List>
        </Collapse>
      )}
    </li>
  );
};

export default ListItemLink;
