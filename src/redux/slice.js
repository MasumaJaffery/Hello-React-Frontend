import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  error: null,
  status: 'idle',
};

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/greetings');
  const data = await response.json();
  return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addCase(getGreetings.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        greeting: action.payload.message,
      }))
      .addCase(getGreetings.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { setGreeting } = greetingsSlice.actions;
export default greetingsSlice.reducer;
