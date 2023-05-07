import { createSlice } from '@reduxjs/toolkit'

export interface HomeState {
  url: {
    backdrop: string
    poster: string
    profile: string
  }
  genres: any
}

const initialState: HomeState = {
  url: {
    backdrop: '',
    poster: '',
    profile: '',
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
