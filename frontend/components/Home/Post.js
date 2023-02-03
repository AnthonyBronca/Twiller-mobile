import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import hero from '../../assets/hero.jpg'
import PostHandle from './PostHandle';
import PostBody from './PostBody';
import { posts } from '../../data/postData';



const Post = () => {



    return (
        <ScrollView>
            {posts.map((post, idx) => (
                <View key={idx} style={styles.postContainer}>
                    <View>
                        <Image style={styles.profileImage} source={post.profilePic} />
                    </View>
                    <View style={styles.tweetContent}>
                        <PostHandle post={post} />
                        <PostBody postbody={post.body} />
                    </View>



                </View>
            ))}




            {/* <View style={styles.container}>
                <View>
                    <Image style={styles.profileImage} source={hero} />
                </View>
                <View >
                    <PostHandle />
                </View>
                <PostBody />
            </View> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flexDirection: 'row',
        // top: 15
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        marginLeft: 20
    },
    postContainer: {
        flexDirection: 'row',
        // marginTop: 5,
        top: 15
    },
    tweetContent: {
        flexDirection: 'column'
    }
})

export default Post;
