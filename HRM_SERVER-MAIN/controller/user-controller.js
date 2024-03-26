const users = require('../db/models/users');
let bcrypt = require('bcryptjs');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;





exports.createUser=async function(req, res) {

    try {
        // let token = req.headers['authorization'].split(' ')[1];
        // console.log("token : ", token);

        
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let password = req.body.password;
        
        //validate
        let userFound = await users.findOne({email});

        if(userFound) {
            let response = error_function({
                statusCode : 400,
                message : "User already exist",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        //Hashing password
        let salt = await bcrypt.genSalt(10);
        console.log("salt : ", salt);

        let hashed_passed = bcrypt.hashSync(password, salt);
        console.log("hashed password : ", hashed_passed);

        //Save to Database
        let new_user = await users.create({
            firstname,
            lastname,
            email,
            password : hashed_passed,
        });

        if (new_user) {
            let response_datas = {
                _id : new_user.id,
                firstname : new_user.firstname,
                lastname : new_user.lastname,
                email : new_user.email,
            }
            console.log("new_user : ", new_user);
            let response = success_function({
                statusCode : 201,
                data : response_datas,
                message : "User created successfully",
            })
            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode : 400,
                message : "User creation failed",
            })
            res.status(response.statusCode).send(response);
            return;
        }

    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : "Something went wrong",
        })
        res.status(response.statusCode).send(response);
        return;
    }

}


exports.getUserData = async function(req, res) {
    try {

        let allUSers = await users.find({});

        if(allUSers.length>0) {
            let response = success_function({
                statusCode : 200,
                data : allUSers,
                message : "All users retrieved successfully"
            });
            res.status(response.statusCode).send(response);
            return;
        }

    }catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : "Internal server error"
        });
        res.status(response.statusCode).send(response);
        return;
    }
}

exports.fetchOne = async function(req,res){
try{
    const authHeader = req.headers["authorization"];
    const token = authHeader?authHeader.split("")[1]:null;

    let id = req.params.id;

    if (token && id){
        let users_data = await users.findOne({_id:id});

        if(users_data){
            let response = success_function({
                statusCode : 200,
                data : users_data,
                message : "User retrived successfully"
            });
            res.status(response.statusCode).send(response);
            return;
        }else{
            let respnse = error_function({
                statusCode : 404,
                message : "user details not found"
            });
            res.status(response.statusCode).send(response);
        }

    }else{
        if (!token){
            let response = error_function({
                statusCode : 400,
                message : "Token is required"
            });
            res.status(response.statusCode).send(response);
        }
    }
}
}







