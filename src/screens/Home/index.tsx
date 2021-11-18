import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { Button } from '../../components/Button';

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

interface DateProps
{
  day: number;
  cases: number;
}

export function Home(){
  
  const [day, setDay] = useState(1);
  const [dataCases, setDataCases] = useState<DateProps[]>([{day: day, cases: 634}]);

  function OneLessDay(){
    if (dataCases.length > 0) {
      var data = dataCases;
      data.pop();
      setDataCases(data);
    }
  }
  
  function randomNumber() {
    Math.floor(Math.random() * 1 - 1000);
  }

  function AddDay(){
    var day = dataCases.length + 1;
    var cases = 777;
    var data = dataCases;
    data.push({day, cases});
    setDataCases(data);
    console.log(dataCases);
  }

  return(
    <Screen>
      <Title>Quantidade de casos de COVID-19 em dias</Title>
      <Body>
        <Days_scores>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {dataCases.map(dataCase => ( 
              <Cases_number>
                {dataCase.day} - {dataCase.cases}
              </Cases_number>
            ))}
          </ScrollView>
        </Days_scores>

        <Quantity_days>
         <Days>{dataCases[dataCases.length - 1].day}</Days>
        </Quantity_days>
      </Body>
      <Footer>
        <Button 
          text="- 1 dia"
          way="down"
          onPress={() => OneLessDay()} 
        />
        <Button 
          text="+ 1 dia"
          way="up"
          onPress={() => AddDay()}
        />
      </Footer>
    </Screen>
  )
}
