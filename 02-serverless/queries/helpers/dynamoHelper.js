"use strict";
//dependecies
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.tableNameProjects;
const allTables = {
    projects: process.env.tableNameProjects,
    items: process.env.tableNameItems
};

//save
const db_put = async(body) => {

    const params = {
        TableName: tableName,
        Item: body
    };

    if(body.table){
        params.TableName = allTables[body.table];
    }

    const res = await docClient.put(params).promise();
    
    if (!res) {
        throw Error("There was an error saving the data.");
    }

    return params;
}

//get
const db_get = async(id, query) => {

    const params = {
        TableName : tableName,
        Key: {
          id: id
        }
    };

    if(query.table){
        params.TableName = allTables[query.table];
    }

    const res = await docClient.get(params).promise();

    if (!res) {
        throw Error("There was an error getting the data.");
    }

    return res;
}

//query
const db_query = async(user, query) => {
    const params = {
        TableName : tableName,
        IndexName: "UserIndex",
        KeyConditionExpression: "#user = :user",
        ExpressionAttributeNames:{
            "#user": "user"
        },
        ExpressionAttributeValues: {
            ":user": user,
        }
    };

    if(query.limit){
        params.Limit = query.limit;
    }

    if(query.id){
        params.ExclusiveStartKey = {
            id: query.id,
            user: user
        };
    }

    if(query.table){
        params.TableName = allTables[query.table];
    }

    try{
        const res = await docClient.query(params).promise();

        if (!res) {
            throw Error("There was an error finding the data.");
        }
    
        console.log(res);
        return res;

    }catch(e){
        console.log(e);

        return e;
    }
    
}

//delete
const db_delete = async(id, query)=>{

    const params = {
        TableName : tableName,
        Key: {
          id: id
        }
    };

    if(query.table){
        params.TableName = allTables[query.table];
    }

    const res = await docClient.delete(params).promise();

    if (!res) {
        throw Error("There was an error getting the data.");
    }

    return res;

}

//exports
module.exports.db_get = db_get;
module.exports.db_put = db_put;
module.exports.db_query = db_query;
module.exports.db_delete = db_delete;
