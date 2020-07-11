let toy = {
    "name": "Mario",
    "color": "#ff0000",
    "age": 1,
    "human": "Italian Human"
}

console.log(toy.hasOwnProperty('human') ? toy['human'] : 'not found!');