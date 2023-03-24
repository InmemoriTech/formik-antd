"use strict";
exports.__esModule = true;
exports.Default = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var shared_1 = require("../shared");
var _1 = tslib_1.__importDefault(require("./"));
var table_1 = require("../table");
exports["default"] = {
    title: 'Array/RemoveRowButton',
    component: _1["default"]
};
var Default = function () { return (React.createElement(shared_1.StoryTemplate, { initialValues: { value: [{ label: 'item1' }, { label: 'item2' }] } },
    React.createElement("div", null,
        React.createElement(table_1.Table, { name: 'value', columns: [
                {
                    title: 'Label',
                    render: function (value, record) { return React.createElement("div", null, record.label); }
                },
            ] }),
        React.createElement(_1["default"], { name: 'value', index: 0 }, "Remove item at position 0")))); };
exports.Default = Default;
//# sourceMappingURL=index.stories.js.map