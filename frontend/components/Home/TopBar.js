import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from '../../assets/twitter-logo.png'
import hero from '../../assets/hero.jpg'
import sparkle from '../../assets/sparkle.png'

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.profileImage} source={hero} />
            <Image style={styles.logo} source={logo} />
            <Image style={styles.sparkles} source={sparkle} />
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        height: 30,
        width: 30,
        // marginLeft: 10
    },
    sparkles: {
        height: 30,
        width: 30,
        marginRight: 20
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: '50%',
        marginLeft: 20
    }
})


export default TopBar;
