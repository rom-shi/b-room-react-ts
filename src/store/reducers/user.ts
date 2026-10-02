import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../../models/user';
import { getUser } from '../../api/servicesTest/users';

interface IUserState {
  error?: string
  openedFilter: string
  status: 'init' | 'loading' | 'error' | 'success'
  user: UserModel | null
}

const initialState: IUserState = {
  openedFilter: '',
  status: 'init',
  user: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    putUser(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
    putRateBook(state, action: PayloadAction<string>) {
      if (state.user) state.user.ratedBooks = [...state.user.ratedBooks, action.payload];
    },
    logoutUser(state) {
      state.user = null;
    },
    addFavoriteBook(state, action: PayloadAction<{ id: string }>) {
      if (state.user === null) return;
      state.user.favoriteBooks = [...state.user.favoriteBooks, action.payload.id];
    },
    removeFavoriteBook(state, action: PayloadAction<{ id: string }>) {
      if (state.user === null) return;
      state.user.favoriteBooks.splice(state.user.favoriteBooks.indexOf(action.payload.id), 1);
    },
    setOpenedFilter(state, action: PayloadAction<string>) {
      state.openedFilter = action.payload;
    },
  },
  extraReducers: (builder) => builder
    .addCase(loadUserThunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(loadUserThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    })
    .addCase(loadUserThunk.rejected, (state) => {
      state.status = 'error';
    }),
});

export const loadUserThunk = createAsyncThunk('user/get', () => {
  return getUser();
});

// export const { reducer: userReducer, actions: userAction } = user;

export const {
  addFavoriteBook,
  logoutUser,
  putRateBook,
  putUser,
  removeFavoriteBook,
  setOpenedFilter,
} = user.actions;

export default user.reducer;
