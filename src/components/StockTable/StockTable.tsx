import { IReducer } from 'reducer';
import { useSelector } from 'react-redux';
import { IPortfolioReducer } from 'pages/portfolio/reducer';

import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Row from './components/Row';

import { cells } from 'config';

export interface IRowData {
  name: string;
  ticker: string;
  totalShares: number;
  avgPrice: number;
  currentPrice: number;
  profitLossUsd: number;
  profitLossProcent: number;
  totalCost: number;
  currentCost: number;
  purchaseHistory: Array<string>;
}

const StockTable = ({ items }: any) => {
  const { loadingStock } = useSelector<IReducer, IPortfolioReducer>(
    (state) => state.portfolio
  );

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 'none',
        border: '1px solid rgba(224, 224, 224, 1)',
        borderRadius: '8px',
        minHeight: loadingStock ? '200px' : 'auto',
        display: 'flex',
      }}
    >
      {loadingStock ? (
        <CircularProgress color="inherit" sx={{ m: 'auto' }} />
      ) : (
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {cells &&
                cells.map(({ id, title, align }) => (
                  <TableCell key={id} sx={{ boxShadow: 'none' }} align={align}>
                    {title}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              items.map((item: IRowData) => <Row key={item.name} {...item} />)}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default StockTable;
