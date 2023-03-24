import * as React from 'react';
import { StoryTemplate } from '../shared';
import { FormItem as Component } from './';
import { Input } from '../input';
import { Space } from 'antd';
export default {
    title: 'Form Item',
    component: Component,
};
function PropRenderer(props) {
    return React.createElement("div", null, JSON.stringify(props, null, 4));
}
const Template = (args, { argTypes }) => {
    return (React.createElement(StoryTemplate, { initialValues: { value: 'hello' } },
        React.createElement("div", { style: { width: 500 } },
            React.createElement(Space, { direction: 'vertical' },
                React.createElement(Component, { name: 'value', style: { width: 500 }, label: 'Input' },
                    React.createElement(Input, { name: 'value' })),
                React.createElement(Component, { name: 'value', style: { width: 500 }, label: 'Render props' },
                    React.createElement(PropRenderer, null))))));
};
export const WithDefaultValue = Template.bind({});
//# sourceMappingURL=index.stories.js.map