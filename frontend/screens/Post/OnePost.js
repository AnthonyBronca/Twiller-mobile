import React, { useRef } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Keyboard, TextField } from 'react-native';
import { Divider } from 'react-native-elements';
import goback from '../../assets/goback.png'
import PostFooter from '../../components/Home/PostFooter';
import OnePostHeader from '../../components/Navigation/OnePostHeader';
import Body from '../../components/OnePost/Body';
import Header from '../../components/OnePost/Header';
import { currentUser } from '../../data/user'


const OnePost = (tweet) => {

    const tweetInfo = tweet.route.params
    const inputRef = useRef();

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
                <PostFooter tweet={tweetInfo} currentUser={currentUser} />
            </ScrollView>
            {/* <TextField> */}
            {/* <TextInput
                placeholder='Tweet your reply'
                // ref={inputRef}
                // onLayout={() => inputRef.current.focus()}
                placeholderTextColor={'rgb(155,155,155)'}
                spellCheck={true}
                keyboardType={'twitter'}
                style={{ color: 'white', marginLeft: 50 }}></TextInput> */}
            {/* </TextField> */}
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
