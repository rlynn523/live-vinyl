# Live Vinyl

![Build Status](https://travis-ci.org/rlynn523/live-vinyl.svg?branch=mvp-staging)

##Link
https://murmuring-scrubland-56766.herokuapp.com/#/?_k=zog66j

##Table of Contents
<li><a href='#purpose'>Purpose</a></li>
<li><a href='#landing-page'>Landing Page</a></li>
<li><a href='#sign-in'>Sign In</a></li>
<li><a href='#sign-up'>Sign Up</a></li>
<li><a href='#artist-search'>Artist Search</a></li>
<li><a href='#saved-user-data'>Saved User Data</a></li>
<li><a href='#tech-used'>Tech Used</a></li>
<li><a href='#what-does-the-future-hold'>What Does The Future Hold?</a></li>

##Purpose
The purpose of this app is to allow a user to search any artist that they love, and then show all the current tour dates, albums on spotify, vinyl releases, and related artists. Users can create a log in and save vinyl and tour dates to their profile

##Use

###Landing Page
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/landing.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-landing.png?raw=true' height=400'>
<br>
<br>
This is the Landing Page for the app. The user has the option of either signing into an existing account, creating a new account, or searching without an acccont. If a user searches without an account, they will be unable to save any data. The Navigation Bar has links back to the Landing Page, the Artist Search Page, the User's Profile, and a log out button. 
###Sign In
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/signin.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-signin.png?raw=true' height=400'>
<br>
<br>
This is the Sign In Page for the app. Here, the user signs in with pre-existing credentials to log into their account.  Basic authentication is created by the Passport Local Strategy. 

###Sign Up
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/create.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-create.png?raw=true' height=400'>
<br>
<br>
This is the Sign Up Page for the app. Here, the user can create a username and password for a new account. After clicking the "Create" button, the user will be redirected to the Sign In page in order to sign into the newly created account. 

###Artist Search
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/search.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-search.png?raw=true' height=400'>
<br>
<br>
This is the Search Page. Here, the user is able to search for any artist. Once the user searches for an artist, there are 
four divs that appear containing the current tour dates, albums on spotify, vinyl releases, and related artists for the searched artist. 

###Tours and Albums on Spotify
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/tour-albums.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-tours.png?raw=true' height=400'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-albums.png?raw=true' height=400'>
<br>
<br>
Users have the ability to save tour dates to their profile if they are logged in. They may also click on the album artwork of the artist ablums to open and play the album on Spotify. 

###Vinyl and Related Artists on Spotify
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/vinyl-related.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-vinyl.png?raw=true' height=400'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-related.png?raw=true' height=400'>
<br>
<br>
Users have the ability to save vinyl to their profile if they are logged in. The related artists list is fetched from the Spotify API, and includes artists that the user may enjoy based on the current artist search. 

###Saved User Data
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/saved.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-saved-vinyl.png?raw=true' height=400'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-saved-tours.png?raw=true' height=400'>
<br>
<br>
This is the Saved Page. Here, the user can view their saved tour dates or saved vinyl in their collection. The user has the ability to remove these items from their collection.

###User Not Logged In
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/no-saved.png?raw=true' width='750'>
<img src='https://github.com/rlynn523/live-vinyl/blob/master/src/images/mobile-no-saved.png?raw=true' height=400'>
<br>
<br>
This is the Saved Page when the user has not logged in. Here, they are prompted to either sign in or sign up in order to begin saving tour dates and vinyl. 

##Tech Used
<li>HTML5</li>
<li>CSS3</li>
<li>Node.js</li>
<li>ReactJS</li>
<li>React Router</li>
<li>Redux</li>
<li>webpack</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>npm</li>
<li>less</li>
<li>Mocha</li>
<li>Chai</li>
<li>Babel</li>
<li>Material UI</li>
<li>Express</li>
<li>Passport</li>
<li>Travis CI</li>
<li>BandsInTown API</li>
<li>Discogs API</li>
<li>Spotify API</li>

##What Does The Future Hold?
I would like to allow the user to click on a related artist to trigger a new artist search. I would also like to stray away from the alert window that informs the user if they have saved or deleted an item for something more "aesthetically pleasing". 
