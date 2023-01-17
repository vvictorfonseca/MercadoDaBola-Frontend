import styled from "styled-components/native"

export const Box = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 120px;
  margin-top: 25px;
  border-radius: 15px;
  background-color: #56bc31;
  border: #a6ada6 1px;
`
export const Description = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 500
`
export const Input = styled.TextInput`
  width: 95%;
  height: 40px;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  background-color: #fff;
`