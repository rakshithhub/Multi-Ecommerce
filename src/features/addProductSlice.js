import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    addPro: [],
    loading: false,
    error: null,
}

export const addProduct = createAsyncThunk(
    "addcart",
    async (data) => {
        const response = await fetch('https://dummyjson.com/products/add',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data),
        });

        try{
            const result = await response.json();
            console.log(result)
            return result;
        }catch(err){
            return err;
        }
    }
);



const addProductSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        deleteCart: (state,action) => {
            const result = state.addPro.filter((e) => {
                return e.title !== action.payload;
            });
            console.log(result);
            state.addPro = result;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addProduct.pending, (state) => {
            state.loading = true;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.addPro.push(action.payload);
        })
        .addCase(addProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const {deleteCart} = addProductSlice.actions;
export default addProductSlice.reducer;