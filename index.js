var tree;

$(document).ready(function(){
  tree = new Tree();
  for(i = 0 ; i < 10 ; i++){
    tree.addValue(Math.floor(Math.random() * 100));
  }
  console.log(tree);
  tree.traverse();
  var found = tree.search(10);
  console.log(found);
})
