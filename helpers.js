

function successfullMessage(msg) {
    return "✅ *mafia*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *mafia*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *mafia*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
