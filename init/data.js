const sampleListings = [
  {
    "title": "Beautiful Stay in Santorini",
    "description": "Enjoy a relaxing vacation in the heart of Santorini, Greece. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "price": 600,
    "location": "Santorini",
    "country": "Greece",
    "category": "trending"
  },
  {
    "title": "Beautiful Stay in Kyoto",
    "description": "Enjoy a relaxing vacation in the heart of Kyoto, Japan. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 700,
    "location": "Kyoto",
    "country": "Japan",
    "category": "rooms"
  },
  {
    "title": "Beautiful Stay in Queenstown",
    "description": "Enjoy a relaxing vacation in the heart of Queenstown, New Zealand. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 800,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "iconic cities"
  },
  {
    "title": "Beautiful Stay in Banff",
    "description": "Enjoy a relaxing vacation in the heart of Banff, Canada. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 900,
    "location": "Banff",
    "country": "Canada",
    "category": "mountains"
  },
  {
    "title": "Beautiful Stay in Paris",
    "description": "Enjoy a relaxing vacation in the heart of Paris, France. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/210488/pexels-photo-210488.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1000,
    "location": "Paris",
    "country": "France",
    "category": "castles"
  },
  {
    "title": "Beautiful Stay in Barcelona",
    "description": "Enjoy a relaxing vacation in the heart of Barcelona, Spain. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/953241/pexels-photo-953241.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1100,
    "location": "Barcelona",
    "country": "Spain",
    "category": "amazing pools"
  },
  {
    "title": "Beautiful Stay in New York",
    "description": "Enjoy a relaxing vacation in the heart of New York, USA. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1200,
    "location": "New York",
    "country": "USA",
    "category": "camping"
  },
  {
    "title": "Beautiful Stay in Marrakech",
    "description": "Enjoy a relaxing vacation in the heart of Marrakech, Morocco. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1300,
    "location": "Marrakech",
    "country": "Morocco",
    "category": "farms"
  },
  {
    "title": "Beautiful Stay in Reykjavik",
    "description": "Enjoy a relaxing vacation in the heart of Reykjavik, Iceland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1841552/pexels-photo-1841552.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1400,
    "location": "Reykjavik",
    "country": "Iceland",
    "category": "arctic"
  },
  {
    "title": "Beautiful Stay in Bali",
    "description": "Enjoy a relaxing vacation in the heart of Bali, Indonesia. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1500,
    "location": "Bali",
    "country": "Indonesia",
    "category": "trending"
  },
  {
    "title": "Beautiful Stay in Cappadocia",
    "description": "Enjoy a relaxing vacation in the heart of Cappadocia, Turkey. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/3889704/pexels-photo-3889704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "price": 600,
    "location": "Cappadocia",
    "country": "Turkey",
    "category": "rooms"
  },
  {
    "title": "Beautiful Stay in Rome",
    "description": "Enjoy a relaxing vacation in the heart of Rome, Italy. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 700,
    "location": "Rome",
    "country": "Italy",
    "category": "iconic cities"
  },
  {
    "title": "Beautiful Stay in Prague",
    "description": "Enjoy a relaxing vacation in the heart of Prague, Czech Republic. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 800,
    "location": "Prague",
    "country": "Czech Republic",
    "category": "mountains"
  },
  {
    "title": "Beautiful Stay in Sydney",
    "description": "Enjoy a relaxing vacation in the heart of Sydney, Australia. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 900,
    "location": "Sydney",
    "country": "Australia",
    "category": "castles"
  },
  {
    "title": "Beautiful Stay in Amsterdam",
    "description": "Enjoy a relaxing vacation in the heart of Amsterdam, Netherlands. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/210488/pexels-photo-210488.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1000,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "amazing pools"
  },
  {
    "title": "Beautiful Stay in Dubai",
    "description": "Enjoy a relaxing vacation in the heart of Dubai, UAE. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/953241/pexels-photo-953241.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1100,
    "location": "Dubai",
    "country": "UAE",
    "category": "camping"
  },
  {
    "title": "Beautiful Stay in Zurich",
    "description": "Enjoy a relaxing vacation in the heart of Zurich, Switzerland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1200,
    "location": "Zurich",
    "country": "Switzerland",
    "category": "farms"
  },
  {
    "title": "Beautiful Stay in Cape Town",
    "description": "Enjoy a relaxing vacation in the heart of Cape Town, South Africa. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1300,
    "location": "Cape Town",
    "country": "South Africa",
    "category": "arctic"
  },
  {
    "title": "Beautiful Stay in Petra",
    "description": "Enjoy a relaxing vacation in the heart of Petra, Jordan. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1841552/pexels-photo-1841552.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1400,
    "location": "Petra",
    "country": "Jordan",
    "category": "trending"
  },
  {
    "title": "Beautiful Stay in Cusco",
    "description": "Enjoy a relaxing vacation in the heart of Cusco, Peru. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1500,
    "location": "Cusco",
    "country": "Peru",
    "category": "rooms"
  },
  {
    "title": "Beautiful Stay in Kathmandu",
    "description": "Enjoy a relaxing vacation in the heart of Kathmandu, Nepal. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/18647876/pexels-photo-18647876/free-photo-of-aerial-view-of-houses-in-a-mountain-village-of-ghandruk-in-nepal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "price": 600,
    "location": "Kathmandu",
    "country": "Nepal",
    "category": "iconic cities"
  },
  {
    "title": "Beautiful Stay in Hanoi",
    "description": "Enjoy a relaxing vacation in the heart of Hanoi, Vietnam. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/6027405/pexels-photo-6027405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "price": 700,
    "location": "Hanoi",
    "country": "Vietnam",
    "category": "mountains"
  },
  {
    "title": "Beautiful Stay in Seoul",
    "description": "Enjoy a relaxing vacation in the heart of Seoul, South Korea. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 800,
    "location": "Seoul",
    "country": "South Korea",
    "category": "castles"
  },
  {
    "title": "Beautiful Stay in Vienna",
    "description": "Enjoy a relaxing vacation in the heart of Vienna, Austria. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 900,
    "location": "Vienna",
    "country": "Austria",
    "category": "amazing pools"
  },
  {
    "title": "Beautiful Stay in Helsinki",
    "description": "Enjoy a relaxing vacation in the heart of Helsinki, Finland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/210488/pexels-photo-210488.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1000,
    "location": "Helsinki",
    "country": "Finland",
    "category": "camping"
  },
  {
    "title": "Beautiful Stay in Bangkok",
    "description": "Enjoy a relaxing vacation in the heart of Bangkok, Thailand. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/953241/pexels-photo-953241.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1100,
    "location": "Bangkok",
    "country": "Thailand",
    "category": "farms"
  },
  {
    "title": "Beautiful Stay in Istanbul",
    "description": "Enjoy a relaxing vacation in the heart of Istanbul, Turkey. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1200,
    "location": "Istanbul",
    "country": "Turkey",
    "category": "arctic"
  },
  {
    "title": "Beautiful Stay in Berlin",
    "description": "Enjoy a relaxing vacation in the heart of Berlin, Germany. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1300,
    "location": "Berlin",
    "country": "Germany",
    "category": "trending"
  },
  {
    "title": "Beautiful Stay in Lisbon",
    "description": "Enjoy a relaxing vacation in the heart of Lisbon, Portugal. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1841552/pexels-photo-1841552.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1400,
    "location": "Lisbon",
    "country": "Portugal",
    "category": "rooms"
  },
  {
    "title": "Beautiful Stay in Edinburgh",
    "description": "Enjoy a relaxing vacation in the heart of Edinburgh, Scotland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1500,
    "location": "Edinburgh",
    "country": "Scotland",
    "category": "iconic cities"
  },
  {
    "title": "Beautiful Stay in Stockholm",
    "description": "Enjoy a relaxing vacation in the heart of Stockholm, Sweden. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/39378/sunset-channel-water-evening-39378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "price": 600,
    "location": "Stockholm",
    "country": "Sweden",
    "category": "mountains"
  },
  {
    "title": "Beautiful Stay in Oslo",
    "description": "Enjoy a relaxing vacation in the heart of Oslo, Norway. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 700,
    "location": "Oslo",
    "country": "Norway",
    "category": "castles"
  },
  {
    "title": "Beautiful Stay in Warsaw",
    "description": "Enjoy a relaxing vacation in the heart of Warsaw, Poland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 800,
    "location": "Warsaw",
    "country": "Poland",
    "category": "amazing pools"
  },
  {
    "title": "Beautiful Stay in Tallinn",
    "description": "Enjoy a relaxing vacation in the heart of Tallinn, Estonia. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 900,
    "location": "Tallinn",
    "country": "Estonia",
    "category": "camping"
  },
  {
    "title": "Beautiful Stay in Dublin",
    "description": "Enjoy a relaxing vacation in the heart of Dublin, Ireland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/210488/pexels-photo-210488.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1000,
    "location": "Dublin",
    "country": "Ireland",
    "category": "farms"
  },
  {
    "title": "Beautiful Stay in Brussels",
    "description": "Enjoy a relaxing vacation in the heart of Brussels, Belgium. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/953241/pexels-photo-953241.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1100,
    "location": "Brussels",
    "country": "Belgium",
    "category": "arctic"
  },
  {
    "title": "Beautiful Stay in Ljubljana",
    "description": "Enjoy a relaxing vacation in the heart of Ljubljana, Slovenia. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1200,
    "location": "Ljubljana",
    "country": "Slovenia",
    "category": "trending"
  },
  {
    "title": "Beautiful Stay in Valencia",
    "description": "Enjoy a relaxing vacation in the heart of Valencia, Spain. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1300,
    "location": "Valencia",
    "country": "Spain",
    "category": "rooms"
  },
  {
    "title": "Beautiful Stay in Porto",
    "description": "Enjoy a relaxing vacation in the heart of Porto, Portugal. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1841552/pexels-photo-1841552.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1400,
    "location": "Porto",
    "country": "Portugal",
    "category": "iconic cities"
  },
  {
    "title": "Beautiful Stay in Salzburg",
    "description": "Enjoy a relaxing vacation in the heart of Salzburg, Austria. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1500,
    "location": "Salzburg",
    "country": "Austria",
    "category": "mountains"
  },
  {
    "title": "Beautiful Stay in Lucerne",
    "description": "Enjoy a relaxing vacation in the heart of Lucerne, Switzerland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/2710052/pexels-photo-2710052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "price": 600,
    "location": "Lucerne",
    "country": "Switzerland",
    "category": "castles"
  },
  {
    "title": "Beautiful Stay in Santorini",
    "description": "Enjoy a relaxing vacation in the heart of Santorini, Greece. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 700,
    "location": "Santorini",
    "country": "Greece",
    "category": "amazing pools"
  },
  {
    "title": "Beautiful Stay in Kyoto",
    "description": "Enjoy a relaxing vacation in the heart of Kyoto, Japan. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 800,
    "location": "Kyoto",
    "country": "Japan",
    "category": "camping"
  },
  {
    "title": "Beautiful Stay in Queenstown",
    "description": "Enjoy a relaxing vacation in the heart of Queenstown, New Zealand. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 900,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "farms"
  },
  {
    "title": "Beautiful Stay in Banff",
    "description": "Enjoy a relaxing vacation in the heart of Banff, Canada. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/210488/pexels-photo-210488.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1000,
    "location": "Banff",
    "country": "Canada",
    "category": "arctic"
  },
  {
    "title": "Beautiful Stay in Paris",
    "description": "Enjoy a relaxing vacation in the heart of Paris, France. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/953241/pexels-photo-953241.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1100,
    "location": "Paris",
    "country": "France",
    "category": "trending"
  },
  {
    "title": "Beautiful Stay in Barcelona",
    "description": "Enjoy a relaxing vacation in the heart of Barcelona, Spain. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1200,
    "location": "Barcelona",
    "country": "Spain",
    "category": "rooms"
  },
  {
    "title": "Beautiful Stay in New York",
    "description": "Enjoy a relaxing vacation in the heart of New York, USA. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1300,
    "location": "New York",
    "country": "USA",
    "category": "iconic cities"
  },
  {
    "title": "Beautiful Stay in Marrakech",
    "description": "Enjoy a relaxing vacation in the heart of Marrakech, Morocco. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1841552/pexels-photo-1841552.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1400,
    "location": "Marrakech",
    "country": "Morocco",
    "category": "mountains"
  },
  {
    "title": "Beautiful Stay in Reykjavik",
    "description": "Enjoy a relaxing vacation in the heart of Reykjavik, Iceland. Perfect for your next getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1500,
    "location": "Reykjavik",
    "country": "Iceland",
    "category": "castles"
  },
  {
    "title": "Beautiful Stay in Goa",
    "description": "Enjoy a relaxing vacation in the heart of Goa, India. Perfect for your next beachside getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 1200,
    "location": "Goa",
    "country": "India",
    "category": "amazing pools"
  },
  {
    "title": "Beautiful Stay in Manali",
    "description": "Enjoy a relaxing vacation in the heart of Manali, India. Perfect for your next mountain retreat.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/1666024/pexels-photo-1666024.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    "price": 900,
    "location": "Manali",
    "country": "India",
    "category": "mountains"
  },
  {
    "title": "Beautiful Stay in Udaipur",
    "description": "Enjoy a relaxing vacation in the heart of Udaipur, India. Perfect for your next royal experience.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.pexels.com/photos/15534234/pexels-photo-15534234/free-photo-of-chair-on-balcony-with-sea-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    "price": 1000,
    "location": "Udaipur",
    "country": "India",
    "category": "castles"
  },

];

module.exports = { data: sampleListings };
