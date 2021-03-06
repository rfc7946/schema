var LineStringCoordinates = require('./ref/LineStringCoordinates');
var BoundingBox = require('./ref/BoundingBox');

module.exports = {
  title: 'GeoJSON LineString',
  type: 'object',
  required: ['type', 'coordinates'],
  properties: {
    type: {
      type: 'string',
      enum: ['LineString']
    },
    coordinates: LineStringCoordinates,
    bbox: BoundingBox
  }
};
