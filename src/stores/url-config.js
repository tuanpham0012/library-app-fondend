const version = 'v1';

const base_url = 'http://manage-library-app.test/api/' + version;

export const url_author = {
    RESOURCE: base_url + '/authors',
    UPLOAD_FILE: base_url + '/authors/upload_image'
};

export const url_country = {
    RESOURCE: base_url + '/countries'
}