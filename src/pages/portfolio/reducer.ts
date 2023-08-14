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
  portfolio: {
    items: Array<IStock>;
    loading: boolean;
  };
  loadingStock: boolean;
}
const initialState: IPortfolioReducer = {
  portfolio: {
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
      state.portfolio.loading = true;
    },
    fetchPortfolioSuccess: (state, action: PayloadAction<IStock[]>) => {
      state.portfolio.loading = false;
      state.portfolio.items = action.payload;
    },
    fetchPortfolioError: (state) => {
      state.portfolio.loading = false;
    },
    addStockToPortfolioRequest: (state) => {
      state.loadingStock = true;
    },
    addStockToPortfolioSuccess: (state, action: PayloadAction<IStock[]>) => {
      state.loadingStock = false;
      state.portfolio.items = action.payload;
    },
    addStockToPortfolioError: (state) => {
      state.loadingStock = false;
    },
  },
});

export const { fetchPortfolioRequest } = Portfolio.actions;

export const { reducer, actions } = Portfolio;
