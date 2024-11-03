require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
// app.use(cors());


app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://explore-heaven.web.app",
            "https://explore-heaven.firebaseapp.com",
        ],
        credentials: true,
    })
);
app.use(express.json());





const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

const uri = `mongodb+srv://${user}:${pass}@cluster0.0c9fo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        //await client.connect();

        const tourCollection = client.db('explorehavenDB').collection('touristsSpots');
        const userCollection = client.db('explorehavenDB').collection('users');


        app.get('/alltouristSpot', async (req, res) => {
            const allTouristSpot = await tourCollection.find().toArray();
            res.send(allTouristSpot);
        })

        app.get('/touristSpots/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const filter = { _id: new ObjectId(id) };
                const tourSpot = await tourCollection.findOne(filter);
                res.send(tourSpot);
            } catch (error) {
                //console.error('Error fetching data by id:', error);
                res.status(500).send({ message: 'Error fetching data by id', error });
            }
        });

        app.get('/europe/:country', async (req, res) => {
            try {

                const country = req.params.country;
                const filter = { country_Name: country };
                const countryTourSpot = await tourCollection.find(filter).toArray();
                res.send(countryTourSpot);
            }
            catch (error) {
                //console.error('Error fetching data by email:', error);
                res.send(error);
            }
        })


        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const users = await cursor.toArray();
            res.send(users);
        })

        app.get('/user/:email', async (req, res) => {
            try {

                const email = req.params.email;
                const filter = { userEmail: email };
                const userTourSpot = await tourCollection.find(filter).toArray();
                res.send(userTourSpot);
            }
            catch (error) {
                // console.error('Error fetching data by email:', error);
                res.send(error);
            }
        })


        app.post('/touristSpots', async (req, res) => {
            try {
                const tour = req.body;
                //console.log(tour);
                const result = await tourCollection.insertOne(tour);
                res.send(result);

            } catch (error) {
                //console.log(error);
            }
        });

        app.put('/updatedSpot/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const option = { upsert: true };
            const updatedData = {
                $set: {
                    image: req.body.image,
                    tourists_spot_name: req.body.tourists_spot_name,
                    country_Name: req.body.country_Name,
                    location: req.body.location,
                    short_description: req.body.short_description,
                    average_cost: req.body.average_cost,
                    seasonality: req.body.seasonality,
                    travel_time: req.body.travel_time,
                    totalVisitorsPerYear: req.body.totalVisitorsPerYear
                }
            };

            // Perform the update operation
            const result = await tourCollection.updateOne(filter, updatedData, option);

            res.send(result);
        })

        app.delete('/touristSpots/:id', async (req, res) => {
            try {
                const id = req.params.id;
                //console.log(id);
                const query = { _id: new ObjectId(id) };
                const result = await tourCollection.deleteOne(query);
                res.send(result);
                //console.log('Deleted record:', result);
            } catch (error) {
                //console.error('Error deleting tourist spot:', error);
                res.status(500).send(error);
            }
        });


        app.post('/users', async (req, res) => {
            try {
                const user = req.body;
                //console.log(user);
                const result = await userCollection.insertOne(user);
                res.send(result);

            } catch (error) {
                //console.log(error);
            }
        });





        // Send a ping to confirm a successful connection
        //await client.db("admin").command({ ping: 1 });
        //console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('explore haven server is running ')
})

app.listen(port, () => {
    console.log('explore haven server is running on port : ', port);
})


















