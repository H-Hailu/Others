const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit."
// })

const fruit = new Fruit({
  name: "Peach",
  rating: 10,
  review: "Peachs are so yummy."
})

//fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

//const Person = mongoose.model("Person", personSchema);

const blueberry = new Fruit({
  name: "blueberry",
  rating: 10,
  review: "Great fruit."
});

//blueberry.save();


// Person.updateOne({name: "John"}, {favouriteFruit: blueberry}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully updated.");
//   }
// });

// const Person = mongoose.model("Person", personSchema);
//
// const person = new Person({
//   name: "John",
//   age: 37,
//   favouriteFruit: blueberry
// });
//
// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me!"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "weird texture."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
  });
}
});

// Fruit.deleteOne({_id: "60397a238e1e0c4344ab37b6"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully Deleted.");
//   }
// });
