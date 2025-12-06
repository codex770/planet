import { http, httpFile } from './http_service';

export function loadSlider() {
    return http().get('sliders');
}

export function getPlanet(name) {
    return http().get(`all-planet/${name}`);
}

export function createSlider(data){
    return http().post('/sliders', data);
}

export function deleteSlider(id) {
    return http().delete(`sliders/${id}`);
}

export function updateSlider(id, data) {
    return http().put(`sliders/${id}`, data);
}

/////////// end of slider ///////////////

export function loadSeo() {
    return http().get('seos');
}

export function createSeo(data){
    return http().post('/seos', data);
}

export function deleteSeo(id) {
    return http().delete(`seos/${id}`);
}

export function updateSeo(id, data) {
    return http().put(`seos/${id}`, data);
}

/////// end of seo  /////////

export function loadFakten() {
    return http().get('faktens');
}

export function createFakten(data){
    return http().post('/faktens', data);
}

export function deleteFakten(id) {
    return http().delete(`faktens/${id}`);
}

export function updateFakten(id, data) {
    return http().put(`faktens/${id}`, data);
}

///////// end of fakten ///////


//////  start of Headings ////////
export function loadHeading() {
    return http().get('headings');
}

export function createHeading(data){
    return http().post('/headings', data);
}

export function deleteHeading(id) {
    return http().delete(`headings/${id}`);
}

export function updateHeading(id, data) {
    return httpFile().post(`headings/${id}`, data);
}