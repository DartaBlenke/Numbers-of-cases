import React, { useState } from 'react';

import { Button } from '../../components/Button';

import { 
  Screen,
  Title,
  Body,
  Days_scores,
  Quantity_days,
  Days,
  Footer,
} from './styles';

export function Home(){
  
  const [day, setDay] = useState(0);

  function OneMoreDay(){
    setDay((oldState) => oldState + 1)
  }

  return(
    <Screen>
      <Title>Quantidade de casos de COVID-19 em dias</Title>
      <Body>
        <Days_scores>

        </Days_scores>

        <Quantity_days>
          <Days>{day}</Days>
        </Quantity_days>
      </Body>
      <Footer>
        <Button 
          text="- 1 dia"
          way="down"
          onPress={() => {setDay(day - 1)}}
          title={'1 less day'}
        />
        <Button 
          text="+ 1 dia"
          way="up"
          onClick={OneMoreDay}
          title={'1 more day'}
        />
      </Footer>
    </Screen>
  )
}
