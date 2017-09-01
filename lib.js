'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      // TODO
      let resultArray = []
      let price = 0
      for (let x = 0; x < carts.length;x++){
        let cartTotal = 0
        let cart = carts[x]
        let cust= cart.customer
        let items = cart.items
        for (let y = 0; y < items.length; y++){
          let item = items[y]
          for (let z = 0; z < listings.length; z++){
            let listing = listings[z]
            if (listing.name === item)
              price = listedPrice(listing)(item)
          } //listings loop
          cartTotal += price
        } //items loop
        let newOb = {
          customer: cust,
          total: cartTotal
        } //ob 
        resultArray.push(newOb)
      }
      return resultArray
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
