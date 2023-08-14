import { Stack, Box, Typography } from '@mui/material';
import imageBuy from 'images/ic_glass_buy.png';

const StatisticBlock = () => {
  return (
    <Stack direction="column">
      <Box>{/* <img alt="icon" src={imageBuy} /> */}</Box>
      <Typography variant="h3">714k</Typography>
      <Typography variant="subtitle2">Weekly Sales</Typography>
    </Stack>
  );
};

export default StatisticBlock;
