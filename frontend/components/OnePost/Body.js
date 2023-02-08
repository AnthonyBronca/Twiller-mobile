import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Body = ({ tweetInfo }) => {


    const getMonth = (month) => {
        const months = {
            Jan: '01',
            Feb: '02',
            Mar: '03',
            Apr: '04',
            May: '05',
            Jun: '06',
            Jul: '07',
            Aug: '08',
            Sep: '09',
            Oct: '10',
            Nov: '11',
            Dec: '12',
        }
        return months[month]

    }

    const getTime = (time) => {
        const hour = time.slice(0, 2);
        const min = time.slice(3)
        let timeOfDay;
        let realHour;
        if (hour === '00' || hour === '12' || hour === '24') {
            realHour = '12';
            if (hour === '12') {
                timeOfDay = 'PM'
            } else {
                timeOfDay = 'AM'
            }
        } else if (hour === '23' || hour === '11') {
            realHour = '11';
            if (hour === '11') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        } else if (hour === '22' || hour === '10') {
            realHour = '10';
            if (hour === '10') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '21' || hour === '09') {
            realHour = '09';
            if (hour === '09') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '20' || hour === '08') {
            realHour = '08';
            if (hour === '08') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '19' || hour === '07') {
            realHour = '07';
            if (hour === '07') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '18' || hour === '06') {
            realHour = '06';
            if (hour === '06') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '17' || hour === '05') {
            realHour = '05';
            if (hour === '05') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '16' || hour === '04') {
            realHour = '04';
            if (hour === '04') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '15' || hour === '03') {
            realHour = '03';
            if (hour === '03') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '14' || hour === '02') {
            realHour = '02';
            if (hour === '02') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        else if (hour === '13' || hour === '01') {
            realHour = '01';
            if (hour === '01') {
                timeOfDay = 'AM'
            } else {
                timeOfDay = 'PM'
            }
        }
        return `${realHour}:${min} ${timeOfDay}`
    }

    const handleTime = (date) => {
        const newdate = Date(date);
        return getTime(date.slice(11, 16));

    }

    const handleDate = (date) => {
        const newdate = Date(date);
        const dateArray = newdate.split(' ');
        const month = getMonth(dateArray[1]);
        // const time = getTime(date.slice(11, 16));
        const day = dateArray[2];
        const year = dateArray[3];

        return `${month}/${day}/${year}`
    }


    return (
        <View style={styles.container}>
            {console.log(tweetInfo)}
            <Text style={styles.bodyText}>{tweetInfo.tweet}</Text>
            <View style={styles.imageContainer}>
                {tweetInfo.imgUrl ? <Image style={styles.image} source={{ uri: tweetInfo.imgUrl }} /> : null}
            </View>
            <View style={styles.date}>
                <Text style={[styles.dateText, { paddingRight: 5 }]}>{handleTime(tweetInfo.createdAt)}</Text>
                <Text style={[styles.dateText, styles.dot]} >{'\u2B24'}</Text>
                <Text style={[styles.dateText, { paddingLeft: 5 }]}>{handleDate(tweetInfo.createdAt)}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column'
        // backgroundColor: 'red'
    },
    bodyText: {
        color: 'white',
        fontSize: 20,
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 15,
    },
    imageContainer: {
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    date: {
        flexDirection: 'row',
        marginTop: 20,

    },
    dateText: {
        color: 'rgb(155,155,155)'
    },
    dot: {
        fontSize: 2,
        top: 9,
        left: 1
    },
})


export default Body;
