db = db.getSiblingDB('chat')
db.createUser(
    {
        user: "chatservice",
        pwd: "",
        roles: [
            {
                role: "readWrite",
                db: "chat"
            }
        ]
    }
);

db.createUser(
    {
        user: "monitor",
        pwd: "",
        roles: [
            {
                role: "read",
                db: "chat"
            }
        ]
    }
);

db.chats.insert({name: "init document"});