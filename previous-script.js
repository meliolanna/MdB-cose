var map = L.map('map').setView([44.638241, 10.457681], 5);
       L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 12,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

      // red marker for our location
        var redIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
  			iconAnchor: [12, 41],
  			popupAnchor: [1, -34],
  			shadowSize: [41, 41]
        });

        // blu icon for shows
        var blueIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
  			iconAnchor: [12, 41],
  			popupAnchor: [1, -34],
  			shadowSize: [41, 41]
        });

        // marker for red icon
        L.marker([44.638241, 10.457681], {icon: redIcon}).addTo(map)
            .bindPopup("Noi siamo qui!");

        // markers for shows in blue
        L.marker([44.636384, 10.472621], {icon: blueIcon}).addTo(map)
            .bindPopup("Fiera di Quattro Castella");
        L.marker([44.631604, 10.468628], {icon: blueIcon}).addTo(map)
            .bindPopup("Corteo Matildico");
      	L.marker([42.816780, -1.642770], {icon: blueIcon}).addTo(map)
            .bindPopup("Cabalgada des Reyes Magos");
      	L.marker([46.170647, 7.183192], {icon: blueIcon}).addTo(map)
            .bindPopup("Saillon");
      	L.marker([47.789907, 18.970054], {icon: blueIcon}).addTo(map)
            .bindPopup("Visegrad");
      	L.marker([1.278388, 103.843814], {icon: blueIcon}).addTo(map)
            .bindPopup("Singapore 2014");
      	L.marker([47.501834, 19.034011], {icon: blueIcon}).addTo(map)
            .bindPopup("Budapest");
      L.marker([50.455282, 8.296275], {icon: blueIcon}).addTo(map)
            .bindPopup("Freienfels");
      L.marker([49.794144, 5.067237], {icon: blueIcon}).addTo(map)
            .bindPopup("Bouillon 2024");
      L.marker([43.695455, 11.817433], {icon: blueIcon}).addTo(map)
            .bindPopup("Bandiere sotto le stelle 2023"); //Bibbiena
      L.marker([44.495931, 10.599776], {icon: blueIcon}).addTo(map)
            .bindPopup("Tavola di Bisanzio");
      L.marker([44.598216, 10.687270], {icon: blueIcon}).addTo(map)
            .bindPopup("Palio dell'Angelica");
      L.marker([44.698945, 10.626687], {icon: blueIcon}).addTo(map)
            .bindPopup("Giareda Reggio Emilia"); //Bibbiena
      L.marker([44.835468, 11.619405], {icon: blueIcon}).addTo(map)
            .bindPopup("Corteo storico di Ferrara 2024");
      L.marker([44.582234, 10.425912], {icon: blueIcon}).addTo(map)
            .bindPopup("Rievocazione storica canossana"); //Rossena
      L.marker([45.888571, 10.843278], {icon: blueIcon}).addTo(map)
            .bindPopup("Notte di fiaba Riva del Garda 2022"); 
      L.marker([45.133424, 10.024847], {icon: blueIcon}).addTo(map)
            .bindPopup("Fiera del Torrone"); //Cremona
      L.marker([39.309150, 8.533945], {icon: blueIcon}).addTo(map)
            .bindPopup("Iglesias 2009");
      L.marker([43.638902, 5.096731], {icon: blueIcon}).addTo(map)
            .bindPopup("Provenza 2011"); //Rossena
      L.marker([-28.265865, -52.411151], {icon: blueIcon}).addTo(map)
            .bindPopup("Festival Folklore Paso Velvet Passo Fundo 2013"); //brasile
      L.marker([50.355030, 3.513874], {icon: blueIcon}).addTo(map)
            .bindPopup("Valenciennes 2010");
      L.marker([44.865958, 10.061940], {icon: blueIcon}).addTo(map)
            .bindPopup("PRIMA USCITA Fidenza 2009");
       L.marker([44.628998, 9.731516], {icon: blueIcon}).addTo(map)
            .bindPopup("Bardi"); 
      L.marker([44.7145288,10.6470988], {icon: blueIcon}).addTo(map)
            .bindPopup("Coppia Italia 2021");
      L.marker([44.919111, 10.653639], {icon: blueIcon}).addTo(map)
            .bindPopup("Gnoccata di Guastalla");
      L.marker([44.804868, 10.326371], {icon: blueIcon}).addTo(map)
            .bindPopup("Palio di Parma");
      
