import { DatePickerDemo } from '../date-component'

interface ArticlesFilterContainerProps {
  startDate: Date | undefined
  endDate: Date | undefined
  setStartDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  setEndDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export const ArticlesFilterContainer = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: ArticlesFilterContainerProps) => {
  return (
    <div className="flex items-center gap-x-4">
      <DatePickerDemo label="Start date" date={startDate} setDate={setStartDate} />
      <DatePickerDemo label="End date" date={endDate} setDate={setEndDate} />
    </div>
  )
}
