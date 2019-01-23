import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 85d836eedfd012e4e158379ea3add565ef669e6935f21c8f013fdb3d7b2ff274'
    }
});