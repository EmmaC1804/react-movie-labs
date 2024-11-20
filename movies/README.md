## Assignment 1 - ReactJS app.

Name: Emma Clarke

## Overview.

This repository contains my web-app2 assignment 1 which is a continuation of my movie app labs. It shows the history of the new features and pages that I have added throughout this assignment along with any deletions that I made. Within this assignment I added a total of 3 new pages along with a variety of features and links between said pages.

### Features.
 
+ Changed colour of background, site header and filter list
+ Added functionality to watchlist - movies now add to page, icon turns green and they stay when going to a different page
+ Movies can be deleted from watchlist
+ Added Top rated movies page
+ Added now playing movies page
+ Added actor details page - displays actor images, biography, information and credited movies
+ Added similar movies to the end of movie details page
+ Added in movie budget to movie details page
+ Added cast the end of movie details page
+ Button on cast card to go to actors details page - Links Actors and Movies Continuously
+ Added user rating function to movie details - not persistant
+ Created site header for actor page - use of back button and home button takes you to external actor page
+ Attempted to add pagination - commented out
+ Added slider to filter list for movie duration - function doesn't work commented out


## Setup requirements.

No non-standard setup steps necessary.

## API endpoints.

+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Upcoming list of movies - movie/upcoming
+ Trending list of movies - trending/movie
+ Top rated list of movies - movie/top_rated
+ List of New movies (Movies in Cinema ect.) - movie/now_playing
+ Movie Reviews - movie/:id/reviews
+ Movie posters = movie/:id/images
+ List of Similar movies - movie/:id/similar
+ Actor details - person/:id
+ List of the a movies cast - movie/:id/credits
+ Actor Images - person/:id/images
+ List of movies an actor is credited in - person/:id/movie_credits

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /person - displays all people on the tmdb database
+ /person/:id - displays a particular person (actor) - Used on the actor details page - information like name and image sent to actor card - also used on actor details (birthday, biography ect.)
+ /movie/:id/credits - displays the people credited in a particular film - used in movie details page
+ /person/:id/movie_credits - displays the movies a person is credited for working on - used in actor details page to show credited movies
+ /person/:id/images - displays the pictures of a psrticular person - used in actor details page to display multiple images of them

## Return Statements
+ credit.cast - Within return statement of actor details page - returns the 'cast' array from tmdb when accessing getCreditedMovie from api
+ cast.cast - Within return statement of actor details page - returns the 'cast' array from tmdb when accessing getMovieCast from api
+ Similar.results - Within return statement of movie details page - returns the 'results' array from tmdb when accessing getSimilarMovies from api

## New Routes within assignment
+ /movie/must_watch - route on site header to display users watchlist page
+ /movies/now_playing - route on site header to display the new movies page
+ /movies/top_rated - route on site header to display the top rated movies page
+ /actors/:id - route in movie details page under actor card to bring users to that actors details page

## Additional Comment 
I used AI to debug within my assignment - eg. when adding the cast to the movie details page - 
        cast && cast.cast && cast.cast.length > 0 ? 
This is the line it returned that stopped the runtime error that was occurring - as some of my code is "copy, paste and change" from other pages within the project that have similar features similar lines may be present in return statements in other parts of the pages section of the assignment eg. actor details page.
