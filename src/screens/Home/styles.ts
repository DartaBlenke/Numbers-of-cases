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

export const Footer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
`;