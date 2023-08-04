import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID bY3pvaNri1iqaMDXKUC2pkj2J3D9oOngmVPjCn0HWtM',
          },
        params:{
            query: term,
        }
    });

    return response.data.results;
};
export default searchImages;