import React from 'react';

import {
  HeaderBackButton,
  HeaderBackButtonProps,
} from '@react-navigation/elements';

const BackButton = ({ ...props }: HeaderBackButtonProps) => {
  return <HeaderBackButton {...props} tintColor="#000" />;
};

export default BackButton;
