import * as React from 'react';
import { StoryTemplate } from '../shared';
import { Input as Component } from './';
import { Form, Space } from 'antd';
import { SubmitButton } from '../submit-button';
import { FormItem } from '../form-item';
export default {
    title: 'Input',
    component: Component,
};
const Template = (args, { argTypes }) => {
    return (React.createElement(StoryTemplate, { initialValues: { value: args.value } },
        React.createElement("div", { style: { width: 500 } },
            React.createElement(Space, { direction: 'vertical' },
                "Input",
                React.createElement(Component, { name: 'value', style: { width: 500 } }),
                "Input.Password",
                React.createElement(Component.Password, { name: 'value', style: { width: 500 } }),
                "Input.TextArea",
                React.createElement(Component.TextArea, { name: 'value', style: { width: 500 } })))));
};
const TemplateWithFormItem = (args, { argTypes }) => {
    return (React.createElement(StoryTemplate, { initialValues: { value: args.value }, validate: (values) => {
            return values.value === null || values.value === ''
                ? { value: 'Field is required' }
                : { value: 'Field is required' };
        } },
        React.createElement("div", { style: { width: 500 } },
            React.createElement(Space, { direction: 'vertical' },
                React.createElement(FormItem, { name: 'value', label: 'Input' },
                    React.createElement(Component, { name: 'value', style: { width: 500 }, fast: true })),
                React.createElement(Form.Item, { name: 'value', label: 'Input.Password' },
                    React.createElement(Component.Password, { name: 'value', style: { width: 500 } })),
                React.createElement(Form.Item, { name: 'value', label: 'Input.TextArea' },
                    React.createElement(Component.TextArea, { name: 'value', style: { width: 500 } })),
                React.createElement(SubmitButton, null, "Submit")))));
};
export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = { value: 'foo' };
export const WithNullAsDefault = Template.bind({});
WithNullAsDefault.args = { value: null };
export const WithFormItem = TemplateWithFormItem.bind({});
WithNullAsDefault.args = { value: 'foo' };
//# sourceMappingURL=index.stories.js.map