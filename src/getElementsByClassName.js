// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //console.log(recursiveGEBCN(document.body, className));    
  var outputNodeArray = [];
  var recursiveGEBCN = function(node){
    //console.log('classList: ',node.classList);
    if (node.classList !== undefined){
      if(node.classList.contains(className)){
        //console.log('Match found: ', node.tagName);
        outputNodeArray.push(node);
      }
    }  
    /*if(node.childNodes.length > 0){
      console.log('checking '+ node.childNodes.length + ' children of ', node.tagName);
    }*/ 
    for(var i=0; i< node.childNodes.length; i++){//iterate thru children
      recursiveGEBCN(node.childNodes[i]);
    }
  }
  
  //console.log('before ', outputNodeArray);
  recursiveGEBCN(document.body);
  //console.log('after ', outputNodeArray);
  //console.log(Array.prototype.slice.apply(document.getElementsByClassName(className)));
  return outputNodeArray;
};
