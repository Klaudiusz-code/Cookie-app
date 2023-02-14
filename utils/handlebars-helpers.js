const handlebarsHelpers = {
    findPrice: (entries,selectedItem) =>{
        const found =  entries.find(el => el[0] === selectedItem);

        if (!found){
            throw new Error(`Nie znalezniono ceny dla ${selectedItem}`)
        }
        const [, price] = found
        return price;
    },
    pricify: price => price.toFixed(2),

    isNotOnArray: (array, element) => !array.includes(element)
}

module.exports = {
    handlebarsExpress: handlebarsHelpers
}