"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var shared_1 = require("../shared");
var _1 = tslib_1.__importDefault(require("./"));
var remove_row_button_1 = tslib_1.__importDefault(require("../remove-row-button"));
var add_row_button_1 = tslib_1.__importDefault(require("../add-row-button"));
var input_1 = tslib_1.__importDefault(require("../input"));
exports["default"] = {
    title: 'Array/Table',
    component: _1["default"]
};
var Default = function () { return (React.createElement(shared_1.StoryTemplate, { initialValues: {
        value: [
            { id: '1', label: 'item 1' },
            { id: '2', label: 'item 2' },
            { id: '3', label: 'item 3' },
        ]
    } },
    React.createElement("div", null,
        React.createElement(_1["default"], { name: 'value', pagination: false, columns: [
                {
                    title: 'Id',
                    key: 'id',
                    render: function (_, record) { return record.id; }
                },
                {
                    title: 'Label',
                    key: 'label',
                    render: function (_, record, i) { return React.createElement(input_1["default"], { name: "value.".concat(i, ".label") }); }
                },
                {
                    title: 'actions',
                    render: function (_, record, i) { return (React.createElement(remove_row_button_1["default"], { name: 'value', index: i }, "Delete row")); }
                },
            ] }),
        React.createElement(add_row_button_1["default"], { name: 'value', createNewRow: function () {
                var id = Math.random();
                return { id: id, label: 'item ' + id };
            } }, "Add row")))); };
exports.Default = Default;
//# sourceMappingURL=index.stories.js.map