import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-slate-200">
      <div className="container mx-auto p-2 flex flex-col justify-center items-center gap-3 mt-32">
        <div className="font-heading py-2  text-primary-dark">
          Privacy Policy
        </div>
        <div className="flex justify-center flex-col items-start p-5 md:p-10 text-slate-600 bg-white rounded-lg text-justify">
          <div className="text-lg font-bold pb-5">Website Visitors</div>
          <div className="text-base pb-5 space-y-4">
            <p>
              Your privacy is important to us. It is mu2creations policy to
              respect your privacy regarding any information we may collect from
              you across our website, mu2creations.com, and other sites we own
              and operate.{" "}
            </p>

            <p>
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.{" "}
            </p>

            <p>
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use,
              or modification.{" "}
            </p>

            <p>
              We don’t share any personally identifying information publicly or
              with third parties, except when required to by law.{" "}
            </p>

            <p>
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.{" "}
            </p>

            <p>
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services.{" "}
            </p>

            <p>
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.
            </p>
          </div>

          <div className="text-lg font-bold pb-5">Google Analytics</div>
          <div className="text-base pb-5">
            Mu2Creations uses the Google Analytics Reporting API to gather
            analytics about your website and present them in an actionable way
            via charts, graphs and tables.
          </div>

          <div className="text-lg font-bold pb-5">
            Changes in the privacy policy
          </div>
          <div className="text-base pb-5">
            Mu2Creations shall reserve the right to make any minor or major
            change in privacy policy terms and conditions from time to time
            without any prior notice. If you continue using the portal after
            making any changes to the privacy policy, this means that you accept
            them.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
