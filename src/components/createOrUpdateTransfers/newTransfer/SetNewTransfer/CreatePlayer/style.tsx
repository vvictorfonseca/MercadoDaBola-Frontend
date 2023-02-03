import styled from "styled-components/native";

export const Box = styled.View`
  display: flex;
  align-items: center;
  margin: 15px auto;
  justify-content: space-evenly;
  width: 80%;
  height: 400px;
  background-color: #56bc31;
  border-radius: 15px;
`
export const BoxInput = styled.View`
  display: flex;
  width: 90%;
`
export const InputDescription = styled.Text `
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: #fff;
  margin-bottom: 5px;
`
export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  padding-left: 10px;
  background-color: #fff;
`