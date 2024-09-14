import { ArticlesContainer } from '@/components/containers/articles-container'
import { ArticlesFilterContainer } from '@/components/containers/articles-filter-container'
import { useFilterState } from '@/hooks/use-filter-state'

export const HomePage = () => {
  const {
    startDate,
    endDate,
    keyword,
    setStartDate,
    setEndDate,
    debouncedKeyword,
  } = useFilterState()

  return (
    <main className="flex flex-col gap-4">
      <ArticlesFilterContainer
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        debounced={debouncedKeyword}
      />
      <ArticlesContainer
        startDate={startDate}
        endDate={endDate}
        keyword={keyword}
      />
    </main>
  )
}
