import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
// import Video from 'react-native-video';
import trophy from '../../assets/trophy.png'
// import FastImage from 'react-native-fast-image';

const PostBody = ({ tweet }) => {
    // console.log(tweet, "will this work?")
    return (
        <SafeAreaView style={styles.container}>
            {tweet.tweet.length > 0 ? <Text style={styles.caption}>{tweet.tweet}</Text> : null}
            {tweet.imgUrl ? <Image style={styles.images} source={{ uri: tweet.imgUrl }} /> : null}
            {/* {postbody.video ? <Video
                source={''}   // Can be a URL or a local file.
                paused={false}                  // make it start
                repeat={true}                   // make it a loop
                style={styles.backgroundVideo} /> : null} */}
            {tweet.User.fullname === 'Demo User' ? <Text style={styles.locationText}>{" University Of Central Florida"}</Text> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    caption: {
        color: 'rgba(255,255,255,1)',
        // left: 96,
        // bottom: 15,
        fontSize: 15,
        fontFamily: 'AvenirNext-Medium',
        fontWeight: '500',
        paddingBottom: 10
    },
    container: {
        paddingLeft: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: 70,
    },
    images: {
        width: '95%',
        height: 280,
        borderRadius: 10,
        paddingTop: 3
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    locationText: {
        paddingTop: 5,
        color: 'rgb(155,155,155)',
        paddingBottom: 1,
        paddingLeft: 1,
    }
})


export default PostBody;
