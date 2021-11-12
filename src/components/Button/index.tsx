import React from 'react';
import { TouchableOpacity } from 'react-native';

import { 
  Container, 
  Content,
  Icon,
} from './styles';

interface ButtonProps {
  text: string;
  way: 'up' | 'down';
  onPress: () => void;
}

const icon = {
  up: 'arrow-up',
  down: 'arrow-down'
}

export function Button({ text, way, onPress } : ButtonProps) {
  return(
    <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    >
      <Container
      >
        <Icon name={icon[way]} type={way}/>
        <Content>{text}</Content>
      </Container>
    </TouchableOpacity>
  )
}