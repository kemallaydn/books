import React from "react";
import { Text, View } from "react-native";
import Container from "../../components/container";
import Button from "../../components/button";
import Navbar from "../../components/navbar";
import Tab from "../../components/tab/";
import styles from "../../styles/app/home"
import { Image } from "react-native";
function Home(){
    return(
        <Container>
            <Navbar/>
            <View style={styles.header}>
                
            </View>
            <Tab/>
        </Container>
    )
}
export default Home;