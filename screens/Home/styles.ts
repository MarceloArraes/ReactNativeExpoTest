import { View, ImageBackground } from "react-native";
import styled from "styled-components/native";

export const StyledView = styled.View`
  background-color: #c5c2c297;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const StyledBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  align-items: "center";
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 65;
  color: ${({ theme }) => theme.colors.accent};
`;
