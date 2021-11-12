import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(8)}px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
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