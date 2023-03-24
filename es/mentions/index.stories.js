import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
export default {
    title: 'Mentions',
    component: Component,
};
export const Default = () => (React.createElement(StoryTemplate, { initialValues: {
        value: null,
    } },
    React.createElement("div", null,
        React.createElement(Component, { name: 'value', options: [
                { key: '1', label: 'Label', value: 'Value' },
                { key: '2', label: 'Label2', value: 'Value2' },
            ] }))));
//# sourceMappingURL=index.stories.js.map