import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import comment from '../../assets/comment.png'
import retweet from '../../assets/retweet.png'
import heart from '../../assets/heart.png'
import share from '../../assets/share.png'


const PostFooter = ({ post }) => {
    return (
        <View style={styles.outter}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icons} source={comment} />
                    <Text style={styles.iconInfo}>{post.commentCount}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icons} source={retweet} />
                    <Text style={styles.iconInfo}>{post.retweetCount}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icons} source={heart} />
                    <Text style={styles.iconInfo}>{post.likeCount}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image style={styles.icons} source={share} />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    icons: {
        height: 17,
        width: 17
    },
    container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-around',

    },
    inner: {
        flexDirection: 'row',
    },
    outter: {
        width: '60%',
        alignSelf: 'center',
        marginBottom: 15
    },
    iconContainer: {
        flexDirection: 'row'
    },
    iconInfo: {
        color: 'rgb(155,155,155)',
        paddingLeft: 5
    }
})



export default PostFooter;
