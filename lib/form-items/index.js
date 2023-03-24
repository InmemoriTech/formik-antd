"use strict";
exports.__esModule = true;
exports.TreeSelect = exports.Transfer = exports.TimePicker = exports.Switch = exports.Slider = exports.Select = exports.Rate = exports.RadioGroup = exports.Radio = exports.Mentions = exports.DatePicker = exports.Cascader = exports.Checkbox = exports.Password = exports.TextArea = exports.InputNumber = exports.Input = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var input_1 = require("../input");
var checkbox_1 = require("../checkbox");
var form_item_1 = tslib_1.__importDefault(require("../form-item"));
var cascader_1 = require("../cascader");
var date_picker_1 = require("../date-picker");
var input_number_1 = require("../input-number");
var mentions_1 = require("../mentions");
var radio_1 = require("../radio");
var rate_1 = require("../rate");
var select_1 = require("../select");
var slider_1 = require("../slider");
var switch_1 = require("../switch");
var time_picker_1 = require("../time-picker");
var transfer_1 = require("../transfer");
var tree_select_1 = require("../tree-select");
function Input(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(input_1.Input, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.Input = Input;
function InputNumber(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(input_number_1.InputNumber, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.InputNumber = InputNumber;
function TextArea(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(input_1.Input.TextArea, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.TextArea = TextArea;
Input.TextArea = TextArea;
function Password(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(input_1.Input.Password, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.Password = Password;
Input.Password = Password;
function Checkbox(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(checkbox_1.Checkbox, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.Checkbox = Checkbox;
function Cascader(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(cascader_1.Cascader, tslib_1.__assign({}, rest))));
}
exports.Cascader = Cascader;
function DatePicker(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(date_picker_1.DatePicker, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.DatePicker = DatePicker;
function Mentions(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(mentions_1.Mentions, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.Mentions = Mentions;
function Radio(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(radio_1.Radio, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.Radio = Radio;
function RadioGroup(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(radio_1.Radio.Group, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.RadioGroup = RadioGroup;
function Rate(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(rate_1.Rate, tslib_1.__assign({}, rest))));
}
exports.Rate = Rate;
function Select(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(select_1.Select, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.Select = Select;
function Slider(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(slider_1.Slider, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.Slider = Slider;
function Switch(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(switch_1.Switch, tslib_1.__assign({}, rest))));
}
exports.Switch = Switch;
function TimePicker(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(time_picker_1.TimePicker, tslib_1.__assign({ id: rest.name }, rest))));
}
exports.TimePicker = TimePicker;
function Transfer(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(transfer_1.Transfer, tslib_1.__assign({}, rest))));
}
exports.Transfer = Transfer;
function TreeSelect(_a) {
    var formItem = _a.formItem, rest = tslib_1.__rest(_a, ["formItem"]);
    return (React.createElement(form_item_1["default"], tslib_1.__assign({}, formItem, { name: rest.name, htmlFor: rest.name, id: rest.name }),
        React.createElement(tree_select_1.TreeSelect, tslib_1.__assign({}, rest))));
}
exports.TreeSelect = TreeSelect;
//# sourceMappingURL=index.js.map