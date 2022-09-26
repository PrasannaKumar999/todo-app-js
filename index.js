document.getElementById("box").style.display = "none";
document.getElementById("addbox").style.display = "none";
 
    document.getElementById("righttext").onclick = function(){
        document.querySelector(".blur").style.filter="blur(10px)";
        document.getElementById("box").style.display = "block";
        
    }
    document.getElementById("closebtn").onclick = function(){
        document.querySelector(".blur").style.filter="blur(0px)";
        document.getElementById("box").style.display = "none";
    }

    document.getElementById("addbtn").onclick = function(){
        document.querySelector(".blur").style.filter="blur(0px)";
        document.getElementById("box").style.display = "none";
        document.getElementById("itemstext").style.display = "none";
            const totalbox = document.querySelector(".totalbox");

            const newbox = document.createElement("div");
            newbox.setAttribute("class","box") ;

            const heading = document.createElement("h2");
            heading.setAttribute("class","box-heading");
            heading.innerText = document.querySelector(".inputtext").value;

            const addIcon = document.createElement("i");
            addIcon.setAttribute("class","add-icon");

            const deleteicon = document.createElement("span");
            deleteicon.setAttribute("class","delete-icon");
            
            totalbox.appendChild(newbox);
            newbox.appendChild(heading);
            newbox.appendChild(addIcon);
            newbox.appendChild(deleteicon);


            addIcon.onclick = function(){
                document.getElementById("addbox").style.display = "block";
                document.querySelector(".blur").style.filter="blur(10px)";
                const text = document.createElement("addtext");
               text.setAttribute("class","addtext");
            }
            document.getElementById("closebtn2").onclick = function(){
                document.querySelector(".blur").style.filter="blur(0px)";
                document.getElementById("addbox").style.display = "none";
            }

            document.getElementById("addbtn2").onclick = function(){
                document.getElementById("addbox").style.display="none";
                document.querySelector(".blur").style.filter="blur(0px)";
                let inputtext2 =document.querySelector(".inputtext2").value;
                const box = document.querySelector(".box");
               
                let text = document.createElement("div");
                text.setAttribute("class","box-text");
                 text.innerHTML=inputtext2;
                 box.appendChild(text);

                let markdone = document.createElement("button");
                markdone.setAttribute("class","markdone");
                markdone.innerHTML="Mark Done";
                text.appendChild(markdone);

               document.querySelector(".markdone").onclick = function(){
                    document.querySelector(".box-text").style.color = "red";
                    document.querySelector(".box-text").style.textDecoration = "line-through";
                    document.querySelector(".markdone").style.display = "none";
                }
            }
            

    }


         


