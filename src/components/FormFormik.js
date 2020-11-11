import React, { useContext } from 'react'
import { Context } from "./Context"
import { Formik, useField } from "formik"
import { TextField, Button, Paper} from "@material-ui/core"
import * as yup from 'yup';

export default function Form() {
    let context = useContext(Context)

    const CustomTextField = ({ label, ...props }) => {

        const [field, meta] = useField(props)
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<TextField
            label={label}
            {...field}
            {...props}
            helperText={errorText}
            error={!!errorText}
            variant="outlined"
            className="text-input"
            autoComplete="off"
           
        />)
    }

    const validationSchema = yup.object({
        name: yup
            .string()
            .required()
            .max(100),
        email: yup
            .string()
            .email()
            .required()
            .max(100),
        company: yup
            .string()
            .required()
            .max(100),
        message: yup
            .string()
            .required()
            .max(10000),
    });


    return (
        <div ref={context && context.contacto}>

            <Formik initialValues={{
                name: "",
                email: "",
                company: "",
                message: ""
            }}

                validationSchema={validationSchema}
                validateOnChange={true}
            >

                {(({ values, handleChange, handleBlur, handleSubmit, errors }) => {

                    return (
                        <Paper
                            elevation={3}
                            className="marginer">


                            <h1 className="header-form">Contact Me!</h1>

                            <form name="theFoorm" method="post" dataNetlify={true} className="form-box" >
                                <input type="hidden" name="form-name" value="form1" />

                                <div className="wrap-input">
                                    <CustomTextField
                                    required
                                        name="name"
                                        label="contact name"
                                    />
                                </div>
                                <div className="wrap-input">
                                    <CustomTextField
                                    required
                                        name="email"
                                        label="email"
                                    />
                                </div>
                                <div className="wrap-input">
                                    <CustomTextField
                                    required
                                        name="company"
                                        label="company"
                                    />
                                </div>
                                <div className="wrap-input">
                                    <CustomTextField
                                    required
                                        name="message"
                                        label="message"
                                        multiline
                                        rows={4}

                                    />
                                </div>
                                
                                <Button type="submit"
                                 color="primary"
                                 size="large"
                                 variant="contained"
                                 style={{marginTop: "4rem"}}
                                 disabled={Object.keys(errors).length > 0}
                                 >Submit</Button>
                            </form>
                        </Paper>
                    )
                })}
            </Formik>

        </div>

    )
}

