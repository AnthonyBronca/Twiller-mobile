import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import verified from '../../assets/badge.png'

const PostHandle = ({ tweet }) => {

    // console.log(tweet)
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.handle}>{tweet.User.username}</Text>
                {tweet.User.id === 2 ? <Image source={verified} style={styles.verified} /> : null}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.userName}>{`@${tweet.User.fullname}`}</Text>
                    <Text style={[styles.userName, styles.dot]}>{'\u2B24'}</Text>
                    <Text style={[styles.userName, styles.date]}>{'5h'}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 7,
        flexDirection: 'row',
        // backgroundColor: 'blue'
    },
    handle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
        fontFamily: 'AvenirNext-Regular'
    },
    verified: {
        height: 17,
        width: 17,
        left: 2
    },
    userName: {
        color: 'rgb(155,155,155)',
        paddingLeft: 5,
        fontSize: 15,
        fontFamily: 'AvenirNext-Regular',
        fontWeight: '600'
    },
    dot: {
        fontSize: 2,
        top: 9,
        left: 1
    },
    date: {
        paddingLeft: 7
    },
    dots: {
        color: 'rgb(155,155,155)',
        fontSize: 26
    },
    dotsContainer: {

    }
})




export default PostHandle;
