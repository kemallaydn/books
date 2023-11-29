import { Platform, SafeAreaView, View } from "react-native"
import children from "../../models/children.model"
import React from "react";
import styles from "./style";
const Container:React.FC<children> = ({children}) => {
    return(
        Platform.OS == "android" 
        ? <View style={styles.container}>{children}</View>
        : <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    )
}
export default Container;