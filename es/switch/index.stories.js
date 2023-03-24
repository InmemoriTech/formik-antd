import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
import Form from '../form';
Component.displayName = 'Switch1';
export default {
    title: 'Switch',
    component: Component,
};
export const Default = () => (React.createElement(StoryTemplate, { initialValues: { value: true } },
    React.createElement("div", null,
        React.createElement(Form.Item, { name: 'value', label: 'Checkbox1' },
            React.createElement(Component, { name: 'value' })))));
//# sourceMappingURL=index.stories.js.map