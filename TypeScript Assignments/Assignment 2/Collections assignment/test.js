var Users = /** @class */ (function () {
    function Users(name) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        this.name = name;
        this.messages = messages;
    }
    return Users;
}());
var chatRoom = /** @class */ (function () {
    function chatRoom(roomId) {
        var user = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            user[_i - 1] = arguments[_i];
        }
        this.roomId = roomId;
        this.user = user;
    }
    chatRoom.prototype.getAllUsers = function () {
        this.user.forEach(function (i) { return console.log(i.name); });
    };
    chatRoom.prototype.getAllMessages = function () {
        this.user.forEach(function (i) { return console.log(i.messages); });
    };
    return chatRoom;
}());
var user1 = new Users("abc", "ghjasd", "hjkads", "ghj");
var user2 = new Users("bcd", "hjk", "yuiasdh", "hiasd", "ashjkldf");
var user3 = new Users("def", "hjk", "yuiasdh", "hiasd", "ashjkldf");
var user4 = new Users("efg", "ghjasd", "hjkads", "ghj");
var chatRoom1 = new chatRoom(1, user1, user2);
var chatRoom2 = new chatRoom(1, user3, user4);
var allUsers = new Set();
allUsers.add(user1);
allUsers.add(user2);
allUsers.add(user3);
allUsers.add(user4);
var userRoom = new Map();
userRoom.set(user1, chatRoom1);
userRoom.set(user2, chatRoom1);
userRoom.set(user3, chatRoom1);
userRoom.set(user4, chatRoom2);
console.log(allUsers);
console.log(userRoom);
console.log(userRoom.get(user4));
chatRoom1.getAllUsers();
chatRoom1.getAllMessages();
chatRoom2.getAllUsers();
