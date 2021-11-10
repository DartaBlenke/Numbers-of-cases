import React from 'react';

import { 
  Container, 
  Content,
  Icon,
} from './styles';

interface Props {
  text: string;
  type: 'up' | 'down';
}

const icon = {
  up: 'arrow-up',
  down: 'arrow-down'
}

export function Button({ text, type } : Props) {
  return(
    <Container>
      <Icon name={icon[type]} type={type}/>
      <Content>{text}</Content>
    </Container>
  )
}