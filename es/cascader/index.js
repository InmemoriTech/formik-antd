import { __rest } from "tslib";
import * as React from 'react';
import { Cascader as $Cascader } from 'antd';
import Field from '../field';
export const Cascader = (props) => {
    const { name, validate, fast, onChange } = props, restProps = __rest(props, ["name", "validate", "fast", "onChange"]);
    return (React.createElement(Field, { name: name, validate: validate, fast: fast }, ({ field: { value }, form: { setFieldValue, setFieldTouched }, }) => (React.createElement($Cascader, Object.assign({ value: value, id: name, onChange: (value, e) => {
            setFieldValue(name, value);
            setFieldTouched(name, true, false);
            onChange && onChange(value, e);
        } }, restProps)))));
};
export default Cascader;
//# sourceMappingURL=index.js.map