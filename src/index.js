import cube from './math';
import _ from 'lodash';

console.log(
  _.join(['Anotherdsfdsafff', 'moduledsfdasf', 'lsadfdasfoaded!'], ' ')
);
if(process.env.NODE_ENV !== 'production'){
  console.log('Looks Like we!!!!');
}
function component() { 
  let element = document.createElement('pre');
  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to '+ cube(5)
  ].join('\n\n')
  return element;
 }
 document.body.appendChild(component());
