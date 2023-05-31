
import mongoose from 'mongoose';
import app from './app'


const port: number = 5000;



// database connection 

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoes');
        console.log('Database connection successful');

        app.listen(port, () => {
            console.log(`server is listening on port  ${port}`)
        })
    }

    catch (err) {
        console.log(' field to connect db ', err);

    }

}



main()
