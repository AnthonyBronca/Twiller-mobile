import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import comment from '../../assets/comment.png'
import retweet from '../../assets/retweet.png'
import heart from '../../assets/heart.png'
import share from '../../assets/share.png'
import filledheart from '../../assets/filledheart.png'
import filledretweet from '../../assets/filledretweet.png'
import { useDispatch, useSelector } from 'react-redux';


const PostFooter = ({ tweet, currentUser }) => {

    // const dispatch = useDispatch();
    // const likes = useSelector((state) => state?.likes);

    const tweets = useSelector(state => state)

    // console.log(tweets, "que es esto?")
    // const [likedState, setLikedState] = useState(likes);
    const [isLoaded, setIsLoaded] = useState(true);

    // useEffect(() => {
    //     // dispatch(changeLike(post))
    //     // .then(()=>{
    //     //     setLikedState(currentUser.likedPost)
    //     // })
    //     // console.log(currentUser
    // })


    const handleLike = async (post) => {
        // console.log(currentUser.likedPost)

        // console.log(post.id)
        try {
            // dispatch(changeLike(post));

        } catch (error) {
            console.log(error)
        }
        // dispatch(changeLike(post))
        //     .then(() => {
        //         setLikedState(likes)
        //     })
        //     .then(() => {
        //         console.log(likes)
        //     })

        if (currentUser.likedPost[`${post.id}`]) {
            delete currentUser.likedPost[`${post.id}`]
        } else {
            currentUser.likedPost = [`${post.id}`]
        }
    }


    if (!isLoaded) {
        return null;
    } else {
        return (
            <View style={styles.outter}>
                {/* {console.log(tweet)} */}
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icons} source={comment} />
                        <Text style={styles.iconInfo}>{tweet.Comments.length}</Text>
                        {console.log(tweet, "???")}
                    </View>
                    <View style={styles.iconContainer}>
                        {/* {console.log(currentUser, "this is current user")} */}
                        {/* {currentUser.retweets[`${post.id}`] ? */}
                        <TouchableOpacity>
                            <Image style={styles.icons} source={filledretweet} />
                        </TouchableOpacity>
                        {/* : <Image style={styles.icons} source={retweet} />} */}
                        <Text style={styles.iconInfo}>{3}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        {/* {currentUser.likes[`${post.id}`] ? */}
                        <TouchableOpacity onPress={() => handleLike(post)}>
                            <Image style={[styles.icons, {}]} source={filledheart} />
                        </TouchableOpacity>
                        {/* : <TouchableOpacity onPress={() => handleLike(post)}> */}
                        {/* <Image style={[styles.icons, {}]} source={heart} /> */}
                        {/* </TouchableOpacity>} */}
                        <Text style={styles.iconInfo}>{10}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icons} source={share} />
                    </View>
                </View>
            </View>
        );
    }
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
