export const TMDBkey = '1320623df355b362fd2fcf6f52042ea1'

export const links = [{
    name: 'Movies',
    url: '/movies'
}];

const getMoviesList = async () => {
    let response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=1320623df355b362fd2fcf6f52042ea1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
    let content = await response.text();
    console.log(JSON.parse(content))
}

export const user = {
    firstName: 'Joker ',
    lastName: null,
    avatar: 'https://avatarfiles.alphacoders.com/162/thumb-162304.jpg',
};

export const genreList = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

export const moviesList = [
    {
        "popularity": 300.628,
        "vote_count": 3811,
        "video": false,
        "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        "id": 419704,
        "adult": false,
        "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
        "original_language": "en",
        "original_title": "Ad Astra",
        "genre_ids": [
            18,
            878
        ],
        "title": "Ad Astra",
        "vote_average": 6.1,
        "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        "release_date": "2019-09-17"
    },
    {
        "popularity": 142.749,
        "vote_count": 477,
        "video": false,
        "poster_path": "/tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
        "id": 475430,
        "adult": false,
        "backdrop_path": "/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        "original_language": "en",
        "original_title": "Artemis Fowl",
        "genre_ids": [
            12,
            14,
            878,
            10751
        ],
        "title": "Artemis Fowl",
        "vote_average": 6,
        "overview": "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        "release_date": "2020-06-12"
    },
    {
        "popularity": 132.206,
        "vote_count": 5046,
        "video": false,
        "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
        "id": 181812,
        "adult": false,
        "backdrop_path": "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
        "original_language": "en",
        "original_title": "Star Wars: The Rise of Skywalker",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Star Wars: The Rise of Skywalker",
        "vote_average": 6.5,
        "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
        "release_date": "2019-12-18"
    },
    {
        "popularity": 130.383,
        "vote_count": 19,
        "video": false,
        "poster_path": "/izGiAbtC2lmGk3bbV5t3OowJhtP.jpg",
        "id": 595148,
        "adult": false,
        "backdrop_path": "/eZ8eK0moqUo6Vwq08OK1POfyUF5.jpg",
        "original_language": "en",
        "original_title": "Irresistible",
        "genre_ids": [
            35,
            18
        ],
        "title": "Irresistible",
        "vote_average": 6.5,
        "overview": "A Democratic political consultant helps a retired Marine colonel run for mayor in a small, conservative Wisconsin town.",
        "release_date": "2020-06-26"
    },
    {
        "popularity": 120.5,
        "vote_count": 8151,
        "video": false,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "id": 496243,
        "adult": false,
        "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
        "original_language": "ko",
        "original_title": "기생충",
        "genre_ids": [
            35,
            18,
            53
        ],
        "title": "Parasite",
        "vote_average": 8.5,
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "release_date": "2019-05-30"
    },
    {
        "popularity": 119.737,
        "vote_count": 4821,
        "video": false,
        "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        "id": 454626,
        "adult": false,
        "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
        "original_language": "en",
        "original_title": "Sonic the Hedgehog",
        "genre_ids": [
            28,
            35,
            878,
            10751
        ],
        "title": "Sonic the Hedgehog",
        "vote_average": 7.5,
        "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
        "release_date": "2020-02-12"
    },
    {
        "popularity": 114.597,
        "vote_count": 114,
        "video": false,
        "poster_path": "/9zrbgYyFvwH8sy5mv9eT25xsAzL.jpg",
        "id": 531454,
        "adult": false,
        "backdrop_path": "/jMO1icztaUUEUApdAQx0cZOt7b8.jpg",
        "original_language": "en",
        "original_title": "Eurovision Song Contest: The Story of Fire Saga",
        "genre_ids": [
            35,
            10402
        ],
        "title": "Eurovision Song Contest: The Story of Fire Saga",
        "vote_average": 6.8,
        "overview": "When aspiring musicians Lars and Sigrit are given the opportunity of a lifetime to represent their country at the world's biggest song competition, they finally have a chance to prove that any dream is a dream worth fighting for.",
        "release_date": "2020-06-26"
    },
    {
        "popularity": 105.431,
        "vote_count": 18687,
        "video": false,
        "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "id": 299536,
        "adult": false,
        "backdrop_path": "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
        "original_language": "en",
        "original_title": "Avengers: Infinity War",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Avengers: Infinity War",
        "vote_average": 8.3,
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "release_date": "2018-04-25"
    },
    {
        "popularity": 101.248,
        "vote_count": 202,
        "video": false,
        "poster_path": "/qnlChF8U4diiykXQYs1miigGy7t.jpg",
        "id": 706503,
        "adult": false,
        "backdrop_path": "/t4mzypFVjY6toyBXAmfrIaWcUXa.jpg",
        "original_language": "fr",
        "original_title": "Balle perdue",
        "genre_ids": [
            28,
            80,
            53
        ],
        "title": "Lost Bullet",
        "vote_average": 6.9,
        "overview": "A small time delinquent, turned police mechanic for a go fast task force, is forced to defend his innocence when his mentor is killed by dirty cops.",
        "release_date": "2020-06-19"
    },
    {
        "popularity": 95.803,
        "vote_count": 1502,
        "video": false,
        "poster_path": "/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
        "id": 522627,
        "adult": false,
        "backdrop_path": "/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg",
        "original_language": "en",
        "original_title": "The Gentlemen",
        "genre_ids": [
            28,
            35,
            80
        ],
        "title": "The Gentlemen",
        "vote_average": 7.7,
        "overview": "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
        "release_date": "2019-12-03"
    },
    {
        "popularity": 91.653,
        "vote_count": 13424,
        "video": false,
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "id": 475557,
        "adult": false,
        "backdrop_path": "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
        "original_language": "en",
        "original_title": "Joker",
        "genre_ids": [
            80,
            18,
            53
        ],
        "title": "Joker",
        "vote_average": 8.2,
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "release_date": "2019-10-02"
    },
    {
        "popularity": 91.604,
        "vote_count": 6265,
        "video": false,
        "poster_path": "/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg",
        "id": 420817,
        "adult": false,
        "backdrop_path": "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
        "original_language": "en",
        "original_title": "Aladdin",
        "genre_ids": [
            12,
            35,
            14,
            10749,
            10751
        ],
        "title": "Aladdin",
        "vote_average": 7.1,
        "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
        "release_date": "2019-05-22"
    },
    {
        "popularity": 91.602,
        "vote_count": 2255,
        "video": false,
        "poster_path": "/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg",
        "id": 570670,
        "adult": false,
        "backdrop_path": "/uZMZyvarQuXLRqf3xdpdMqzdtjb.jpg",
        "original_language": "en",
        "original_title": "The Invisible Man",
        "genre_ids": [
            27,
            878,
            53
        ],
        "title": "The Invisible Man",
        "vote_average": 7.2,
        "overview": "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
        "release_date": "2020-02-26"
    },
    {
        "popularity": 87.529,
        "vote_count": 5528,
        "video": false,
        "poster_path": "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        "id": 530915,
        "adult": false,
        "backdrop_path": "/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
        "original_language": "en",
        "original_title": "1917",
        "genre_ids": [
            28,
            18,
            36,
            10752
        ],
        "title": "1917",
        "vote_average": 7.9,
        "overview": "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
        "release_date": "2019-12-25"
    },
    {
        "popularity": 86.897,
        "vote_count": 4712,
        "video": false,
        "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
        "id": 495764,
        "adult": false,
        "backdrop_path": "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
        "original_language": "en",
        "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
        "genre_ids": [
            28,
            35,
            80
        ],
        "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
        "vote_average": 7.2,
        "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
        "release_date": "2020-02-05"
    },
    {
        "popularity": 85.344,
        "vote_count": 13865,
        "video": false,
        "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "id": 11,
        "adult": false,
        "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
        "original_language": "en",
        "original_title": "Star Wars",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Star Wars",
        "vote_average": 8.2,
        "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        "release_date": "1977-05-25"
    },
    {
        "popularity": 81.112,
        "vote_count": 126,
        "video": false,
        "poster_path": "/hL2uecLh2rTTbuVbOriXP0PhqIJ.jpg",
        "id": 509585,
        "adult": false,
        "backdrop_path": "/akAbe8Lddj4J4vaT68EUVMufXZt.jpg",
        "original_language": "en",
        "original_title": "7500",
        "genre_ids": [
            18,
            53
        ],
        "title": "7500",
        "vote_average": 5.9,
        "overview": "When terrorists try to seize control of a Berlin-Paris flight, a soft-spoken young American co-pilot struggles to save the lives of the passengers and crew while forging a surprising connection with one of the hijackers.",
        "release_date": "2019-12-26"
    },
    {
        "popularity": 80.863,
        "vote_count": 22,
        "video": false,
        "poster_path": "/u12KThfDZpBGQ98Qg7ahWvMV9gq.jpg",
        "id": 554993,
        "adult": false,
        "backdrop_path": "/oCFbh4Mrd0fuGanCgIF6sG27WGD.jpg",
        "original_language": "sv",
        "original_title": "Britt-Marie var här",
        "genre_ids": [
            35,
            18
        ],
        "title": "Britt-Marie Was Here",
        "vote_average": 5,
        "overview": "Britt-Marie, a woman in her sixties, decides to leave her husband and start anew. Having been housewife for most of her life and and living in small backwater town of Borg, there isn't many jobs available and soon she finds herself fending a youth football team.",
        "release_date": "2019-01-25"
    },
    {
        "popularity": 79.992,
        "vote_count": 2487,
        "video": false,
        "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
        "id": 290859,
        "adult": false,
        "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
        "original_language": "en",
        "original_title": "Terminator: Dark Fate",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Terminator: Dark Fate",
        "vote_average": 6.5,
        "overview": "Decades after Sarah Connor prevented Judgment Day, a lethal new Terminator is sent to eliminate the future leader of the resistance. In a fight to save mankind, battle-hardened Sarah Connor teams up with an unexpected ally and an enhanced super soldier to stop the deadliest Terminator yet.",
        "release_date": "2019-10-23"
    },
    {
        "popularity": 79.403,
        "id": 619592,
        "video": false,
        "vote_count": 23,
        "vote_average": 5.7,
        "title": "Force of Nature",
        "release_date": "2020-07-02",
        "original_language": "en",
        "original_title": "Force of Nature",
        "genre_ids": [
            28,
            18
        ],
        "backdrop_path": "/jAtO4ci8Tr5jDmg33XF3OZ8VPah.jpg",
        "adult": false,
        "overview": "A gang of thieves plan a heist during a hurricane and encounter trouble when a disgraced cop tries to force everyone in the building to evacuate.",
        "poster_path": "/ucktgbaMSaETUDLUBp1ubGD6aNj.jpg"
    },
    {
        "popularity": 77.942,
        "vote_count": 13273,
        "video": false,
        "poster_path": "/6yoghtyTpznpBik8EngEmJskVUO.jpg",
        "id": 807,
        "adult": false,
        "backdrop_path": "/4U4q1zjIwCZTNkp6RKWkWPuC7uI.jpg",
        "original_language": "en",
        "original_title": "Se7en",
        "genre_ids": [
            80,
            9648,
            53
        ],
        "title": "Se7en",
        "vote_average": 8.3,
        "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
        "release_date": "1995-09-22"
    },
    {
        "popularity": 77.736,
        "vote_count": 26276,
        "video": false,
        "poster_path": "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        "id": 27205,
        "adult": false,
        "backdrop_path": "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        "original_language": "en",
        "original_title": "Inception",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Inception",
        "vote_average": 8.3,
        "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        "release_date": "2010-07-15"
    },
    {
        "popularity": 77.04,
        "vote_count": 22842,
        "video": false,
        "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "id": 157336,
        "adult": false,
        "backdrop_path": "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        "original_language": "en",
        "original_title": "Interstellar",
        "genre_ids": [
            12,
            18,
            878
        ],
        "title": "Interstellar",
        "vote_average": 8.3,
        "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        "release_date": "2014-11-05"
    },
    {
        "popularity": 75.444,
        "vote_count": 2720,
        "video": false,
        "poster_path": "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
        "id": 338762,
        "adult": false,
        "backdrop_path": "/lP5eKh8WOcPysfELrUpGhHJGZEH.jpg",
        "original_language": "en",
        "original_title": "Bloodshot",
        "genre_ids": [
            28,
            878
        ],
        "title": "Bloodshot",
        "vote_average": 7,
        "overview": "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
        "release_date": "2020-03-05"
    },
    {
        "popularity": 74.725,
        "vote_count": 306,
        "video": false,
        "poster_path": "/Af2jt7m9GLFpR4V11xOsFmT8OKD.jpg",
        "id": 707886,
        "adult": false,
        "backdrop_path": "/fZBQOScjDT8TAipEyCkLVeDTu5c.jpg",
        "original_language": "en",
        "original_title": "Feel the Beat",
        "genre_ids": [
            35,
            18,
            10402
        ],
        "title": "Feel the Beat",
        "vote_average": 8.1,
        "overview": "After failing to make it on Broadway, April returns to her hometown and reluctantly begins training a misfit group of young dancers for a competition.",
        "release_date": "2020-06-19"
    },
    {
        "popularity": 73.706,
        "vote_count": 4465,
        "video": false,
        "poster_path": "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
        "id": 38700,
        "adult": false,
        "backdrop_path": "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
        "original_language": "en",
        "original_title": "Bad Boys for Life",
        "genre_ids": [
            28,
            80,
            53
        ],
        "title": "Bad Boys for Life",
        "vote_average": 7.2,
        "overview": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
        "release_date": "2020-01-15"
    },
    {
        "popularity": 71.373,
        "vote_count": 5108,
        "video": false,
        "poster_path": "/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
        "id": 330457,
        "adult": false,
        "backdrop_path": "/pNbmSYUtMd542OATplZIdtSWKyz.jpg",
        "original_language": "en",
        "original_title": "Frozen II",
        "genre_ids": [
            12,
            16,
            10751
        ],
        "title": "Frozen II",
        "vote_average": 7.3,
        "overview": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
        "release_date": "2019-11-20"
    },
    {
        "popularity": 70.896,
        "vote_count": 7690,
        "video": false,
        "poster_path": "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
        "id": 429617,
        "adult": false,
        "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        "original_language": "en",
        "original_title": "Spider-Man: Far from Home",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Spider-Man: Far from Home",
        "vote_average": 7.5,
        "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
        "release_date": "2019-06-28"
    },
    {
        "popularity": 70.595,
        "vote_count": 852,
        "video": false,
        "poster_path": "/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
        "id": 446893,
        "adult": false,
        "backdrop_path": "/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
        "original_language": "en",
        "original_title": "Trolls World Tour",
        "genre_ids": [
            12,
            16,
            35,
            14,
            10402,
            10751
        ],
        "title": "Trolls World Tour",
        "vote_average": 7.6,
        "overview": "Queen Poppy and Branch make a surprising discovery — there are other Troll worlds beyond their own, and their distinct differences create big clashes between these various tribes. When a mysterious threat puts all of the Trolls across the land in danger, Poppy, Branch, and their band of friends must embark on an epic quest to create harmony among the feuding Trolls to unite them against certain doom.",
        "release_date": "2020-03-12"
    },
    {
        "popularity": 70.048,
        "vote_count": 4666,
        "video": false,
        "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        "id": 546554,
        "adult": false,
        "backdrop_path": "/AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg",
        "original_language": "en",
        "original_title": "Knives Out",
        "genre_ids": [
            35,
            80,
            18,
            9648,
            53
        ],
        "title": "Knives Out",
        "vote_average": 7.8,
        "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
        "release_date": "2019-11-27"
    },
    {
        "popularity": 69.894,
        "vote_count": 17296,
        "video": false,
        "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        "id": 671,
        "adult": false,
        "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
        "original_language": "en",
        "original_title": "Harry Potter and the Philosopher's Stone",
        "genre_ids": [
            12,
            14,
            10751
        ],
        "title": "Harry Potter and the Philosopher's Stone",
        "vote_average": 7.9,
        "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
        "release_date": "2001-11-16"
    },
    {
        "popularity": 68.076,
        "vote_count": 2350,
        "video": false,
        "poster_path": "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
        "id": 508439,
        "adult": false,
        "backdrop_path": "/dW6yBuKwiMeronJZw8kozYLMorB.jpg",
        "original_language": "en",
        "original_title": "Onward",
        "genre_ids": [
            12,
            16,
            35,
            14,
            10751
        ],
        "title": "Onward",
        "vote_average": 7.9,
        "overview": "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
        "release_date": "2020-02-29"
    },
    {
        "popularity": 66.879,
        "vote_count": 6208,
        "video": false,
        "poster_path": "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
        "id": 420818,
        "adult": false,
        "backdrop_path": "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",
        "original_language": "en",
        "original_title": "The Lion King",
        "genre_ids": [
            12,
            10751
        ],
        "title": "The Lion King",
        "vote_average": 7.2,
        "overview": "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
        "release_date": "2019-07-12"
    },
    {
        "popularity": 65.617,
        "vote_count": 80,
        "video": false,
        "poster_path": "/fOvqEunubL3wPskvtk2Ficfl0pH.jpg",
        "id": 451184,
        "adult": false,
        "backdrop_path": "/72r4uAQGsa8KEv0DB2TpSu31lEB.jpg",
        "original_language": "en",
        "original_title": "Wasp Network",
        "genre_ids": [
            18,
            36,
            53
        ],
        "title": "Wasp Network",
        "vote_average": 6.4,
        "overview": "Havana, Cuba, 1990. René González, an airplane pilot, unexpectedly flees the country, leaving behind his wife Olga and his daughter Irma, and begins a new life in Miami, where he becomes a member of an anti-Castro organization.",
        "release_date": "2020-01-29"
    },
    {
        "popularity": 65.294,
        "vote_count": 11839,
        "video": false,
        "poster_path": "/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
        "id": 269149,
        "adult": false,
        "backdrop_path": "/p2fRZzxla6NoRbIH2KOZq0gHb5S.jpg",
        "original_language": "en",
        "original_title": "Zootopia",
        "genre_ids": [
            12,
            16,
            35,
            10751
        ],
        "title": "Zootopia",
        "vote_average": 7.7,
        "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
        "release_date": "2016-02-11"
    },
    {
        "popularity": 65.227,
        "vote_count": 1642,
        "video": false,
        "poster_path": "/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
        "id": 540901,
        "adult": false,
        "backdrop_path": "/5GynP6w2OQWSbKnCLHrBIriF4Cw.jpg",
        "original_language": "en",
        "original_title": "Hustlers",
        "genre_ids": [
            35,
            80,
            18
        ],
        "title": "Hustlers",
        "vote_average": 6.4,
        "overview": "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
        "release_date": "2019-09-12"
    },
    {
        "popularity": 63.349,
        "vote_count": 13843,
        "video": false,
        "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "id": 299534,
        "adult": false,
        "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        "original_language": "en",
        "original_title": "Avengers: Endgame",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Avengers: Endgame",
        "vote_average": 8.3,
        "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        "release_date": "2019-04-24"
    },
    {
        "popularity": 62.614,
        "vote_count": 10684,
        "video": false,
        "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        "id": 181808,
        "adult": false,
        "backdrop_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
        "original_language": "en",
        "original_title": "Star Wars: The Last Jedi",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Star Wars: The Last Jedi",
        "vote_average": 7,
        "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        "release_date": "2017-12-13"
    },
    {
        "popularity": 62.103,
        "vote_count": 14448,
        "video": false,
        "poster_path": "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
        "id": 672,
        "adult": false,
        "backdrop_path": "/bvRnPaai6JL7XHF4K6414DdSHro.jpg",
        "original_language": "en",
        "original_title": "Harry Potter and the Chamber of Secrets",
        "genre_ids": [
            12,
            14
        ],
        "title": "Harry Potter and the Chamber of Secrets",
        "vote_average": 7.7,
        "overview": "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
        "release_date": "2002-11-13"
    },
    {
        "popularity": 61.453,
        "vote_count": 22615,
        "video": false,
        "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "id": 155,
        "adult": false,
        "backdrop_path": "/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
        "original_language": "en",
        "original_title": "The Dark Knight",
        "genre_ids": [
            28,
            80,
            18,
            53
        ],
        "title": "The Dark Knight",
        "vote_average": 8.4,
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        "release_date": "2008-07-16"
    },{
        "popularity": 60.801,
        "vote_count": 3801,
        "video": false,
        "poster_path": "/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
        "id": 384018,
        "adult": false,
        "backdrop_path": "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
        "original_language": "en",
        "original_title": "Fast & Furious Presents: Hobbs & Shaw",
        "genre_ids": [
            28,
            12,
            35
        ],
        "title": "Fast & Furious Presents: Hobbs & Shaw",
        "vote_average": 6.9,
        "overview": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",
        "release_date": "2019-08-01"
    },
    {
        "popularity": 60.476,
        "vote_count": 1833,
        "video": false,
        "poster_path": "/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
        "id": 501170,
        "adult": false,
        "backdrop_path": "/sZAXOoOMyCbBskmqR0f4LShxXtw.jpg",
        "original_language": "en",
        "original_title": "Doctor Sleep",
        "genre_ids": [
            18,
            14,
            27,
            53
        ],
        "title": "Doctor Sleep",
        "vote_average": 7.1,
        "overview": "Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the 'shine'. Instinctively recognising that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers.",
        "release_date": "2019-10-30"
    },
    {
        "popularity": 60.437,
        "vote_count": 2535,
        "video": false,
        "poster_path": "/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
        "id": 545609,
        "adult": false,
        "backdrop_path": "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
        "original_language": "en",
        "original_title": "Extraction",
        "genre_ids": [
            28,
            18,
            53
        ],
        "title": "Extraction",
        "vote_average": 7.5,
        "overview": "Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…",
        "release_date": "2020-04-24"
    },
    {
        "popularity": 59.655,
        "vote_count": 2847,
        "video": false,
        "poster_path": "/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
        "id": 527641,
        "adult": false,
        "backdrop_path": "/27ZkYMWynuK2qiDP6awc3MsCaOs.jpg",
        "original_language": "en",
        "original_title": "Five Feet Apart",
        "genre_ids": [
            18,
            10749
        ],
        "title": "Five Feet Apart",
        "vote_average": 8.2,
        "overview": "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control — all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.",
        "release_date": "2019-03-15"
    },
    {
        "popularity": 59.235,
        "vote_count": 1767,
        "video": false,
        "poster_path": "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",
        "id": 423204,
        "adult": false,
        "backdrop_path": "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",
        "original_language": "en",
        "original_title": "Angel Has Fallen",
        "genre_ids": [
            28,
            53
        ],
        "title": "Angel Has Fallen",
        "vote_average": 6.3,
        "overview": "After a treacherous attack, Secret Service agent Mike Banning is charged with attempting to assassinate President Trumbull. Chased by his own colleagues and the FBI, Banning begins a race against the clock to clear his name.",
        "release_date": "2019-08-21"
    },
    {
        "popularity": 59.219,
        "vote_count": 2528,
        "video": false,
        "poster_path": "/fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
        "id": 411088,
        "adult": false,
        "backdrop_path": "/2Ci7ffA51O2Kub3aW4nztZIERlg.jpg",
        "original_language": "es",
        "original_title": "Contratiempo",
        "genre_ids": [
            80,
            9648,
            53
        ],
        "title": "The Invisible Guest",
        "vote_average": 8.2,
        "overview": "A young businessman wakes up in a hotel room, locked from the inside, along with his lover, who was murdered while he was unconscious. He hires a prestigious lawyer, and over the course of one evening, they must work together to build a defense case for him before he is taken to jail.",
        "release_date": "2016-09-22"
    },
    {
        "popularity": 58.546,
        "vote_count": 999,
        "video": false,
        "poster_path": "/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg",
        "id": 514847,
        "adult": false,
        "backdrop_path": "/naXUDz0VGK7aaPlEpsuYW8kNVsr.jpg",
        "original_language": "en",
        "original_title": "The Hunt",
        "genre_ids": [
            28,
            27,
            53
        ],
        "title": "The Hunt",
        "vote_average": 6.6,
        "overview": "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
        "release_date": "2020-03-11"
    },
    {
        "popularity": 58.149,
        "vote_count": 14105,
        "video": false,
        "poster_path": "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        "id": 284053,
        "adult": false,
        "backdrop_path": "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
        "original_language": "en",
        "original_title": "Thor: Ragnarok",
        "genre_ids": [
            28,
            12,
            35,
            14
        ],
        "title": "Thor: Ragnarok",
        "vote_average": 7.6,
        "overview": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
        "release_date": "2017-10-25"
    },
    {
        "popularity": 57.508,
        "vote_count": 11573,
        "video": false,
        "poster_path": "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        "id": 383498,
        "adult": false,
        "backdrop_path": "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
        "original_language": "en",
        "original_title": "Deadpool 2",
        "genre_ids": [
            28,
            12,
            35
        ],
        "title": "Deadpool 2",
        "vote_average": 7.5,
        "overview": "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
        "release_date": "2018-05-10"
    },
    {
        "popularity": 57.381,
        "vote_count": 15048,
        "video": false,
        "poster_path": "/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg",
        "id": 150540,
        "adult": false,
        "backdrop_path": "/okJXzeIpbdx7q8rQjJwBNr8VTEk.jpg",
        "original_language": "en",
        "original_title": "Inside Out",
        "genre_ids": [
            16,
            35,
            18,
            10751
        ],
        "title": "Inside Out",
        "vote_average": 7.9,
        "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Riley's guiding emotions— Joy, Fear, Anger, Disgust and Sadness—live in Headquarters, the control centre inside Riley's mind, where they help advise her through everyday life and tries to keep things positive, but the emotions conflict on how best to navigate a new city, house and school.",
        "release_date": "2015-06-09"
    },
    {
        "popularity": 56.574,
        "vote_count": 9583,
        "video": false,
        "poster_path": "/wHqGb8J6tXBVwjqWooGMtNEjs2A.jpg",
        "id": 101,
        "adult": false,
        "backdrop_path": "/oPcxdm2rNv5xg2sZlzjwKtAiPXl.jpg",
        "original_language": "en",
        "original_title": "Léon: The Professional",
        "genre_ids": [
            28,
            80,
            18
        ],
        "title": "Léon: The Professional",
        "vote_average": 8.3,
        "overview": "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
        "release_date": "1994-09-14"
    },
    {
        "popularity": 56.425,
        "id": 8392,
        "video": false,
        "vote_count": 4608,
        "vote_average": 8.1,
        "title": "My Neighbor Totoro",
        "release_date": "1988-04-16",
        "original_language": "ja",
        "original_title": "となりのトトロ",
        "genre_ids": [
            14,
            16,
            10751
        ],
        "backdrop_path": "/fxYazFVeOCHpHwuqGuiqcCTw162.jpg",
        "adult": false,
        "overview": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        "poster_path": "/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg"
    },
    {
        "popularity": 56.395,
        "vote_count": 5338,
        "video": false,
        "poster_path": "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
        "id": 301528,
        "adult": false,
        "backdrop_path": "/q62bpQ67qaXY0u6b2wFEnQYIbPd.jpg",
        "original_language": "en",
        "original_title": "Toy Story 4",
        "genre_ids": [
            12,
            16,
            35,
            14,
            10751
        ],
        "title": "Toy Story 4",
        "vote_average": 7.6,
        "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
        "release_date": "2019-06-19"
    },
    {
        "popularity": 55.624,
        "vote_count": 8949,
        "video": false,
        "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
        "id": 335983,
        "adult": false,
        "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
        "original_language": "en",
        "original_title": "Venom",
        "genre_ids": [
            28,
            878
        ],
        "title": "Venom",
        "vote_average": 6.7,
        "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
        "release_date": "2018-09-28"
    },
    {
        "popularity": 54.964,
        "id": 512510,
        "video": false,
        "vote_count": 0,
        "vote_average": 0,
        "title": "Oru Kanavu Pola",
        "release_date": "2017-09-01",
        "original_language": "en",
        "original_title": "Oru Kanavu Pola",
        "genre_ids": [],
        "backdrop_path": null,
        "adult": false,
        "overview": "The film is a story of two childhood friends who live their lives to the fullest. The story focuses on the friendship, love lives and careers of both the friends and how one of them sacrifices his life at the cost of his career.",
        "poster_path": "/nBl3s29mGxBH7vdqETJMrYeBqTH.jpg"
    },
    {
        "popularity": 54.468,
        "vote_count": 9996,
        "video": false,
        "poster_path": "/ik8PugpL41s137RAWEGTAWu0dPo.jpg",
        "id": 102651,
        "adult": false,
        "backdrop_path": "/xjotE7aFdZ0D8aGriYjFOtDayct.jpg",
        "original_language": "en",
        "original_title": "Maleficent",
        "genre_ids": [
            28,
            12,
            14,
            10749,
            10751
        ],
        "title": "Maleficent",
        "vote_average": 7.1,
        "overview": "A beautiful, pure-hearted young woman, Maleficent has an idyllic life growing up in a peaceable forest kingdom, until one day when an invading army threatens the harmony of the land.  Maleficent rises to be the land's fiercest protector, but she ultimately suffers a ruthless betrayal – an act that begins to turn her heart into stone. Bent on revenge, Maleficent faces an epic battle with the invading King's successor and, as a result, places a curse upon his newborn infant Aurora. As the child grows, Maleficent realizes that Aurora holds the key to peace in the kingdom – and to Maleficent's true happiness as well.",
        "release_date": "2014-05-28"
    },
    {
        "popularity": 54.371,
        "vote_count": 9576,
        "video": false,
        "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        "id": 299537,
        "adult": false,
        "backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
        "original_language": "en",
        "original_title": "Captain Marvel",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Captain Marvel",
        "vote_average": 7,
        "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        "release_date": "2019-03-06"
    },
    {
        "popularity": 54.12,
        "id": 18,
        "video": false,
        "vote_count": 7384,
        "vote_average": 7.5,
        "title": "The Fifth Element",
        "release_date": "1997-05-02",
        "original_language": "en",
        "original_title": "The Fifth Element",
        "genre_ids": [
            12,
            14,
            28,
            53,
            878
        ],
        "backdrop_path": "/wgvc3PmjQGtYYDWaeuV867mnFDs.jpg",
        "adult": false,
        "overview": "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
        "poster_path": "/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg"
    },
    {
        "popularity": 53.769,
        "vote_count": 196,
        "video": false,
        "poster_path": "/8Ga1CI4ZIIF8fxyfjZ5sNlb75e4.jpg",
        "id": 667520,
        "adult": false,
        "backdrop_path": "/eHTZoXmB4vnDqANZXPZcdAiYQo5.jpg",
        "original_language": "ja",
        "original_title": "泣きたい私は猫をかぶる",
        "genre_ids": [
            16,
            18,
            14,
            10749
        ],
        "title": "A Whisker Away",
        "vote_average": 8.1,
        "overview": "Miyo \"Muge\" Sasaki is a peculiar second-year junior high student who has fallen in love with her classmate Kento Hinode. Muge resolutely pursues Kento every day, but he takes no notice of her. Nevertheless, while carrying a secret she can tell no one, Muge continues to pursue Kento. Muge discovers a magic mask that allows her to transform into a cat named Tarō. The magic lets Muge get close to Kento, but eventually it may also make her unable to transform back to a human.",
        "release_date": "2020-06-18"
    },
    {
        "popularity": 53.746,
        "vote_count": 12841,
        "video": false,
        "poster_path": "/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
        "id": 585,
        "adult": false,
        "backdrop_path": "/sDTnMOJ3H5wI38OxObmCtK7wfd5.jpg",
        "original_language": "en",
        "original_title": "Monsters, Inc.",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "title": "Monsters, Inc.",
        "vote_average": 7.8,
        "overview": "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
        "release_date": "2001-11-01"
    },{
        "popularity": 53.588,
        "vote_count": 16368,
        "video": false,
        "poster_path": "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
        "id": 271110,
        "adult": false,
        "backdrop_path": "/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
        "original_language": "en",
        "original_title": "Captain America: Civil War",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Captain America: Civil War",
        "vote_average": 7.4,
        "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
        "release_date": "2016-04-27"
    },
    {
        "popularity": 53.513,
        "vote_count": 18581,
        "video": false,
        "poster_path": "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        "id": 1726,
        "adult": false,
        "backdrop_path": "/vbY95t58MDArtyUXUIb8Fx1dCry.jpg",
        "original_language": "en",
        "original_title": "Iron Man",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Iron Man",
        "vote_average": 7.6,
        "overview": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        "release_date": "2008-04-30"
    },
    {
        "popularity": 53.166,
        "vote_count": 9660,
        "video": false,
        "poster_path": "/fg57nIBn2xQw8JZKIX6AzMa3pEp.jpg",
        "id": 62177,
        "adult": false,
        "backdrop_path": "/qx9ts2hBYJrkIQxhryitxnLlm2u.jpg",
        "original_language": "en",
        "original_title": "Brave",
        "genre_ids": [
            28,
            12,
            16,
            35,
            14,
            10751
        ],
        "title": "Brave",
        "vote_average": 7,
        "overview": "Brave is set in the mystical Scottish Highlands, where Mérida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, Mérida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, Mérida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into Mérida’s quest — and serving as comic relief — are the kingdom’s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.",
        "release_date": "2012-06-21"
    },
    {
        "popularity": 52.947,
        "vote_count": 9210,
        "video": false,
        "poster_path": "/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
        "id": 141052,
        "adult": false,
        "backdrop_path": "/pyxkLUfC5TG1pPoB4bwjCz8Z5iG.jpg",
        "original_language": "en",
        "original_title": "Justice League",
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "title": "Justice League",
        "vote_average": 6.2,
        "overview": "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
        "release_date": "2017-11-15"
    },
    {
        "popularity": 52.874,
        "vote_count": 9959,
        "video": false,
        "poster_path": "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
        "id": 122917,
        "adult": false,
        "backdrop_path": "/bVmSXNgH1gpHYTDyF9Q826YwJT5.jpg",
        "original_language": "en",
        "original_title": "The Hobbit: The Battle of the Five Armies",
        "genre_ids": [
            28,
            12,
            14
        ],
        "title": "The Hobbit: The Battle of the Five Armies",
        "vote_average": 7.3,
        "overview": "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
        "release_date": "2014-12-10"
    },
    {
        "popularity": 52.741,
        "vote_count": 4065,
        "video": false,
        "poster_path": "/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
        "id": 512200,
        "adult": false,
        "backdrop_path": "/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
        "original_language": "en",
        "original_title": "Jumanji: The Next Level",
        "genre_ids": [
            12,
            35,
            14
        ],
        "title": "Jumanji: The Next Level",
        "vote_average": 6.9,
        "overview": "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
        "release_date": "2019-12-04"
    },
    {
        "popularity": 52.548,
        "vote_count": 11805,
        "video": false,
        "poster_path": "/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
        "id": 177572,
        "adult": false,
        "backdrop_path": "/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg",
        "original_language": "en",
        "original_title": "Big Hero 6",
        "genre_ids": [
            28,
            12,
            16,
            35,
            10751
        ],
        "title": "Big Hero 6",
        "vote_average": 7.8,
        "overview": "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
        "release_date": "2014-10-24"
    },
    {
        "popularity": 52.262,
        "vote_count": 2325,
        "video": false,
        "poster_path": "/yp8vEZflGynlEylxEesbYasc06i.jpg",
        "id": 12429,
        "adult": false,
        "backdrop_path": "/1QmEcK0w2Ub4Hm094fHbZT8vA7o.jpg",
        "original_language": "ja",
        "original_title": "崖の上のポニョ",
        "genre_ids": [
            16,
            10751
        ],
        "title": "Ponyo",
        "vote_average": 7.7,
        "overview": "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
        "release_date": "2008-07-19"
    },
    {
        "popularity": 51.972,
        "vote_count": 11984,
        "video": false,
        "poster_path": "/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
        "id": 109445,
        "adult": false,
        "backdrop_path": "/vfkUC9sV1LoReuz1QuTIKTj8XpK.jpg",
        "original_language": "en",
        "original_title": "Frozen",
        "genre_ids": [
            12,
            16,
            10751
        ],
        "title": "Frozen",
        "vote_average": 7.3,
        "overview": "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
        "release_date": "2013-11-27"
    },
    {
        "popularity": 51.809,
        "vote_count": 5213,
        "video": false,
        "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
        "id": 458156,
        "adult": false,
        "backdrop_path": "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
        "original_language": "en",
        "original_title": "John Wick: Chapter 3 - Parabellum",
        "genre_ids": [
            28,
            80,
            53
        ],
        "title": "John Wick: Chapter 3 - Parabellum",
        "vote_average": 7.3,
        "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
        "release_date": "2019-05-15"
    },
    {
        "popularity": 51.533,
        "id": 607,
        "video": false,
        "vote_count": 9622,
        "vote_average": 7.1,
        "title": "Men in Black",
        "release_date": "1997-07-02",
        "original_language": "en",
        "original_title": "Men in Black",
        "genre_ids": [
            28,
            12,
            35,
            878
        ],
        "backdrop_path": "/1GJvBE7UWU1WOVi0XREl4JQc7f8.jpg",
        "adult": false,
        "overview": "After a police chase with an otherworldly being, a New York City cop is recruited as an agent in a top-secret organization established to monitor and police alien activity on Earth: the Men in Black. Agent Kay and new recruit Agent Jay find themselves in the middle of a deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies.",
        "poster_path": "/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg"
    },
    {
        "popularity": 51.183,
        "vote_count": 14520,
        "video": false,
        "poster_path": "/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
        "id": 272,
        "adult": false,
        "backdrop_path": "/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
        "original_language": "en",
        "original_title": "Batman Begins",
        "genre_ids": [
            28,
            80,
            18
        ],
        "title": "Batman Begins",
        "vote_average": 7.7,
        "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
        "release_date": "2005-06-10"
    },
    {
        "popularity": 51.168,
        "vote_count": 23064,
        "video": false,
        "poster_path": "/pcZT1Ouq99dY6J2iGXjMxw16x6o.jpg",
        "id": 293660,
        "adult": false,
        "backdrop_path": "/en971MEXui9diirXlogOrPKmsEn.jpg",
        "original_language": "en",
        "original_title": "Deadpool",
        "genre_ids": [
            28,
            12,
            35
        ],
        "title": "Deadpool",
        "vote_average": 7.6,
        "overview": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
        "release_date": "2016-02-09"
    },
    {
        "popularity": 50.996,
        "vote_count": 2953,
        "video": false,
        "poster_path": "/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
        "id": 359724,
        "adult": false,
        "backdrop_path": "/n3UanIvmnBlH531pykuzNs4LbH6.jpg",
        "original_language": "en",
        "original_title": "Ford v Ferrari",
        "genre_ids": [
            28,
            18
        ],
        "title": "Ford v Ferrari",
        "vote_average": 7.9,
        "overview": "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
        "release_date": "2019-11-13"
    },
    {
        "popularity": 50.835,
        "vote_count": 6964,
        "video": false,
        "poster_path": "/enA22EPyzc2WQ1VVyY7zxresQQr.jpg",
        "id": 608,
        "adult": false,
        "backdrop_path": "/4jQHLKqVpvWoW8letxMwiN02ySI.jpg",
        "original_language": "en",
        "original_title": "Men in Black II",
        "genre_ids": [
            28,
            12,
            35,
            878
        ],
        "title": "Men in Black II",
        "vote_average": 6.3,
        "overview": "Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement – protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay – who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy – to reunite with the MIB before the earth submits to ultimate destruction.",
        "release_date": "2002-07-03"
    },
    {
        "popularity": 50.764,
        "vote_count": 14122,
        "video": false,
        "poster_path": "/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
        "id": 259316,
        "adult": false,
        "backdrop_path": "/7GrpqAs0oDcFcwFwyygnUI7BrZA.jpg",
        "original_language": "en",
        "original_title": "Fantastic Beasts and Where to Find Them",
        "genre_ids": [
            12,
            14,
            10751
        ],
        "title": "Fantastic Beasts and Where to Find Them",
        "vote_average": 7.4,
        "overview": "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
        "release_date": "2016-11-16"
    },
    {
        "popularity": 50.707,
        "vote_count": 1782,
        "video": false,
        "poster_path": "/xnjvwfDulnOCy8qtYX0iqydmMhk.jpg",
        "id": 448119,
        "adult": false,
        "backdrop_path": "/xcUf6yIheo78btFqihlRLftdR3M.jpg",
        "original_language": "en",
        "original_title": "Dolittle",
        "genre_ids": [
            12,
            35,
            14,
            10751
        ],
        "title": "Dolittle",
        "vote_average": 6.8,
        "overview": "After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure, regaining his wit and courage as he crosses old adversaries and discovers wondrous creatures.",
        "release_date": "2020-01-01"
    },
    {
        "popularity": 50.701,
        "vote_count": 5203,
        "video": false,
        "poster_path": "/xRWht48C2V8XNfzvPehyClOvDni.jpg",
        "id": 399579,
        "adult": false,
        "backdrop_path": "/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg",
        "original_language": "en",
        "original_title": "Alita: Battle Angel",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Alita: Battle Angel",
        "vote_average": 7,
        "overview": "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
        "release_date": "2019-01-31"
    },
    {
        "popularity": 50.651,
        "vote_count": 1095,
        "video": false,
        "poster_path": "/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
        "id": 385103,
        "adult": false,
        "backdrop_path": "/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",
        "original_language": "en",
        "original_title": "Scoob!",
        "genre_ids": [
            12,
            16,
            35,
            9648,
            10751
        ],
        "title": "Scoob!",
        "vote_average": 8,
        "overview": "In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.",
        "release_date": "2020-05-15"
    },
    {
        "popularity": 50.641,
        "vote_count": 13927,
        "video": false,
        "poster_path": "/da22ZBmrDOXOCDRvr8Gic8ldhv4.jpg",
        "id": 12445,
        "adult": false,
        "backdrop_path": "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
        "original_language": "en",
        "original_title": "Harry Potter and the Deathly Hallows: Part 2",
        "genre_ids": [
            12,
            14
        ],
        "title": "Harry Potter and the Deathly Hallows: Part 2",
        "vote_average": 8.1,
        "overview": "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
        "release_date": "2011-07-07"
    },{
        "popularity": 50.635,
        "vote_count": 3,
        "video": false,
        "poster_path": "/cgC67SOxd9xkjN4Bnvjtuj1vI8T.jpg",
        "id": 663459,
        "adult": false,
        "backdrop_path": "/vLX1fc75h4CJVjAXPth1SlByBTq.jpg",
        "original_language": "en",
        "original_title": "Jungle Beat: The Movie",
        "genre_ids": [
            16
        ],
        "title": "Jungle Beat: The Movie",
        "vote_average": 4.3,
        "overview": "The Jungle Beat animals think it’s the best thing ever when an alien arrives in the jungle bringing with him the power of speech. They also surprisingly think it’s the best thing ever when they find out that he’s been sent to conquer them.",
        "release_date": "2020-06-26"
    },
    {
        "popularity": 50.452,
        "vote_count": 14249,
        "video": false,
        "poster_path": "/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
        "id": 286217,
        "adult": false,
        "backdrop_path": "/3dPhs7hUnQLphDFzdkD407VZDYo.jpg",
        "original_language": "en",
        "original_title": "The Martian",
        "genre_ids": [
            12,
            18,
            878
        ],
        "title": "The Martian",
        "vote_average": 7.7,
        "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
        "release_date": "2015-09-30"
    },
    {
        "popularity": 49.909,
        "vote_count": 16576,
        "video": false,
        "poster_path": "/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg",
        "id": 278,
        "adult": false,
        "backdrop_path": "/avedvodAZUcwqevBfm8p4G2NziQ.jpg",
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "genre_ids": [
            80,
            18
        ],
        "title": "The Shawshank Redemption",
        "vote_average": 8.7,
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "release_date": "1994-09-23"
    },
    {
        "popularity": 49.647,
        "vote_count": 14422,
        "video": false,
        "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        "id": 315635,
        "adult": false,
        "backdrop_path": "/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
        "original_language": "en",
        "original_title": "Spider-Man: Homecoming",
        "genre_ids": [
            28,
            12,
            18,
            878
        ],
        "title": "Spider-Man: Homecoming",
        "vote_average": 7.4,
        "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
        "release_date": "2017-07-05"
    },
    {
        "popularity": 49.576,
        "vote_count": 394,
        "video": false,
        "poster_path": "/n2C6jRK9PtPIs99RQhKtqGlsnsO.jpg",
        "id": 592834,
        "adult": false,
        "backdrop_path": "/bFxGD1TKrJq3Dr5Pjnn739gBhQF.jpg",
        "original_language": "en",
        "original_title": "My Spy",
        "genre_ids": [
            28,
            35,
            10751
        ],
        "title": "My Spy",
        "vote_average": 7.1,
        "overview": "A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.",
        "release_date": "2020-01-09"
    },
    {
        "popularity": 49.496,
        "vote_count": 8412,
        "video": false,
        "poster_path": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        "id": 335984,
        "adult": false,
        "backdrop_path": "/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
        "original_language": "en",
        "original_title": "Blade Runner 2049",
        "genre_ids": [
            18,
            878
        ],
        "title": "Blade Runner 2049",
        "vote_average": 7.4,
        "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        "release_date": "2017-10-04"
    },
    {
        "popularity": 49.486,
        "vote_count": 1321,
        "video": false,
        "poster_path": "/30YacPAcxpNemhhwX0PVUl9pVA3.jpg",
        "id": 431693,
        "adult": false,
        "backdrop_path": "/lwSOhnpwrzjtKi2RD3e5RAcGzvt.jpg",
        "original_language": "en",
        "original_title": "Spies in Disguise",
        "genre_ids": [
            28,
            12,
            16,
            35
        ],
        "title": "Spies in Disguise",
        "vote_average": 7.7,
        "overview": "Super spy Lance Sterling and scientist Walter Beckett are almost exact opposites. Lance is smooth, suave and debonair. Walter is… not. But what Walter lacks in social skills he makes up for in smarts and invention, creating the awesome gadgets Lance uses on his epic missions. But when events take an unexpected turn, Walter and Lance suddenly have to rely on each other in a whole new way.",
        "release_date": "2019-12-04"
    },
    {
        "popularity": 48.892,
        "vote_count": 1337,
        "video": false,
        "poster_path": "/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg",
        "id": 443791,
        "adult": false,
        "backdrop_path": "/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg",
        "original_language": "en",
        "original_title": "Underwater",
        "genre_ids": [
            28,
            27,
            878,
            53
        ],
        "title": "Underwater",
        "vote_average": 6.4,
        "overview": "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",
        "release_date": "2020-01-08"
    },
    {
        "popularity": 48.684,
        "vote_count": 6694,
        "video": false,
        "poster_path": "/yd3wjLLeQHJ3oRDy4wwiNNFVyLW.jpg",
        "id": 854,
        "adult": false,
        "backdrop_path": "/A0rAZajtNqWTGYcLWq1vMpgIRFk.jpg",
        "original_language": "en",
        "original_title": "The Mask",
        "genre_ids": [
            35,
            80,
            14,
            10749
        ],
        "title": "The Mask",
        "vote_average": 6.9,
        "overview": "When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle. Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell, whose goons get blamed for the heist.",
        "release_date": "1994-07-29"
    },
    {
        "popularity": 48.497,
        "vote_count": 17276,
        "video": false,
        "poster_path": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "id": 120,
        "adult": false,
        "backdrop_path": "/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Fellowship of the Ring",
        "genre_ids": [
            28,
            12,
            14
        ],
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "vote_average": 8.3,
        "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        "release_date": "2001-12-18"
    },
    {
        "popularity": 48.375,
        "vote_count": 7725,
        "video": false,
        "poster_path": "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
        "id": 351286,
        "adult": false,
        "backdrop_path": "/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg",
        "original_language": "en",
        "original_title": "Jurassic World: Fallen Kingdom",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Jurassic World: Fallen Kingdom",
        "vote_average": 6.5,
        "overview": "Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
        "release_date": "2018-06-06"
    },
    {
        "popularity": 48.283,
        "vote_count": 10424,
        "video": false,
        "poster_path": "/JC8KQ2BXaAIFEU8zEuakiwUQSr.jpg",
        "id": 857,
        "adult": false,
        "backdrop_path": "/hjQp148VjWF4KjzhsD90OCMr11h.jpg",
        "original_language": "en",
        "original_title": "Saving Private Ryan",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "title": "Saving Private Ryan",
        "vote_average": 8.1,
        "overview": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
        "release_date": "1998-07-24"
    },
    {
        "popularity": 48.26,
        "vote_count": 12256,
        "video": false,
        "poster_path": "/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
        "id": 205596,
        "adult": false,
        "backdrop_path": "/caQp2MhwfrTYGqVr7d9ayn8tqQ7.jpg",
        "original_language": "en",
        "original_title": "The Imitation Game",
        "genre_ids": [
            18,
            36,
            53,
            10752
        ],
        "title": "The Imitation Game",
        "vote_average": 8.1,
        "overview": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
        "release_date": "2014-11-14"
    },
    {
        "popularity": 48.238,
        "vote_count": 3944,
        "video": false,
        "poster_path": "/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
        "id": 4011,
        "adult": false,
        "backdrop_path": "/su7GvFVUV5uWtAPGAVRkpDrA6Wl.jpg",
        "original_language": "en",
        "original_title": "Beetlejuice",
        "genre_ids": [
            35,
            14
        ],
        "title": "Beetlejuice",
        "vote_average": 7.3,
        "overview": "Thanks to an untimely demise via drowning, a young couple end up as poltergeists in their New England farmhouse, where they fail to meet the challenge of scaring away the insufferable new owners, who want to make drastic changes. In desperation, the undead newlyweds turn to an expert frightmeister, but he's got a diabolical agenda of his own.",
        "release_date": "1988-02-29"
    },
    {
        "popularity": 48.067,
        "vote_count": 2496,
        "video": false,
        "poster_path": "/dtRbVsUb5O12WWO54SRpiMtHKC0.jpg",
        "id": 338967,
        "adult": false,
        "backdrop_path": "/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
        "original_language": "en",
        "original_title": "Zombieland: Double Tap",
        "genre_ids": [
            28,
            35,
            27
        ],
        "title": "Zombieland: Double Tap",
        "vote_average": 7,
        "overview": "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
        "release_date": "2019-10-09"
    },
    {
        "popularity": 48.065,
        "vote_count": 6139,
        "video": false,
        "poster_path": "/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
        "id": 87101,
        "adult": false,
        "backdrop_path": "/2ZbnHeSwwwejcOa5DkSienBFLA8.jpg",
        "original_language": "en",
        "original_title": "Terminator Genisys",
        "genre_ids": [
            28,
            12,
            878,
            53
        ],
        "title": "Terminator Genisys",
        "vote_average": 5.9,
        "overview": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
        "release_date": "2015-06-23"
    },
    {
        "popularity": 47.91,
        "vote_count": 3585,
        "video": false,
        "poster_path": "/cCTJPelKGLhALq3r51A9uMonxKj.jpg",
        "id": 320288,
        "adult": false,
        "backdrop_path": "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
        "original_language": "en",
        "original_title": "Dark Phoenix",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "Dark Phoenix",
        "vote_average": 6,
        "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
        "release_date": "2019-06-05"
    },
    {
        "popularity": 47.462,
        "vote_count": 4941,
        "video": false,
        "poster_path": "/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
        "id": 98566,
        "adult": false,
        "backdrop_path": "/3eGlcdyxqEN57TtU8ypx52V4JMs.jpg",
        "original_language": "en",
        "original_title": "Teenage Mutant Ninja Turtles",
        "genre_ids": [
            28,
            12,
            35,
            14,
            878
        ],
        "title": "Teenage Mutant Ninja Turtles",
        "vote_average": 5.9,
        "overview": "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
        "release_date": "2014-08-07"
    },
    {
        "popularity": 47.311,
        "vote_count": 9,
        "video": false,
        "poster_path": "/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
        "id": 579583,
        "adult": false,
        "backdrop_path": "/5rwcd24GGltKiqdPT4G2dmchLr9.jpg",
        "original_language": "en",
        "original_title": "The King of Staten Island",
        "genre_ids": [
            35,
            18
        ],
        "title": "The King of Staten Island",
        "vote_average": 7.1,
        "overview": "Scott has been a case of arrested development ever since his firefighter father died when he was seven. He’s now reached his mid-20s having achieved little, chasing a dream of becoming a tattoo artist that seems far out of reach. As his ambitious younger sister heads off to college, Scott is still living with his exhausted ER nurse mother and spends his days smoking weed, hanging with the guys — Oscar, Igor and Richie — and secretly hooking up with his childhood friend Kelsey. But when his mother starts dating a loudmouth firefighter named Ray, it sets off a chain of events that will force Scott to grapple with his grief and take his first tentative steps toward moving forward in life.",
        "release_date": "2020-07-01"
    },
    {
        "popularity": 47.194,
        "vote_count": 22643,
        "video": false,
        "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        "id": 24428,
        "adult": false,
        "backdrop_path": "/kwUQFeFXOOpgloMgZaadhzkbTI4.jpg",
        "original_language": "en",
        "original_title": "The Avengers",
        "genre_ids": [
            28,
            12,
            878
        ],
        "title": "The Avengers",
        "vote_average": 7.7,
        "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        "release_date": "2012-04-25"
    },{
        "popularity": 47.064,
        "vote_count": 292,
        "video": false,
        "poster_path": "/yake2myhbW7c6dKbmwYDy1i40bm.jpg",
        "id": 474764,
        "adult": false,
        "backdrop_path": "/3h4vi71aicJDl13bODPPEl1bShr.jpg",
        "original_language": "en",
        "original_title": "The Lodge",
        "genre_ids": [
            18,
            27,
            53
        ],
        "title": "The Lodge",
        "vote_average": 6.2,
        "overview": "When a father is forced to abruptly depart for work, he leaves his children, Aidan and Mia, at their holiday home in the care of his new girlfriend, Grace. Isolated and alone, a blizzard traps them inside the lodge as terrifying events summon specters from Grace's dark past.",
        "release_date": "2019-01-25"
    },
    {
        "popularity": 47.039,
        "vote_count": 4029,
        "video": false,
        "poster_path": "/7GsM4mtM0worCtIVeiQt28HieeN.jpg",
        "id": 515001,
        "adult": false,
        "backdrop_path": "/lTyikzfGgRX5ZqIfVeT26APYfRL.jpg",
        "original_language": "en",
        "original_title": "Jojo Rabbit",
        "genre_ids": [
            35,
            18,
            10752
        ],
        "title": "Jojo Rabbit",
        "vote_average": 8.1,
        "overview": "A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.",
        "release_date": "2019-10-18"
    },
    {
        "popularity": 47.009,
        "vote_count": 14616,
        "video": false,
        "poster_path": "/9rd002JS49RwDW944fF1wjU8iTV.jpg",
        "id": 140607,
        "adult": false,
        "backdrop_path": "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
        "original_language": "en",
        "original_title": "Star Wars: The Force Awakens",
        "genre_ids": [
            28,
            12,
            14,
            878
        ],
        "title": "Star Wars: The Force Awakens",
        "vote_average": 7.4,
        "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
        "release_date": "2015-12-15"
    },
    {
        "popularity": 46.955,
        "vote_count": 52,
        "video": false,
        "poster_path": "/2Gi9ZA4kRKKsWguUoTvIyj40dxF.jpg",
        "id": 514593,
        "adult": false,
        "backdrop_path": "/chAGSv4DB9s3fsgULpSZQLN7LgN.jpg",
        "original_language": "en",
        "original_title": "You Should Have Left",
        "genre_ids": [
            27,
            9648
        ],
        "title": "You Should Have Left",
        "vote_average": 5,
        "overview": "In an effort to repair their relationship, a couple books a vacation in the countryside for themselves and their daughter. What starts as a perfect retreat begins to fall apart as one loses their grip on reality, and a sinister force tries to tear them apart.",
        "release_date": "2020-06-19"
    },{
        "popularity": 46.764,
        "id": 9732,
        "video": false,
        "vote_count": 2982,
        "vote_average": 6.9,
        "title": "The Lion King II: Simba's Pride",
        "release_date": "1998-10-24",
        "original_language": "en",
        "original_title": "The Lion King II: Simba's Pride",
        "genre_ids": [
            12,
            16,
            10751
        ],
        "backdrop_path": "/2OwhA7dEXFYw1BW79b3rCTZAhdJ.jpg",
        "adult": false,
        "overview": "The circle of life continues for Simba, now fully grown and in his rightful place as the king of Pride Rock. Simba and Nala have given birth to a daughter, Kiara who's as rebellious as her father was. But Kiara drives her parents to distraction when she catches the eye of Kovu, the son of the evil lioness, Zira. Will Kovu steal Kiara's heart?",
        "poster_path": "/z2tDQZpxKqXJB7DXBI1R62qLJaP.jpg"
    }
]
