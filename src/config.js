function getApiBaseUrl() {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        console.log("print" + process.env.API_BASE_URL || 'https://securecarpark-frontend-bcbdef122ce4.herokuapp.com/api');
        return process.env.API_BASE_URL || 'https://securecarpark-frontend-bcbdef122ce4.herokuapp.com/api';
    } else if (!window.API_BASE_URL) {
        throw new Error('FUNIL_BASE_URL is not defined');
    } else {
        return window.API_BASE_URL;
    }
}

export const apiBaseUrl = getApiBaseUrl();