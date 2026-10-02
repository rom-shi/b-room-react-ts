import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRequestState } from '../../models/request';

const initialState: IRequestState = {
  currentPage: 0,
  noLimit: false,
  pageSize: 4,
  selectedGenres: [],
  selectedMaxPrice: 0,
  selectedMinPrice: 0,
  selectedOrder: 'DESC',
  selectedQuery: '',
  selectedSort: 'rating',
};

const request = createSlice({
  name: 'request',
  initialState,
  reducers: {
    reqGenres(state, action: PayloadAction<{ genresId: string[] }>) {
      state.selectedGenres = action.payload.genresId;
    },
    reqPrice(state, action: PayloadAction<{ minVal: number, maxVal: number }>) {
      state.selectedMinPrice = action.payload.minVal;
      state.selectedMaxPrice = action.payload.maxVal;
    },
    reqSort(state, action: PayloadAction<'price' | 'title' | 'author' | 'rating' | 'date'>) {
      state.selectedSort = action.payload;
    },
    reqOrder(state) {
      switch (state.selectedOrder) {
      case 'ASC':
        state.selectedOrder = 'DESC';
        break;
      case 'DESC':
        state.selectedOrder = 'ASC';
        break;
      default:
        state.selectedOrder = 'DESC';
      }
    },
    reqQuery(state, action: PayloadAction<{ query: string }>) {
      state.selectedQuery = action.payload.query;
    },
    reqPagination(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    reqPagesize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    reqNoLimit(state) {
      state.noLimit = !state.noLimit;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  reqGenres,
  reqNoLimit,
  reqOrder,
  reqPagesize,
  reqPagination,
  reqPrice,
  reqQuery,
  reqSort,
  resetFilters,
} = request.actions;

export default request.reducer;
