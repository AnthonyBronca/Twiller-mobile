import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import goback from '../../assets/goback.png'

const OnePostHeader = ({ tweet }) => {



    const handleGoBack = (e) => {
        e.preventDefault();
        e.stopPropagation();
        tweet.navigation.pop();
    }


    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={(e) => handleGoBack(e)}>
                <Image source={goback} style={styles.goBackIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Thread</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    goBackIcon: {
        height: 30,
        width: 30,
        marginLeft: 10
    },
    headerText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 24,
        marginLeft: '30%'
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgb(12,12,12)',
        marginBottom: 10
    },
})


export default OnePostHeader;
