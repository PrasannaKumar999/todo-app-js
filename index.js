function clock(){
    let time= new Date();
    let hr=time.getHours();
    let mi=time.getMinutes();
    let se=time.getSeconds();
    document.getElementById("hour").innerHTML = hr;
    document.getElementById("min").innerHTML = mi;
    document.getElementById("sec").innerHTML = se;
    document.getElementById("ap").innerText = "AM"
    if(hr>12){
        hr = hr -12;
     document.getElementById("hour").innerText = hr;
     document.getElementById("ap").innerText = "PM"
    } 
    if(hr==0){
        hr=12;
     document.getElementById("hour").innerText = hr;
     document.getElementById("ap").innerText = "PM"
    }
    if(hr<10)
    document.getElementById("hour").innerText = "0"+hr;
    if(mi<10)
    document.getElementById("min").innerText = "0"+mi;
    if(se<10)
    document.getElementById("sec").innerText = "0"+se;
}
setInterval(clock,1)

    document.getElementById("clk").onclick = function(){
        var a=document.getElementById('Morning').value;
            var b = document.getElementById("Afternoon").value;
           var c = document.getElementById("Evening").value;
           var d = document.getElementById("Night").value;
           var hour = new Date().getHours();
        if(a == hour){
            document.getElementById("leftbox2").innerText="Good Morning!!! Wake Up !! "
            document.getElementById("rightbox2").innerText="GRAB SOME HEALTHY BREAKFAST!!!"
            document.getElementById('rightbox3').style.backgroundImage='url("./Images/Component 30 – 1.svg")';
        }
        else if(b == hour){          
            document.getElementById('rightbox3').style.backgroundImage='url("./Images/Component 31 – 1.svg")';
            document.getElementById("rightbox2").innerText="Let's Have Some Lunch !!";
            document.getElementById("leftbox2").innerText="Good Afternoon !!";
        }
        else if(c == hour){
            document.getElementById('rightbox3').style.backgroundImage='url("lunch_image.png")';
            document.getElementById("rightbox2").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            document.getElementById("leftbox2").innerText="Good Evening!!";
        }
        else if(d == hour){
            document.getElementById('rightbox3').style.backgroundImage='url("./Images/Component 32 – 1.png")';
            document.getElementById("rightbox2").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
            document.getElementById("leftbox2").innerText="Good Night!!";
        } 
        changetext()
    }
    function changetext(){
        let s = document.getElementById("Morning");
        let displayMtext = s.options[s.selectedIndex].text;
        document.getElementById("wakeup-time").innerText="Wake Up Time :"+ displayMtext;

        let f = document.getElementById("Afternoon");
        let displayAtext = f.options[f.selectedIndex].text;
        document.getElementById("lunch-time").innerText="Lunch Time :" +displayAtext ;

        let g = document.getElementById("Evening");
        let displayEtext = g.options[g.selectedIndex].text;
        document.getElementById("nap-time").innerText="Nap Time :"+displayEtext;

        let h = document.getElementById("Night");
        let displayNtext = h.options[h.selectedIndex].text;
        document.getElementById("night-time").innerText="Night Time :"+displayNtext;
    }
