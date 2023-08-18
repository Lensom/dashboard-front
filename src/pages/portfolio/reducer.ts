import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStockInfo {
  count: string;
  date: string;
  price: string;
}

export interface IStock {
  ticker: string;
  stocks: Array<IStockInfo>;
  currentCost: string;
  currentPrice: number;
  totalShares: number;
  totalCost: number;
}

export interface IPortfolioReducer {
  stocks: {
    items: Array<IStock>;
    loading: boolean;
    totalSum: number;
    totalCount: number;
    currentSum: number;
    posLos: number;
  };
  loadingStock: boolean;
}
const initialState: IPortfolioReducer = {
  stocks: {
    items: [],
    loading: false,
    totalSum: 0,
    totalCount: 0,
    currentSum: 0,
    posLos: 0,
  },
  loadingStock: true,
};

const calculateStocksData = (stocks: Array<IStock>) => {
  const totalSum = stocks.reduce((acc, item) => acc + item.totalCost, 0);
  const currentSum = Number(
    stocks
      .reduce((acc, item) => acc + item.currentPrice * item.totalShares, 0)
      .toFixed(2)
  );
  const posLos = Number(((currentSum * 100) / totalSum - 100).toFixed(2));
  const totalCount = stocks.length;

  return { totalSum, currentSum, posLos, totalCount };
};

const Portfolio = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    fetchPortfolioRequest: (state) => {
      state.loadingStock = true;
    },
    fetchPortfolioSuccess: (state, action: PayloadAction<IStock[]>) => {
      state.loadingStock = false;
      state.stocks.items = action.payload;
      const stocksData = calculateStocksData(state.stocks.items);
      Object.assign(state.stocks, stocksData);
    },
    fetchPortfolioError: (state) => {
      state.loadingStock = false;
    },
    addStockToPortfolioRequest: (state) => {
      state.loadingStock = true;
    },
    addStockToPortfolioSuccess: (state, action: PayloadAction<IStock[]>) => {
      state.loadingStock = false;
      state.stocks.items = action.payload;
      const stocksData = calculateStocksData(state.stocks.items);
      Object.assign(state.stocks, stocksData);
    },
    addStockToPortfolioError: (state) => {
      state.loadingStock = false;
    },
    removeStockRequest: (state) => {
      state.loadingStock = true;
    },
    removeStockSuccess: (state, action: PayloadAction<IStock[]>) => {
      state.loadingStock = false;
      state.stocks.items = action.payload;
      const stocksData = calculateStocksData(state.stocks.items);
      Object.assign(state.stocks, stocksData);
    },
    removeStockError: (state) => {
      state.loadingStock = false;
    },
  },
});

export const {
  fetchPortfolioRequest,
  addStockToPortfolioRequest,
  removeStockRequest,
} = Portfolio.actions;

export const { reducer, actions } = Portfolio;
