import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  width: 150px;
  height: 60px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(85)}px;
`;

export const Icon = styled(Feather)<IconProps>`
  color: ${({ theme }) => theme.colors.green};
  font-size: ${RFValue(25)}px;

  ${(props) => props.type === 'up' && css` 
    color: ${({ theme }) => theme.colors.green}; 
  `}

  ${(props) => props.type === 'down' && css` 
    color: ${({ theme }) => theme.colors.red};  
  `}
`;

export const Content = styled.Text`
  color: ${({ theme }) => theme.colors.gray};

`;