import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ElementType {
  itemName: string;
  itemPosition: number;
}

const initialState: ElementType[] = [];

const dropElementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addElement: (state, action: PayloadAction<ElementType>) => {
      state.push(action.payload);
    },
    removeElement: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
    replaceElement: (state, action: PayloadAction<{ index: number; itemName: string }>) => {
      const element = state[action.payload.index];
      if (element) {
        element.itemName = action.payload.itemName;
      }
    },
  },
});

export const { addElement, removeElement, replaceElement } =
  dropElementsSlice.actions;
export default dropElementsSlice.reducer;
