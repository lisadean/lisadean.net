/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

// https://www.mapmarker.io/documentation/font-awesome/v6/pins
let pinOptions = {
    textColor: 'black',
    imageAnchor: [0.5, 1],
    offsetY: 20,
    font: 'bold 20px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
};
let portalPins = {
  ...pinOptions,
  image: 'portal.svg',
};
let portalPinsJason = {
  ...pinOptions,
  offsetY: 20,
  offsetX: -20,
  image: 'portal.svg',
};
let portalPinsAC1 = {
  ...pinOptions,
  offsetY: 20,
  offsetX: 20,
  image: 'portal.svg',
};
let poiPins = {
  ...pinOptions,
    image: 'poi.svg',
    // https://www.mapmarker.io/api/v3/font-awesome/v6/pin?icon=fa-solid%20fa-star&size=75&color=FFF&background=1434A4&hoffset=0&voffset=0
};

UnminedCustomMarkers = {
isEnabled: true,
    markers: [
{
      x: 1295,
      z: 3482,
      text: 'Stronghold',
      ...portalPins,
    },
    {
      x: 61,
      z: -276,
      text: 'Lisa',
      ...portalPins,
    },
    {
      x: 79,
      z: -309,
      text: 'Mob Farm',
      ...portalPins,
    },
    {
      x: -466,
      z: -128,
      text: 'TradesMart',
      ...portalPins,
    },
    {
      x: -1494,
      z: -155,
      text: 'Paul Home 1',
      ...portalPins,
    },
    {
      x: -4123,
      z: -4970,
      text: 'Snow Village',
      ...portalPins,
    },
    {
      x: -2593,
      z: -2455,
      text: 'Desert Village',
      ...portalPins,
    },
    {
      x: 234,
      z: -290,
      text: 'Summer',
      ...portalPins,
    },
    {
      x: 203,
      z: -156,
      text: 'Ty',
      ...portalPins,
    },
    {
      x: 368,
      z: 1412,
      text: 'Iron Farm',
      ...portalPins,
    },
    {
      x: 144,
      z: 2945,
      text: 'Paul Village 1',
      ...portalPins,
    },
    {
      x: 5659,
      z: -1269,
      text: 'Sarah',
      ...portalPins,
    },
    {
      x: 5355,
      z: -5908,
      text: 'Nether Fortress',
      ...portalPins,
    },
    {
      x: 579,
      z: -857,
      text: 'Djay',
      ...portalPins,
    },
    {
      x: -4103,
      z: -923,
      text: 'Djay Village',
      ...portalPins,
    },
    {
      x: -4230,
      z: -5008,
      text: 'Frog Habitat Gamma',
      ...poiPins
    },
    {
      x: 368,
      z: 826,
      text: 'Jason',
      ...portalPinsJason
    },
    {
      x: 380,
      z: 839,
      text: 'AC1',
      ...portalPinsAC1
    },
    {
      x: 1211,
      z: 2269,
      text: 'AC2',
      ...portalPins
    },
    {
      x: 1865,
      z: 2379,
      text: 'AC3',
      ...portalPins
    },
    {
      x: 1744,
      z: -6557,
      text: 'Ice Station Zero',
      ...portalPins
    },
    {
      x: -4305,
      z: -740,
      text: 'AC4',
      ...portalPins
    }
  ],
};

        // Example 1: Simple marker
        // {
//     x: -200,
            //     z: -200,
            //     image: "custom.pin.png",
            //     imageAnchor: [0.5, 1],
            //     imageScale: 0.5,
        // },

        // Example 2: Marker with text
        // {
//     x: 0,
            //     z: 0,
            //     image: "custom.pin.png",
            //     imageAnchor: [0.5, 1],
            //     imageScale: 0.5,
            //     text: "Marker with text",
            //     textColor: "red", 
            //     offsetX: 0,
            //     offsetY: 20,
            //     font: "bold 20px Calibri,sans serif",
        // },

        // Example 3: Text only
        // {
//     x: 200,
            //     z: 200,
            //     text: "Text only", 
            //     textColor: "yellow", 
            //     offsetX: 0,
            //     offsetY: 0, 
            //     font: "bold 50px Calibri,sans serif",
        // },
