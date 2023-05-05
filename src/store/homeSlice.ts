import { createSlice } from '@reduxjs/toolkit'

export interface HomeState {
  url: {
    page: number
    results: any[]
    total_pages: number
    total_results: number
  }
  genres: any
}

const initialState: HomeState = {
  url: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  genres: {},
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload
    },
    getGenres: (state, action) => {
      state.genres = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions

export default homeSlice.reducer
