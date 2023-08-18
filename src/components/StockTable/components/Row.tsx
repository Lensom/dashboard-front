import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { removeStockRequest } from 'pages/portfolio/reducer';

import { red, green } from 'config';
import { formatDate } from 'utils';

import { IRowData } from '../StockTable';

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
      <TableRow>
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
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => deleteStock(ticker)}
          >
            <DeleteIcon className="color-gray" />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 'none' }}
          colSpan={11}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Purchase History
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
                        <TableCell scope="row">{formatDate(date)}</TableCell>
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

export default Row;
