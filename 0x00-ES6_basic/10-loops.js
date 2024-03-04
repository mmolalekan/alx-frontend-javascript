#!/bin/node
export default function appendToEachArrayValue(array, appendString) {
    let mine = [];
    for (const idx of array) {
        const value = idx;
        mine = mine.concat(appendString + value)
    }
    return mine;
}
