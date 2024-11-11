import mongoose, {Connection, Mongoose} from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    connection: Mongoose|null;
    promise: Promise<Mongoose>|null;
}
let cache: MongooseConnection = (global as any).mongoose ||{connection: null, promise: null}

export const connectToDatabase = async() => {
    if(cache.connection) return cache.connection;
    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');
    if(!cache.promise){
        cache.promise = mongoose.connect(MONGODB_URL, {dbName: 'Vision AI', bufferCommands: false})
    }
    cache.connection = await cache.promise
    return cache.connection
}


