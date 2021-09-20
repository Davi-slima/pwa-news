/* eslint-disable import/no-anonymous-default-export */
const params = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
};

const URL = "https://stormy-brook-79548.herokuapp.com/api";

const getNews = (subject) => {
    return (
        fetch(`${URL}/${subject}`, params)
            .then((response) => response.json())
            .catch((err) => {
                console.error('Error', err)
            })
    );
};

const getNewsById = (subject, id) => {
    return (
        fetch(`${URL}/${subject}/${id}`, params)
            .then((response) => response.json())
            .catch((err) => {
                console.error('Error', err)
            })
    );
};

export default {
    getNews,
    getNewsById,
};