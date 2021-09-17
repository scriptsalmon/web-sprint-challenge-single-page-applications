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
    sauce: yup
    .string()
    .required('what kind of sauce would you like?'),
    topping: yup
    .boolean()
    .oneOf([true], 'pick a topping!')
})

export default formSchema;