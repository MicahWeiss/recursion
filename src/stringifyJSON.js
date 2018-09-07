// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //primitive
  if(['boolean', 'number'].includes(typeof obj)){
    return String(obj);
  }
  if(typeof obj === 'string'){ //case separate for formatting
    return '\"' + obj + '\"';
  }
  //Null
  if([NaN, null, Infinity].includes(obj)){
    return 'null';
  }
  //Array (recursive for nesting)
  if(Array.isArray(obj)){
    var output = '[';
    for(var i=0; i< obj.length; i++){
      output += stringifyJSON(obj[i]);
      if(i < obj.length -1){
       output += ',';
      }
    }
    output += ']';
    return output;
  }
  
  //Object (recursive for nesting)
  var output = '{';
  var keys = Object.keys(obj);

  for(var i = 0; i < keys.length; i++){
    if(keys[i] !== "functions" && keys[i] !== "undefined"){
      output += '\"' + keys[i] + '\":';
      output += stringifyJSON(obj[keys[i]]);      
      if(i < keys.length -1){
        output += ',';
      }
    }
  }
  output += '}';
  return output; 
}
