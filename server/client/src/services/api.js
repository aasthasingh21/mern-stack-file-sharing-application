import axios from 'axios';

const API_URI = '';

const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('error with api', error.message);
    }
}

// { axios return these 3 things and data has all the data so we return response.data
//     header:
//     requestHeaders:
//     data:
// }

export default uploadFile;