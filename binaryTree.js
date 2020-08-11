 function Node(val){
    this.val = val;
    this.left = this.right = null; 
  }

 function generateTree(arr){
    const maxI = Math.floor(arr.length / 2);
    const nodes = [];

    arr.forEach(el => {
        nodes.push(new Node(el));
    })
    for (let i = 0; i <= maxI; i++){
        if (nodes[2*i + 1]){
            nodes[i].left = nodes[2*i + 1];
        } else {
            nodes[i].left = null;
        }
        if (nodes[2*i + 2]){
            nodes[i].right = nodes[2*i + 2];
        } else {
            nodes[i].right = null;
        }   
    }

    return nodes; 
 }
