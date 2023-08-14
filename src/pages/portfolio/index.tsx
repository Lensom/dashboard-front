import Button from '@mui/material/Button/Button';
import Box from '@mui/material/Box/Box';

import Layout from 'components/Layout/Layout';
import StatisticBlock from 'components/StatisticBlock/StatisticBlock';
import StockTable from 'components/StockTable/StockTable';

const Portfolio = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StatisticBlock />
        <StatisticBlock />
        <StatisticBlock />
        <StatisticBlock />
      </Box>
      <StockTable />
      <Button variant="contained">Add new stock</Button>
    </Layout>
  );
};

export default Portfolio;
