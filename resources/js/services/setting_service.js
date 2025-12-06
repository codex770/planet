import { http, httpFile } from './http_service';

export function loadGeneral() {
    return http().get('/general');
}

export function loadSocialLinks() {
    return http().get('/social-links');
}

export function loadSeoTags() {
    return http().get('/seo-tags');
}

export function loadUsers() {
    return http().get('/get-users');
}

export function loadAdminContact() {
    return http().get('/admin-contact');
}

export function loadAllContact() {
    return http().get('/all-contact');
}

export function updateContact(id, data){
    return http().post(`/update-contact/${id}`, data);
}

export function updateGeneral(id, data){
    return httpFile().post(`/update-general/${id}`, data);
}

export function deleteContact(id){
    return http().delete(`/delete-contact/${id}`);
}

export function updateSocialLinks(id, data){
    return http().post(`/update-social-links/${id}`, data);
}

export function updateSeoTags(id, data){
    return http().post(`/update-seo-tags/${id}`, data);
}

export function deleteUser(id){
    return http().delete(`/delete-user/${id}`);
}