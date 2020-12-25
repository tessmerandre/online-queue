export const DB = process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/todos';
export const APP_PORT = process.env.APP_PORT ? process.env.APP_PORT : 8080;