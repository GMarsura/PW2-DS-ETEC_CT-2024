import inquirer from "inquirer";

 inquirer
 .prompt([
    {
        message:" informe o valor",
        name: "num"
    }

 ])

 .then((answers) =>{
    var n1 = parseInt(answers["num"]);
    if(n1 % 2 == 0){
        console.log(`${n1} ´ um numero par`);
    }else{
        console.log(`${n1} ´ um numero impar`);
    }
 })
 .catch((error) =>{
    console.log(error);
 });