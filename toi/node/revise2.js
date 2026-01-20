// console.log("basha you are rocking")


process.on('message',(msg)=>{
    console.log('child received message',msg)

    process.send("hello parent")
})