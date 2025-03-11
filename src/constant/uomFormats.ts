export const UOM_FORMATS = [
  {
    key: "metric",
    label: "Metric",
    descriptionKey: "measurment_unit_formats_description.metric",
    units: {
      mass: "kg", // Kilogram
      length: "m", // Meter
      volume: "L", // Liter
      temperature: "°C", // Celcius
      area: "m²", // Square Meter
      speed: "km/h", // Kilometer per Hour
    },
  },
  {
    key: "imperial",
    label: "Imperial",
    descriptionKey: "measurment_unit_formats_description.imperial",
    units: {
      mass: "lb", // Pound
      length: "in", // Inci
      volume: "gal", // Gallon
      temperature: "°F", // Fahrenheit
      area: "ft²", // Square Foot
      speed: "mph", // Miles per Hour
    },
  },
  {
    key: "iso",
    label: "ISO",
    descriptionKey: "measurment_unit_formats_description.iso",
    units: {
      mass: "kg", // Kilogram (ISO 80000-4)
      length: "m", // Meter (ISO 80000-3)
      volume: "L", // Liter (ISO 80000-1)
      temperature: "K", // Kelvin (ISO 80000-5)
      area: "m²", // Square Meter (ISO 80000-3)
      speed: "m/s", // Meter per Second (ISO 80000-3)
    },
  },
];
