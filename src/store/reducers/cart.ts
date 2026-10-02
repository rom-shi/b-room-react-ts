import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  cartId: string
  hardCoverCount: number
  paperCoverCount: number
}

interface ICartState {
  cartItems: CartItem[]
}

const initialState: ICartState = {
  cartItems: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    putCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      if (state.cartItems.find((item) => item.cartId === action.payload.id)) {
        if (action.payload.view === 'hard') {
          const item = state.cartItems.filter((item) => item.cartId === action.payload.id)[0];
          item.hardCoverCount++;
          return;
        }
        if (action.payload.view === 'paper') {
          const item = state.cartItems.filter((item) => item.cartId === action.payload.id)[0];
          item.paperCoverCount++;
          return;
        }
      }

      if (action.payload.view === 'hard') {
        state.cartItems = [
          ...state.cartItems,
          {
            cartId: action.payload.id,
            hardCoverCount: 1,
            paperCoverCount: 0,
          },
        ];
      }
      if (action.payload.view === 'paper') {
        state.cartItems = [
          ...state.cartItems,
          {
            cartId: action.payload.id,
            hardCoverCount: 0,
            paperCoverCount: 1,
          },
        ];
      }
    },
    increaseCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      if (action.payload.view === 'hard') {
        return {
          ...state,
          cartItems: state.cartItems.map((book) => {
            return (book.cartId === action.payload.id
              ? { ...book, hardCoverCount: book.hardCoverCount + 1 }
              : book);
          }),
        };
      }

      if (action.payload.view === 'paper') {
        return {
          ...state,
          cartItems: state.cartItems.map((book) => {
            return (book.cartId === action.payload.id
              ? { ...book, paperCoverCount: book.paperCoverCount + 1 }
              : book);
          }),
        };
      }
    },
    decreaseCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      if (action.payload.view === 'hard') {
        return {
          ...state,
          cartItems: state.cartItems.map((book) => {
            return (book.cartId === action.payload.id && (
              (book.hardCoverCount > 0 && book.paperCoverCount > 0) ||
              (book.hardCoverCount > 1 && book.paperCoverCount === 0)
            )
              ? { ...book, hardCoverCount: book.hardCoverCount - 1 }
              : book
            );
          }),
        };
      }
      if (action.payload.view === 'paper') {
        return {
          ...state,
          cartItems: state.cartItems.map((book) => {
            return (book.cartId === action.payload.id && (
              (book.paperCoverCount > 0 && book.hardCoverCount > 0) ||
              (book.paperCoverCount > 1 && book.hardCoverCount === 0)
            )
              ? { ...book, paperCoverCount: book.paperCoverCount - 1 }
              : book
            );
          }),
        };
      }
    },
    deleteCart(state, action: PayloadAction<{id: string, view: 'hard' | 'paper'}>) {
      const tempArr = [...state.cartItems];
      const index = state.cartItems.findIndex((item) => item.cartId === action.payload.id);
      tempArr.splice(index, 1);
      state.cartItems = tempArr;
    },
  },
});

export const {
  decreaseCart,
  deleteCart,
  increaseCart,
  putCart,
} = cart.actions;

export default cart.reducer;
