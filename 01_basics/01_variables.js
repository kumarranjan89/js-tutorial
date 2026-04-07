const accountId = 144553
let accountEmail = "ranjan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rk@email.com"
accountPassword = "21212121"
accountCity = "Patna"

console.log(accountId)

/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// Console Method
console.assert(1==2)  // if first argument is false log an error message

// console.clear()  // clear console
console.group()
console.time()
for(let i=0; i<10; i++) {
    console.count("Inside loop")

    if (i == 5) {
        console.countReset("Inside loop")
    }
    console.timeLog()
}
console.timeEnd()
// console.groupCollapsed()
console.groupEnd()
console.timeStamp()
// console.trace(accountId)


console.log(accountId)
console.info(accountId)
console.warn(accountId)
console.error(accountId)
