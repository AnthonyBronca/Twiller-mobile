import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import verified from '../../assets/badge.png'


const Header = ({ tweetInfo }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileImageContainer}>
                <TouchableOpacity style={styles.profileButton} onPress={() => console.log('profile')}>
                    <Image style={styles.profileImage} source={{ uri: tweetInfo.User.profilePic }} />
                </TouchableOpacity>
            </View>

            <View style={styles.innercontainer}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.handle}>{tweetInfo.User.username}</Text>
                        {tweetInfo.User.id === 2 ? <Image source={verified} style={styles.verified} /> : null}
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.userName}>{`@${tweetInfo.User.fullname}`}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.dotsContainer]}>
                <Text style={styles.dots}>...</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        // backgroundColor: 'purple'
    },
    profileImageContainer: {
        paddingLeft: 10,
        flexDirection: 'row',
        // backgroundColor: 'orange',
        marginRight: 25

    },
    profileButton: {
        // backgroundColor: 'red'
        flex: '1',
        justifyContent: 'center',
        alignContent: 'center'
    },
    container: {
        marginTop: 5,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        justifyContent: 'space-between'
    },
    innercontainer: {
        // paddingLeft: 10,
        flexDirection: 'row',
        // backgroundColor: 'purple',
        width: '70%',
        justifyContent: 'flex-start'
    },
    handle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        fontFamily: 'AvenirNext-Regular'
    },
    verified: {
        height: 20,
        width: 20,
        left: 3,
        top: 3
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
        fontSize: 26,
        // backgroundColor: 'red',
    },
    dotsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 30,
    }
})


export default Header;
