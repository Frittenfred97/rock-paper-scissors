function computerPlay() {

    const  randomNumber =  Math.floor(Math.random() * (3));

    // Rock = 0 | Paper = 1 | Scissor = 2

        if (randomNumber == 0) {
        return "rock";
        } else if (randomNumber == 1) {
        return "paper";
        } else if (randomNumber == 2) {
        return "scissor";
        }
}