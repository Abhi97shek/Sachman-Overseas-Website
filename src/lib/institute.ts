export const instituteAddress =
  "2nd Floor, above Dashmesh Bajaj, Dalhousie Road, near Simbal Chowk, Pathankot, Punjab 145001";

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  instituteAddress,
)}&travelmode=driving`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  instituteAddress,
)}&z=16&output=embed`;
