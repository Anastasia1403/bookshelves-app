import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  title: string;
  id: string;
}
export interface BookStateType {
  list: Book[] | [];
}
const booksState: BookStateType = {
  list: [],
};

const booksSlice = createSlice({
  name: "todo",
  initialState: booksState,
  reducers: {
    saveAllBooks: (state: any, action: PayloadAction<Book[]>) => {
      return {
        list: action.payload,
      };
    },
  },
});

export const { saveAllBooks } = booksSlice.actions;
export default booksSlice.reducer;
