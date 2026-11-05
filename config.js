window.API_URL = 'https://teslasound-key.micro-agha.workers.dev/';

// Map services. To switch to another provider (for example a keyed tile service) edit these and upload this file only.
window.MAP_CFG = {
  tile: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  search: 'https://nominatim.openstreetmap.org/search',
  route: 'https://router.project-osrm.org/route/v1/driving',
  // Offline map files (made with build_offline.py). A folder next to index.html, or any full https address that allows CORS.
  data: 'data/',
  // Arabic voice from the internet (Google Cloud Text-to-Speech). Put your own API key between the quotes.
  // Restrict the key to this website and to the Text-to-Speech API only. Leave it empty to use the browser voice.
  // Destinations from the phone: the address of your inbox Worker (see the guide). Leave empty to hide the QR code.
  inbox: 'https://tesla-inbox.micro-agha.workers.dev/',
  yt: { key: 'AIzaSyBV6Jd3MI0DbnmqmdlsZJL2JwNo9EQ9_DE'},
  tts: { key: '', voice: 'ar-XA-Wavenet-B', lang: 'ar-XA', rate: 0.95 }
};
