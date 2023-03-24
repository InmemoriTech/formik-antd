import * as React from 'react';
import { StoryTemplate } from '../shared';
import { Checkbox as Component } from './';
import Form from '../form';
export default {
    title: 'Checkbox',
    component: Component,
};
const Template = (args, { argTypes }) => {
    return (React.createElement(StoryTemplate, { initialValues: {
            value: null,
            defaultTrue: true,
            defaultFalse: false,
            group: [],
        } },
        React.createElement("div", null,
            React.createElement(Component, { name: 'value' }),
            React.createElement(Component, { name: 'defaultTrue' }),
            React.createElement(Component, { name: 'defaultFalse' }),
            React.createElement(Form.Item, { name: 'defaultFalse', label: 'Checkbox' },
                React.createElement(Component, { name: 'defaultFalse' })))));
};
export const Default = Template.bind({});
//# sourceMappingURL=index.stories.js.map