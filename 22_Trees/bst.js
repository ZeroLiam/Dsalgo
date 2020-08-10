class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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
}

let bts = new BinarySearchTree();
console.log(bts.insert(10));
console.log(bts.insert(5));
console.log(bts.insert(7));
console.log(bts.insert(11));
console.log(bts.insert(16));
console.log(bts.insert(13));
console.log(bts.insert(2));
console.log(bts.insert(3));
console.log(bts.find(10));
console.log(bts.find(100));
console.log(bts.find(-674100));
console.log(bts.find(3));
console.log(bts.find(11));