import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import the necessary Firebase auth functions
import { Container, Texto, Input, Botao, ButtonText, Header1, TextoHeader } from './styles';
import { useNavigation } from '@react-navigation/native';
import { db, app } from '../../firebaseConnection';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    async function cadastrar() {
        const auth = getAuth(app); // Get the Auth object from your Firebase connection

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            alert('Usuario criado: ' + user.email);
            navigation.navigate("Login");
        } catch (error) {
            if (error.code === 'auth/weak-password') {
                alert('Sua senha deve ter pelo menos 6 caracteres');
            } else if (error.code === 'auth/invalid-email') {
                alert('Email inválido');
            } else {
                alert('Ops, algo deu errado: ' + error.message);
            }
        }
        setEmail('');
        setPassword('');
    }
    return (
        <Container>
            <Header1>
                <TextoHeader>CADASTRO DE USUÁRIOS</TextoHeader>
            </Header1>
            <Texto>Email</Texto>
            <Input
                onChangeText={(texto) => setEmail(texto)}
                value={email}
            />
            <Texto>Senha</Texto>
            <Input
                onChangeText={(texto) => setPassword(texto)}
                value={password}
                secureTextEntry={true}
            />
            <Botao onPress={cadastrar}>
                <ButtonText>Cadastrar </ButtonText>
            </Botao>
        </Container>
    );
}

