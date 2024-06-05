const accountId = 144553
let accountEmail = "vraj@google.com"
var accountPassword = "12345"
accountCity = "Amdavad"
let accountState
// accountId = 2 // not allowed

accountEmail = "vp@vp.com"
accountPassword = "21212121"
accountCity = "Mumbai"

/**
 * Prefer not to use var
 * because of ussue in block scope and functional scope
 */
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])