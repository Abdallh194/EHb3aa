import { createSlice } from "@reduxjs/toolkit";

export const WeatherSlice = createSlice({
  name: "user",
  initialState: {
    Search: "",
    cartItems: [],
    user: "Abdallh",
    pass: "1234",
  },
  reducers: {
    SearchFun: (state, action) => {
      state.Search = action.payload;
    },
    AddToCart: (state, action) => {
      // state.cartItems.push(action.payload);
      let isexist = false;
      state.cartItems.forEach((p) => {
        if (p.id === action.payload.id) {
          p.Quantity++;
          isexist = true;
        }
      });
      if (!isexist) {
        state.cartItems.push(action.payload);
      }
    },
    DeleteFromCard: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    DeleteAllItemsCard: (state) => {
      while (state.cartItems.length > 0) {
        state.cartItems.pop();
      }
    },
    ResiterUser: (state, action) => {
      state.user = action.payload.Reg_name;
      state.pass = action.payload.Reg_password;
      console.log(state.user, state.pass);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  SearchFun,
  AddToCart,
  DeleteFromCard,
  DeleteAllItemsCard,
  ResiterUser,
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
