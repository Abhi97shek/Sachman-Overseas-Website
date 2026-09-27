export type Coordinates = { lat: number; lng: number };

const EARTH_KM = 6371;

function toRad(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function distanceKm(from: Coordinates, to: Coordinates) {
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(from.lat)) * Math.cos(toRad(to.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_KM * Math.asin(Math.min(1, Math.sqrt(a)));
}

export function formatDistance(km: number) {
  if (km < 0.12) return "under 100 m";
  if (km < 1) return `${Math.round(km * 1000)} m`;
  if (km < 10) return `${km.toFixed(1)} km`;
  return `${Math.round(km)} km`;
}
