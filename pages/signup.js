import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Signup.module.css'; 

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});


const Signup = () => {
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post('https://osbaseleaf-api.andolasoft.co.in/v1/auth/register',{
        username: values.email,
        password: values.password,
      });
      localStorage.setItem('token', response.data.token);
      router.push('/'); 
    } catch (err) {
      console.error('Signup error:', err);
      setFieldError('password', 'Failed to sign up.'); 
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <h2>Signup</h2>
              <ErrorMessage name="password" component="div" className={styles.error} />
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" className={styles.inputField} placeholder="Enter email address" required />
                <ErrorMessage name="email" component="div" className={styles.error} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" className={styles.inputField} placeholder="Enter password" required />
                <ErrorMessage name="password" component="div" className={styles.error} />
              </div>
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Signing up...' : 'Signup'}
              </button>
              <br/>
              <p className={styles.loginLink}>
                Already have an account? <Link href="/login">Log in</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
