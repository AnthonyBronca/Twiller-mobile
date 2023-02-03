import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import hero from '../../assets/hero.jpg'
import PostBody from './PostBody';
const Post = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.profileImage} source={hero} />

                <PostBody />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flexDirection: 'row',
        top: 15
    },
    profileImage: {
        height: 60,
        width: 60,
        borderRadius: '50%',
        // marginLeft: 20
    }
})

export default Post;
