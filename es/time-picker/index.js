import { __rest } from "tslib";
import { TimePicker as $TimePicker } from 'antd';
import * as React from 'react';
import Field from '../field';
import { valueToDayjs } from '../date-picker';
export const TimePicker = (_a) => {
    var { name, validate, fast, onChange } = _a, restProps = __rest(_a, ["name", "validate", "fast", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate, fast: fast }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($TimePicker, Object.assign({ value: valueToDayjs(value), id: name, onChange: (time, timeString) => {
            setFieldValue(name, time ? time.toISOString() : null);
            setFieldTouched(name, true, false);
            onChange && onChange(time, timeString);
        } }, restProps)))));
};
export default TimePicker;
//# sourceMappingURL=index.js.map