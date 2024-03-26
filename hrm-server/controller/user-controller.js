const users = require('../db/models/users');
let bcrypt = require('bcryptjs');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const set_password_template = require("../utils/email-templates/set-password").resetPassword;
const sendEmail = require("../utils/send-email").sendEmail;


const generateRandomPassword = (length) => {
    const charset = "abcdefg#hi@jklmnopqrstuvwxyzA@BCDEF#GHIJKLMNOPQRSTUVWXYZ@012#3456789@#";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
};

exports.createUser = async function(req, res) {
    try {
        console.log("Reached user control");
        let token = req.headers['authorization'].split(' ')[1];


        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let password = generateRandomPassword(10);
        let phone = req.body.phone;
        let user_type = "65f28b1befa5fcf56cff2319";

        let userFound = await users.findOne({email});

        if(userFound) {
            let response = error_function({
                statusCode : 400,
                message : "user already exist"
            });
            res.status(response.statusCode).send(response);
            return;
        }
        //hashing
        

        let salt = await bcrypt.genSalt(10);

        let hashed_password = bcrypt.hashSync(password, salt);

        let new_user = await users.create({
            firstname,
            lastname,
            email,
            password : hashed_password,
            phone,
            user_type
        });

        if(new_user) {

            console.log("Reached here");
            let emailContent = await set_password_template(firstname, email, password);
            // console.log("reached emailContent : ",emailContent);


            await sendEmail(email, "Set Your Password", emailContent);
            console.log("Reached sendEmail ");
            console.log("email : ",email);

            let response_datas = {
                _id : new_user.id,
                firstname : new_user.firstname,
                lastname : new_user.lastname,
                email : new_user.email,
                phone : new_user.phone,
                user_type : new_user.user_type
            }
            console.log("new_user : ",new_user);
            let response = success_function({
                statusCode : 201,
                data : response_datas,
                message : "User created successfully"
            })
            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode : 400,
                message : "User creation failed"
            })
            res.status(response.statusCode).status(response);
            return;
        }

    }catch (error) {
        let response = error_function ({
            statusCode : 400,
            message : "Something went wrong"
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


exports.editUserData = async function(req,res) {

    try {

    let userId = req.params.id;
    let updates = req.body;

    let user = await users.findById(userId);

    if(!user) {
        let response = error_function({
            statusCode : 404,
            message : "User not found"
        });
        res.status(response.statusCode).send(response);
        return;
    }


    Object.assign(user,updates);
    let updatedUser = await user.save();

    let response = success_function({
        statusCode : 200,
        data : updatedUser,
        message : "User updated successfully"
    });
    res.status(response.statusCode).send(response);
    } catch(error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 500,
            message : "Internal server error"
        });
        res.status(response.statusCode).send(response);
    }
}