import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const Input = props => {
  const [focused, setFocused] = React.useState(false);
  return <TextInput {...props} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={focused ? styles.inputFocused : styles.input} />;
};

export default Input;
