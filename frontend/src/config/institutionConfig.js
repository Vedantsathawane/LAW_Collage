// Central configuration for institution branding details
export const INSTITUTION_NAME = "Dr. Milind Yerne College of Law";
export const INSTITUTION_SHORT_NAME = "DMYCL";
export const SANSTHA_NAME = "Late Malatai Yerne Smruti Bahuddeshiya Sanstha";
export const INSTITUTION_EMAIL_DOMAIN = "dmycl.edu.in";
export const INSTITUTION_AFFILIATION = "Approved by Bar Council of India / State Govt. | Affiliated with Rashtrasant Tukadoji Maharaj Nagpur University";
export const INSTITUTION_COURSES = "LL.B. 3 and 5 Years Semester Course";
export const LOCATION = "Pauni, Dist. Bhandara, Maharashtra";
export const PHONE_PRIMARY = "+91-92849-74125";
export const ADDRESS = "Dr. Milind Yerne College of Law, Pauni, Dist. Bhandara, Maharashtra - 441910";
export const DEVELOPED_BY = "Vedant Sathawane & Team";

export const LEADERSHIP = {
  inspiration: { name: "Hon'ble Shri. Praful Patel", designation: "Member of Parliament (Rajya Sabha)", title: "Our Inspiration" },
  mentor: { name: "Shri. Ramdas Tadas", designation: "Member of Parliament", title: "Our Mentor" },
  president: { name: "Adv. Sadhana Yerne", designation: "President, LMYSBS", title: "President" },
  secretary: { name: "Dr. Milind Yerne", designation: "Secretary, LMYSBS", title: "Secretary & Founder" }
};

export const DRESS_CODE = {
  boys: "Black full pant and White shirt",
  girls: "Black Salwar & White Kurta OR Black Saree & White blouse (Skirts, Jeans, Tops, T-Shirts strictly prohibited)"
};

// Global contacts derived from branding
export const CONTACTS = {
  info: `info@${INSTITUTION_EMAIL_DOMAIN}`,
  principal: `principal@${INSTITUTION_EMAIL_DOMAIN}`,
  registrar: `registrar@${INSTITUTION_EMAIL_DOMAIN}`,
  accounts: `accounts@${INSTITUTION_EMAIL_DOMAIN}`,
  academicAdmin: `academic.admin@${INSTITUTION_EMAIL_DOMAIN}`
};
// Centralized Student Application Google Form URL
export const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSe81tMZcU4GHO9Ejt0siFDerBo7OXpTNil4Lapdr-N3CA9UFg/viewform";

// Secure helper function to open Google Form in new tab
export const openGoogleForm = (e) => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
};
