import useSWR from 'swr'

export default function useFetch(url: string) {
  const { data, error } = useSWR(url, fetcher)

  return { data, error }
}
