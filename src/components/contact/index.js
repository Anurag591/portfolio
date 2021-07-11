import React, { useState } from 'react';
import {
    Container,
    FormDiv,
} from './styled';
import { PrimaryHeading } from '../ui/Headings';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { post } from '../../services/http';



const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email is not valid'),
    mobile: Yup.number(),
    message: Yup.string(),
});

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = {
        name: '',
        email: '',
        mobile: '',
        message: ''
    };

    const onSubmit = (formData) => {
        console.log("🚀 ~ onSubmit ~ formData", formData)
        setIsLoading(true);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (
        <React.Fragment>
            <Container>
                <PrimaryHeading>Contact Me</PrimaryHeading>
                <FormDiv onSubmit = { formik.handleSubmit }>
                    <TextField
                        fullWidth
                        name="name"
                        label="Your Name *"
                        value={formik.values.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        onChange={formik.handleChange}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        fullWidth
                        name="email"
                        label="Email *"
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        fullWidth
                        name="mobile"
                        label="Mobile"
                        value={formik.values.mobile}
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        onChange={formik.handleChange}
                        helperText={formik.touched.mobile && formik.errors.mobile}
                    />

                    <TextField
                        fullWidth
                        name="message"
                        label="Message"
                        value={formik.values.message}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        onChange={formik.handleChange}
                        helperText={formik.touched.message && formik.errors.message}
                    />

                    <Button color="primary" variant="contained" fullWidth type="submit" disabled = {isLoading}> 
                        { isLoading ? <CircularProgress color="primary" size = "14px"/> : null }
                        Contact Me
                    </Button>
                </FormDiv>

            </Container>
        </React.Fragment>
    )
}

export default Contact;