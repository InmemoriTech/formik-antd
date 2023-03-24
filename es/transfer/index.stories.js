import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
export default {
    title: 'Transfer',
    component: Component,
};
export const Default = () => (React.createElement(StoryTemplate, { initialValues: { value: [] } },
    React.createElement("div", null,
        React.createElement(Component, { name: 'value', render: (item) => item.title, listStyle: () => ({}), dataSource: [
                { key: '1', title: 'item 1' },
                { key: '2', title: 'item 2' },
                { key: '3', title: 'item 3' },
            ] }))));
//# sourceMappingURL=index.stories.js.map