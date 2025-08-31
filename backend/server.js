import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Nearby cafés
app.get("/api/cafes/nearby", async (req, res) => {
  try {
    const { lat, lng, radius = 1500 } = req.query;

    const url = "https://places.googleapis.com/v1/places:searchNearby";
    const body = {
      locationRestriction: {
        circle: {
          center: { latitude: +lat, longitude: +lng },
          radius: +radius,
        },
      },
      includedTypes: ["cafe"],
      maxResultCount: 20,
      languageCode: "en",
      regionCode: "IN",
    };

    const { data } = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
        "X-Goog-FieldMask": [
          "places.id",
          "places.displayName",
          "places.location",
          "places.formattedAddress",
          "places.rating",
          "places.userRatingCount",
          "places.iconMaskBaseUri",
          "places.photos",
        ].join(","),
      },
    });

    res.json(data.places ?? []);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

// Text search
app.get("/api/cafes/search", async (req, res) => {
  try {
    const { q, lat, lng } = req.query;

    const url = "https://places.googleapis.com/v1/places:searchText";
    const body = {
      textQuery: q || "cafes",
      locationBias:
        lat && lng
          ? {
              circle: {
                center: { latitude: +lat, longitude: +lng },
                radius: 3000,
              },
            }
          : undefined,
    };

    const { data } = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
        "X-Goog-FieldMask": [
          "places.id",
          "places.displayName",
          "places.location",
          "places.formattedAddress",
          "places.rating",
          "places.userRatingCount",
          "places.iconMaskBaseUri",
          "places.photos",
        ].join(","),
      },
    });

    res.json(data.places ?? []);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

// GET /api/photo?name=ENCODED_NAME&maxwidth=600
// app.get("/api/photo", async (req, res) => {
//   const { name, maxwidth = 600 } = req.query;
//   // build the Places Photos GET URL (or use the v1 photos endpoint)
//   const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photoreference=${name}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
//   // Optionally stream response
//   const response = await axios.get(url, { responseType: "stream" });
//   response.data.pipe(res);
// });

// backend server.js
app.get("/api/photo", async (req, res) => {
  const { name /* this should be the photoReference */, maxwidth = 600 } =
    req.query;
  // validate name
  if (!name) return res.status(400).json({ error: "missing photo reference" });

  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photo_reference=${name}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  const response = await axios.get(url, { responseType: "stream" });
  res.setHeader(
    "Content-Type",
    response.headers["content-type"] || "image/jpeg"
  );
  response.data.pipe(res);
});

const port = process.env.PORT || 4000;
app.get("/health", (_req, res) => res.json({ ok: true }));
app.listen(port, () => console.log(`API on http://localhost:${port}`));
