import React from "react";
import Container from "../../components/container";
import styles from "../../styles/app/chat";
import { Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

function Chat({ navigation }: any) {
    return (
        <Container visible={false}>

            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#4D4D4D', marginHorizontal: '-5%', padding: '1%' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ flex: 1 }}>
                    <Ionicons name="chevron-back-sharp" color={"white"} size={30} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: 10, marginLeft: '3%' }}>
                    <View style={{ width: 40, height: 40, borderRadius: 75 }}>
                        <Image source={{ uri: "https://picsum.photos/id/0/5000/3333" }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 40 }} />
                    </View>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: '5%' }}>Kemal</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("account") }} style={{ flex: 1 }}>
                    <Ionicons name="alert-circle-outline" color={"white"} size={30} />
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }} keyboardVerticalOffset={100}>
                <ScrollView style={{ flex: 1 }}>
                    {/* Buraya mesajlar veya diğer içerikler eklenebilir */}
                </ScrollView>
                <View style={{ borderRadius: 0, backgroundColor: '#4D4D4D', marginHorizontal: '-5%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginBottom:'-15%',paddingBottom:'13%', paddingHorizontal: '0.5%', paddingVertical: '3%' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginHorizontal: '1%' }}>
                        <Ionicons name="add-sharp" color={"white"} size={23} />
                    </TouchableOpacity>
                    <TextInput placeholderTextColor={"#7E8087"} placeholder="" style={styles.textinput} />
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginRight: '2%' }}>
                        <Ionicons name="camera-outline" color={"white"} size={23} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ marginRight: '1%' }}>
                        <Ionicons name="mic-outline" color={"white"} size={21} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Container>
    );
}

export default Chat;
