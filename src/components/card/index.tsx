import React from 'react';
import { FlatList, Image, Text, View, ListRenderItem, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CardItem, { CardProps } from '../../models/card.model';
const Card: React.FC<CardProps> = ({ data }) => {
    const renderItem: ListRenderItem<CardItem> = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.imageContent}>
                    <Image source={{ uri: item.resim }} style={styles.image} />
                    <TouchableOpacity style={{position:'absolute', right:2,top:2}}>
                        <Ionicons  name='heart-circle-outline' size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.buttonText} numberOfLines={2}>{item.ad}</Text>
                </View>
                <View style={{flex:1}}>
                <Text style={styles.buttonText}>{item.fiyat}</Text>
                </View>
                <TouchableOpacity style={styles.footer}>
                    <Ionicons  name='add' size={15} color="white" />
                    <Text style={{color:'white'}}>Sepete Ekle</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={({ id }) => id.toString()}
            numColumns={2}
        />
    );
};

export default Card;
