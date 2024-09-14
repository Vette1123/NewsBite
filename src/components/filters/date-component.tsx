import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

interface DatePickerDemoProps {
  label: string
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export function DatePickerDemo({
  label = 'Select Date',
  date,
  setDate,
}: DatePickerDemoProps) {
  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor="date-picker" className="w-fit text-sm font-medium">
        {label}
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date-picker"
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              format(date, 'PPP')
            ) : (
              <span className="text-muted-foreground">
                {label === 'Start date'
                  ? 'Pick a start date'
                  : 'Pick an end date'}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
