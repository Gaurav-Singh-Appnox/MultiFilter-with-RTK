import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../data";
const initialState = {
  data: productData,
  filters: {
    brand: null,
    color: null,
    storage: null,
  },
};
const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setBrand: (state, actions) => {
      state.filters.brand = actions.payload;
    },
    setColor: (state, actions) => {
      state.filters.color = actions.payload;
    },
    setStorage: (state, actions) => {
      state.filters.storage = actions.payload;
    },
    applyFilters: (state) => {
      const { brand, color, storage } = state.filters;
      state.data = productData.filter((item) => {
        const matchesBrand = brand ? item.brand === brand : true;
        const matchesColor = color ? item.color === color : true;
        const matchesStorage = storage ? item.storage === storage : true;
        return matchesBrand && matchesColor && matchesStorage;
      });
    },
  },
});
export const { setBrand, setColor, setStorage, applyFilters, resetFilters } =
  filterSlice.actions;
export default filterSlice.reducer;