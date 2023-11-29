import { Text, TouchableOpacity, View } from "react-native";
import Container from "../container";
import styles from "./style"
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tab from "../../models/tab.model";
const Tab:React.FC<Tab> = ({ label, onPress, isSelected }) => {
  const tabItems=["home-sharp","heart-circle-outline","pencil-sharp","person-circle"]
  return (
    <View style={styles.container}>
      {tabItems.map((item,index)=>(
          <TouchableOpacity key={index}>
            <Ionicons name={item} size={30} color="white" />
          </TouchableOpacity>
      ))}
    </View>
  );
};
export default Tab;