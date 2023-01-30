import styled from "styled-components/native"
import { StyleSheet } from 'react-native';

export const Box = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  //height: 120px;
  margin-top: 25px;
  //border-radius: 15px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: #56bc31;
  border: #a6ada6 1px;
`
export const Description = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 500;
  text-align: center;
  margin: 15px 0;
`
export const Input = styled.TextInput`
  width: 95%;
  height: 40px;
  border-radius: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding-left: 10px;
  background-color: #fff;
`
export const styles = StyleSheet.create({
  FlatList: {
    width: '100%',
    justifyContent: 'space-between',
    //backgroundColor: '#000'
  }
})