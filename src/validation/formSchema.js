import * as yup from 'yup';


const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name must be at least 2 characters')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .required('what size do you want your pie to be?'),
    // .oneOf(['sm', 'md', 'lg'], 'please pick a size'),
    sauce: yup
    .string()
    .required('what kind of sauce would you like?'),
    topping: yup
    .string()
    .oneOf(['Pepperoni', 'Grilled Chicker', 'Diced Tomato', 'Spinach' ], 'pick a topping!')
})

export default formSchema;