import { FC, Suspense, lazy } from "react";
import Label from "./Label";
import "react-datepicker/dist/react-datepicker.css";
import { twMerge } from "tailwind-merge";
const ReactDatePicker = lazy(() => import("react-datepicker"));

interface DatePickerProps {
  className?: string;
  label: string;
  selected: Date | null;
  showTimeInput?: boolean;
  onChange(
    date: Date | Date[] | [Date | null, Date | null] | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ): void;
}

const DatePicker: FC<DatePickerProps> = ({
  className,
  label,
  selected,
  showTimeInput,
  onChange,
}) => {
  return (
    <div className={twMerge(className)}>
      <Label>{label}</Label>
      <Suspense>
        <ReactDatePicker
          selected={selected}
          onChange={onChange}
          timeInputLabel={showTimeInput ? "Time:" : undefined}
          dateFormat={showTimeInput ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd"}
          showTimeInput={showTimeInput}
          withPortal
          className="h-10 border rounded px-4 w-full bg-gray-50"
        />
      </Suspense>
    </div>
  );
};

export default DatePicker;
