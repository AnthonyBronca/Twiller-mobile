import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import comment from '../../assets/comment.png'
import retweet from '../../assets/retweet.png'
import heart from '../../assets/heart.png'
import share from '../../assets/share.png'


const PostFooter = () => {
    return (
        <View style={styles.outter}>
            <View style={styles.container}>
                <Image style={styles.icons} source={comment} />
                <Image style={styles.icons} source={retweet} />
                <Image style={styles.icons} source={heart} />
                <Image style={styles.icons} source={share} />
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
    }
})



export default PostFooter;
