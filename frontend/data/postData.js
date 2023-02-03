const profilePic = require('../assets/hero.jpg')
const twitterProfile = require('../assets/twitter-logo.png')
const tropy = require('../assets/trophy.png')
// import testvideo from '../assets/testvideo.mp4'
const random = require('getrandomjs')

// console.log(`this is the video ->>>>>    ${testvideo}    <----- &&&&&&&&&`)


export const posts = [

    {
        id: 1,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '5h',
        body: {
            text: 'Twitter the last 24hrs 👀',
            image: '',
            video: ''
        }
    },
    {
        id: 2,
        profilePic: profilePic,
        handle: 'Anthony Bronca',
        verified: false,
        username: 'anthonybronca',
        postTime: '2h',
        body: {
            text: 'building twitter',
            image: '',
            video: '',
        }
    },
    {
        id: 3,
        profilePic: profilePic,
        handle: 'Jade Grabow',
        verified: false,
        username: 'jadelynn',
        postTime: '9h',
        body: {
            text: 'dating the builder',
            image: '',
            video: '',
        }
    },
    {
        id: 4,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '1h',
        body: {
            text: 'We are a football team',
            image: tropy,
            video: ''
        }
    },
    {
        id: 5,
        profilePic: twitterProfile,
        handle: 'Twitter',
        verified: true,
        username: 'Twitter',
        postTime: '10h',
        body: {
            text: 'The Real Twitter. awdnj nawjdn ajwnd jn jn dajnwd jn jn ajwnd ajwnd kjn kjnaw djkna wjdn akjnwd kjn akjndw kajnwd kjn kjanwd kjanwd kjanwd jans jdkna kjndwakjsn dkjanwd ',
            image: '',
            video: '',
        }
    },
    {
        id: 6,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '5h',
        body: {
            text: 'Twitter the last 24hrs 👀',
            image: '',
            video: ''
        }
    },
    {
        id: 7,
        profilePic: profilePic,
        handle: 'Anthony Bronca',
        verified: false,
        username: 'anthonybronca',
        postTime: '2h',
        body: {
            text: 'building twitter',
            image: '',
            video: '',
        }
    },
    {
        id: 8,
        profilePic: profilePic,
        handle: 'Jade Grabow',
        verified: false,
        username: 'jadelynn',
        postTime: '9h',
        body: {
            text: 'dating the builder',
            image: '',
            video: '',
        }
    },
    {
        id: 9,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '1h',
        body: {
            text: 'We are a football team',
            image: tropy,
            video: ''
        }
    },
    {
        profilePic: twitterProfile,
        handle: 'Twitter',
        verified: true,
        username: 'Twitter',
        postTime: '10h',
        body: {
            text: 'The Real Twitter. awdnj nawjdn ajwnd jn jn dajnwd jn jn ajwnd ajwnd kjn kjnaw djkna wjdn akjnwd kjn akjndw kajnwd kjn kjanwd kjanwd kjanwd jans jdkna kjndwakjsn dkjanwd ',
            image: '',
            video: '',
        }
    },
    {
        id: 10,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '5h',
        body: {
            text: 'Twitter the last 24hrs 👀',
            image: '',
            video: ''
        }
    },
    {
        id: 11,
        profilePic: profilePic,
        handle: 'Anthony Bronca',
        verified: false,
        username: 'anthonybronca',
        postTime: '2h',
        body: {
            text: 'building twitter',
            image: '',
            video: '',
        }
    },
    {
        id: 12,
        profilePic: profilePic,
        handle: 'Jade Grabow',
        verified: false,
        username: 'jadelynn',
        postTime: '9h',
        body: {
            text: 'dating the builder',
            image: '',
            video: '',
        }
    },
    {
        id: 13,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '1h',
        body: {
            text: 'We are a football team',
            image: tropy,
            video: ''
        }
    },
    {
        id: 14,
        profilePic: twitterProfile,
        handle: 'Twitter',
        verified: true,
        username: 'Twitter',
        postTime: '10h',
        body: {
            text: 'The Real Twitter. awdnj nawjdn ajwnd jn jn dajnwd jn jn ajwnd ajwnd kjn kjnaw djkna wjdn akjnwd kjn akjndw kajnwd kjn kjanwd kjanwd kjanwd jans jdkna kjndwakjsn dkjanwd ',
            image: '',
            video: '',
        }
    },
    {
        id: 15,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '5h',
        body: {
            text: 'Twitter the last 24hrs 👀',
            image: '',
            video: ''
        }
    },
    {
        id: 16,
        profilePic: profilePic,
        handle: 'Anthony Bronca',
        verified: false,
        username: 'anthonybronca',
        postTime: '2h',
        body: {
            text: 'building twitter',
            image: '',
            video: '',
        }
    },
    {
        id: 17,
        profilePic: profilePic,
        handle: 'Jade Grabow',
        verified: false,
        username: 'jadelynn',
        postTime: '9h',
        body: {
            text: 'dating the builder',
            image: '',
            video: '',
        }
    },
    {
        id: 18,
        profilePic: profilePic,
        handle: 'UCF Knights',
        verified: true,
        username: 'UCFKnights',
        postTime: '1h',
        body: {
            text: 'We are a football team',
            image: tropy,
            video: ''
        }
    },
    {
        id: 19,
        profilePic: twitterProfile,
        handle: 'Twitter',
        verified: true,
        username: 'Twitter',
        postTime: '10h',
        body: {
            text: 'The Real Twitter. awdnj nawjdn ajwnd jn jn dajnwd jn jn ajwnd ajwnd kjn kjnaw djkna wjdn akjnwd kjn akjndw kajnwd kjn kjanwd kjanwd kjanwd jans jdkna kjndwakjsn dkjanwd ',
            image: '',
            video: '',
        }
    },

]

function commentMaker(post) {
    post.commentCount = random()
}


function likeMaker(post) {
    post.likeCount = random()
}

function retweetMaker(post) {
    post.retweetCount = random()
}

function locationAdder(post) {
    if (post.body.image) {
        post.body.location = 'Iowa State Athletics'
        console.log(post, "this is the current post")
    }
}


posts.forEach(post => {
    commentMaker(post);
    likeMaker(post);
    retweetMaker(post);
    locationAdder(post)
})


// console.log(posts)
