import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPortfolioRequest } from './reducer';
import { IPortfolioReducer } from 'pages/portfolio/reducer';
import { IReducer } from 'reducer';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';

import Layout from 'components/Layout/Layout';
import StatisticBlock from 'components/StatisticBlock/StatisticBlock';
import StockTable from 'components/StockTable/StockTable';

import { openAddStockModal } from 'pages/modals/reducer';

import imageStockTotal from 'assets/images/stock-total.png';
import imageStockPos from 'assets/images/stock-pos.png';
import imageStockCount from 'assets/images/stock-count.png';

const Portfolio = () => {
  const dispatch = useDispatch();

  const {
    stocks: { items, loading, totalCount, posLos, currentSum },
  } = useSelector<IReducer, IPortfolioReducer>((state) => state.portfolio);

  const handleAddStockModal = () => {
    dispatch(openAddStockModal());
  };

  useEffect(() => {
    dispatch(fetchPortfolioRequest());
  }, []);

  const stocksInfo = useMemo(
    () => [
      {
        id: 0,
        title: 'Total',
        image: imageStockTotal,
        info: `${currentSum} $`,
        color: 'yellow',
      },
      {
        id: 1,
        title: 'Pos/los',
        image: imageStockPos,
        info: `${posLos} %`,
        color: 'red',
      },
      {
        id: 2,
        title: 'Stocks count',
        image: imageStockCount,
        info: totalCount,
        color: 'green',
      },
    ],
    [items, totalCount, posLos, currentSum]
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
      <Button
        variant="contained"
        onClick={handleAddStockModal}
        sx={{
          borderRadius: '50%',
          minWidth: '40px',
          width: '40px',
          height: '40px',
          marginLeft: 'auto',
          display: 'flex',
          bgcolor: 'rgb(0, 167, 111)',
          '&:hover': {
            bgcolor: 'rgb(0, 167, 111, .8)',
          },
        }}
      >
        <IconButton sx={{ color: 'white' }}>
          <AddIcon />
        </IconButton>
      </Button>
    </Layout>
  );
};

export default Portfolio;
