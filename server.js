const express = require('express')
const app = express()
port = 3000
app.use(express.json())

const users = [{username:'alice', age:'25', email:'alice@example.com'}]

app.get('/user', (req,res)=>{
    try{
        const {username} = req.query
    if (!username){
        return res.status(400).json({error:'User parameter cannot be empty'})
    }

    const user = users.find(u=>u.username===username)
    if (!user){
        return res.status(404).json({error:'User not found'})
    }

    res.status(200).json({"message":'User found', "data":{users}})
    }catch(er){
        console.error(er)
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});