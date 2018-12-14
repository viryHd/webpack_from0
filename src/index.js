var math = require('./math');
var cube = math.cube

if(process.env.NODE_ENV !== 'production'){
  console.log('Looks Like we!!!!');
}
function component() { 
  var element = document.createElement('pre');
  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to '+ cube(5)
  ].join('\n\n')
  return element;
 }
 document.body.appendChild(component());
