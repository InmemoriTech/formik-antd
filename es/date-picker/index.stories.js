import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
export default {
    title: 'DatePicker',
    component: Component,
};
const Template = (args, { argTypes }) => {
    return (React.createElement(StoryTemplate, { initialValues: {
            value: null,
            range: [],
        } },
        React.createElement("div", null,
            React.createElement(Component, { name: 'value' }),
            React.createElement(Component.RangePicker, { name: 'range' }))));
};
export const Default = Template.bind({});
//# sourceMappingURL=index.stories.js.map