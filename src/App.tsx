import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from './store/store'
import { getApiConfiguration } from './store/homeSlice'

import { fetchDataFromApi } from './utils/api'

import Routes from './routes'

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state: RootState) => state.home)

  useEffect(() => {
    apiTesting()
  }, [])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
