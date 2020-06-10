import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, AreaInfo, Box, Title,
    AreaValue, Value, Avatar, List
} from './styles';

import Services from '../Services';

export default function Header() {
    const array = [
        {
            id: "1"
        }
    ];

    return (
        <>
            <List 
                data={array}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View key={String(item.id)}>
                        <Container start={[1, 1]} colors={['#FF8700', '#FF500F']}>
                            <AreaInfo>
                                <Box>
                                    <Title>Saldo em conta</Title>
                                    
                                    <AreaValue>
                                        <Value>R$ 1290,00</Value>
                                        <Icon name="eye" size={25} color="#fff"/>
                                    </AreaValue>
                                </Box>

                                <Avatar source={{ uri: 'https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4' }}/>
                            </AreaInfo>
                        </Container>

                        <Services />
                    </View>
                )}
            />
        </>
    );
}