import { __rest } from "tslib";
import * as React from 'react';
import { Input as $Input, } from '../input';
import { Checkbox as $Checkbox } from '../checkbox';
import FormItem from '../form-item';
import { Cascader as $Cascader } from '../cascader';
import { DatePicker as $DatePicker } from '../date-picker';
import { InputNumber as $InputNumber } from '../input-number';
import { Mentions as $Mentions } from '../mentions';
import { Radio as $Radio } from '../radio';
import { Rate as $Rate } from '../rate';
import { Select as $Select } from '../select';
import { Slider as $Slider } from '../slider';
import { Switch as $Switch } from '../switch';
import { TimePicker as $TimePicker } from '../time-picker';
import { Transfer as $Transfer } from '../transfer';
import { TreeSelect as $TreeSelect } from '../tree-select';
export function Input(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Input, Object.assign({ id: rest.name }, rest))));
}
export function InputNumber(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($InputNumber, Object.assign({ id: rest.name }, rest))));
}
export function TextArea(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Input.TextArea, Object.assign({ id: rest.name }, rest))));
}
Input.TextArea = TextArea;
export function Password(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Input.Password, Object.assign({ id: rest.name }, rest))));
}
Input.Password = Password;
export function Checkbox(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Checkbox, Object.assign({ id: rest.name }, rest))));
}
export function Cascader(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Cascader, Object.assign({}, rest))));
}
export function DatePicker(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($DatePicker, Object.assign({ id: rest.name }, rest))));
}
export function Mentions(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Mentions, Object.assign({ id: rest.name }, rest))));
}
export function Radio(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Radio, Object.assign({ id: rest.name }, rest))));
}
export function RadioGroup(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Radio.Group, Object.assign({ id: rest.name }, rest))));
}
export function Rate(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Rate, Object.assign({}, rest))));
}
export function Select(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Select, Object.assign({ id: rest.name }, rest))));
}
export function Slider(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Slider, Object.assign({ id: rest.name }, rest))));
}
export function Switch(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Switch, Object.assign({}, rest))));
}
export function TimePicker(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($TimePicker, Object.assign({ id: rest.name }, rest))));
}
export function Transfer(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($Transfer, Object.assign({}, rest))));
}
export function TreeSelect(_a) {
    var { formItem } = _a, rest = __rest(_a, ["formItem"]);
    return (React.createElement(FormItem, Object.assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement($TreeSelect, Object.assign({}, rest))));
}
//# sourceMappingURL=index.js.map