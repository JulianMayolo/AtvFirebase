import styled from 'styled-components/native';

export const Card = styled.View`
  border-radius: 8px;
  margin: 10px;
  margin-start: 6%;
  padding: 2%;
  flex: 1;
  height: 90%;
`;

export const ContainerMain = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-Color: transparent;
  height: 25%;
  width: 100%;
  justify-content: space-between;
`;

export const TitleTask = styled.Text`
  font-Size: 15px;
  font-Weight: bold;
  color: #000;
  align-Self: flex-start;
  margin: 15px;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
  margin-start: 7%;
`;

export const TitleLineOne = styled.Text`
  font-Size: 15px;
  font-Weight: bold;
  color: #000;
  align-Self: flex-start;
  margin: 15px;
`;

export const DateCard = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  align-self: flex-start;
  margin: 15px;
`;

export const ContainerDescription = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-color: #FFF;
  height: 80px;
  width: 100%;
`;
export const Description = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  align-self: flex-start;
  margin: 10px;
  margin-start: 15px;
`;

export const ContainerLabels = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
  background-color: #FFF;
  height: 20px;
  width: 100%;
  margin-top: 5px;
`;

export const Labels = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #000;
  align-self: flex-start;
  justify-content: flex-start;
  margin-left: 15px;
  margin-right: 25px;
`;

export const ButtonStatus = styled.TouchableOpacity`
  width: 107px;
  height: 22px;
  border-Radius: 5px;
  align-Items: center;
  align-Self: center;
  align-Content: center;
  background-Color: #68B2F8;
  margin-Left: 5px;
  margin-Right: 5px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-Size: 13px;
  font-Weight: bold;
  margin-top: 2px;
`;
export const InputList = styled.TextInput`
  margin-top: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: #FFF;
  height: 45px;
  width: 75%;
  font-size: 17px;
  border-radius: 15px;
  align-self: center;
  color: #FFF;
`;

export const InputListData = styled.TextInput`
  margin-top: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: #FFF;
  height: 45px;
  width: 45%;
  font-size: 17px;
  border-radius: 15px;
  align-self: center;
  color: #FFF;
`;