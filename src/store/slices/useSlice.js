import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: '',
  error: '',
  user: {
    id: '',
    name: '',
    email: '',
    image: '',
    status: '',
    token: '',
  },
}

export const useSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.status = ''
      state.error = ''
      state.user = {
        id: '',
        name: '',
        email: '',
        image: '',
        status: '',
        token: '',
      }
    },
  },
})

export const { logout } = useSlice.actions
export default useSlice.reducer
