import { useEffect, useState } from 'react'

export const useData = <DataType>(url: string, headers: HeadersInit) => {
  const [data, setData] = useState<FetchedData<DataType>>({
    data: undefined,
    isLoading: true,
    isError: false
  })
  useEffect(() => {
    let ignore = false
    fetch(url, { headers })
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json)
        }
      })
      .catch(() => {
        if (!ignore) {
          setData({ data: undefined, isLoading: false, isError: true })
        }
      })
    return () => {
      ignore = true
    }
  }, [url])
  return data
}
