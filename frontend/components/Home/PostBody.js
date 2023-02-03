import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const PostBody = ({ postbody }) => {
    return (
        <SafeAreaView style={styles.container}>
            {postbody.text.length > 0 ? <Text style={styles.caption}>{postbody.text}</Text> : null}
            {postbody.image ? <Image style={styles.images} source={postbody.image} /> : null}
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
        borderRadius: 10
    }
})


export default PostBody;
