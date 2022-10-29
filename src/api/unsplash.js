import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IZVhglLZM12ATTyU36RX8fo6i3d-dC2P3xy1M91ouFI",
  },
});
