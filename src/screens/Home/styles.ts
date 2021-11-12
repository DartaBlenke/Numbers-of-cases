import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text `
    width: ${RFPercentage(40)}px;
    height: ${RFPercentage(10)}px;
    font-weight: bold;
    font-size: ${RFValue(25)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.purple};
`;

export const Body = styled.View`
    justify-Content: center;
    align-Items: center;
`;

export const Days_scores = styled.View`
    background-color: ${({ theme }) => theme.colors.black};
    width: ${RFPercentage(33)}px;
    height: ${RFPercentage(35)}px;
    margin-top: ${RFPercentage(5)}px;
    border-radius: 7px;
`;

export const Days = styled.Text`
    color: ${({ theme }) => theme.colors.purple};
    font-size: 40px;
    font-weight: bold;
`;

export const Quantity_days = styled.View`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.purple};
    justify-Content: center; 
    align-Items: center;
    width: 110px;
    height: 90px;
    border-radius: 7px;
    margin-top: ${RFPercentage(5)}px;
`;

export const Footer = styled.View`
    width: ${RFPercentage(50)}px;
    flex-direction: row;
    justify-content: space-around;
    margin-top: ${RFPercentage(7.5)}px;
`;