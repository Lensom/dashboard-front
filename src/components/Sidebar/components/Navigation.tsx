import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { navigation } from 'config';

import Link from './Link';

const Navigation = () => (
  <Box>
    <Paper elevation={0}>
      <List aria-label="main mailbox folders">
        {navigation &&
          navigation.map(({ id, url, name, Icon }) => (
            <Link key={id} to={url} primary={name} icon={<Icon />} />
          ))}
      </List>
    </Paper>
  </Box>
);

export default Navigation;
