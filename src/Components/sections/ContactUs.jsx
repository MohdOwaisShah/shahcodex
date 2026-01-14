import React, { useState } from "react";
import SectionTitle from "../small-uis/SectionTitle";
import "../components-styles/Contact.css";
import SocialMedia from "../small-uis/SocialMedia";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userCompany: "",
    userDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.userName.trim()) {
      newErrors.userName = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.userEmail)) {
      newErrors.userEmail = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    // PhoneInput handles some validation, but we check if it's empty or too short manually if needed
    if (!formData.userPhone || formData.userPhone.length < 5) {
      newErrors.userPhone = "Valid phone number is required";
      isValid = false;
    }

    // Company validation
    if (!formData.userCompany.trim()) {
      newErrors.userCompany = "Company name is required";
      isValid = false;
    }

    // Description validation
    if (!formData.userDescription.trim()) {
      newErrors.userDescription = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      userPhone: value,
    }));
    if (errors.userPhone) {
      setErrors((prev) => ({
        ...prev,
        userPhone: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycby4kWeTJvEiQFoJdmFgfDi8aWSGMRxdb9TwI0h-HEdSLniqJWdwr5EovGRu-aOTPnKp/exec";

      // Format the data as URL parameters
      const formParams = new URLSearchParams();
      formParams.append("userName", formData.userName);
      formParams.append("userEmail", formData.userEmail);
      formParams.append("userPhone", formData.userPhone);
      formParams.append("userCompany", formData.userCompany);
      formParams.append("userDescription", formData.userDescription);

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formParams,
      });

      const result = await response.text();

      if (result.includes("Added") || result.includes("success")) {
        setSubmitStatus("success");
        setFormData({
          userName: "",
          userEmail: "",
          userPhone: "",
          userCompany: "",
          userDescription: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-us-section sections" id="contact-us">
      <div className="contact-us-container sections-container">
        <SectionTitle
          text="Contact Us"
          textColor="var(--primary-color)"
          lineColor="var(--light-secondary-blue)"
        />
        <div className="contact-us-info-and-form-container">
          <div className="contact-us-info">
            <h3>
              Let's Build Something Amazing{" "}
              <span className="sky-blue-color">Together</span>
              <span className="accent-color">.</span>
            </h3>
            <p>
              Your vision is our mission. Let's collaborate to create digital
              solutions that drive your business forward.
            </p>
            <div className="email-and-whatsapp">
              <div className="email-container">
                <img src="/Images/email-icon.png" alt="email" />
                <div className="email-texts">
                  <p>Email Address</p>
                  <a href="mailto:shahcodexdev@gmail.com">
                    shahcodexdev@gmail.com
                  </a>
                </div>
              </div>
              <div className="whatsapp-container">
                <img src="/Images/whatsapp-icon.png" alt="whatsapp" />
                <div className="whatsapp-texts">
                  <p>Whatsapp Number</p>
                  <a href="tel:+917977417676">+91 79774-17676</a>
                </div>
              </div>
            </div>
            <div className="contact-us-social-media">
              <p className="contact-us-social-media-text">Social Media</p>
              <SocialMedia textColor={"var(--minor-color)"} />
            </div>
          </div>
          <div className="contact-us-form-container">
            <form action="" onSubmit={handleSubmit} noValidate>
              {/* user-name */}
              <div className="user-name">
                <label htmlFor="user-name">
                  Name<span className="accent-color">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="userName"
                  value={formData.userName}
                  type="text"
                  placeholder="Enter Name"
                  id="user-name"
                  className={errors.userName ? "input-error" : ""}
                />
                {errors.userName && (
                  <span className="error-message">{errors.userName}</span>
                )}
              </div>
              {/* user-email */}
              <div className="user-email">
                <label htmlFor="user-email">
                  Email<span className="accent-color">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="userEmail"
                  value={formData.userEmail}
                  type="email"
                  placeholder="example@gmail.com"
                  id="user-email"
                  className={errors.userEmail ? "input-error" : ""}
                />
                {errors.userEmail && (
                  <span className="error-message">{errors.userEmail}</span>
                )}
              </div>
              {/* user-phone */}
              <div className="user-phone">
                <label htmlFor="user-phone">
                  Phone<span className="accent-color">*</span>
                </label>
                <PhoneInput
                  country={"in"}
                  value={formData.userPhone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "userPhone",
                    id: "user-phone",
                    required: true,
                    autoFocus: false,
                  }}
                  containerClass={errors.userPhone ? "phone-input-error" : ""}
                />
                {errors.userPhone && (
                  <span className="error-message">{errors.userPhone}</span>
                )}
              </div>
              {/* user-company */}
              <div className="user-company">
                <label htmlFor="user-company">
                  Company<span className="accent-color">*</span>
                </label>
                <input
                  onChange={handleChange}
                  name="userCompany"
                  value={formData.userCompany}
                  type="text"
                  placeholder="Company Name"
                  id="user-company"
                  className={errors.userCompany ? "input-error" : ""}
                />
                {errors.userCompany && (
                  <span className="error-message">{errors.userCompany}</span>
                )}
              </div>
              {/* user-description */}
              <div className="user-description">
                <label htmlFor="user-description">
                  Description<span className="accent-color">*</span>
                </label>
                <textarea
                  onChange={handleChange}
                  name="userDescription"
                  value={formData.userDescription}
                  id="user-description"
                  placeholder="Enter Information / Details Of Company Etc"
                  className={errors.userDescription ? "input-error" : ""}
                ></textarea>
                {errors.userDescription && (
                  <span className="error-message">
                    {errors.userDescription}
                  </span>
                )}
              </div>

              <button disabled={isSubmitting}>
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
              {submitStatus === "success" && (
                <div className="submit-success">
                  <span>✓</span> Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="submit-error">
                  <span>⚠</span> Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
