import * as React from 'react';
import { StoryTemplate } from '../shared';
import Component from './';
export default {
    title: 'SubmitButton',
    component: Component,
};
export const Default = () => (React.createElement(StoryTemplate, { initialValues: { value: true } },
    React.createElement("div", null,
        React.createElement(Component, { name: 'value' }))));
//# sourceMappingURL=index.stories.js.map