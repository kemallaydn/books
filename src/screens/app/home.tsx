import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Container from "../../components/container";
import Button from "../../components/button";
import Navbar from "../../components/navbar";
import Tab from "../../components/tab/";
import styles from "../../styles/app/home"
import { Image } from "react-native";
import axios from "axios";
import getData from "../../utils/getData";
import Card from "../../components/card";
import Circle from "../../components/circle";
function Home(){
    const [data,setData]=useState([]);
    async function asyncExample() {      

        setData(await getData())
      }
      useEffect(()=>{
         asyncExample();
      },[])

    return(
        <Container>
            <Navbar/>
            <Circle data={data}/>
            <Card  data={data}/>
            <Tab/>
        </Container>
    )
}
export default Home;