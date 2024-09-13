import { ArticlesContainer } from '@/components/containers/articles-container'
import { ArticlesFilterContainer } from '@/components/containers/articles-filter-container'
import { useState } from 'react'

export const HomePage = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  return (
    <main className="flex flex-col gap-4">
      <ArticlesFilterContainer
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <ArticlesContainer startDate={startDate} endDate={endDate} />
    </main>
  )
}
