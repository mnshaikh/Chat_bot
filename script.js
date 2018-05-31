var data;

function f_key(e){
   if (e.keyCode === 13){
       f_send();
   }
}


function f_send() {
    var odiv = document.createElement('div'); 
    odiv.className = 'c_out';
    var text = document.getElementById('i_text_box').value;
    var omsg = document.createTextNode(text);
    odiv.appendChild(omsg);
    var main = document.getElementById('i_main');
    if (text == "") {
    }
    else {
        main.appendChild(odiv);
    document.getElementById('i_text_box').value = "";
        f_fetch();
    }
      
     main.scrollTop = main.scrollHeight;    
}

function f_fetch() {
    if (data == undefined) {
    var url = "https://samples.openweathermap.org/data/2.5/weather?q=India&appid=b6907d289e10d714a6e88b30761fae22";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            data = JSON.parse(xmlhttp.responseText);
            f_receive();
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(); 
        }
}

function f_receive() {
    var odiv = document.createElement('div'); 
    odiv.className = 'c_in';
    var text = data.main.temp;
    var omsg = document.createTextNode(text);
    odiv.appendChild(omsg);
    var main = document.getElementById('i_main');
    if (text == "") {
    }
    else {
        main.appendChild(odiv);
    data = undefined;
    }      
     main.scrollTop = main.scrollHeight;  
}
