#### SUPERFRIEND FINDER

#### __WHAT DOES THIS APP DO?__

SuperFriend Finder is a full-stack website application that takes in results from a user's survey and then compares those user's survey answers with previous answers from other users. After the user completes the survey, the application will display the name and picture of a previous user with the best overall match.

#### __HOW DO YOU GET STARTED?__

You have two (2) options for using this application:

1. Click on the following link to where the application is hosted on Heroku: ; or

2. Make sure that you have node.js installed on your computer, then:

  - Clone or download the repository for Friend Finder;

  - Open GitBash or Terminal, making sure that you are in the file location of Friend Finder, and run command 'npm install', to complete installation (all necessary apis from npm.js will be downloaded and installed). 

  - Type 'node server.js' on the command line and press enter. The "App is now listening on PORT:3000". 

#### __HOW DOES SUPERFRIEND FINDER WORK?__

* Use GitBash or Terminal to navigate to the file location of the Liri-Node-App. You can then enter on the command line 'node liri.js', plus one of four possible commands - (i) my-tweets; (ii) spotify-this-song; (iii) movie-this; or (iv) do-what-it-says - as follows:

  * node liri.js my-tweets
    - 20 last tweets from Twitter user __MissULucy550__ will be retured

  * node liri.js spotify-this-song < song title >
    - The following information from Spotify will be returned: 
        - Artist name
        - Song title
        - Preview link to song from Spotify
        - Name of the album that the song is from

    __Note that if no song title is provided, information regarding the song "The Sign", by the artist, Ace of Base, will be returned by default.__

  * node liri.js movie-this < movie name >
    - The following information from OMDB will be returned: 
        - Title of the movie
        - Year the movie came out
        - IMDB Rating of the movie
        - Rotten Tomatoes Rating of the movie
        - Country where the movie was produced
        - Language of the movie
        - Plot of the movie
        - Actors in the movie
    
    __Note that if no movie title is provided, informatio regarding the movie "Mr. Nobody" will be returned by default.__

  * node liri.js do-what-it-says
    - LIRI will take the text inside of the random.txt filed included in the root directory and then use it to call one of LIRI's commands.
        - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     __Note that users are free to change the text in the 'random.txt' document to test out the feature for other commands.__

#### __WHO MAINTAINS AND CONTRIBUTES TO THIS VERSION OF FRIEND FINDER?__

This version of Friend Finder was created by me, Jason Heath Meadows, Esq., currently a student at the University of Arizona Coding Boot Camp, in Gilbert, Arizona. I will maintain and contribute to this app, as necessary, as part of my Portfolio.

#### __HOW DO YOU GET STARTED?__
