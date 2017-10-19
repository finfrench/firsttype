import {askQuestion} from "./helpers";

const help = `
Welcome to our cinema

These are the commands you can use:

- show
- book <row> <column>
- quit

`;

let seats: string[][] = [];

for (let i=0; i<10; i++) {
  seats[i] = [];
  for (let j=0; j<10; j++) {
    seats[i][j] = " ";
  }
}

const renderSeats = () => {
  let result = "";
  for(let i in seats) {
    result += (+i+1) + "   "; //+ before i forces i to be a number
    if (+i<9) result += " ";
    for (let j in seats[i]) {
      result += "[" + seats[i][j] + "]";
    }
    result += "\n";
  }
  result += "      1  2  3  4  5  6  7  8  9  10";
  console.log(result);
}

const bookSeat = (row: number, col: number) => {
  seats[row-1][col-1] = "X";
}

let done = false;

const main = async () => {
  while (!done) {
    console.log(help);
    const answer = await askQuestion("What would you like to do?: ");

    console.clear();
    const args = String(answer).split(" ");
    switch(args[0]) {
      case "show":
        renderSeats();
        break;
      case "book":
        bookSeat(+args[1], +args[2]);
        break;
      case "quit":
        done = true;
        process.exit(0);
        break;
      default:
        console.log("Unknown command!");
        break;
    }
  }
}

main();

