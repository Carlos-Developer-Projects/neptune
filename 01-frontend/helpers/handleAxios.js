import axios from "axios";
const dev_endpoint = "https://63h93kv0w5.execute-api.us-east-1.amazonaws.com/dev/";


export const axiosSave = async(data, table)=>{

    if(table){
        data.table = table;
    }

    try{
        const results = await axios.post(`${dev_endpoint}/save`, data);
        return results.data;
    }catch(e){
        return e;
    }
};

export const axiosGet = async(id, table)=>{

};

export const axiosDelete = async(id, table)=>{

};

export const axiosQuery = async(user, id, table, limit)=>{

};