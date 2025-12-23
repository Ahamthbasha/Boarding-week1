// console.log("dhurandhar")

process.on('message',(msg)=>{
    console.log("message received from parent",msg)

    process.send("hello parent")
})