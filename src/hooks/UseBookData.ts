import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function useBookData(url: string) {
  const { data, isLoading, error } = useSWR(url, fetcher)

  return { data, isLoading, error }
}
