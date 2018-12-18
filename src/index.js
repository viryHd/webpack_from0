import _ from 'lodash';
// import * as transfNumbers from './components/transf-numbers';
import { wordToNum, numToWord } from './components/transf-numbers';
// import Print from './print';
function component(){
    let ele = document.createElement('div');
    
    ele.innerHTML = _.join(['hello','webpack'],' ');
    // btn.onclick = Print.bind(null, 'hello webpack!!!!')
    return ele;
}
  
document.body.appendChild(component())

// console.log(transfNumbers.wordToNum('Two'));
// console.log(transfNumbers.numToWord(3));
console.log(numToWord(3));
console.log(wordToNum('Two'));