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
  display: flex;
  align-items: center;
  width: 29%;
  height: 80%;
  border-right-width: 1px;
  border-right-color: #fff;
`
export const Infos = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
`
export const StatusInfo = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-right-width: 1px;
  border-right-color: #fff;
`
export const LikesBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 40%;
  margin-bottom: 5px;
`

export const LikesPorcentage = styled.Text `
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-left: 15px;
  margin-top: -6px;
`

export const TransferStatus = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`
export const Clubs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 50%;
  border-top-width: 1px;
  border-top-color: #fff;
`
export const ClubBox = styled.View`
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`
export const ClubImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`
export const ClubName = styled.Text`
  margin-top: 4px;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
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
export const PlayerImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-left: -1.5px;
`
export const PlayerNameBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color:  #fff;
`
export const PlayerInfo = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
`
export const PlayerInfoBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 23px;
  border-bottom-width: 1px;
  border-bottom-color:  #ffffff;
`