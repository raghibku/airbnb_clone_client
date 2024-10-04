// types/react-date-range.d.ts
declare module 'react-date-range' {
    import { ComponentType } from 'react';
  
    export interface Range {
      startDate: Date | null;
      endDate: Date | null;
      key: string;
    }
  
    export interface DateRangeProps {
      ranges: Range[];
      onChange: (ranges: { [key: string]: Range }) => void;
      editableDateInputs?: boolean;
      moveRangeOnFirstSelection?: boolean;
      minDate?: Date;
    }
  
    export const DateRange: ComponentType<DateRangeProps>;
  }
  