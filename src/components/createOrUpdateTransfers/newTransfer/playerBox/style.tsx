import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Box = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 313px;
  height: 60px;
  background-color: #56bc31;

  &:nth-child(1) {
    background-color: red;
  }
`
export const Name = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin: auto 5px
`
export const Styles = StyleSheet.create({
  Image: {
    width: 40,
    height: 40,
    borderRadius: 100,
    margin: 12,
  }
})