import mongose from 'mongoose';

const Connection = async () => {
    try {

        const url = 'mongodb+srv://janghani:JanGhani@janghan.v32kt.mongodb.net/janghani?retryWrites=true&w=majority'
        await mongose.connect(url , {useNewUrlParser : true , useUnifiedTopology : true})
        console.log("database connected")
    } catch (error) {
        console.log('error while connecting Database ' , error)
    }
}

export default Connection