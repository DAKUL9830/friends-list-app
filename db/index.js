const Sequelize= require('sequelize');

const {STRING}=Sequelize;

const client =new Sequelize('postgres://localhost/app');

const User =client.define('user',{
    name :{
        type:STRING, 
        allownNull :false
    }
})

const syncAndSeed  =async () =>{
    console.log(' Im listening');
    await client.sync({force :true});
    const [moe,larry,lucy] =await Promise.all([
        User.create({name:'moe'}),
        User.create({name:'larry'}),
        User.create({name:'lucy'}),
        
    ])
}

module.exports ={
    syncAndSeed,
    models:{
        User
    }
}