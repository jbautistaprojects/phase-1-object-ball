function gameObject() {
   return { home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
             "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
               },
               "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
               },
               "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
               },
               "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
               },
               "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
               }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                   },
                   "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                   },
                   "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                   },
                   "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                   },
                   "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                   }
            }
         }
   }}

  

//    - Build a function, `numPointsScored` that takes in an argument of a player's
//   name and returns the number of points scored for that player.
//   - Think about where in the object you will find a player's `points`. How can
//     you iterate down into that level? Think about the return value of your
//     function.

// function numPointsScored(playersName){
//     const game = gameObject();
//     //debugger
//     for (const gameKey in game){
//         const teamObj = game[gameKey];
//         const playerObj = teamObj.players
//        // debugger
//         for (const playerKey in playerObj){
//             //debugger
//             if (playersName === playerKey){
//                 return playerObj[playerKey].points
//             }
//         }
//     }
// }
//this simplifies the above code. both accomplish the same thing.

function homeTeam(){
    return gameObject().home
}

function awayTeam(){
    return gameObject().away
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}
//returns an array of all the players stat that is inputted
function AllPlayerAttribute(Stat) {
    const playerArrayWithStats = Object.entries(players())
    const statsArray = playerArrayWithStats.map(byNameArray => {
        return byNameArray[1]
        })
    const statsArray2 = statsArray.map(keyReturn => {
        return keyReturn[Stat]
    })
    return statsArray2
}

function numPointsScored(playersName){
    //let points 
   //note if players needs to be calledmany times,
   // it may be better to assign a variable
    
        // for (const player in players()){
        //     //debugger
        //     if (playersName === player){
        //         return players()[player].points
        //     }
        // } This is going to be shortened further
        //return points

       // SECOND SET OF CODE
        //  const playerArrays =Object.entries(players());

        //  const player = playerArrays.find(playerArray => playerArray[0] === playersName)
        //  //debugger       
        //  return player[1].points    


         //This can even be further reduced to

         return players()[playersName].points
    }
 //console.log(numPointsScored("Brendan Haywood"));

//  Build a function, shoeSize, that takes in an argument of a player's 
//name and returns the shoe size for that player.
// Think about how you will find the shoe size of the correct player.
// How can you check and see if a player's name matches the name that
// has been passed into the function as an argument?
  
function shoeSize(playersName) {
    return players()[playersName].shoe
 }

 //console.log(shoeSize("Bismak Biyombo"))

 //Build a function, teamColors, that takes in an argument of the 
 //team name and returns an array of that teams colors.

 function teamColors (nameOfTeam){
    if (nameOfTeam === homeTeam().teamName){
        return homeTeam().colors
    }
    if (nameOfTeam === awayTeam().teamName){
        return awayTeam().colors
    }
 }

//console.log(teamColors("Charlotte Hornets"))

//Build a function, teamNames, that operates on the game object to 
//return an array of the team names.

function teamNames () {
    let teamNameArray = [];
    teamNameArray.push(homeTeam().teamName,awayTeam().teamName)
    return teamNameArray
}

//console.log(teamNames())

//Build a function, playerNumbers, that takes in an argument of a 
//team name and returns an array of the jersey number's for that team

function playerNumbers(nameOfTeam) {
    let playerNum = AllPlayerAttribute('number');
    if (nameOfTeam === homeTeam().teamName){
        return playerNum.slice(0,-5)
    }
    if (nameOfTeam === awayTeam().teamName){
        return playerNum.slice(-5)
    }
}

//Build a function, playerStats, that takes in an argument of a 
//player's name and returns a object of that player's stats. Check 
//out the following example of the expected return value of the 
//playerStats function:

function playerStats (playerName) {
    return players()[playerName]
}

//Build a function, bigShoeRebounds, that will return the number of 
//rebounds associated with the player that has the largest shoe size.
// Break this one down into steps:
//First, find the player with the largest shoe size
//Then, return that player's number of rebounds
//Remember to think about return values here. Use debugger to drop 
//into your function and understand what it is returning and why




function bigShoeRebounds() {
    const players2 = Object.entries(players());
    const shoeSize = AllPlayerAttribute('shoe');
    const biggestShoe = Math.max(...shoeSize);
    const indexOfShoe = shoeSize.indexOf(biggestShoe) ;
    const playerName4Shoe = players2[indexOfShoe];
    debugger
    return playerName4Shoe[1].rebounds
}

//Which player has the most points? Call the function mostPointsScored.
//Which team has the most points? Call the function winningTeam.
//Which player has the longest name? Call the function playerWithLongestName

function mostPointsScored() {
    const players3 = Object.entries(players())
    const pointsPerPlayer = AllPlayerAttribute('points')
    const mostPoints = Math.max(...pointsPerPlayer)
    const indexOfPoints = pointsPerPlayer.indexOf(mostPoints) 
    return players3[indexOfPoints][0]   
}

function winningTeam(){
    const pointsAll = AllPlayerAttribute('points');
    const homepointsArray = pointsAll.slice(0,-5);
    const awaypointArray = pointsAll.slice(-5);
    const homePointTotal = homepointsArray.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    });
    
    const awayPointTotal = awaypointArray.reduce(function (previousValue, currentValue) {
     return previousValue + currentValue});
    
     if (homePointTotal>awayPointTotal) {
        return homeTeam().teamName
     }
     else if (awayPointTotal>homePointTotal){
        return awayTeam().teamName
     }
    
}

function playerWithLongestName () {
    const playerNameArray = Object.entries(players());
    const nameonlyArray = playerNameArray.map(name => {return name[0]})
    const nameLength = nameonlyArray.map(length => {
        return length.length});
    const findLongestName = Math.max(...nameLength);
    const indexOfNames = nameLength.indexOf(findLongestName);   
    return nameonlyArray[indexOfNames];
}

//Write a function that returns true if the player with the longest
// name had the most steals. Call the function doesLongNameStealATon.
function mostSteals() {
    const players3 = Object.entries(players())
    const stealsPerPlayer = AllPlayerAttribute('steals')
    const mostSteals = Math.max(...stealsPerPlayer)
    const indexOfSteals = stealsPerPlayer.indexOf(mostSteals) 
    return players3[indexOfSteals][0]  
}

function doesLongNameStealATon() {
const playerWithLongName = playerWithLongestName()
const playerWithMostSteals = mostSteals()

if (playerWithLongName === playerWithMostSteals) {
    return true
}
else {
    return false
}
}