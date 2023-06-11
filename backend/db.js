const mongoose = require('mongoose');

// const mongoUrl = 'mongodb+srv://gofood0550:gofood0550@cluster0.6husm3g.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoUrl = 'mongodb+srv://gofood0550:gofood0550@cluster0.6husm3g.mongodb.net/gofoodmern?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);

const mongoDB = async () => {
    await mongoose.connect(mongoUrl, { 
        useNewUrlParser: true,
        useUnifiedTopology: true, },
        async(err, result) => {

        if(err) console.error("---", err);
        else{
            console.log('Connection established');

            const fetched_data = await mongoose.connection.db.collection("food_items");

            // console.log(fetched_data)

            fetched_data.find({}).toArray(async function(err, data){
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err, catData) {
                    if(err) console.error("---", err);
                    else{
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })



                // if(err) console.error("---", err);
                // else{
                //     global.food_items = data;
                // }
            })
        }
    });
};

module.exports = mongoDB;


