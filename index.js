// Code your solution here

function findMatching(arr, string) {
    return arr.filter(d => d.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(arr, string) {
    return arr.filter(d => d[0] === string[0])
}

function matchName(arr, string) {
    return arr.filter(d => d.name === string)
}