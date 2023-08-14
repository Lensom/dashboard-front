import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolioRequest } from './reducer';
import { IPortfolioReducer } from 'pages/portfolio/reducer';
import { IReducer } from 'reducer';

import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';

import Layout from 'components/Layout/Layout';
import StatisticBlock from 'components/StatisticBlock/StatisticBlock';
import StockTable from 'components/StockTable/StockTable';

const Portfolio = () => {
  const dispatch = useDispatch();

  const {
    stocks: { items, loading },
  } = useSelector<IReducer, IPortfolioReducer>((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolioRequest());
  }, []);

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StatisticBlock />
        <StatisticBlock />
        <StatisticBlock />
        <StatisticBlock />
      </Box>
      <Box sx={{ m: '16px 0' }}>
        <StockTable items={items} />
      </Box>
      <Button variant="contained">Add new stock</Button>
    </Layout>
  );
};

export default Portfolio;
