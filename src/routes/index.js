import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import CreateTask from '../pages/CreateTask';
import ListTasks from '../pages/ListTasks';
export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Tela Login', headerStyle: { backgroundColor: '#001021' }, headerTitleStyle: { fontSize: 34}, headerTintColor: '#FFF', headerShown: true }
                } />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ title: 'Tela de Cadastro', headerStyle: { backgroundColor: '#001021' }, headerTitleStyle: { fontSize: 34}, headerTintColor: '#FFF', headerShown: true }}
            />
            <Stack.Screen
                name="ListTasks"
                component={ListTasks}
                options={{ title: 'Lista de Tarefas', headerStyle: { backgroundColor: '#001021' }, headerTitleStyle: { fontSize: 34}, headerTintColor: '#FFF', headerShown: true }}
            />
            <Stack.Screen
                name="CreateTask"
                component={CreateTask}
                options={{ title: 'Cadastro de tarefa', headerStyle: { backgroundColor: '#001021' }, headerTitleStyle: { fontSize: 34}, headerTintColor: '#FFF', headerShown: true }}
            />
        </Stack.Navigator>
    )
}