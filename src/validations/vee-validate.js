import { required, email, confirmed, integer, min_value, max_value } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend('required', {
    ...required,
    message: "Поле {_field_} обов'язкове"
});

extend("email", {
    ...email,
    message: "Поле {_field_} заповнено некоректно"
});

extend("confirmed", {
    ...confirmed,
    message: "Паролі не співпадають"
})

extend("integer", {
    ...integer,
    message: "Поле {_field_} має бути цілим числом"
})

extend("min_value", {
    ...min_value,
    message: "Поле {_field_} має бути не меньше 10 ₴"
})

extend("max_value", {
    ...max_value,
    message: "Недостатньо коштів"
})
