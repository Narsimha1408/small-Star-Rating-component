const a = new Promise(function(resolve,reject){
    required_marks=50;
    student_marks=65;
    if(student_marks>required_marks){
        resolve("student passed")
    }
    else{
        reject("student failed")
    }
}).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})
