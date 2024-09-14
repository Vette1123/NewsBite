import { Input } from '../ui/input'
import { Label } from '../ui/label'

export const SearchByKeyword = ({
  debounced,
}: {
  debounced: (value: string) => void
}) => {
  return (
    <div>
      <Label>Search by keyword</Label>
      <Input
        placeholder="Search by keyword"
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  )
}
