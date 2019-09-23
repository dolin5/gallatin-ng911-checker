import GeoJSONLayer from "esri/layers/GeoJSONLayer";
import TileLayer from "esri/layers/TileLayer";
import VectorTileLayer from "esri/layers/VectorTileLayer";
import EsriMap from "esri/Map";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import FeatureLayer from "esri/layers/FeatureLayer";
import Graphic from "esri/Graphic";
import watchUtils from "esri/core/watchUtils";
import geometryEngine from "esri/geometry/geometryEngine";

/* const url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

const template = {
  title: "Earthquake Info",
  content: "Magnitude {mag} {type} hit {place} on {time:DateString}"
};

const renderer = {
  type: "simple",
  field: "mag",
  symbol: {
    type: "simple-marker",
    color: "orange",
    outline: {
      color: "white"
    }
  },
  visualVariables: [
    {
      type: "size",
      field: "mag",
      stops: [
        {
          value: 2.5,
          size: "4px"
        },
        {
          value: 8,
          size: "40px"
        }
      ]
    }
  ]
};

export const layer = new GeoJSONLayer({
  url,
  copyright: "USGS Earthquakes",
  popupTemplate: template,
  renderer
} as any); */

const structureLayer = new FeatureLayer({
  portalItem: {
    id: "15bbc0736ed546708b5a064800e89077"
  }
})

export const map = new EsriMap({
  basemap: {
    baseLayers: [
      new TileLayer({
        portalItem: {
          // world hillshade
          id: "1b243539f4514b6ba35e7d995890db1d"
        }
      }),
      new VectorTileLayer({
        portalItem: {
          // topographic
          id: "1fff4b7b95be4741bd1ff6bc0246dee0"
        }
      })
    ]
  },
  layers: [structureLayer]
});
