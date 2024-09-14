import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export const useFilterState = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [keyword, setKeyword] = useState<string>('')

  const debouncedKeyword = useDebouncedCallback(
    (value: string) => {
      setKeyword(value)
    },
    // delay in ms
    500
  )

  return {
    startDate,
    endDate,
    keyword,
    setStartDate,
    setEndDate,
    setKeyword,
    debouncedKeyword,
  }
}
