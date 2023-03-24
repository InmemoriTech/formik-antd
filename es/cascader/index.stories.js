import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
export default {
    title: 'Cascader',
    component: Component,
};
const Template = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(StoryTemplate, { initialValues: { value: null } },
            React.createElement("div", { style: { width: 500 } },
                React.createElement(Component, { name: 'value', style: { width: 500 }, options: [{ label: 'item1', value: 'value1' }] })))));
};
export const Default = Template.bind({});
//# sourceMappingURL=index.stories.js.map