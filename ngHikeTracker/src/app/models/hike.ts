export class Hike {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  difficulty: number;
  elevation: number;
  trailLength: number;
  description: string;
  imageUrl: string;
  dogsAllowed: boolean;

  constructor(
    id: number = 0,
    name: string = '',
    latitude: number = 0,
    longitude: number = 0,
    difficulty: number = 0,
    elevation: number = 0,
    trailLength: number = 0,
    description: string = '',
    imageUrl: string = '',
    dogsAllowed: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.difficulty = difficulty;
    this.elevation = elevation;
    this.trailLength = trailLength;
    this.description = description;
    this.imageUrl = imageUrl;
    this.dogsAllowed = dogsAllowed;
  }
}
