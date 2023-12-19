export async function test(req,res){
    res.json(`server started at port ${process.env.VITE_PORT}`)
}

