import styled from 'styled-components/native';

export const List = styled.FlatList`
  flex: 1; 
  width: 95%;
`;

export const ContainerMain = styled.SafeAreaView`
  flex: 1;
  width: 100%; 
  background-color: #F0F9FF;
  align-items: center;
  justify-content: center;
`;


export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #68B2;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  align-self: center;
`;

export const ModalButtonContainer = styled.View`
  
`;


export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  align-self: center;
`;

export const ModalContainer = styled.Modal``;

export const ModalContent = styled.View`
  background-color: #001021;
  padding: 20px;
  border-radius: 8px;
  border-color: #fff;
  border-width: 2px;
  width: 80%;
  max-width: 300px;
`;


export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
`;

export const BotaoCadastro = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  border-color: #121212;
  border-width: 1px;
  background-color: #68B2;
  border-radius: 15px;
  height: 75px;
  width: 88%;
  align-self: center;
`;

export const Texto = styled.Text`
  color: #1917;
  font-size: 30px;
  align-self: center;
`;

export const Containers = styled.SafeAreaView`
  flex: 1;
  width: 100%; 
  background-color: #001021;
  align-items: center;
  justify-content: center;
`;