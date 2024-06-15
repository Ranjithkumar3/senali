import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  outdoorFurnitureTiles: any = [
    {"heading": "Outdoor sofa", "src": "assets/modular-furnitures/outdoor-sofa.jpg"},
    {"heading": "Apricot chairs", "src": "assets/modular-furnitures/apricot-chair.jpg"},
    {"heading": "Swing chairs", "src": "assets/modular-furnitures/swing-chair.jpg"}
  ];

  seatingTiles: any = [
    {"heading": "Training chairs", "src": "assets/seating/training-chair.jpg"},
    {"heading": "Cafeteria tables & chairs", "src": "assets/seating/cafeteria-table.jpg"},
    {"heading": "Metro chairs", "src": "assets/seating/metro-chair.jpg"}
  ];

  storageTiles: any = [
    {"heading": "Pedestals", "src": "assets/storage/pedestals.jpg"},
    {"heading": "Racks", "src": "assets/storage/racks.jpg"},
    {"heading": "Lockers", "src": "assets/storage/lockers.jpg"}
  ];
}
