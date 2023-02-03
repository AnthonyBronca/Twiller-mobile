import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const PostBody = ({ postbody }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.caption}>{postbody}</Text>
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
    }
})


export default PostBody;
