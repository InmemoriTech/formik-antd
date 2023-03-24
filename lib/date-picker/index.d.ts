/// <reference types="react" />
import { FormikFieldProps } from '../FieldProps';
import { DatePickerProps as $DatePickerProps, MonthPickerProps as $MonthPickerProps, RangePickerProps as $RangePickerProps, WeekPickerProps as $WeekPickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
export declare function valueToDayjs(value: any): dayjs.Dayjs | null;
export type DatePickerProps = $DatePickerProps & FormikFieldProps;
export declare const DatePicker: {
    ({ name, validate, onChange, fast, ...restProps }: DatePickerProps): JSX.Element;
    MonthPicker({ name, validate, onChange, ...restProps }: MonthPickerProps): JSX.Element;
    RangePicker({ name, validate, onChange, ...restProps }: RangePickerProps): JSX.Element;
    WeekPicker({ name, validate, onChange, ...restProps }: WeekPickerProps): JSX.Element;
};
export default DatePicker;
export type WeekPickerProps = FormikFieldProps & $WeekPickerProps;
export type RangePickerProps = FormikFieldProps & $RangePickerProps;
export type MonthPickerProps = FormikFieldProps & $MonthPickerProps;
//# sourceMappingURL=index.d.ts.map