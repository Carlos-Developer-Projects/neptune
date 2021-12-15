"use strict";
//dependecies
const { v4: uuidv4 } = require("uuid");
const Dynamo = require('../helpers/dynamoHelper');
const moment = require('moment-timezone');

//global variables
const chosenTimeZone = "America/New_York";

//save
module.exports.save = async (event, context, callback) => {

    //parse the body
    const body = JSON.parse(event.body);

    console.log(body);

    try{

        if(!body.id || !body.user || !body.name){
            console.log("Missing required params.");
            throw Error("Missing required params.");
        }

        //create save data
        const date = new Date();
        let dateFormat = moment(date.toISOString()).tz(chosenTimeZone).format();

        body.created = dateFormat;

        const db = await Dynamo.db_put(body);

        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Data Save`,
                content: db
            })
        };
        return response;

    }catch(e){
        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Error Saving Data`,
                content: e
            })
        };
        return response;
    }
}

//get
module.exports.get = async (event, context, callback) => {

    //parse the body query params
    const params = JSON.parse(JSON.stringify(event.queryStringParameters));

    try{

        if(!params.id){
            console.log("No ID passed in");
            throw Error("No ID passed in");
        }

        //query dynamodb
        const db = await Dynamo.db_get(params.id, params);

        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Get Data`,
                content: db
            })
        };
        return response;

    }catch(e){
        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Error Getting Data`,
                content: e
            })
        };
        return response;
    }
}

//query
module.exports.query = async (event, context, callback) => {

    //parse the body query params
    const params = JSON.parse(JSON.stringify(event.queryStringParameters));

    try{

        if(!params.user){
            console.log("No User passed in");
            throw Error("No User passed in");
        }

        //query dynamodb
        const db = await Dynamo.db_query(params.user, params);

        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Search Data`,
                content: db
            })
        };
        return response;

    }catch(e){
        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Error Getting Data`,
                content: e
            })
        };
        return response;
    }
}

//delete
module.exports.delete = async (event, context, callback) => {
    //parse the body query params
    const params = JSON.parse(JSON.stringify(event.queryStringParameters));

    try{

        if(!params.id){
            console.log("No ID passed in");
            throw Error("No ID passed in");
        }

        //query dynamodb
        const db = await Dynamo.db_delete(params.id, params);

        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Delete Data`,
                content: db
            })
        };
        return response;

    }catch(e){
        //send back to dashboard
        const response = {
            statusCode: 200,
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: `Error Getting Data`,
                content: e
            })
        };
        return response;
    }
}
