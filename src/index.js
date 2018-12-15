
function getComponent(){
  return import(/* webpackChunkName: "lodash" */'lodash').then(_=>{
    let ele = document.createElement('div');
    var _ = _.default;
    ele.innerHTML = _.join(['hello','webpack'],' ');
    return ele;
  }).catch(err=> 'error! pending')
}
  
getComponent().then(ele=>{
  document.body.appendChild(ele);
})