#### FRIEND FINDER

#### __WHAT DOES THIS APP DO?__

Liri-Node-App is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data. This current configuration of Liri-Node-App takes in specific, limited comands and displays, depending on the command,the last 20 tweets of Twitter user __MissULucy550__; information from Spotifiy about any particular song requested by the app user; information from the Open Movie Database API (OMDB) about a particular movie requesed by the app user; or random information from a .txt file, which, by default, provides information from Spotify about the song, "I Want It That Way", by the Backstreet Boys. 

#### __HOW DO YOU GET STARTED?__

1. Make sure that you have node.js installed on your computer.

2. Clone or download the repository for Liri-Node-App.

3. Obtain the following:

    * API keys from Twitter: (i) consumer key; (ii) consumer secret; (iii) access token key; and (iv) access token secret. Go to <https://apps.twitter.com/app/new> to obtain the API keys from Twitter.

    * API keys from Spotify: (i) client id; and (ii) client secret. Go to <https://developer.spotify.com/my-applications/#!/applications/create> to obtain API keys from Twitter. 

    __Note, you must obtain your own API keys, as they are not provided with the Liri-Node-App that you have downloaded.The Liri-Node-App will not work without your own API keys.__
        
4. Create a Environmental Variables file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

            SPOTIFY_ID=your-spotify-id
            SPOTIFY_SECRET=your-spotify-secret

            TWITTER_CONSUMER_KEY=your-twitter-consumer-key
            TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
            TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
            TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

5. Include the above .env file in the root directory of the Liri-Node-App that you have downloaded.

6. Open GitBash or Terminal, making sure that you are in the file location of the Liri-Node-App, and run command 'npm install', to complete installation (all necessary aps from npm.js will be downloaded and installed). 

#### __HOW DOES LIRI-NODE-APP WORK?__

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

#### __WHO MAINTAINS AND CONTRIBUTES TO THIS VERSION OF LIRI-NODE-APP?__

This version of Liri-Node-App was created by me, Jason Heath Meadows, Esq., currently a student at the University of Arizona Coding Boot Camp, in Gilbert, Arizona. I will maintain and contribute to this app, as necessary, as part of my Portfolio.
#### WordGuess-CLI

#### __WHAT DOES THIS APP DO?__

WordGuess-CLI is a command line node game app that is similar to hangman. This current configuration of WordGuess-CLI involves world capitals. The app randomly choses a world capital from a word bank of 30 world capitals and then displays on the command line the redacted world capital, with each letter of the world capital represented by a blank underscore. For example, if the app randomly choses 'Zurich' as a world capital, 'Zurich' will appear as '_ _ _ _ _ _' on the command line. The user must then guess each of the missing letters contained within the randomly chosen world capital. If the player guesses a correct letter, that letter will appear in place of the appropriate underscore on the command line. If the randomly chosen capital is 'Zurich', and the user correctly guesses 'Z',  the letter 'Z' will appear as 'Z _ _ _ _' on the command line. If the player makes 12 incorrect guesses, the player loses the game. 

#### __HOW DO YOU GET STARTED?__

1. Make sure that you have node.js installed on your computer.

2. Clone or download the repository for WordGuess-CLI.

3. Open GitBash or Terminal, making sure that you are in the file location of WordGuess-CLI, and run command 'npm install', to complete installation (all necessary apis from npm.js will be downloaded and installed). 

#### __HOW DOES WordGuess-CLI WORK?__

* Use GitBash or Terminal to navigate to the file location of WordGuess-CLI. You can then enter on the command line 'node index.js'. 

* Directions for playing WordGuess-CLI:

  - The computer will randomly choose a world capital.
  - The user must guess all the letters contained in the name of that world capital, by inputting a letter on the command line, until the entire name had been revealed.
  - If the user can guess all the letters, the user wins.
  - If the user gives 12 incorrect guesses, the user loses.
  - The user is not penalized for multiple guesses using the same letter.
  - It is not necessary for the user to capitalize guesses.

* Regardless of whether the user wins or loses, the user will be asked is the user wants to play again. If the user answers Y, the game resets and a new random word is chosen by the computer. If the user answers N, the user will receive the message "BYE! BYE!".

#### __WHO MAINTAINS AND CONTRIBUTES TO THIS VERSION OF WordGuess-CLI?__

This version of WordGuess-CLI was created by me, Jason Heath Meadows, Esq., currently a student at the University of Arizona Coding Boot Camp, in Gilbert, Arizona. I will maintain and contribute to this app, as necessary, as part of my Portfolio.
