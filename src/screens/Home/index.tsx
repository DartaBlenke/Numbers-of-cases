import React from 'react';

import { Button } from '../../components/Button';

import { 
  Screen,
  Header,
  Title,
  Body,
  Days_scores,
  Quantity_days,
  Footer,
} from './styles';

export function Home(){
  return(
    <Screen>
      <Header>
        <Title>Quantidade de casos de COVID-19 em dias</Title>
      </Header>
      <Body>
        <Days_scores></Days_scores>
        <Quantity_days></Quantity_days>
      </Body>
      <Footer>
        <Button text="- um dia" type="down"/>
        <Button text="+ um dia" type="up"/>
      </Footer>
    </Screen>
  )
}
