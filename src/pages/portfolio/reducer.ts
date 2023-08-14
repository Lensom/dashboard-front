import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStockInfo {
  count: string;
  date: string;
  price: string;
}

export interface IStock {
  ticker: string;
  stocks: Array<IStockInfo>;
}

export interface IPortfolioReducer {
  stocks: {
    items: Array<IStock>;
    loading: boolean;
  };
  loadingStock: boolean;
}
const initialState: IPortfolioReducer = {
  stocks: {
    items: [],
    loading: false,
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
