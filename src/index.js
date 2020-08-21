const router =require('express').Router();
const {User}=require('../db').models;

module.exports=router;

router.get('/',async(req,res,next) =>{
    try{
        const users = await User.findAll();
    res.send(
        `
        <html>
          <body>
            <form method='POST' action ='/'>
               <input name ='name' />
               <button>Create</button>
            </form>
            <ul>
              ${users.map(user =>{
                  return `
                    <li>
                       ${user.name}
                    </li>
                    
                    `;
              }).join(' ')
            }
            </ul>
            
          </body>
        <html>
    `)
}
catch(ex){
    next(ex);
}
});
 
/*router.get('/',async (req,res,next)=>{
    try {
        const users = await User.findAll();
        res.send(`
        <html>
          <body>
            <ul>
              ${users.map(user =>{
                  return `
                    <li>
                       ${user.name}
                    </li>
                    
                    `;
              }).join(' ')
            }
            </ul>
        </body>
    </html>
`)
}
catch(ex){
    next(ex);
}
})*/

router.post('/',async(req,res,next)=>{
    try {
        await User.create({name :req.body.name});
        res.redirect('/');
    }
    catch(ex){
       next(ex)
    }
})

router.delete('/',async(req,res,next)=>{
    try{
        const user =await User.delete({name :req.body.name});
    }
    catch(ex){
        next(ex)
    }
})