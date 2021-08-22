
    
    const button =document.querySelector('#button-submit');
    const ipAdress=document.querySelector('#ipAdress');
    const realLocation=document.querySelector('#realLocation');
    const timezonee=document.querySelector('#timezone');
    const ispTag=document.querySelector('#ispTag');

    const key= 'at_f2PSdKnM9dOq0kTXwpM9CIgnzhsld';
    const URL = "https://geo.ipify.org/api/v1?";
   
    var map;
    function iniitMap(x,y) {
    const myLatLng = { lat: x, lng: y };
    const map = new google.maps.Map(document.getElementById("maap"), {
      zoom: 12,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
    }

    button.addEventListener('click',(e)=>{
         e.preventDefault()
        let ip= document.querySelector("#input").value; 
        fetch(`${URL}apiKey=${key}&ipAddress=${ip}`)
            .then(response => response.json())
            .then(data =>{
                const ip_ad= data.ip;
                const location= data.location;
                const isp =data.isp;
                let {city, region,postalCode,timezone,lat,lng } = location;
                iniitMap(lat,lng);
               
                ipAdress.innerHTML=ip_ad;
                realLocation.innerHTML=`${city}, ${region} ${postalCode}`;
                timezonee.innerHTML=`UTC ${timezone}`;
                ispTag.innerHTML=isp
                        

    })
  

})
