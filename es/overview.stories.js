import * as React from 'react';
import { Checkbox, Input, InputNumber, Switch, DatePicker, TimePicker, Radio, FormikDebug, ResetButton, SubmitButton, Select, AutoComplete, Rate, Slider, Cascader, TreeSelect, Transfer, Form, Mentions, } from '.';
import { Formik } from 'formik';
import dayjs from 'dayjs';
import { TreeNode } from 'antd/es/tree-select';
import { Button } from 'antd';
export default {
    title: 'Overview',
    component: 'div',
};
export function Overview() {
    return (React.createElement(Formik, { initialValues: {
            userName: '',
            //set default/initial values via formik
            email: 'sample@email.com',
            address: { city: '' },
            password: '',
            index: 5,
            dollars: 1,
            newsletter: true,
            consent: false,
            description: '',
            time: dayjs().toISOString(),
            date: dayjs().toISOString(),
            city: 3,
            radioGroup: '1',
            todos: ['2', '3'],
            slider1: 30,
            slider2: [20, 60],
        }, onSubmit: (values) => {
            alert(JSON.stringify(values));
        }, validate: (values) => {
            if (!values.userName) {
                return { userName: 'required' };
            }
            return undefined;
        }, render: (formik) => (React.createElement(Form, null,
            React.createElement("div", { style: {
                    display: 'flex',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '850px',
                    gridTemplateColumns: '1fr 1fr',
                } },
                React.createElement("div", { style: {
                        margin: '5px',
                        height: '100%',
                        display: 'grid',
                        gridGap: '5px',
                    } },
                    React.createElement(Input, { name: 'email', placeholder: 'Basic Input' }),
                    React.createElement(Form.Item, { name: 'userName', hasFeedback: true, showValidateSuccess: true, __debug: true },
                        React.createElement(Input, { name: 'userName', placeholder: 'Validated input' })),
                    React.createElement(Input, { addonBefore: 'city', name: 'address.city', placeholder: 'Input (nested object)' }),
                    React.createElement(Input.Password, { name: 'password', placeholder: 'Input.Password' }),
                    React.createElement(Input.TextArea, { name: 'description', placeholder: 'Input.TextArea' }),
                    React.createElement(InputNumber, { name: 'index', min: 0 }),
                    React.createElement(InputNumber, { name: 'dollars', formatter: (value) => `$ ${value}` }),
                    React.createElement(AutoComplete, { name: 'auto', placeholder: 'Autocomplete', dataSource: ['Berlin', 'Amsterdam', 'Paris'], showArrow: true }),
                    React.createElement(Mentions, { name: 'mentions', placeholder: 'Mentions' },
                        React.createElement(Mentions.Option, { value: 'afc163' }, "afc163"),
                        React.createElement(Mentions.Option, { value: 'zombieJ' }, "zombieJ"),
                        React.createElement(Mentions.Option, { value: 'yesmeck' }, "yesmeck")),
                    React.createElement(Rate, { name: 'rate', allowHalf: true, allowClear: true }),
                    React.createElement(Rate, { name: 'rate', allowHalf: true, style: { color: 'red' }, allowClear: true }),
                    React.createElement(Slider, { name: 'slider1' }),
                    React.createElement(Slider, { name: 'slider2', range: true }),
                    React.createElement(Checkbox, { name: 'newsletter' }, "Checkbox"),
                    React.createElement("div", null,
                        React.createElement(Switch, { name: 'consent', checkedChildren: '\u5F00', unCheckedChildren: '\u5173' })),
                    React.createElement(TimePicker, { name: 'time', placeholder: 'TimePicker' }),
                    React.createElement(DatePicker, { name: 'date', showTime: true, placeholder: 'DatePicker' }),
                    React.createElement(Radio.Group, { name: 'radioGroup', options: [
                            { label: 'item 1', value: '1' },
                            { label: 'item 2', value: 2 },
                            { label: 'item 3', value: '3' },
                            { label: React.createElement("span", null, "foo"), value: '4' },
                        ] }),
                    React.createElement(Radio.Group, { name: 'city', size: 'large' },
                        React.createElement(Radio.Button, { value: 1 }, "Hamburg"),
                        React.createElement(Radio.Button, { value: 2 }, "Amsterdam"),
                        React.createElement(Radio.Button, { value: 3 }, "London")),
                    React.createElement(Checkbox.Group, { name: 'todos', options: [
                            { label: 'item 1', value: '1' },
                            { label: 'item 2', value: '2' },
                            { label: 'item 3', value: '3' },
                        ] }),
                    React.createElement(Select, { name: 'select2', style: { width: '100%' }, placeholder: 'Select multiple', mode: 'multiple' },
                        React.createElement(Select.Option, { value: 1 }, "item 1"),
                        React.createElement(Select.Option, { value: 2 }, "item 2"),
                        React.createElement(Select.Option, { value: 3 }, "item 3")),
                    React.createElement(Select, { name: 'select3', style: { width: '100%' }, placeholder: 'Select with groups' },
                        React.createElement(Select.OptGroup, { label: 'group 1' },
                            React.createElement(Select.Option, { value: 1 }, "item 1"),
                            React.createElement(Select.Option, { value: 2 }, "item 2"),
                            React.createElement(Select.Option, { value: 3 }, "item 3")),
                        React.createElement(Select.OptGroup, { label: 'group 2' },
                            React.createElement(Select.Option, { value: 4 }, "item 4"),
                            React.createElement(Select.Option, { value: 5 }, "item 5"),
                            React.createElement(Select.Option, { value: 6 }, "item 6"))),
                    React.createElement(Cascader, { options: [
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                        children: [
                                            {
                                                value: 'xihu',
                                                label: 'West Lake',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                value: 'jiangsu',
                                label: 'Jiangsu',
                                children: [
                                    {
                                        value: 'nanjing',
                                        label: 'Nanjing',
                                    },
                                ],
                            },
                        ], name: 'cascader', placeholder: 'Cascader' }),
                    React.createElement(TreeSelect, { name: 'treeselect', placeholder: 'Treeselect' },
                        React.createElement(TreeNode, { value: 'parent 1', title: 'parent 1', key: '0-1' },
                            React.createElement(TreeNode, { value: 'parent 1-0', title: 'parent 1-0', key: '0-1-1' },
                                React.createElement(TreeNode, { value: 'leaf1', title: 'my leaf', key: 'random' }),
                                React.createElement(TreeNode, { value: 'leaf2', title: 'your leaf', key: 'random1' })),
                            React.createElement(TreeNode, { value: 'parent 1-1', title: 'parent 1-1', key: 'random2' },
                                React.createElement(TreeNode, { value: 'sss', title: React.createElement("b", { style: { color: '#08c' } }, "sss"), key: 'random3' })))),
                    React.createElement(Transfer, { name: 'transfer', dataSource: [
                            { key: '1', title: 'item 1' },
                            { key: '2', title: 'item 2' },
                            { key: '3', title: 'item 3' },
                        ], render: (item) => item.title }),
                    React.createElement(Button.Group, { size: 'large' },
                        React.createElement(ResetButton, null, "Reset"),
                        React.createElement(SubmitButton, { type: 'primary', disabled: false }, "Submit")))),
            React.createElement(FormikDebug, { style: { maxWidth: 400 } }))) }));
}
//# sourceMappingURL=overview.stories.js.map