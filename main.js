var locations = ["Airplane", "Bank", "Beach", "Casino", "Circus Tent", "Corporate Party", "Crusader Army", "Day Spa", "Embassy", "Hospital", "Hotel", "Military Base", "Movie Studio", "Passenger Train", "Pirate Ship", "Police Station", "Restaurant", "School"];
var randLocation = "";
var playersRole = {};
var players = 3;
var playerCount = 1;

// Gets random location
var getRandLocation = function() {
    randLocation = locations[Math.floor(Math.random() * locations.length)]
};

// Get number of players
var assignRoles = function() {
    playersRole ={};
    players = $("#numOfPlayers").val();
    
    // Create dictionary with players and locations
    var x = 0
    while (x < players) {
        x++;
        playersRole[x] = randLocation;
    }

    // Randomly assign one of the players as the spy
    spy = Math.floor(Math.random() * players+1);
    playersRole[spy] = "Spy";
    console.log(playersRole)
}

var updateRole = function () {
    $("#player-role").empty();
    $("#player-role").append(playersRole[playerCount]);
}

var updatePlayerInfo = function() {
    $("#playerNumber").text("PLAYER " + playerCount);
    $("#playersRole").text(playersRole[playerCount])
}

$(document).ready(function(){
    $("#player-container").hide();
    $("#role-container").hide();
    $("#finish-container").hide();
    $("#start").click(function(){
        
        // Reset variables and pick random location and assign someone as a spy
        playerCount = 1;
        getRandLocation();
        assignRoles();

        // Ensure there is at least 3 players
        if (players < 3) {
            alert("Players must be 3 or more");
        } else {
            updatePlayerInfo();
            $("#start-container").hide();
            $("#player-container").show();
        }
    });

    $("#showRole").click(function(){
        $("#player-container").hide();
        $("#role-container").show();
    });

    $("#gotRole").click(function() {
        $("#role-container").hide();
        
        // Show finish screen is it is the last player
        if (playerCount == players) {
            $("#finish-container").show();
        }
        else {
            playerCount ++
            updatePlayerInfo();
            $("#player-container").show();
            console.log(playerCount);
            console.log(players);
        }
    });

    $("#newGame").click(function(){
        $("#finish-container").hide();
        $("#start-container").show();
    })

});
    




