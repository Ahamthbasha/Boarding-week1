console.log("God Bless You")


process.on('message',(msg)=>{
    console.log("parent Message",msg)
    process.send("hello parent")
})