'use strict'

const entries =
  obj =>
    Object.keys(obj).map(key => [key, obj[key]])

    // Object.keys(obj) // ['detergent', 'henneset', 'coffee'].map(key => [key, obj[key]])
    

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      // TODO
      //Loop through each customer
      const itemArray = []
      for (let i = 0; i < count; i++) {
        itemArray.push(itemName)
      }
      return itemArray
    }



/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      // TODO
      let cartsArray = []
      for (let i = 0; i < customers.length; i++) {
        let customer = customers[i]
        let listObject = customer.shoppingList
        let shoppingList = entries(listObject)
        let itemsList = []
        for (let x = 0; x < shoppingList.length; x++) {
          let item = shoppingList[x]
          let repeatedList = itemRepeater(item[0])(item[1])
          itemsList = itemsList.concat(repeatedList)
        }
        let newObj = {
          customer: customers[i].name,
          items: itemsList
        }

        cartsArray.push(newObj)

      }
      return cartsArray

    }




module.exports = {
  listing,
  customer,
  constructCarts
}
