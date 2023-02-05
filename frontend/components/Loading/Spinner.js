import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, } from 'react-native';

const Spinner = () => {

    // const progress = useRef(new Animated.Value(0)).current;
    // const scale = useRef(new Animated.Value(1)).current;

    // useEffect(() => {
    //     Animated.spring(progress, { toValue: 1, useNativeDriver: true }).start();
    //     Animated.spring(scale, { toValue: 2, useNativeDriver: true }).start();
    // }, []);


    return (
        <View style={styles.container}>
            {/* <Animated.View style={[
                styles.square,
                {
                    borderRadius: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [(0 * SIZE) / 2, (1 * SIZE) / 2]
                    })
                },
                { opacity: progress, transform: [{ scale }] }
            ]} /> */}
        </View>
    );
}


const styles = StyleSheet.create({
    // spinner: {
    //     width: 50,
    //     height: 50,
    //     border: 10,
    //     borderStyle: solid,
    //     borderColor: '#f3f3f3'
    // },
    container: {
        flex: 1,
        backgroundColor: 'rgb(10,10,10)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(0.0.256,0.5)'
    }
})



export default Spinner;

/*
import React from 'react'
import './spinner.css';

export default function LoadingSpinner() {
    return (
        <div className='spinner-container'>
            <div className='loading-spinner'>

            </div>
        </div>
    )
}

@keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
/*border-top: 10px solid #383636; /* Black */
/*border-radius: 50%;
animation: spinner 1.5s linear infinite;
}

*/
