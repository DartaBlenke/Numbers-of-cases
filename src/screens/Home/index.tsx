import React, { useState, useEffect } from 'react';

import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { CasesDto } from '../../dtos/CasesDTO';

import { 
  Screen,
  Title,
  Body,
  Days_scores,
  Quantity_days,
  Days,
  Footer,
  Cases_number,
} from './styles';

export function Home(){
  
  const [day, setDay] = useState(0);
  const [dataCases, setDataCases] = useState<CasesDto[]>([]);
  const [loadint, setLoading] = useState(true);

  function OneLessDay(){
    if (day == 0) {
      return;
    } setDay(day -1)
  }

  useEffect(() => {
    async function cases() {
      try {
        const response = await api.get('/api/v1/cases');
        setDataCases(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    cases();
  },[]);

  return(
    <Screen>
      <Title>Quantidade de casos de COVID-19 em dias</Title>
      <Body>
        <Days_scores>
          <Cases_number>
            {dataCases}
          </Cases_number>
        </Days_scores>

        <Quantity_days>
          <Days>{day}</Days>
        </Quantity_days>
      </Body>
      <Footer>
        <Button 
          text="- 1 dia"
          way="down"
          onPress={OneLessDay}
        />
        <Button 
          text="+ 1 dia"
          way="up"
          onPress={() => setDay( day + 1 )}
        />
      </Footer>
    </Screen>
  )
}
