const Moralis = require('moralis');

const createObject = async(name)=>{
    const Memory = Moralis.Object.extend(name);
    const memory = await new Memory();
    console.log(memory);
    return memory;
};

const saveObject = async(memory, data)=>{
    return(await memory.save(data));
};

const getObject = async(type, name)=>{
    const Memory = Moralis.Object.extend(type);
    const query = new Moralis.Query(Memory);
    query.equalTo("name", name);
    const results = await query.first()
    return results;
};

export default async function handler(req, res) {
    console.log(req.query);
    const results = await getObject(req.query.type, req.query.name);
    console.log(results);
    res.status(200).json(results)
}