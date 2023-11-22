import React, { useState, } from 'react';
import { Card, ContainerMain, InputList, InputListData, StyledSwitch } from './styles';
import { Texto, LinkDelete, LinkTextDelete } from '../../src/pages/Cadastro/styles';
import { ref, remove, update } from 'firebase/database';
import { db } from '../../src/firebaseConnection';
import { ModalBackground, ModalButton, ModalButtonContainer, ModalButtonText, ModalContainer, ModalContent, ModalText } from '../../src/pages/ListTasks/styles';


export default function TaskList({ data }) {
  console.log('LIST:', data);
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleTaskCompletion = (taskKey, isCompleted) => {
    const userRef = ref(db, `/tasks/${taskKey}`);
    update(userRef, { finalizada: !isCompleted })
      .then(() => {
        console.log(`Tarefa com ID ${taskKey} marcada como ${!isCompleted ? 'completa' : 'incompleta'}.`);
      })
      .catch((error) => {
        console.error(`Erro ao alterar o status da tarefa: ${error}`);
      });
  };

  function deleteTask(taskKey) {
    console.log(`ID REMOVE: ${taskKey}`);
    const userRef = ref(db, `/tasks/${taskKey}`);

    remove(userRef)
      .then(() => {
        console.log(`Tarefa removida com sucesso.`);
      })
      .catch((error) => {
        console.error(`Erro ao remover a tarefa: ${error}`);
      });
  }

  const toggleTask = (taskKey, newName) => {
    if (!newName.trim()) {
      alert('O novo nome não pode ser vazio.');
      return;
    }
    const userRef = ref(db, `/tasks/${taskKey}`);
    update(userRef, { nome: newName })
      .then(() => {
        console.log(`Tarefa com ID ${taskKey} atualizada`);
      })
      .catch((error) => {
        console.error(`Erro ao alterar o status da tarefa: ${error}`);
      });
  };

  const toggleTaskDate = (taskKey, newDate) => {

    if (!newDate.trim()) {
      alert('A nova data de prazo não pode ser vazia.');
      return;
    }

    const userRef = ref(db, `/tasks/${taskKey}`);
    update(userRef, { data: newDate })
      .then(() => {
        console.log(`Tarefa com ID ${taskKey} atualizada`);
      })
      .catch((error) => {
        console.error(`Erro ao alterar o status da tarefa: ${error}`);
      });
  };

  const openConfirmationModal = (taskId) => {
    setConfirmationModalVisible(true);
    setTaskToDelete(taskId);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalVisible(false);
  };

  const confirmDeletion = () => {
    deleteTask(taskToDelete);
    closeConfirmationModal();
  };

  return (
    <Card style={{ backgroundColor: data.finalizada ? '#004000' : '#800000' }}>
      <ContainerMain>
        <Texto>Nome:</Texto>
        <InputList value={data.nome}
          onChangeText={(newName) => toggleTask(data.id, newName)} />
      </ContainerMain>
      <ContainerMain>
        <Texto>Finalizada?</Texto>
        <StyledSwitch value={data.finalizada}
          onValueChange={() => toggleTaskCompletion(data.id, data.finalizada)}
        />
      </ContainerMain>
      <ContainerMain>
        <Texto>Prazo de entrega:</Texto>
        <InputListData value={data.data}
          onChangeText={(newDate) => toggleTaskDate(data.id, newDate)} />
      </ContainerMain>
      <ContainerMain>
        <LinkDelete onPress={() => openConfirmationModal(data.id)}>
          <LinkTextDelete>Excluir tarefa?</LinkTextDelete>
        </LinkDelete>
      </ContainerMain>

      <ModalContainer
        visible={isConfirmationModalVisible}
        transparent={true}
        animationType="slide"
      >
        <ModalBackground>
          <ModalContent>
            <ModalText>Tem certeza de que deseja excluir esta tarefa?</ModalText>
            <ModalButtonContainer>
              <ModalButton onPress={confirmDeletion}>
                <ModalButtonText>Confirmar</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={closeConfirmationModal}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
            </ModalButtonContainer>
          </ModalContent>
        </ModalBackground>
      </ModalContainer>
    </Card>
  );
}
