import { body, validationResult} from "express-validator";

let result = [
        body("name")
        .notEmpty()
        .withMessage("Name is required"),

        body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email"),

        body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

        body("phone_number")
        .notEmpty()
        .withMessage("Phone number is required")
        .matches(/^[6-9]\d{9}$/)
        .withMessage("Please enter a valid 10-digit phone number"),

      (req, res, next)=>{
      let errors =  validationResult(req)
      try{
       if(!errors.isEmpty()){
          return res.status(400).json({
            message: "Incorrect data",
            err: errors.array().map((e) => e.msg)
          });
      }
      }
      catch (err) {
        return res.status(500).json({
          message: "User not registered",
          error: err.message
        });
      }
      next()  
      }
    ]
 export {
    result,
 }