// components/DateRangePicker.tsx
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays, format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface DateRangePickerProps {
  onDateChange: (range: { startDate: Date; endDate: Date }) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateChange }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection', // 'selection' is the default key name for single date range pickers
    },
  ]);

  // Handle range selection and pass data to parent component
  const handleSelect = (ranges: any) => {
    const { selection } = ranges; // Access the 'selection' key
    if (selection) {
      setRange([selection]);
      onDateChange({
        startDate: selection.startDate,
        endDate: selection.endDate,
      });
    }
  };


  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={range}
        minDate={new Date()}
      />
      {/* <div>
        <p>
          Check-in: {format(range[0].startDate as Date, 'MM/dd/yyyy')} | Check-out: {format(range[0].endDate as Date, 'MM/dd/yyyy')}
        </p>
      </div> */}
    </div>
  );
};

export default DateRangePicker;
