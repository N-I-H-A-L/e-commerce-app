import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    //access_token will be sent as Headers.
    const authHeader = req.headers.access_token;
    if(authHeader){
        jwt.verify(authHeader, process.env.JWT_SECRET, (err, user)=>{
            if(err){
                res.status(403).json({
                    success: false,
                    message: "Token not valid."
                });
            }
            //The access_token will contain info about the ID and isAdmin of the user.
            //See how token is created inside authRoutes.
            else{
                //Save the user to req.user so it can be accessible by the server.
                req.user = user;
                next();
            } 
        });
    }
    else{
        res.status(401).json({
            success: false,
            message: "User not authenticated."
        });
    }
}

export const verifyAndAuth = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        //If the user logged in is same as the user on which CRUD will be applied (req.params) OR the logged in user is Admin, then only execute the next() function.
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
            //next() will generally be the route handler for the route which called this function.
        }
        else{
            res.status(403).json({
                success: false,
                message: "You don't have the required permissions."
            });
        }
    });
}

//Some functionalities will be specific for users with Admin priviledges.
export const verifyAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
            //next() will generally be the route handler for the route which called this function.
        }
        else{
            res.status(403).json({
                success: false,
                message: "You don't have the required permissions."
            });
        }
    });
}