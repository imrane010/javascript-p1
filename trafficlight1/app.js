function changeTrafficLight() {
    // Stap 2: Variabele aanmaken en het element met id "traffic-light" ophalen
    let trafficLight = document.getElementById('traffic-light-container');
  
    // Stap 3: Huidige afbeelding controleren en veranderen
    switch (trafficLight.src) {
      case 'c:\Users\imrane outmani\Downloads\rood.jpg':
        trafficLight.src = 'c:\Users\imrane outmani\Downloads\groen.jpg';
        break;
      case 'c:\Users\imrane outmani\Downloads\groen.jpg':
        trafficLight.src = 'c:\Users\imrane outmani\Downloads\oranje.jpg';
        break;
      case 'c:\Users\imrane outmani\Downloads\oranje.jpg':
        trafficLight.src = 'c:\Users\imrane outmani\Downloads\rood.jpg';
        break;
      default:
        console.log('Onbekende afbeelding geladen');
    }
    // Console.log toevoegen om te controleren of het werkt
    console.log('Het werkt!');
  }
  