import _ from 'lodash';
// import Print from './print';
function component(){
    let ele = document.createElement('div');
    
    ele.innerHTML = _.join(['hello','webpack'],' ');
    // btn.onclick = Print.bind(null, 'hello webpack!!!!')
    return ele;
}
  
document.body.appendChild(component())