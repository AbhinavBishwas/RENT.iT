
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors=require('cors')

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongdb configuration 


const { MongoClient, ServerApiVersion ,ObjectId } = require('mongodb');
const uri = "mongodb+srv://RENTiT-book-store:Abhi-31267@cluster0.jkctehf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.connect();

    //create a collection of documents 
    const Bookcollections=client.db("BookInventory").collection("Books");

    //yha se saara crud operations start hua hai



    //insert a db using post method
    app.post("/upload-book", async(req,res)  => { 
      const data =req.body;
      const result=await Bookcollections.insertOne(data);
      res.send(result);
    })   

  
//resolved this error if u remember abhinav ? yeah i did it was a headache for 1 hr straight 
// {
//     //ye ab jaruri nhi hai and agarye bhi likha rehta to kyuki do get fiunctions hai and same all books pe toh wo saara hi book dene lgta even query likhne pe bhi so thats why apan query wale se hi dono kaamk krlete hai 
//       // {
//       //   // //get all the books from the databases 
//       // // app.get("/all-books",async(req,res)=>{
//       // //   const books=await Bookcollections.find();
//       // //   const result=await books.toArray();
//       // //   res.send(result);
//       // // })
//       // }
// }

    //update a book data with patch or update method 
    app.patch("/book/:id" , async(req,res)=>{
      const id=req.params.id;
      const updatebooks=req.body;
      const filter={_id: new ObjectId(id)};
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updatebooks
        },
      };
      //update 
      const result =await Bookcollections.updateOne(filter,updateDoc,options);
      res.send(result);
    }) 

    // for deleting a data using delete method 
    app.delete("/book/:id" , async(req,res)=>{
      const id=req.params.id;
      const filter={_id: new ObjectId(id)};
      const result=await Bookcollections.deleteOne(filter);
      res.send(result);

    })

    //find a book by its category by get method obviosly
    app.get("/all-books" ,async(req,res)=>{
      let query={};
      if(req.query?.category){
        query={category:req.query.category};
      }
      const result=await Bookcollections.find(query).toArray();
      res.send(result);
    })

    //to get single book data 
    app.get("/book/:id" , async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await Bookcollections.findOne(filter);
      res.send(result);
    })
    



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); // we have to cokment this line then our database will get closed whenever our code will be finshed
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})