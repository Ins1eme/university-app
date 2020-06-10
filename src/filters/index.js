import Vue from 'vue';
import format from 'date-fns/format';
import store from '@/store';

Vue.filter('date', function(date) {
    if (date) {
        return format(new Date(date), "yyyy-MM-dd");
    }
});

Vue.filter('faculty', function(facultyId) {
    if (facultyId) {
        const faculty = store.state.data.facultiesList.find(it => it.id == facultyId);
        return faculty && faculty.name;
    }
});

Vue.filter('currency', function(currency) {
    return currency || 0 + ' ₴';
});

Vue.filter('maxLength', function(string, length) {
    if (JSON.parse(string)) {
        return string.slice(0, length) + '...';
    }
});
