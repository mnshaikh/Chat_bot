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
        f_fetch(text);
    }
      
     main.scrollTop = main.scrollHeight;    
}

function f_fetch(city) {
    if (data == undefined) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=e3a556b936f98cb77cacd2562dae27e6";
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
    
    
    var br = document.createElement('br');
    var h  = document.createElement('b');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');    
    var p3 = document.createElement('p');
    
    var icon = document.createElement('img');
    var src = document.createAttribute('src');
    src.value = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    icon.setAttributeNode(src);
    
    var weather = " " + data.weather[0].main;
    var temp = "Temperature = " + data.main.temp + " °C";
    var humi = "Humidty = " + data.main.humidity + " %";
    var wind = "Wind Speed = " + data.wind.speed + "m/s";
    var l1 = document.createTextNode(weather);
    var l2 = document.createTextNode(temp);
    var l3 = document.createTextNode(humi);    
    var l4 = document.createTextNode(wind);
    
    odiv.appendChild(icon);
    h.appendChild(l1);
    odiv.appendChild(h);
    
    p1.appendChild(l2);
    odiv.appendChild(p1);
    
    p2.appendChild(l3);
    odiv.appendChild(p2);
    
    p3.appendChild(l4);
    odiv.appendChild(p3);
    
    
    
    var main = document.getElementById('i_main');
    if (odiv == "") {
    }
    else {
        main.appendChild(odiv);
    data = undefined;
    }      
     main.scrollTop = main.scrollHeight;  
}