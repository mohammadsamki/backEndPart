import User from '../models/Users.js'
//  bcryptjs :> encript password : fdgdjfkgjr54654665
//  decrypt :  fdgdjfkgjr54654665 > password
// 12345 :> 1:ghsdff6473, 2 : dsfds64736 , 3 : fgdg546465, 4: jkgjr54654665, 5: kjghr54654665
//  
import bcrypt from 'bcryptjs'


//  async 
export const registerUser = async (req,res) =>{
    const { name,email,password} =req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user =await User.create({
            name,email,password:hashedPassword
        })
        res.status(201).json({
            user:user
        })
        
    } catch (error) {
        res.status(500).json({message:"Server Error"});
        
    }

}
export const loginUser = async (req ,res)=>{
    const {email,password} = req.body;

    try {

        const user = await User.findOne({email});
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(user && isPasswordCorrect){
            res.status(200).json({user:user,message:"Login Successful"});
        }
        else {
            res.status(401).json({message:"Invalid Credentials email or password is incorrect"});
        }
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
}