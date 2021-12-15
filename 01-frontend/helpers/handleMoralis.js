const Moralis = require('moralis');

export const createObject = async(name)=>{
    const Memory = Moralis.Object.extend(name);
    const memory = await new Memory();
    console.log(memory);
    return memory;
};

export const saveObject = async(memory, data)=>{
    return(await memory.save(data));
};

export const getObject = async(type, name)=>{
    const Memory = Moralis.Object.extend(type);
    const query = new Moralis.Query(Memory);
    query.equalTo("name", name);
    const results = await query.first()
    return results;
};