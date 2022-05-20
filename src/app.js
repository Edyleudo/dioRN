import React from "react";
import {View, Image, StyleSheet,SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';
import NativeLinkingManager from "react-native/Libraries/Linking/NativeLinkingManager";


const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlToMyGithut = 'https://github.com/Edyleudo';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/17521507?v=4';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('verificando link');
        const res = await Linking.canOpenURL(urlToMyGithut);
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo');
            await Linking.openURL(urlToMyGithut);
        }
    };

    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
        <View style={style.content}>
            <Image 
            accessibilityLabel="Edyleudo no book de casamento"
            style={style.avatar} 
            source={{uri: imageProfileGithub}}/>
            <Text 
            accessibilityLabel="Nome: Edyleudo Markys"
            style={[style.defaltText, style.name]}>Edyleudo Markys</Text>
            <Text 
            accessibilityLabel="Nickname: edyleudo"
            style={[style.defaltText, style.nickName]}>edyleudo</Text>
            <Text 
            accessibilityLabel="Descrição: bachelor of science and technology, completing computer 
            engineering, lover of technology and enthusiast of new challenges."
            style={[style.defaltText, style.description]}>bachelor of science and technology, completing computer 
            engineering, lover of technology and enthusiast of new challenges.</Text>
            <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaltText, style.textButton]}>Open in github</Text>
            </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // expandir para a tela inteira
        justifyContent: 'center',
    },

    content: {
        alignItems: "center",
        padding: 20,
    },

    avatar: {
        height:200,
        width:200,
        borderRadius:100,
        borderColor: 'white',
        borderWidth:2,
    },

    defaltText: {
        color: colorFontGithub,
    },

    name: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },

    nickName :{
        color: colorDarkFontGithub,
        fontSize: 18,
    },

    description :{
        fontSize: 14,
        fontWeight: 'bold',
    },

    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        },
    
    textButton :{
        fontSize: 16,
        fontWeight: 'bold',
    },
   
});