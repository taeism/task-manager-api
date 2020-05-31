// CRUD - Create, Read, Update, Delete
// Validation Authentication
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    // db.collection('tasks').insertMany([{description: 'task1', completed: true}, {description: 'task4', completed:false}]).then((result)=>console.log(result)).catch((error)=>{console.log(error)})
    // db.collection('tasks').findOne({description: 'task2'}).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
    // db.collection('tasks').find({completed: true}).toArray().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
    // db.collection('tasks').updateMany({completed: true}, {$set:{completed:false}}).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
    // db.collection('tasks').updateOne({description:'task1'},{$set:{completed:false}}).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
    // db.collection('tasks').deleteMany({completed:false}).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})

    
})