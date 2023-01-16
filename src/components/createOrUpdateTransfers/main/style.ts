import styled from "styled-components/native"

export const Main = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 90%;
  //background-color: blue;
`
export const Box = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40%;
  border-radius: 15px;
  background-color: #56bc31;
  border: #a6ada6 1px;
`
export const Text = styled.Text`
  font-size: 30px;
  color: white;
  text-align: center;
  cursor: pointer;
`