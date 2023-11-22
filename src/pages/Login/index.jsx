import React, { useState } from 'react';
import { } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, signOut, getAuth } from 'firebase/auth'; // Import the necessary Firebase auth functions
import { Botao, ButtonText, Container, Input, Texto, Link, LinkText, LogoImg } from '../Cadastro/styles';
import { db, app } from '../../firebaseConnection';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const auth = getAuth(app); // Get the Auth object from your Firebase connection
    const navigation = useNavigation();


    async function logar() {
        await signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                alert('Bem-vindo: ' + value.user.email);
                setUser(value.user.email);
                navigation.navigate("ListTasks");
            })
            .catch((error) => {
                console.log(error);
                alert('Erro ao logar! Verifique email e senha!');
                return;
            })

        setPassword('');
        setEmail('');
    }


    async function logout() {
        await signOut(auth);
        setUser('');
        alert('Deslgoado com sucesso!');
    }

    return (
        <Container>
            <Texto>Email</Texto>
            <Input
                onChangeText={(texto) => setEmail(texto)}
                value={email}
                keyboardType={'email-address'}
            />

            <Texto>Senha</Texto>
            <Input
                onChangeText={(texto) => setPassword(texto)}
                value={password}
                secureTextEntry={true}
            />

            <Botao onPress={logar}>
                <ButtonText>Acessar</ButtonText>
            </Botao>
            <Link onPress={() => navigation.navigate("Cadastro")}>
                <LinkText>Criar novo usuário</LinkText>
            </Link>

        </Container>
    );
}
