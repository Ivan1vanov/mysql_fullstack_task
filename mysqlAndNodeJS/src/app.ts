import express, { Request, Response } from 'express'
import connectDB from './db';
import mainRouter from './routes/routes';
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors({origin: '*'}))
     
connectDB.sync().then(() => { 
    app.listen(5000, () => {
        mainRouter(app)
        console.log(`server started on http://localhost:5000`)
    })  
})  
 

