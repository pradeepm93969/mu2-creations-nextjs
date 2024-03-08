"use client";

import Address from "@/components/Common/Address";
import Email from "@/components/Common/Email";
import Phone from "@/components/Common/Phone";
import Social from "@/components/Common/Social";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const ContactUs = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    mobile: Yup.string().required(),
    email: Yup.string().email().required(),
    subject: Yup.string().required(),
    message: Yup.string().required(),
  });

  return (
    <section className="bg-slate-200">
      <div className="container mx-auto p-2 flex flex-col justify-center items-center gap-3 mt-32">
        <div className="font-heading text-primary-dark">Contact Us</div>
        <div className="font-sub-title  text-primary-dark">
          Contact our team for any inquiries or assistance
        </div>
        <div className="my-5 flex flex-col md:flex-row justify-between gap-3 bg-white text-slate-700 rounded-md overflow-hidden shadow-md shadow-slate-600 p-5">
          <div className="flex flex-col items-center gap-6 px-10 p-4 sm:border-b-2 border-stone-300 md:border-r-2 md:border-b-0">
            <div className="font-sub-title hidden md:flex font-medium">
              Contact Us
            </div>
            <Email />
            <Phone />
            <Address />
            <div className="text-primary-main pb-4">
              <Social />
            </div>
          </div>

          <div className="w-full flex-1 text-center px-10">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                mobile: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // Start the submission process
                setSubmitting(true);
                try {
                  const response = await fetch("/api/sendEmail", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                  });

                  if (!response.ok) {
                    throw new Error("Failed to send message");
                  }

                  // Reset the form and mark submission as complete
                  resetForm();
                  setSubmitting(false);

                  // Show success alert
                  toast.success("Form submitted successfully");
                } catch (error) {
                  toast.error("Failed to submit form");
                  console.error("Failed to send email:", error);
                  setSubmitting(false);
                }
              }}
            >
              {({ handleSubmit, errors, touched, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  {/* FirstName */}
                  <div className="pb-2">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-start"
                    >
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                        touched.firstName && errors.firstName
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="First Name"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1 mb-2"
                    />
                  </div>
                  <div className="pb-2">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-start"
                    >
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                        touched.lastName && errors.lastName
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Last Name"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1 mb-2"
                    />
                  </div>
                  <div className="pb-2">
                    <label
                      htmlFor="mobile"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-start"
                    >
                      Mobile
                    </label>
                    <Field
                      type="text"
                      id="mobile"
                      name="mobile"
                      className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                        touched.mobile && errors.mobile ? "border-red-500" : ""
                      }`}
                      placeholder="971555555555"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-red-500 text-sm mt-1 mb-2"
                    />
                  </div>
                  <div className="pb-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-start"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                        touched.email && errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="email@domain.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1 mb-2"
                    />
                  </div>
                  <div className="pb-2">
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-start"
                    >
                      Subject
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
                        touched.subject && errors.subject
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Subject"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-red-500 text-sm mt-1 mb-2"
                    />
                  </div>
                  <div className="sm:col-span-2 pb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 text-start"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="6"
                      className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                      ${
                        touched.message && errors.message
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Leave a comment..."
                    ></Field>
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1 mb-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary py-5"
                    disabled={isSubmitting}
                  >
                    Send message
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
