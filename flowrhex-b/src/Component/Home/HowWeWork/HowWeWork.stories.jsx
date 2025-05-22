
import React from 'react';
import HowWeWork from './HowWeWork'; // Adjust the path if necessary

export default {
  title: 'Sections/HowWeWork',
  component: HowWeWork,
};

const Template = (args) => <HowWeWork {...args} />;

export const Default = Template.bind({});
Default.args = {};
