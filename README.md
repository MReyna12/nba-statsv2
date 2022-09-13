# Starting Five


## Table of Contents

- [Overview](#Overview)
  - [Screenshot](#Screenshot)
  - [Links](#Links)
- [My Process](#My-Process)
  - [Built With](#Built-With)
  - [How It Works](#How-It-Works)
- [Author](#Author)

## Overview

### Screenshot

![image](https://user-images.githubusercontent.com/37000585/190025231-ab8b9568-42bc-4b56-bc58-cff88e0361e9.png)

### Links

- [Search NBA teams!](https://nba-statsv2.vercel.app/)

## My Process

### Built With

- React
- Next
- Javascript
- Bulma
- AWS S3

***DISCLAIMER***

Unfortunately, the BallDontLie API (the "API") has a number of games with unfinished data, so some of the information provided to the user will not be 100% accurate.

### How It Works

Upon entering the full name of an NBA team (e.g. Dallas Mavericks) and clicking search, the applicable team/player information is fetched from the API and rendered to the DOM.

If a user does not enter a correct team name, an error message populates under the search bar and informs the user to enter a correct team name.

#### Team Related Data

The team related functions use the team data to do the following:
- (1) obtain the home and visitor games;
- (2) determine the home and visitor record (wins/losses);
- (3) filter through the data to return the division and conference of the team entered by the user and produce the division and conference records;
- (4) combine the total home and visitor wins and losses to return the overall record for the team; and
- (5) sets the background color for various elements to the applicable team's primary color.

#### Player Related Data 

The functions associated with the players perform the following actions:
- (1) totals all of the field goals, three pointers, free throws, points, games played, rebounds, assists, blocks, steals, turnovers, and fouls made/attempted, as applicable;
- (2) determines the name of all five players;
- (3) calculates the field goal, free throw, three pointer, and effective field goal percentages;
- (4) calculate the points, rebounds, and assists per game; and
- (5) determines which set of player photos to use.


## Author

- Twitter - [@michaelpreyna](https://twitter.com/michaelpreyna)
- LinkedIn - [@michaelpreyna](https://www.linkedin.com/in/michaelpreyna/)
