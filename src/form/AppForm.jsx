import { Formik , Form , Field, ErrorMessage} from "formik";

function AppForm(){
    return(
        <Formik
            initialValues={{message: "Hola te contacto de ..."}}
            validate={values=> {
                name: "Debe ser completado"
                let errors = {};
                if(!values.name){
                    errors.name = "Este campo es requerido"
                }else if(!values.email){
                    errors.email = "Este campo es requerido"
                }else if(
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ){
                    errors.email = "El correo no es valido "
                }
                return errors;
            }}
            onSubmit={
                (values, {setSubmitting}) => {
                    console.log(values);
                    setSubmitting(false);
                }
            }
        >
            
            {
                //En un arrow function si no hay llaves, el retorno es implicito 
                ({isSubmitting, values}) => (
                    <Form>
                        <div>
                            <label htmlFor="name"> Name </label>
                            <Field type="text" name="name"></Field>
                            <ErrorMessage name="name" component="p"></ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor="email"> Email </label>
                            <Field type="email" name="email"></Field>
                            <ErrorMessage name="email" component="p"></ErrorMessage>

                        </div>
                        <div>
                            <label htmlFor="message"> Message </label>
                            <Field type="textarea" value={values.message} name="message"></Field>
                        </div>
                        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar mensaje"}</button>
                    </Form>
                )

            }
        </Formik>
    )
}

export default AppForm;