



const User = require('../models/user');


module.exports ={

getUser : async (req,res)=>{
    try {

    const user = await User.findById(req.user.id)

       const {password , __v , createdAt , ...userData } = user.doc;

         res.status(201).json({ status: true, data: userData });

       }
   catch (error) {
       res.status(500).json({status:false, message: error.message});
    }
   



},

verifyAccount: async (req , res)=>{

    const otp =  req.params.otp;
   


    try {

    
         const category = await Category.findById(id) 

        res.status(200).json(category);
      
      }

   catch (error) {
       res.status(500).json({status:false, message: error.message});
    }
   



},
getAllCategory:  async (req,res)=>{
  
try {


  const  allCategorys = await Category.find({title : {$ne:"More"}}, {__v:0})



    res.status(200).json({  Result:allCategorys.length,data:allCategorys});

}
    
    catch (error) {


       res.status(500).json({status:false, message: error.message});

    }



},
getRandomCategory:  async (req,res)=>{


    
try {
  
  let randomCategory= await Category.aggregate([{$match: {value:{$ne:"more"}}},
         {$sample: {size:4}}]);

  





    res.status(200).json(randomCategory);

}
    
    catch (error) {


       res.status(500).json({status:false, message: error.message});

    }



},

}