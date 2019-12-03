import data from '../data/text.json';


let wordsArray = data.text.split(' ');
let firstSymbol = 0;

export const getRandomWord = (quantity =1) => {
 let randomWordsArray = [];
 let randomSymbol = Math.floor(Math.random()*wordsArray.length);

 for(let  i =0; i<quantity; i++) {
  randomWordsArray.push( wordsArray[randomSymbol]);
  randomSymbol +=1;
 }

 return randomWordsArray.toString().replace(',',' ');

}

export const getNextWord = (symbolPosition) =>  {
  return wordsArray[symbolPosition];
}

