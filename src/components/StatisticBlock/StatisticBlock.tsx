import { FC } from 'react';
import { IReducer } from 'reducer';
import { useSelector } from 'react-redux';
import { IPortfolioReducer } from 'pages/portfolio/reducer';

import { Stack, Box, Typography, CircularProgress } from '@mui/material';
import { stockInfoBackgrounds, stockInfoColors } from 'config';

interface IStaticBlock {
  title: string;
  image: string;
  info: number | string;
  color: string;
}

const StatisticBlock: FC<IStaticBlock> = ({ title, image, info, color }) => {
  const { loadingStock } = useSelector<IReducer, IPortfolioReducer>(
    (state) => state.portfolio
  );

  return (
    <Stack
      direction="column"
      sx={{
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center',
        background: stockInfoBackgrounds[color],
        m: 1,
        p: 1,
        borderRadius: 2,
      }}
    >
      <Box>
        <img alt="icon" src={image} />
      </Box>
      <Typography
        sx={{
          color: stockInfoColors[color],
          fontSize: '32px',
          fontWeight: 600,
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loadingStock ? <CircularProgress color="inherit" /> : info}
      </Typography>
      <Typography
        sx={{
          color: stockInfoColors[color],
          fontSize: '22px',
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default StatisticBlock;
