

import React from 'react';
import FrHexerModels from './FRHexerModels'; // Adjust path as needed

export default {
  title: 'Components/FrHexerModels',
  component: FrHexerModels,
};

const Template = (args) => <FrHexerModels {...args} />;

export const Default = Template.bind({});
Default.args = {};
