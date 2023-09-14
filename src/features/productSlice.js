import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [],
    proByCat: [],
    loading: false,
    error: null
}

export const fetchProductByCategory = createAsyncThunk(
    "productsByCategory",
    async (data) => {
        const response = await fetch(`https://dummyjson.com/products/category/${data}`);

        try{
            const result = await response.json();
            return result.products;
        }catch(err){
            return err;
        }
    }
)

export const fetchProduct = createAsyncThunk(
    "products",
    async (data) => {
        const response = await fetch(`https://dummyjson.com/products`);

        try{
            const result = await response.json();
            return result.products;
        }catch(err){
            return err;
        }
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProduct.fulfilled, (state,action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(fetchProduct.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchProductByCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchProductByCategory.fulfilled, (state,action) => {
            state.loading = false;
            state.proByCat = action.payload;
        })
        .addCase(fetchProductByCategory.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
    }
); 

// export const {} = productSlice.actions;
export default productSlice.reducer;