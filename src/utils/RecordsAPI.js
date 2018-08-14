import axios from 'axios';
const api = process.env.REACT_APP_RECORDS_API_URL || "https://5b718700586eb5001463a738.mockapi.io"

export const getAll = () => axios.get(`${api}/api/v1/records`)
