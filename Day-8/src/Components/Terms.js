import React from 'react';

const Terms = () => {
  return (
    <div className='container'>
      <h1>Terms & Conditions</h1>
      <p>Welcome to The Ashh Salon's website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our Privacy Policy govern [Salon Name]'s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>

      <h2>Services</h2>
      <p>
      The content of the pages of this website is for your general information and use only. It is subject to change without notice.
This website uses cookies to monitor browsing preferences.<br/> If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [list what information will be collected].
Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
<br/>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
      </p>

      {/* Icon for Facebook */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>

      {/* Icon for Instagram */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>

      {/* Icon for Twitter */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  );
};

export default Terms;