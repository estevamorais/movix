import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from './store/store'
import { getApiConfiguration } from './store/homeSlice'

import { fetchDataFromApi } from './utils/api'

import Routes from './routes'

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state: RootState) => state.home)

  useEffect(() => {
    fetchApiConfig()
  }, [])

  const fetchApiConfig = useCallback(() => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      }

      dispatch(getApiConfiguration(url))
    })
  }, [dispatch])

  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
