// Your code here
function saturdayFun(str="roller-skate") {
    return `This Saturday, I want to ${str}!`
}

let mondayWork = function (str = "go to the office") {
    return `This Monday, I will ${str}.`
}
    // (function (x) { return x + 3 })(2)
// essentially is:
//      f(x)= x + 3 
// **> function(x){return x+3} is what the entire first parenthesis represents  so (function (x) { return x + 3 }) === f(x)= x + 3 
// then in the same expression we are calling the above function with the argument 
//      x = 2 
// **> the expression entirely together is the work of solving this equation with our given x in one-- almost instant-- step 
//      f(2) = 2 + 3
    // => f(2) = 5
// AKA our anon. function with an argument of 2 returns to us the value 5 
// 🤷🏻‍ IIFE, MAN


function wrapAdjective(flair="*") {
    return function inner(type = "special") {
        return `You are ${flair}${type}${flair}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num3, num4) {
        return num3 - num4
    },
    multiply: function(num5, num6) {
        return num5 * num6
    },
    divide: function (num7, num8) {
        return num7 / num8
    }
}

function actionApplyer(int, funcArr) {
    let result = int 
    for (let i = 0; i < funcArr.length; i++) {
        result = funcArr[i](result)
    }
    return result
}