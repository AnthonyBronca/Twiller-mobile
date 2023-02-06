import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import filledhome from '../../assets/filledhome.png';
import home from '../../assets/home.png';
import mic from '../../assets/mic.png';
import filledmic from '../../assets/filledmic.png';
import search from '../../assets/search.png';
import filledsearch from '../../assets/filledsearch.png';
import bell from '../../assets/bell.png';
import filledbell from '../../assets/filledbell.png';
import letter from '../../assets/letter.png'
import filledletter from '../../assets/filledletter.png'
import { Divider } from 'react-native-elements';


const BottomTabs = ({ currentScreen }) => {

    const [homeState, setHomeState] = useState(true);
    const [searchState, setSearchState] = useState(false);
    const [micState, setMicState] = useState(false);
    const [bellState, setBellState] = useState(false);
    const [letterState, setLetterState] = useState(false);

    const clearIcons = () => {
        setHomeState(false);
        setSearchState(false);
        setMicState(false);
        setBellState(false);
        setLetterState(false);
    }

    const handleIcons = (e) => {
        e.preventDefault();
        clearIcons();
        if (currentScreen === 'home') {
            setHomeState(true)
        }
        if (currentScreen === 'search') {
            setSearchState(true)
        }
        if (currentScreen === 'mic') {

            setMicState(true)
        }
        if (currentScreen === 'bell') {


            setBellState(true)

        }
        if (currentScreen === 'letter') {

            setLetterState(true)

        }


    }



    return (
        <View style={{}}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={(e) => handleIcons(e)}>
                        {homeState ? <Image style={styles.icon} source={filledhome} /> : <Image style={styles.icon} source={home} />}
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={(e) => handleIcons(e)}>
                        {searchState ? <Image style={styles.icon} source={filledsearch} /> : <Image style={styles.icon} source={search} />}
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={(e) => handleIcons(e)}>
                        {micState ? <Image style={styles.icon} source={filledmic} /> : <Image style={styles.icon} source={mic} />}
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={(e) => handleIcons(e)}>
                        {bellState ? <Image style={styles.icon} source={filledbell} /> : <Image style={styles.icon} source={bell} />}
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={(e) => handleIcons(e)}>
                        {letterState ? <Image style={styles.icon} source={filledletter} /> : <Image style={styles.icon} source={letter} />}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    icon: {
        height: 30,
        width: 30
    }
})


export default BottomTabs;
