import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Post from '../../components/Home/Post';
import TopBar from '../../components/Home/TopBar';
import BottomTabs from '../../components/Navigation/BottomTabs';

const Home = () => {
    return (

        <SafeAreaView style={styles.theme} >
            <TopBar />
            <Post />
            <BottomTabs currentScreen={'home'} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    theme: {
        backgroundColor: 'rgb(10,10,10)',
        flex: 1
    }
})

export default Home;
