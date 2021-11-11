import React from 'react';
import { ButtonProps, TouchableOpacity } from 'react-native';

import { 
  Container, 
  Content,
  Icon,
} from './styles';

interface Props extends ButtonProps {
  text: string;
  way: 'up' | 'down';
}

const icon = {
  up: 'arrow-up',
  down: 'arrow-down'
}

export function Button({ text, way, ...rest } : Props) {
  return(
    <TouchableOpacity
    activeOpacity={0.7}
    >
      <Container>
        <Icon name={icon[way]} type={way}/>
        <Content>{text}</Content>
      </Container>
    </TouchableOpacity>
  )
}