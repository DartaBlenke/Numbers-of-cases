import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Screen = styled.View`
    display: flex;
`;

export const Header = styled.View `
    flex: 1;
    justify-Content: flex-start; 
    align-Items: center;
`;

export const Title = styled.Text `
    position: absolute;
    margin-top: ${RFPercentage(10)}px;
    width: 330px;
    height: 84px;
    font-weight: bold;
    font-size: ${RFValue(25)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.purple};
`;

export const Body = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    justify-Content: center;
    align-Items: center;
`;

export const Days_scores = styled.View`
    background-color: ${({ theme }) => theme.colors.black};
    width: 260px;
    height: 290px;
    border-radius: 7px;
    justify-Content: center; 
    align-Items: center;
    margin-top: ${RFPercentage(8)}px;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
`;