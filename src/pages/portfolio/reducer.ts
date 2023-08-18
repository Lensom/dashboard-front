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
  loadingStock: false,
};

const Portfolio = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    fetchPortfolioRequest: (state) => {
      state.stocks.loading = true;
    },
    fetchPortfolioSuccess: (state, action: PayloadAction<IStock[]>) => {
      state.stocks.loading = false;
      state.stocks.items = action.payload;
      state.stocks.totalSum = state.stocks.items.reduce(
        (acc, item) => acc + item.totalCost,
        0
      );
      state.stocks.currentSum = state.stocks.items.reduce(
        (acc, item) => acc + item.currentPrice * item.totalShares,
        0
      );
      state.stocks.posLos = Number(
        ((state.stocks.currentSum * 100) / state.stocks.totalSum - 100).toFixed(
          2
        )
      );
      state.stocks.totalCount = state.stocks.items.length;
    },
    fetchPortfolioError: (state) => {
      state.stocks.loading = false;
    },
    addStockToPortfolioRequest: (state) => {
      state.loadingStock = true;
    },
    addStockToPortfolioSuccess: (state, action: PayloadAction<IStock[]>) => {
      state.loadingStock = false;
      state.stocks.items = action.payload;
    },
    addStockToPortfolioError: (state) => {
      state.loadingStock = false;
    },
  },
});

export const { fetchPortfolioRequest } = Portfolio.actions;

export const { reducer, actions } = Portfolio;
