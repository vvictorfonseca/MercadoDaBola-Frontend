import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Box = styled.ScrollView`
  margin: 15px auto;
  width: 80%;
  max-height: 65%;
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
export const StatusBox = styled.FlatList`
  width: 100%
`
export const BoxButton = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80%;
`
export const styles = StyleSheet.create({
  FlatList: {
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 5
  }
})