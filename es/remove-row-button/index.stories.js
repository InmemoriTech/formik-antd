import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
import { Table } from '../table';
export default {
    title: 'Array/RemoveRowButton',
    component: Component,
};
export const Default = () => (React.createElement(StoryTemplate, { initialValues: { value: [{ label: 'item1' }, { label: 'item2' }] } },
    React.createElement("div", null,
        React.createElement(Table, { name: 'value', columns: [
                {
                    title: 'Label',
                    render: (value, record) => React.createElement("div", null, record.label),
                },
            ] }),
        React.createElement(Component, { name: 'value', index: 0 }, "Remove item at position 0"))));
//# sourceMappingURL=index.stories.js.map