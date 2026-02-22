"use client"
import React, { Fragment, useState } from 'react'
import SectionHeader from "@/components/universal/SectionHeader";
import SectionLayout from "@/components/universal/SectionLayout";
import Image from "next/image";
import Head from "next/head";
import Reveal from "@/components/motion/Reveal";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import emailjs from '@emailjs/browser';


interface FormValues {
  referral_email: string;
  referral_phone: string;
}

const ReferClient: React.FC = () => {
  const [formData, setFormData] = useState({
    your_name: '',
    your_email: '',
    referral_name: '',
    referral_email: '',
    referral_phone: '',
    company_name: '',
    referral_needs: ''
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showConfrimPopup, setShowConfrimPopup] = useState(false);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setShowConfrimPopup(false)
    e.preventDefault();
    // Send email using EmailJS
    emailjs.sendForm('service_qq65xju', 'template_ckp0t2o', e.currentTarget, 'GmHPw5sambWaKFRLk')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Reset form fields after successful submission
        setFormData({
          your_name: '',
          your_email: '',
          referral_name: '',
          referral_email: '',
          referral_phone: '',
          company_name: '',
          referral_needs: ''
        });
        // Show success popup
        setShowSuccessPopup(true);
        // Hide success popup after 30 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 10000);
      })
      .catch((error) => {
        console.error('Email send failed:', error.text);
      });
  };


  const validate = (values: FormValues) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.referral_email) {
      errors.referral_email = "Email is required!";
    } else if (!regex.test(values.referral_email)) {
      errors.referral_email = "This is not a valid email format!";
    }
    else {
      setShowConfrimPopup(true)
    }
    return errors;
  };

  const onCheckFormValidation = () => {
    setFormErrors(validate(formData));
  }



  return (
    <>
      <Head>
        <meta
          name="description"
          content="Refer a client to Bayshore Communication and get rewarded. Fill out a form and we will do the rest. Don’t miss this chance. Refer now."
          key="desc"
        />
      </Head>
      <Reveal>
        <h1 className="heading-primary !text-center  py-8 !mb-0 bg-[#F4F4F4]">
          Refer Client
        </h1>
      </Reveal>

      <SectionLayout bg="">
        <Reveal>
          <SectionHeader
            heading="Refer A Paying Client, Earn $500."
            text="If the referral closes for a $2000+ package, you earn a $500 payment. No questions asked. It’s that simple. You can do this as many times as you’d like. We appreciate your support of Bayshore Communication"
          />
        </Reveal>
        <div className="center">
          {/* <button className="btn text-small ">Submit My Referral</button> */}
          {/* <Reveal>
            <button className="!text-white font-semibold text-small rounded-full p-5 !bg-[#FE6F1F] hover:!bg-[#fe711fd4]">
              Submit My Referral
            </button>
          </Reveal> */}
        </div>
        <Reveal>
          <h2 className="heading-secondary !text-center mt-12">
            Submit Your Referral
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 gap-5 mt-28 md:grid-cols-2">
            <div className="mb-16">
              <Image
                src="/assets/rafer-image.svg"
                alt="marketing"
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-[600px] mx-auto">

              <form className="space-y-8">
                <input
                  className="appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="your_name"
                  type="text"
                  name="your_name"
                  placeholder="Your Name"
                  value={formData.your_name}
                  onChange={handleChange}
                />
                <input
                  className="appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="your_email"
                  type="email"
                  name="your_email"
                  placeholder="Your Email"
                  value={formData.your_email}
                  onChange={handleChange}
                />
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="referral_name"
                  name="referral_name"
                  type="text"
                  placeholder="Referral Name"
                  value={formData.referral_name}
                  onChange={handleChange}
                />
                <input
                  className="appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="email"
                  type="email"
                  name="referral_email"
                  placeholder="Referral Email"
                  value={formData.referral_email}
                  onChange={handleChange}
                />
                <span className="text-orange-600">{formErrors.referral_email}</span>
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="referral_phone"
                  type="text"
                  name="referral_phone"
                  placeholder="Referral Phone"
                  value={formData.referral_phone}
                  onChange={handleChange}
                />
                <input
                  className="appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                  id="company_name"
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  value={formData.company_name}
                  onChange={handleChange}
                />
                <input
                  className="appearance-none border border-[#CED4DA] w-full py-4 px-10 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] rounded-[25px]"
                  id="referral_needs"
                  type="text"
                  name="referral_needs"
                  placeholder="Referral's Needs"
                  value={formData.referral_needs}
                  onChange={handleChange}
                />
              </form>
              <button onClick={() => onCheckFormValidation()} className="!text-white !text-center  font-semibold text-small rounded-full w-full mt-8 p-5 !bg-[#FE6F1F] r-button border-2 border-[#FE6F1F] hover:!text-[#FE6F1F]">
                Submit
              </button>
              <Transition.Root show={showSuccessPopup} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setShowSuccessPopup(!showSuccessPopup)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto pt-3">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-white px-4 pb-4 pt-5">
                            <div className="mx-auto">
                              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>

                              </div>
                              <div className="!mt-6 text-center">
                                <Dialog.Title as="h3" className="text-3xl font-semibold leading-6 text-gray-900">
                                  Successfully submitted!
                                </Dialog.Title>
                                <div className="mt-5">
                                  <p className="text-2xl text-gray-800">
                                    We will be in touch with you soon.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 gap-1 flex justify-end items-center">

                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>

              <Transition.Root show={showConfrimPopup} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setShowConfrimPopup(!showConfrimPopup)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-white px-4 pb-4 pt-5">
                            <div className="mx-auto">
                              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-gray-800">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>

                              </div>
                              <div className="!mt-6 text-center">
                                <Dialog.Title as="h3" className="text-3xl font-semibold leading-6 text-gray-900">
                                  Are you sure?
                                </Dialog.Title>
                                <div className="mt-5">
                                  <p className="text-2xl text-gray-800">
                                    To submit your referral
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 gap-2 flex justify-center items-center ">
                            <form onSubmit={handleSubmit}>
                              <input
                                className=" hidden appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                                id="your_name"
                                type="text"
                                name="your_name"
                                placeholder="Your Name"
                                value={formData.your_name}
                                onChange={handleChange}
                              />
                              <input
                                className="hidden appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                                id="your_email"
                                type="email"
                                name="your_email"
                                placeholder="Your Email"
                                value={formData.your_email}
                                onChange={handleChange}
                              />
                              <input
                                className="hidden appearance-none border border-[#CED4DA] w-full py-4 px-10 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                                id="referral_name"
                                name="referral_name"
                                type="text"
                                placeholder="Referral Name"
                                value={formData.referral_name}
                                onChange={handleChange}
                              />
                              <input
                                className="hidden appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                                id="email"
                                type="email"
                                name="referral_email"
                                placeholder="Referral Email"
                                value={formData.referral_email}
                                onChange={handleChange}
                              />
                              <input
                                className="hidden appearance-none border border-[#CED4DA] w-full py-4 px-10 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                                id="referral_phone"
                                type="text"
                                name="referral_phone"
                                placeholder="Referral Phone"
                                value={formData.referral_phone}
                                onChange={handleChange}
                              />
                              <input
                                className="hidden appearance-none border w-full py-4 px-10 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D]  rounded-[25px]"
                                id="company_name"
                                type="text"
                                name="company_name"
                                placeholder="Company Name"
                                value={formData.company_name}
                                onChange={handleChange}
                              />
                              <input
                                className="hidden appearance-none border border-[#CED4DA] w-full py-4 px-10 leading-tight focus:outline-none focus:shadow-outline text-small !text-[#6C757D] rounded-[25px]"
                                id="referral_needs"
                                type="text"
                                name="referral_needs"
                                placeholder="Referral's Needs"
                                value={formData.referral_needs}
                                onChange={handleChange}
                              />
                              <button
                                type="submit"

                                className="py-2.5 px-5 me-2 mb-2 text-xl font-blod text-gray-900 focus:outline-none bg-white rounded-full border border-gray-600 hover:!bg-[#FE6F1F] hover:!border-[#FE6F1F] hover:text-white">Confrim</button>
                            </form>

                            <button onClick={() => setShowConfrimPopup(false)} type="button" className="py-2.5 px-5 me-2 mb-2 text-xl font-blod text-gray-900 focus:outline-none bg-white rounded-full border  border-gray-600 hover:!bg-[#FE6F1F] hover:text-white"> Cancel</button>

                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
          </div>
        </Reveal>
      </SectionLayout>
    </>
  );
};

export default ReferClient;
