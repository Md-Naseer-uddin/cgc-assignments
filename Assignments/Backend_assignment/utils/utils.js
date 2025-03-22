const resObjGenerator=(status,msg,data)=>{
    let obj={}
    obj.status=status
    obj.msg=msg || (status?"Successfull":"Failed")
    if(data){
        obj.data=data
    }
    return obj
}

module.exports={
    resObjGenerator
}