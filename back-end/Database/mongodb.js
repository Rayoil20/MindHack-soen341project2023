import {MongoClient} from 'mongodb'



export default function getClientPromise(){
    let client;
    let clientPromise;

    if (!global._mongoClientPromise){
        client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test",{});
        global._mongoClientPromise = client.connect();
    }
    else{
        client = new MongoClient("mongodb+srv://MindHack:MindHack123$@cluster0.sdwjjsx.mongodb.net/test",{});
        clientPromise = client.connect();
    }
    return clientPromise;
}



