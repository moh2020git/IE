function print_output(num){
    if(num==""){
        document.getElementById("result").innerText="";
    }
    else{
        document.getElementById("result").innerText=num;
    }
}
function get_output(){
    return document.getElementById("result").innerText;
}
//print_output("33");
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            print_output("");
        }
        else{
            var output = get_output();
            if(output!=""){
                if(this.id=="="){
                    var result = eval(output);
                    print_output(result);
                }
                else{
                    output = output+this.id;
                    print_output(output);
                }
            }
        }


        
    })

}
////
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=get_output();
        if(output!=NaN){
            output=output+this.id;
            print_output(output);
        }
        
    })

}