import { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setData(null)
    setLoading(true)
    setError(null)

    fetchDataFromApi(url)
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err)
        setError('Something went wrong!')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
