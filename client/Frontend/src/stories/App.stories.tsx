import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from '../App';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'App Component',
  component: App,
} as ComponentMeta<typeof App>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof App> = () => <App />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    
};