import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import verified from '../../assets/badge.png'

const PostBody = () => {

    const [isVerified, setVerified] = useState(true)


    return (
        <View style={styles.container}>
            <Text style={styles.handle}>UCF Knights</Text>
            {isVerified ? <Image source={verified} style={styles.verified} /> : null}
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.userName}>{`@UCFKnights`}</Text>
                <Text style={[styles.userName, styles.dot]}>{'\u2B24'}</Text>
                <Text style={[styles.userName, styles.date]}>5h</Text>
            </View>
            <View style={styles.dotsContainer}>
                <Text style={styles.dots}>...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        flexDirection: 'row'
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
        left: 50,
        bottom: 15
    }
})




export default PostBody;
