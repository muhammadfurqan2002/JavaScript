class YoutubeChannel {
    constructor() {
        this.subscribers = []
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update("You have subscribed the channel")
    }

    unsubscribe(user) {
        this.subscribers.filter((s) => s !== user)
        user.update("You have unsubscribed the channel")
    }
    notify(message) { 
        this.subscribers.forEach((sub)=>{
            sub.update(message)
        })
    }


}



class User {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(data)
    }
}


let ss = new YoutubeChannel()

let user1=new User("furqan");
let user2=new User("muneeb");

ss.subscribe(user1)
ss.subscribe(user2)


ss.notify("new video is live on the channel")