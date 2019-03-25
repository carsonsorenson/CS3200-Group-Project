let ApiService = class ApiService {
    constructor() {
        this.apiProtocol = 'https:';
        this.apiHost = 'www.potterapi.com/v1/'
        this.key = '$2a$10$XwkyvUtOgjvc.NosJIyRIewmKets3LZ5UTRtf/yOj7A9AH3ITRd.6';
    }

    get apiLocation() {
        return `${this.apiProtocol}//${this.apiHost}`;
    }

    get apiKey() {
        return `key=${this.key}`;
    }

    getSortingHat() {
        let request = `${this.apiLocation}sortingHat`;
        console.log(request);
        return request;
    }

    getCharacters(house) {
        let request = `${this.apiLocation}characters/?${this.apiKey}&house=${house}`;
        console.log(request);
        return request;
    }

    getSpells() {
        let request = `${this.apiLocation}spells/?${this.apiKey}`
        console.log(request);
        return request;
    }
}

const apiService = new ApiService();
export default apiService;