const express = require('express')
const app = express()
const port = 3000


userRoute =  require("./routes/user");


app.use("/user",userRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})