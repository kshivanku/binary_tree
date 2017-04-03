function Node(v){
  this.val = v;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function(n){
  if(n.val < this.val) {
    if(this.left == null){
      this.left = n;
    }
    else {
      this.left.addNode(n);
    }
  }
  else if (n.val > this.val){
    if(this.right == null){
      this.right = n;
    }
    else {
      this.right.addNode(n);
    }
  }
}

Node.prototype.visit = function(){
  if(this.left != null){
    this.left.visit();
  }
  console.log(this.val);
  if(this.right != null){
    this.right.visit();
  }
}

Node.prototype.search = function(v){
  if(this.val == v) {
    return this;
  }
  else if(v < this.val && this.left != null){
    return this.left.search(v);
  }
  else if(v > this.val && this.right != null){
    return this.right.search(v);
  }
  return null;
}
