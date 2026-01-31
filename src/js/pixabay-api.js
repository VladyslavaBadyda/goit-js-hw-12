import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const API = '54348256-4fe7e6271296be96900661c2d';
export const PER_PAGE = 15;

    export async function getImagesByQuery(query, page) {
    const { data } = await axios.get(BASEURL, {
    params: {
        key: API,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE,
    },
    });
    return data;
    }