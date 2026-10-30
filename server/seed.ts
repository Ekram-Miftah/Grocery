import { Prisma } from "./src/generated/prisma/client/index.js";

import { prisma } from "./config/prisma.js"


const seedDB = async ()=>{
  try {
    await prisma.product.deleteMany({})
    console.log("Cleared existing products")

    const products: Prisma.ProductCreateManyInput
[] =[



  
] 
  } catch (error) {

  }
}
