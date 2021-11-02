import { useState, useEffect, useCallback } from "react";

function useFetch(page) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [beerList, setBeerList] = useState([])

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true)
      await setError(false)
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
      const data = await res.json()
      await setBeerList((prev) => [...prev, ...data])
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }, [page]);

  useEffect(() => {
    sendQuery()
  }, [sendQuery, page])

  return { loading, error, beerList }
}

export default useFetch;
