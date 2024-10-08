import { NYTSectionCombobox } from '../filters/article-category-search'
import { ArticleAuthorCombobox } from '../filters/author-filter'
import { DatePickerDemo } from '../filters/date-component'
import { SearchByKeyword } from '../filters/search-by-keyword'
import { ArticleSourceCombobox } from '../filters/sources-filter'

interface ArticlesFilterContainerProps {
  startDate: Date | undefined
  endDate: Date | undefined
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  debounced: (value: string) => void
}

export const ArticlesFilterContainer = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  debounced,
}: ArticlesFilterContainerProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <SearchByKeyword debounced={debounced} />
      <NYTSectionCombobox />
      <ArticleSourceCombobox />
      <ArticleAuthorCombobox />
      <div className="flex gap-4">
        <DatePickerDemo
          label="Start date"
          date={startDate}
          setDate={setStartDate}
        />
        <DatePickerDemo label="End date" date={endDate} setDate={setEndDate} />
      </div>
    </div>
  )
}
