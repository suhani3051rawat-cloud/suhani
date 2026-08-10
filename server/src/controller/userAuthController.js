import { userRegisterModel } from "../model/userRegisterModel";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const userFromReact = async (req,res)=>{
 try {
    let{name, username, email, password, phone_number, address} = req.body;
    let findUser = await userModel.findOne({
        email,
    });
    if(findUser){
         return res.status(400).json({
            message : "Email already exist"
        });
    }
    let phone_numberCheck = (phone_number)=>{
            let firstDigit =  phone_number[0];
            let values = ['6','7','8','9']
            if(values.includes(firstDigit)){
                return true;
            }
            else {
                return false;
            }   
        }
        if(!phone_numberCheck(phone_number)){
            return res.status(400).json({
                message : "Please enter a valid phone number"
            });
        }
    let hashPassword = await bcrypt.hash(password,10);
    let user =  await userModel.create({
        name,
        username,
        email,
        password : hashPassword,
        phone_number,
        address
    });
    let hideFields =  await userModel.aggregate([
        {
            $match: {
                _id : user._id
            }
        },
        {
            $project : {
                password : 0,
                __v      : 0
            }
        }
    ]);
    return res.json({
        message : "User register successfully",
        Data    :  hideFields
    });
    console.log(user);
    } 
    catch (error) {
        console.log(error);
       return res.status(500).json({
            message : "User not Register",
            error : error.message
        });
    }
}
export const userLoginFromReact = async (req,res)=>{
    try {
        let {email, password} = req.body;
        let findUser = await userModel.findOne({
            email
        });
        if(!findUser){
            return res.status(500).json({
                 message : "User not found"
            });
        }
        let passwordCheck = await bcrypt.compare(password, findUser.password);
        if(!passwordCheck){
            return res.status(400).json({
                message : "Incorrect password"
            });
        }
        let Token = jwt.sign({
                id : findUser._id 
                },process.env.JWT_TOKEN,
                { expiresIn: "1d"}
            );
            res.cookie("token", Token ,{
                httpOnly : true, 
                secure   : true,
                // sameSite: 'lax', 
                maxAge   : 1000*60*60*24
            });
        let hidePassword =  await userModel.aggregate([
            {
                $match : {
                    _id : findUser._id  
                }
            },
            {
                $project : {
                    password : 0,
                    __v : 0
                }
            }
        ]);
        res.json({
            message : "you are loggin",
            User    : hidePassword
        });
    } catch (error) {
        console.log(error)
        return res.json({
            message : "server error",
            error   : error
        });
    }
}
export const userLogOut = async (req,res)=>{
    try {
       await res.clearCookie("token",{
        httpOnly : true,
        secure   : true  
       }); 
       res.json({
        message : " user logout"
       }); 
    } catch (error) {
        console.log(error)
       return res.json({
        message : "user is not logged in",
        error   : error
       }); 
    }
}
export const getCurrentUser = async (req,res) =>{
    try {
       let findUser = await userModel.findById(req.user.id).select('-password');
        if(!findUser){
            return res.json({
                message :"User not found in dataBase"
            })
        }  
        res.json({
            message : "User logged in",
            user    : findUser
        }); 
    } 
    catch (error) {
       return res.json({
          message : error.message
       }) 
    }  
}