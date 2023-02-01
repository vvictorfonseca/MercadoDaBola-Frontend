import styled from "styled-components/native";

export const Box = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 200;
  background-color: #56bc31;
  border: #a6ada6 1px;
  margin-top: 65px;
  border-radius: 15px;
`
export const Player = styled.View`
  width: 27%;
  height: 80%;
  //background-color: red;
  border: #a6ada6 1px;
  border-top-color: #56bc31;
  border-bottom-color: #56bc31;
  border-left-color: #56bc31;
`
export const Infos = styled.View`
  width: 100%;
  height: 50%;
  //background-color: blue;
`
export const Clubs = styled.View`
  width: 100%;
  height: 50%;
  border-top-width: 1px;
  border-top-color: #a6ada6;
`
export const Button = styled.TouchableOpacity`
  margin-top: 35px;
  width: 50%;
  height: 45;
  background-color: #56bc31;
  border: #a6ada6 1px;
  border-radius: 15px;
`
export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin: auto;
  color: #fff;
`
