// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //console.log(recursiveGEBCN(document.body, className));    
  var recursiveGEBCN = function(node, className){
    //Base case: No children
    //console.log('classList: ',node.classList);
    if(node.childNodes.length === 0){
      if(node.classList === undefined){
        //console.log('no classes');
        return [];
      }
      if(node.classList.contains(className)){
        //console.log('found a match');
        return [node]; //returing an array containing node
      }
      else{
        //console.log('no match found');
        return [];   
      }
    }
    
    //Recursive case: has children
    var outputNodeArray = [];
    if(node.classList.contains(className)){//check current node
      outputNodeArray.push(node);
    }
    for(var i=0; i< node.childNodes.length; i++){//iterate thru children
      outputNodeArray.concat(recursiveGEBCN(node.childNodes[i], className));
    }
    return outputNodeArray;  
  }
  console.log(recursiveGEBCN(document.body, className));
  console.log(document.getElementsByClassName(className));
  return recursiveGEBCN(document.body, className);
};
