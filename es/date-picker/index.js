import { __rest } from "tslib";
import * as React from 'react';
import { DatePicker as $DatePicker } from 'antd';
import Field from '../field';
import dayjs from 'dayjs';
const { MonthPicker: $MonthPicker, RangePicker: $RangePicker, WeekPicker: $WeekPicker, } = $DatePicker;
export function valueToDayjs(value) {
    return typeof value === 'string'
        ? dayjs(value)
        : typeof value === 'object'
            ? value
            : null;
}
function valueArrayToDayjsArray(value) {
    return Array.isArray(value)
        ? value[0] && value[1]
            ? [valueToDayjs(value[0]), valueToDayjs(value[1])]
            : value[0]
                ? [valueToDayjs(value[0])]
                : null
        : null;
}
export const DatePicker = (_a) => {
    var { name, validate, onChange, fast } = _a, restProps = __rest(_a, ["name", "validate", "onChange", "fast"]);
    return (React.createElement(Field, { name: name, validate: validate, fast: fast }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($DatePicker, Object.assign({ value: valueToDayjs(value), id: name, onChange: (date, dateString) => {
            setFieldValue(name, date ? date.toISOString() : null);
            setFieldTouched(name, true, false);
            onChange && onChange(date, dateString);
        } }, restProps)))));
};
export default DatePicker;
DatePicker.MonthPicker = (_a) => {
    var { name, validate, onChange } = _a, restProps = __rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($MonthPicker, Object.assign({ value: valueToDayjs(value), onChange: (date, dateString) => {
            setFieldValue(name, date ? date.toISOString() : null);
            setFieldTouched(name, true, false);
            onChange && onChange(date, dateString);
        } }, restProps)))));
};
DatePicker.RangePicker = (_a) => {
    var { name, validate, onChange } = _a, restProps = __rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($RangePicker, Object.assign({ name: name, value: valueArrayToDayjsArray(value), onChange: (dates, dateStrings) => {
            setFieldValue(name, dates);
            setFieldTouched(name, true, false);
            onChange && onChange(dates, dateStrings);
        } }, restProps)))));
};
DatePicker.WeekPicker = (_a) => {
    var { name, validate, onChange } = _a, restProps = __rest(_a, ["name", "validate", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($WeekPicker, Object.assign({ name: name, value: valueToDayjs(value), onChange: (date, dateString) => {
            setFieldValue(name, date);
            setFieldTouched(name, true, false);
            onChange && onChange(date, dateString);
        } }, restProps)))));
};
//# sourceMappingURL=index.js.map