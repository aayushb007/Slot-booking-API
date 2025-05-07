const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const {connectDB} = require("../config/db.config");

/*
  This script seeds the database with initial data. It creates an admin user and three regular users.
  Make sure to run this script only once or when you want to reset the database.
*/

async function seed() {
  // await mongoose.connect(process.env.MONGO_URI);
  connectDB();

  await User.deleteMany({});
  const admin = new User({
    username: "admin",
    password: bcrypt.hashSync("admin123", 8),
    role: "admin",
  });
  await admin.save();

  for (let i = 1; i <= 3; i++) {
    const user = new User({
      username: `user${i}`,
      password: bcrypt.hashSync(`user${i}123`, 8),
      role: "user",
    });
    await user.save();
  }

  console.log("Seeded!");
  process.exit();
}

seed();
