import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
export default {
    title: 'Array/Button',
    component: Component,
};
const Template = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(StoryTemplate, { initialValues: { value: null } },
            React.createElement("div", { style: { width: 500 } },
                React.createElement(Component, { name: 'value', onClick: (array) => { } })))));
};
export const Default = Template.bind({});
//# sourceMappingURL=index.stories.js.map