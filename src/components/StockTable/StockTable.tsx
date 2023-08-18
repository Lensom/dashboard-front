import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useDispatch } from 'react-redux';

import { red, green } from 'config';
import { removeStockRequest } from 'pages/portfolio/reducer';

interface IRowData {
  name: string;
  ticker: string;
  totalShares: number;
  avgPrice: number;
  currentPrice: number;
  profitLossUsd: number;
  profitLossProcent: number;
  totalCost: number;
  currentCost: number;
  buyHistory: Array<string>;
}

const Row = ({
  name,
  ticker,
  totalShares,
  avgPrice,
  currentPrice,
  profitLossUsd,
  profitLossProcent,
  totalCost,
  currentCost,
  buyHistory,
}: IRowData) => {
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const deleteStock = (ticker: string) => {
    dispatch(removeStockRequest(ticker));
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell align="center">{ticker}</TableCell>
        <TableCell align="center">{totalShares}</TableCell>
        <TableCell align="center">{avgPrice}</TableCell>
        <TableCell align="center">{currentPrice}</TableCell>
        <TableCell
          align="center"
          sx={{
            background: profitLossUsd < 0 ? red : green,
          }}
        >
          {profitLossUsd}
        </TableCell>
        <TableCell
          align="center"
          sx={{
            background: profitLossUsd < 0 ? red : green,
          }}
        >
          {profitLossProcent}
        </TableCell>
        <TableCell align="center">{totalCost}</TableCell>
        <TableCell align="center">{currentCost}</TableCell>
        <TableCell align="center">
          {' '}
          <Button
            type="button"
            variant="contained"
            sx={{ minWidth: '20px' }}
            onClick={() => deleteStock(ticker)}
          >
            X
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Buy History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {buyHistory &&
                    buyHistory.map(({ date, count, price }: any) => (
                      <TableRow key={date + price}>
                        <TableCell scope="row">{date}</TableCell>
                        <TableCell>{count}</TableCell>
                        <TableCell align="right">{price}</TableCell>
                        <TableCell align="right">{price * count}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const StockTable = ({ items }: any) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
      <Table
        aria-label="collapsible table"
        sx={{ border: '1px solid rgba(224, 224, 224, 1)' }}
      >
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ boxShadow: 'none' }}>Name</TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Ticker
            </TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Count
            </TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Avg Buy Price
            </TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Current Price
            </TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Profit/loss, $
            </TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Profit/loss, %
            </TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Sum, $
            </TableCell>
            <TableCell sx={{ boxShadow: 'none' }} align="center">
              Current Sum, $
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {items &&
            items.map((item: IRowData) => <Row key={item.name} {...item} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockTable;
