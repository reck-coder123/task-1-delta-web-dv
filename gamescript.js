let score=0;
let K=[];
function game(){
    
    function game(){
        for(var i=0 ;i<16; i++ ){
            let t=Math.floor(Math.random()*16)
            K.push(t);
            for(var j=0; j<i+1; j++){
                //num_arr.push(j)
                if(K.includes(j)==true){
                    let buton=document.getElementsByClassName("container"+j);
                    //buton[0].classList.add("null");
                    buton[0].classList.add("bg-primary");
                    
                    
                    for(var c=0; c<16; c++){
                        let ele=document.getElementById("mybutton"+c);
                        if(c==j){
                            ele.addEventListener("click", function(){
                                score++;
                                buton[0].classList.remove("bg-primary");
                            })
                            
                        }
                        else{
                            ele.addEventListener("click", function(){
                            alert("Game Over Your score is "+score);
                        })
                    }
                   }
                  
        }
        }
        }
        }
        let int =setInterval(game,2100);
        
        
        
    }       
game();