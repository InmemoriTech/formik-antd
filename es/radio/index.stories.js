import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
export default {
    title: 'Radio',
    component: Component,
};
export const Default = () => (React.createElement(StoryTemplate, { initialValues: {
        value: null,
    } },
    React.createElement("div", null,
        React.createElement(Component.Group, { name: 'value' },
            React.createElement(Component, { name: 'value' }, "Label1"),
            React.createElement(Component, { name: 'value' }, "Label2")))));
//# sourceMappingURL=index.stories.js.map