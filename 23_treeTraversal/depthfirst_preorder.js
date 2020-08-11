// #1st: Have a Node and a Queue class
class Node{
    constructor(newValue){
        this.value = newValue;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(newValue){
        let node = new Node(newValue);

        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        let current = this.first;

        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return current.value;
    }
}

// #2nd: Add your Binary Search Tree class
class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(newValue){
        let node = new Node(newValue);

        if(!this.root){
            this.root = node;
            return this;
        }else{
            let currentRoot = this.root;

            while(true){
                if(newValue === currentRoot.value) return undefined;

                if(newValue < currentRoot.value){
                    if(currentRoot.left === null){
                        currentRoot.left = node;
                        return this;
                    }
                    currentRoot = currentRoot.left;
                }else if(newValue > currentRoot.value){
                    if(currentRoot.right === null){
                        currentRoot.right = node;
                        return this;
                    }
                    currentRoot = currentRoot.right;
                }
            }
        }
    }

    find(value){
        if(!this.root) return false;

        let [currentRoot, found] = [this.root, false];

        while(currentRoot && !found){
            if(value < currentRoot.value) currentRoot = currentRoot.left;
            else if(value > currentRoot.value) currentRoot = currentRoot.right;
            else found = true;
        }
        return !found ? false : currentRoot;
    }

    depthFirstPreOrderSearch(){
        let [visited, current] = [[], this.root];

        const traversal = (node) => {
            visited.push(node.value);
            if(node.left) traversal(node.left);
            if(node.right) traversal(node.right);
        };
        traversal(current);

        return visited;
    }

    breadthFirstSearch(){
        let [visited, q, node] = [[], new Queue(), this.root];

        //Enqueue the root node
        q.enqueue(node);

        //while the queue size is greater than zero:
        //1. Dequeue the item to the node. Node is now the first item in (FIFO), usually the left (lesser number)
        //2. Push the node value to the 'visited' leaf array
        //3. If there is a node on the left, push it to the queue; same if there is a node on the right

        while(q.size > 0){
            node = q.dequeue();
            visited.push(node.value);
            if(node.left) q.enqueue(node.left);
            if(node.right) q.enqueue(node.right);
        }

        //return the 'visited' leaf array
        return visited;
    }
}

//#3rd make your search algo
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(15);
tree.insert(8);
tree.insert(20);
console.log('tree: ');
console.log(tree);
console.log('\n traversing...');
console.log(tree.depthFirstPreOrderSearch());
// console.log(tree.breadthFirstSearch());

