import {getCurrentInstance  as _getCurrentInstance} from 'vue';

export function getCurrentInstance() {
    const instance = _getCurrentInstance();
    if (!instance) {
        throw new Error('getCurrentInstance called outside of setup');
    }
    return instance;
}