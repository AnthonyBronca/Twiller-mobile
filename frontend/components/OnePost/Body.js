import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Body = ({ tweetInfo }) => {
    return (
        <View style={styles.container}>
            {/* {console.log(tweetInfo)}
            <Text style={styles.bodyText}>{tweetInfo.tweet}</Text> */}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    bodyText: {
        color: 'white'
    }
})


export default Body;
