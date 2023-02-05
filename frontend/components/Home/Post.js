import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import hero from '../../assets/hero.jpg'
import PostHandle from './PostHandle';
import PostBody from './PostBody';
import { posts } from '../../data/postData';
import { Divider } from 'react-native-elements';
import PostFooter from './PostFooter';
import { currentUser } from '../../data/user';
import { useDispatch, useSelector } from 'react-redux';
// import { getTweetsThunk } from '../../redux/thunks/tweets';
import { getTweetsThunk } from '../../store/tweets';

import Spinner from '../Loading/Spinner';
const Post = () => {

    const dispatch = useDispatch();

    const tweets = useSelector((state) => Object.values(state.tweets).reverse())
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {


        dispatch(getTweetsThunk())
            .then(() => setIsLoaded(true))
        // .then(() => console.log(tweets))


    }, [isLoaded]);

    if (!isLoaded) {
        return <Spinner />
    } else {

        return (
            <ScrollView>
                <View style={{ flexDirection: 'column' }}>
                    {tweets.map((tweet, idx) => (
                        <View key={idx} style={styles.postContainer}>
                            <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 2 }}>
                                <TouchableOpacity>
                                    <Image style={styles.profileImage} source={{ uri: tweet.User.profilePic }} />
                                </TouchableOpacity>
                                <View style={styles.tweetContent}>
                                    <PostHandle tweet={tweet} />
                                    <View style={styles.bodyContainer}>
                                        <PostBody tweet={tweet} />
                                    </View>
                                </View>
                                <View style={styles.dotsContainer}>
                                    <Text style={styles.dots}>...</Text>
                                </View>
                            </View>
                            <PostFooter tweet={tweet} currentUser={currentUser} />
                            <Divider width={1} orientation='vertical' />
                        </View>
                    )

                    )}
                    {/* {posts.map((post, idx) => (
                        <View key={idx} style={styles.postContainer}>
                            <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 2 }}>
                                <Image style={styles.profileImage} source={post.profilePic} />
                                <View style={styles.tweetContent}>

                                    <PostHandle post={post} />
                                    <View style={styles.bodyContainer}>
                                        <PostBody postbody={post.body} />
                                    </View>
                                </View>

                                <View style={styles.dotsContainer}>
                                    <Text style={styles.dots}>...</Text>
                                </View>
                            </View>
                            <PostFooter post={post} currentUser={currentUser} />
                            <Divider width={1} orientation='vertical' />
                        </View>
                    ))} */}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        marginLeft: 20,
    },
    postContainer: {
        flexDirection: 'column',
        marginTop: 5,
        justifyContent: 'space-between',
        rowGap: 3,
        columnGap: 3,
        top: 15,
        marginBottom: 5,
        // backgroundColor: 'orange'
    },
    tweetContent: {
        flexDirection: 'column',
        // backgroundColor: 'red',
        width: '75%',
        paddingLeft: 12
    },
    dots: {
        color: 'rgb(155,155,155)',
        fontSize: 25,
    },
    dotsContainer: {
        marginRight: 20,
        bottom: 10,

    },
    bodyContainer: {
        // backgroundColor: 'purple',
        width: '100%',
        marginLeft: 15
    }
})

export default Post;
