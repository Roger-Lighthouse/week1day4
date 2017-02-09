var words = ["ground", "control", "to", "major", "tom"];

function myMap(words, myFunc){
  var ans=[];
  for(var i=0; i<words.length; i++){
    ans.push(myFunc(words[i]));
  }
  return ans;
};


var ans=myMap(words, function(word){
  word1=word+' ok';
  return word1;
})

console.log(ans);