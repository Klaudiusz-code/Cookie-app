const handlebarsExpress = {
    'find-price': (entries, selectedItem) => {
        const found = entries.find(el => el[0] === selectedItem)
        if (!found){
            throw new Error(`Nie ma ceny dla ${selectedItem}`)
        }
        const [, price] = found
        return price;
    }
}
module.exports = {
    handlebarsExpress,
}