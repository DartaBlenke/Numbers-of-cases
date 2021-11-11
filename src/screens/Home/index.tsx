import React, { useState } from 'react';

import { Button } from '../../components/Button';

import { 
  Screen,
  Header,
  Title,
  Body,
  Days_scores,
  Quantity_days,
  Days,
  Footer,
} from './styles';

export function Home(){
  
  const [Day, setDay] = useState(1);

  return(
    <Screen>
      <Header>
        <Title>Quantidade de casos de COVID-19 em dias</Title>
      </Header>
      <Body>
        <Days_scores>

        </Days_scores>

        <Quantity_days>
          <Days>{Day}</Days>
        </Quantity_days>
      </Body>
      <Footer>
        <Button 
          text="- um dia"
          way="down"
          onPress={() => setDay(Day - 1)}
          title={'1 less day'}
        />
        <Button 
          text="+ um dia"
          way="up"
          onPress={() => setDay(Day + 1)} 
          title={'1 more day'}
        />
      </Footer>
    </Screen>
  )
}
