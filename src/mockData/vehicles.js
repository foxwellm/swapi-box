export const vehicleResults = [
          {
            "name": "Sand Crawler",
            "model": "Digger Crawler",
            "manufacturer": "Corellia Mining Corporation",
            "cost_in_credits": "150000",
            "length": "36.8",
            "max_atmosphering_speed": "30",
            "crew": "46",
            "passengers": "30",
            "cargo_capacity": "50000",
            "consumables": "2 months",
            "vehicle_class": "wheeled",
            "pilots": [],
            "films": [
              "https://swapi.co/api/films/5/",
              "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T15:36:25.724000Z",
            "edited": "2014-12-22T18:21:15.523587Z",
            "url": "https://swapi.co/api/vehicles/4/"
          },
          {
            "name": "T-16 skyhopper",
            "model": "T-16 skyhopper",
            "manufacturer": "Incom Corporation",
            "cost_in_credits": "14500",
            "length": "10.4",
            "max_atmosphering_speed": "1200",
            "crew": "1",
            "passengers": "1",
            "cargo_capacity": "50",
            "consumables": "0",
            "vehicle_class": "repulsorcraft",
            "pilots": [],
            "films": [
              "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T16:01:52.434000Z",
            "edited": "2014-12-22T18:21:15.552614Z",
            "url": "https://swapi.co/api/vehicles/6/"
          }
        ]

export const vehicleResultsCleaned = [
  {
    "name": "Sand Crawler",
    "model": "Digger Crawler",
    "class": "wheeled",
    "passengers": "30"
  },
  {
    "name": "T-16 skyhopper",
    "model": "T-16 skyhopper",
    "class": "repulsorcraft",
    "passengers": "1"
  }
]