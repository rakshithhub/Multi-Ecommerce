import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    loading: false,
    error: null,
}

export const fetchCategory = createAsyncThunk(
    'categories',
    async () => {
        const response = await fetch('https://dummyjson.com/products/categories');

        try{
            const result = await response.json();
            return result;
        }catch(err){
            return err;
        }
    }
);

const ecomSlice = createSlice({
    name: "ecom",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchCategory.fulfilled, (state,action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        .addCase(fetchCategory.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

// export const {} = ecomSlice.actions;
export default ecomSlice.reducer;
