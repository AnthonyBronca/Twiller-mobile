import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostBody = ({ postbody }) => {
    return (
        <View>
            <Text style={styles.caption}>{postbody}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    caption: {
        color: 'rgba(255,255,255,1)',
        // left: 96,
        // bottom: 15,
        fontSize: 15,
        fontFamily: 'AvenirNext-Medium',
        fontWeight: '500'
    }
})


export default PostBody;
