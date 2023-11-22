import React, { useState, useEffect, useRef  } from 'react';
import { db } from '../../firebaseConnection';
import { Botao, ButtonText, Container, Header1, Input, Texto, TextoHeader, Link, LinkText, StyledSwitch } from '../Cadastro/styles';
import { ref, onValue, push } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';

export default function CreateTask() {
    const [nome, setNome] = useState('');
    const [finalizada, setFinalizada] = useState(false);
    const [dataPrazo, setDataPrazo] = useState('');
    const navigation = useNavigation();
    const nomeInputRef = useRef(null);

    function addNewTask() {
        if (!nome.trim() || !dataPrazo.trim()) {
            alert('Por favor, preencha o nome e a data de prazo.');
            return;
        }

        try {
            push(ref(db, '/tasks'), {
                nome: nome,
                finalizada: finalizada,
                data: dataPrazo,
            });
            alert('Tarefa criada com sucesso!');
            nomeInputRef.current.focus();
        } catch (error) {
            console.error('Erro ao criar nova tarefa:', error);
        }
        setNome('');
        setFinalizada(false);
        setDataPrazo('');
    }


    const fetchTasks = async () => {
        try {
            onValue(ref(db, '/tasks'), (querySnapShot) => {
                const tasksData = querySnapShot.val() || {};
                console.log(tasksData);
            });

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    useEffect(() => {
        fetchTasks(); // Chame a função fetchData para buscar os dados do Firebase
        //fetchUser('-NibYUqtja7lZV1xwbKE');
        //addNewUser();
        //clearUser('-NibYNYwqpmdCtQhV-fu');
        //updateUser('-NibYUqtja7lZV1xwbKE')
    }, []);

    return (
        <Container>
            <Texto>Nome da tarefa</Texto>
            <Input
                ref={nomeInputRef}
                onChangeText={(texto) => setNome(texto)}
                value={nome}
            />
            <Texto>Finalizada?</Texto>
            <StyledSwitch
                onValueChange={(texto) => setFinalizada(texto)}
                value={finalizada}
            />
            <Texto>Data prazo</Texto>
            <Input
                onChangeText={(texto) => setDataPrazo(texto)}
                value={dataPrazo}
            />
            <Botao onPress={addNewTask}>
                <ButtonText>Cadastrar</ButtonText>
            </Botao>

            <Botao onPress={() => navigation.navigate("ListTasks")}>
                <ButtonText>Voltar para lista de tarefas </ButtonText>
            </Botao>
        </Container>

    );
}
