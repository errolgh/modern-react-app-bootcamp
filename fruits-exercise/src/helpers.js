function choice(items) {
    // selects a random item and returns it
    let idx = Math.floor((Math.random() * items.length))
    return items[idx]
}


// function remove(items, item) {
//     // removes the first matching item from items, if the item exists, and returns items. Otherwise returns undefined.
//     return items.filter(fruit => fruit === item)
// }

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [ ...items.slice(0,1), ...items.slice(i + 1) ]
        }
    }
}


export {choice, remove}