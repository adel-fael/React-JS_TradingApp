import axios from "axios"

//https://finnhub.io/dashboard
const TOKEN = "ccd2osaad3ibmia7tntg"


export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
      token: TOKEN
    }
  })