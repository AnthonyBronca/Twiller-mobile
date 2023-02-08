import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import goback from '../../assets/goback.png'
import OnePostHeader from '../../components/Navigation/OnePostHeader';
import Body from '../../components/OnePost/Body';
import Header from '../../components/OnePost/Header';

const OnePost = (tweet) => {

    const tweetInfo = tweet.route.params


    const handleGoBack = (e) => {
        e.preventDefault();
        e.stopPropagation();
        tweet.navigation.pop();
    }
    return (
        <SafeAreaView style={[styles.container, { flex: 1 }]} forceInset={{ top: 'always' }} >
            <ScrollView stickyHeaderHiddenOnScroll={true}>
                <OnePostHeader tweet={tweet} />
                <Header tweetInfo={tweetInfo} />
                <Body tweetInfo={tweetInfo} />
            </ScrollView>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(10,10,10)'
    },
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
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        marginLeft: 20,
        marginTop: 30
    },
})

export default OnePost;
