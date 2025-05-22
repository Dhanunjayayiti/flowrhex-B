
import React from 'react';
import StatsDisplay from './StatsDisplay'; // Adjust the path as necessary

export default {
  title: 'Components/StatsDisplay',
  component: StatsDisplay,
};

const Template = (args) => <StatsDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {};
