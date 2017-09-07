module.exports = function () {
    this.sum = function (a, b) {
        return a + b
    };
    this.multiply = function (a, b) {
        return a * b
    };
    this.getuserava = function (message) {
        var username = message.author.username;
        var userava = message.author.avatarURL;
        return "Avatar c?a " + username + " là " + userava;
    };
    //etc
}