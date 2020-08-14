class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let charValue = char.charCodeAt(0) - 96;
            total = (total * prime + charValue) % this.keyMap.length;
        }

        return total;
    }

    keys(){
        let keys = [];
        for(let index in this.keyMap){
            for(let item of this.keyMap[index]){
                if(!keys.includes(item[0])) keys.push(item[0]);
            }
        }
        return keys;
    }

    values(){
        let values = [];
        for(let index in this.keyMap){
            for(let item of this.keyMap[index]){
                if(!values.includes(item[1])) values.push(item[1]);
            }
        }
        return values;
    }

    set(key, value){
        let hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]) this.keyMap[hashedKey] = [];
        this.keyMap[hashedKey].push([key, value]);
    }

    get(key){
        let hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]) return undefined;
        if(this.keyMap[hashedKey].length === 1) return this.keyMap[hashedKey][0];
        
        for(let cell in this.keyMap[hashedKey]){
            if(this.keyMap[hashedKey][cell][0] === key) return this.keyMap[hashedKey][cell];
        }
        return undefined;
    }
}

let hashtable = new HashTable(15);

console.log(`\nInserting ['magenta', '#FF00FF']...`);
hashtable.set('magenta', '#FF00FF');
console.log(`\nInserting ['peacock', '#33A1C9']...`);
hashtable.set('peacock', '#33A1C9');
console.log(`\nInserting ['forestgreen', '#228B22']...`);
hashtable.set('forestgreen', '#228B22');
console.log(`\nInserting ['crimson', '#DC143C']...`);
hashtable.set('crimson', '#DC143C');
console.log(`\nInserting ['yellow', '#FFFF00']...`);
hashtable.set('yellow', '#FFFF00');
console.log(`\nInserting ['darkblue', '#00008B']...`);
hashtable.set('darkblue', '#00008B');
console.log(`\nInserting ['salmon', '#FA8072']...`);
hashtable.set('salmon', '#FA8072');
console.log(`\nInserting ['cyan', '#008B8B']...`);
hashtable.set('cyan', '#008B8B');
console.log(`\nInserting ['cyan', '#008B8B']...`);
hashtable.set('cyan2', '#008B8B');
console.log(`\nInserting ['pink', '#FF3E96']...`);
hashtable.set('pink', '#FF3E96');

console.log(`\nHash Table:`);
console.log(hashtable.keyMap);
console.log('\n*********************************************');
console.log(`\nGet magenta...`);
console.log(hashtable.get('magenta'));
console.log(`\nGet peacock...`);
console.log(hashtable.get('peacock'));
console.log(`\nGet forestgreen...`);
console.log(hashtable.get('forestgreen'));
console.log(`\nGet crimson...`);
console.log(hashtable.get('crimson'));
console.log(`\nGet yellow...`);
console.log(hashtable.get('yellow'));
console.log(`\nGet darkblue...`);
console.log(hashtable.get('darkblue'));
console.log(`\nGet salmon...`);
console.log(hashtable.get('salmon'));
console.log(`\nGet cyan...`);
console.log(hashtable.get('cyan'));
console.log(`\nGet cyan2...`);
console.log(hashtable.get('cyan2'));
console.log(`\nGet pink...`);
console.log(hashtable.get('pink'));
console.log(`\nGet sfsdf...`);
console.log(hashtable.get('sdafsadf'));

console.log(`\nHash Table:`);
console.log(hashtable.keyMap);
console.log('\n*********************************************');
console.log(`\nHash Table keys:`);
console.log(hashtable.keys());
console.log(`\nHash Table values:`);
console.log(hashtable.values());