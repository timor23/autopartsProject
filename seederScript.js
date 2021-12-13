require('dotenv').config()

const productsData = require('./data/products')
const connectDB = require('./config/db')
const Product = require('./models/Product')
const mongoose = require('mongoose')


connectDB()

const importData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(productsData)
        // await ProductCard.save()

        console.log("Data imported")

        process.exit()
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

importData()