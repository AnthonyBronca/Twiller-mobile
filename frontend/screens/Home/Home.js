import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import TopBar from '../../components/Home/TopBar';

const Home = () => {
    return (
        <SafeAreaView style={styles.theme} >
            <TopBar />
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
