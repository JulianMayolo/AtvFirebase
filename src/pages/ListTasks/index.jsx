import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConnection';
import { ButtonText, Container, LinkText } from '../Cadastro/styles';
import { ref, onValue, } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { BotaoCadastro, List, Texto, Containers } from './styles';
import TaskList from '../../../components/TaskList';

export default function ListTasks() {
    const [tasks, setTasks] = useState([]);
    const navigation = useNavigation();;
    console.log('tasks teste', tasks)


    const loadTasks = async () => {
        try {
            onValue(ref(db, "/tasks"), (querySnapShot) => {
                const tasksFormat = [];
                querySnapShot.forEach((child) => {
                    tasksFormat.push({
                        id: child.key,
                        ...child.val(),
                    });
                });
                setTasks(tasksFormat);
            });
        } catch (error) {
            Alert.alert("Error fetching data:", error);
        } finally {
        }
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (

        <Container>
            <BotaoCadastro onPress={() => navigation.navigate("CreateTask")}>
                <ButtonText>Criar nova tarefa</ButtonText>
            </BotaoCadastro>

            {tasks.length > 0 ? (
                <List
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                    data={tasks}
                    keyExtractor={(task) => task.id.toString()}
                    renderItem={({ item }) => <TaskList data={item} />}
                />
            ) : (
                <Containers>
                    <Texto>Nenhuma tarefa cadastrada!</Texto>
                </Containers>
            )}


        </Container>
    );
}