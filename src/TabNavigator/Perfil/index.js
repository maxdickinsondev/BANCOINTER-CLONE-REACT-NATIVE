import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import ArrowLeft from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/Ionicons';

import { Container, AreaArrow, PerfilArea, Image, Name, Info, Agency, Account,
    InfoArea, Area, Title, Logout, Version, ButtonBack, Loading
} from './styles';

export default function Perfil({ navigation }) {
    const [loading, setLoading] = useState(true);

    function navigationBack() {
        navigation.navigate('Header');
    }

    useEffect(() => {
        setInterval(() => {
            setLoading(false);
        }, 3000);
    });

    if (loading) {
        return (
            <Loading>
                <ActivityIndicator color="#ff8700" size={40} />
            </Loading>
        );
    } else {
        return (
            <>
                <Container>
                    <AreaArrow>
                        <ButtonBack onPress={navigationBack}>
                            <ArrowLeft name="arrow-left" color="#FF8700" size={25} />
                        </ButtonBack>
                    </AreaArrow>
    
                    <PerfilArea>
                        <Image source={{ uri: 'https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4' }} />
                        <Name>Max</Name>
    
                        <Info>
                            <Agency>agência 0001</Agency>
                            <Account>conta 01043791-3</Account>
                        </Info>
                    </PerfilArea>
                </Container>
    
                <InfoArea>
                    <Area>
                        <Title>Seu nome</Title>
                        <Arrow name="ios-arrow-forward" color="#ccc" size={25} />
                    </Area>
    
                    <Area>
                        <Title>Alterar senha</Title>
                        <Arrow name="ios-arrow-forward" color="#ccc" size={25} />
                    </Area>
    
                    <Area>
                        <Title>Face ID/Biometria</Title>
                        <Arrow name="ios-arrow-forward" color="#ccc" size={25} />
                    </Area>
    
                    <Area>
                        <Title>Gerenciar dispositivo</Title>
                        <Arrow name="ios-arrow-forward" color="#ccc" size={25} />
                    </Area>
    
                    <Area>
                        <Title>Conta Digital MEI</Title>
                        <Arrow name="ios-arrow-forward" color="#ccc" size={25} />
                    </Area>
    
                    <Area>
                        <Title>Atualização cadastral</Title>
                        <Arrow name="ios-arrow-forward" color="#ccc" size={25} />
                    </Area>
                    
                    <Area>
                        <Version>Versão do App</Version>
                        <Version>7.22(1)</Version>
                    </Area>
    
                    <Area>
                        <Logout>Sair do App</Logout>
                    </Area>
                </InfoArea>
            </>
        );
    }

    
}