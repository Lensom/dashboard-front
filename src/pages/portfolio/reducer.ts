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
}

export interface IPortfolioReducer {
  stocks: {
    items: Array<IStock>;
    loading: boolean;
    totalSum: number;
    totalCount: number;
  };
  loadingStock: boolean;
}
const initialState: IPortfolioReducer = {
  stocks: {
    items: [],
    loading: false,
    totalSum: 0,
    totalCount: 0,
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
        (acc, item) => acc + Number(item.currentCost),
        0
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
