import {ReadLine, createInterface} from 'readline';
const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

export const askQuestion = (question: string) => {
    return new Promise((resolve) => {
        readLine.question(question, resolve);
    });
}