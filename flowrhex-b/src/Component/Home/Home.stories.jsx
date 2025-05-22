
import React from 'react';
import Home from './Home'; // Adjust the path if needed

export default {
  title: 'Pages/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
