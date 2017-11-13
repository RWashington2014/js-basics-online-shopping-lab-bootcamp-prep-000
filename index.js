
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

    var itemPrice = Math.floor(Math.random() * 101)

    cart.push({[item]: itemPrice})

    console.log(`${item} has been added to your cart.`)

    return cart
}

function viewCart() {

    var d = 0

    var newArray = []
    var output = "In your cart, you have "


    //var itemPrice = Math.floor(Math.random() * 101)


     if (cart.length === 0)
     {

     console.log('Your shopping cart is empty.')

     }

     if (cart.length === 1)
     {
        for (var i = 0; i < cart.length; i++)
        {

        newArray.push(Object.keys(cart[i]))

        }// end for loop #1

        console.log(output + `${newArray[0]}` + ' at $' +`${cart[0][newArray[0]]}.` )
     } // end else if #1

     else if (cart.length === 2)
     {
        for (var i = 0; i < cart.length; i++)
        {

        newArray.push(Object.keys(cart[i]))

        }// end for loop #2

        console.log(output + `${newArray[0]}` + ' at $' +`${cart[0][newArray[0]]}` + ` and ${newArray[1]}`+ ' at $' +`${cart[1][newArray[1]]}.`)
      } // end else if #2

      else if (cart.length === 3)
      {
         for (var i = 0; i < cart.length; i++)
         {

         newArray.push(Object.keys(cart[i]))

         }// end for loop #3

         console.log(output + `${newArray[0]}` + ' at $' +`${cart[0][newArray[0]]},` + ` ${newArray[1]}`+ ' at $' +`${cart[1][newArray[1]]},` +
         ` and ${newArray[2]}` + ' at $' +`${cart[2][newArray[2]]}.`)
       } // end else if #3

       else if (cart.length > 3)
       {
          for (var i = 0; i < cart.length; i++)
          {

          newArray.push(Object.keys(cart[i]))

        }// end for loop #4

          console.log(output + `${newArray[0]}` + ' at $' +`${cart[0][newArray[0]]},` + ` ${newArray[1]}`+ ' at $' +`${cart[1][newArray[1]]},` +
          ` ${newArray[2]}` + ' at $' +`${cart[2][newArray[2]]},` + ` and ${newArray[3]}` + ' at $' + `${cart[3][newArray[3]]}.`)
        } // end else if #4


} // viewCart function

function total() {


  var price = []
  var d = 0
  var cost = []
  var sum, sum1, sum2, sum3

    while (cart.length > d)
    {

      for (var i = 0; i < cart.length; i++)
      {
        price.push(Object.keys(cart[i]))

        cost.push(cart[i][price[i]])
        d++
      }
      sum1 = cost[0]
      sum2 = cost[1]
      sum3 = cost[2]
    }
    if(cart.length === 2)
    {
      sum = sum1 + sum2
      return sum
    }

    else if (cart.length > 2)
    {
      sum = sum1 + sum2 + sum3
    return sum
    }
} // total function

function removeFromCart(item) {

  var list = []
  var d = 0

    for (var i = 0; i < cart.length; i++)
    {
      list.push(Object.keys(cart[i]))


    }



  if (cart[2].hasOwnProperty(item) === true) {

    cart.pop()

  }
console.log(list)


}

function placeOrder(cardNumber) {
  // write your code here
}
