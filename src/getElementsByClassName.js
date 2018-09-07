// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var recursiveGEBCN = function(node, className){
    console.log(node);
    return [];
    //Base case: No children
    if(node.childNodes.length === 0){
      if(node.classList.contains(className)){
        return [node]; //returing an array containing node
      }
      return []; 
    }
    
    //Recursive case: has children
    var outputNodeArray = [];
    for(var i=0; i< node.childNodes.length; i++){
      outputNodeArray.concat(recursiveGEBCN(node.childNodes[i], className));
    }
    return outputNodeArray;  
  }
  //console.log(recursiveGEBCN(document.body, className));
  return recursiveGEBCN(document.body, className);
};
