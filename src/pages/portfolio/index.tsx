import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolioRequest } from './reducer';
import { IPortfolioReducer } from 'pages/portfolio/reducer';
import { IReducer } from 'reducer';

import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';

import Layout from 'components/Layout/Layout';
import StatisticBlock from 'components/StatisticBlock/StatisticBlock';
import StockTable from 'components/StockTable/StockTable';

import imageStockTotal from 'assets/images/stock-total.png';
import imageStockPos from 'assets/images/stock-pos.png';
import imageStockCount from 'assets/images/stock-count.png';

const Portfolio = () => {
  const dispatch = useDispatch();

  const {
    stocks: { items, loading, totalSum, totalCount, posLos },
  } = useSelector<IReducer, IPortfolioReducer>((state) => state.portfolio);

  useEffect(() => {
    dispatch(fetchPortfolioRequest());
  }, []);

  const stocksInfo = useMemo(
    () => [
      {
        id: 0,
        title: 'Total',
        image: imageStockTotal,
        info: `${totalSum} $`,
        color: 'yellow',
      },
      {
        id: 0,
        title: 'Pos/los',
        image: imageStockPos,
        info: `${posLos} %`,
        color: 'red',
      },
      {
        id: 0,
        title: 'Stocks count',
        image: imageStockCount,
        info: totalCount,
        color: 'green',
      },
    ],
    [totalSum]
  );

  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', m: -1 }}>
        {stocksInfo &&
          stocksInfo.map(({ id, image, info, title, color }) => (
            <StatisticBlock
              key={id}
              title={title}
              image={image}
              info={info}
              color={color}
            />
          ))}
      </Box>
      <Box sx={{ m: '16px 0' }}>
        <StockTable items={items} />
      </Box>
      <Button variant="contained">Add new stock</Button>
    </Layout>
  );
};

export default Portfolio;
