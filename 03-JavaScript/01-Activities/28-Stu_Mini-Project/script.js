score= 0;
tie= 0;
you= 0;
computer= 0;
choices= ["r", "p", "s"];

console.log("Let's do this");

var rockPaperScissors = {
    game: function () {
        userMoveInput = window.prompt("What is your move?!? (r)ock, (p)aper, or (s)cissors");
        userMove = userMoveInput.toLowerCase();
        console.log(userMove)
        computerMove = choices[(Math.floor(Math.random() * choices.length))]
        console.log(computerMove);
        window.alert("The computer chose " + computerMove)

        if (userMove === computerMove) {
            tie++;
            window.alert("Tie");
        } else if (
            (userMove === "r" && computerMove ==="s") ||
            (userMove === "p" && computerMove ==="r") ||
            (userMove === "s" && computerMove ==="p")
        ) {
            you++;
            window.alert("You Win!!!");
        } else {
            computer++;
            window.alert("You Lost!!! Computers Rule!!!");
        }

        window.alert(
            "Stats:\nWins: " + you + "\nLosses: " + computer + "\nTies: " + tie
        );

        var playAgain = window.confirm("Play again?")

        if (playAgain) {
            this.game();
        }
        
    }

}

rockPaperScissors.game();
