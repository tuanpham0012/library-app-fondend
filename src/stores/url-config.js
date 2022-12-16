const version = 'v1';

const base_url = 'http://library-app-backend.test/api/' + version;

export const url_author = {
    RESOURCE: base_url + '/authors',
    UPLOAD_FILE: base_url + '/authors/update_image',
};

export const url_country = {
    RESOURCE: base_url + '/countries'
}