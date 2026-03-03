import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // for *ngIf that i didnt use

@Component({ // only angular part
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule], // i didnt use the common module
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  score: number = 0;
  totalScore: number = 0;
  compTotalScore: number = 0;
  rps: string[] = ["rock", "paper", "scissors"];

  computerChoice: string = "";
  resultMessage: string = "";
  totalResultMessage: string = "";
  lastWinner: string = "You didnt finish a round yet...";

  gameCounter: number = 0;
  totalGameCounter: number = 0;

  game(userChoice:string) { // just java code
    this.computerChoice = this.rps[Math.floor(Math.random() * 3)]; // math random only gives 0 to 1 so we multiply by 3 to get 0 1 2
    console.log("User choice: " + userChoice + " | Computer choice: " + this.computerChoice);

    if (userChoice === this.computerChoice) {
      console.log("tie");
      this.resultMessage = "It's a tie.";

    }
    else if (userChoice === "rock" && this.computerChoice === "scissors" || userChoice === "paper" && this.computerChoice === "rock" || userChoice === "scissors" && this.computerChoice === "paper") {
      console.log("win");
      this.score += 1;
      this.resultMessage = "You win!";
    }
    else {
      console.log("lose");
      this.resultMessage = "You lose...";
    }

    this.gameCounter++; // increases game counter
    
    if (this.gameCounter === 10) { // checks if its the 10th round
      this.checkWhoWon();
      this.resetRound();
    }

  }

  resetRound() {
    this.score = 0;
    this.gameCounter = 0;
    this.resultMessage = "Round reseted";
  }

  resetGame() {
    this.score = 0;
    this.gameCounter = 0;

    this.compTotalScore = 0;
    this.totalScore = 0;
    this.totalGameCounter = 0;

    this.resultMessage = "Game reseted";
    this.totalResultMessage = "Reseted so no winners";
  }
  checkWhoWon() {// checks who won
    if (this.score > 5) {
      this.totalResultMessage = "You win!";
      this.totalScore++;
      this.lastWinner = "User";
    }
    else if (this.score === 5) {
      this.totalResultMessage = "It's a tie.";
      this.lastWinner = "It was a tie";
    }
    else {
      this.totalResultMessage = "You LOST!";
      this.compTotalScore++;
      this.lastWinner = "Computer";
    }
    this.totalGameCounter++; // might as well do it here lmaoz lolz
  }
}
