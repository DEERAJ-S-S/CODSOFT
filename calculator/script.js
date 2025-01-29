{
        let outputScreen=document.getElementById("output-Screen");
        function dispaly(num){
            outputScreen.value+=num;
        }
        function calculate(){
            try{
                outputScreen.value=eval(outputScreen.value);

            }
            catch(err){
                alert("Invaild");
            }
        }
        function clear(){
            outputScreen=" ";

        }
        function del(){
            outputScreen.value=outputScreen.value.slice(0,-1);
        }
    }
