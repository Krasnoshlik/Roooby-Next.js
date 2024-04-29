import { WhiteButton } from "../../WhiteButton";
import { PurpleButton } from "../../PurpleButton";

export const ChoosePlan = () => {
  return (
    <div className=" max-w-projContainer m-auto mt-16 mb-28 lg:mx-5 sm:mx-3">
      <div className=" flex justify-between mb-24 sm:flex-col">
        <h1 className=" font-bold text-6xl leading-12 max-w-2xl">
          Choose the right plan{" "}
          <span className=" text-gray-500"> for your business </span>
        </h1>
        <p className=" max-w-360 self-end text-lg leading-7">
          Built with love for growing businesses. Check out the Roooby CRM
          pricing grid below. Switch between plans at any time.
        </p>
      </div>

      {/* Plan section start  */}
      <div className=" flex gap-2 lg:flex-wrap lg:justify-center sm:flex-col sm:justify-center sm:items-center">
        {/* Section start */}
        <div className=" max-w-96 bg-white rounded-xl p-8">
          <h4 className=" text-2xl font-bold">Starter</h4>
          <p className="max-w-80">
            Get organized and set up simple sales processes lorem ipsum
          </p>
          <div className=" flex gap-1 mt-3 mb-5">
            <h2 className=" font-bold text-5xl leading-11">$8,90</h2>
            <p className=" font-bold text-gray-400 self-end">/month</p>
          </div>
          <WhiteButton textInButton="Try for Free" />
          <p className=" text-sm text-center text-gray-500 mt-1">
            Free 14-day trial. No credit card required.
          </p>
          <span className=" w-full border border-gray-200 block my-6"></span>
          <div className=" flex flex-col gap-4">
            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>2 team members</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>1,000 Contacts & Companies</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>5 Campaign Workflows</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>10 Nodes Per Campaign</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>5 Automation Rules (Triggers)</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>3 Plugins/Integrations</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#BDFFDC"
                />
              </svg>
              <p className=" line-through text-gray-300">Marketing Automation</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#BDFFDC"
                />
              </svg>
              <p className=" line-through text-gray-300">Custom Deal Tracks</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#BDFFDC"
                />
              </svg>
              <p className=" line-through text-gray-300">Automated Voicemails</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#BDFFDC"
                />
              </svg>
              <p className=" line-through text-gray-300">Post-call Automation</p>
            </div>

          </div>
        </div>
        {/* Section end */}

        {/* Section start */}
        <div className=" max-w-96 bg-white rounded-xl p-8">
          <div className=" flex gap-3 items-center">
          <h4 className=" text-2xl font-bold">Professional</h4>
          <h5 className=" bg-green-100 p-1 text-xs text-green-500 font-bold rounded">RECOMMENDED</h5>
          </div>
          <p className="max-w-80">
          Everything you need to boost performance and revenue lorem ipsum
          </p>
          <div className=" flex gap-1 mt-3 mb-5">
            <h2 className=" font-bold text-5xl leading-11">$29,90</h2>
            <p className=" font-bold text-gray-400 self-end">/month</p>
          </div>
          <WhiteButton textInButton="Try for Free" />
          <p className=" text-sm text-center text-gray-500 mt-1">
            Free 14-day trial. No credit card required.
          </p>
          <span className=" w-full border border-gray-200 block my-6"></span>
          <div className=" flex flex-col gap-4">
            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>2 team members</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>1,000 Contacts & Companies</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>5 Campaign Workflows</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>10 Nodes Per Campaign</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>5 Automation Rules (Triggers)</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>3 Plugins/Integrations</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>Marketing Automation</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>Custom Deal Tracks</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#BDFFDC"
                />
              </svg>
              <p className=" line-through text-gray-300">Automated Voicemails</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#BDFFDC"
                />
              </svg>
              <p className=" line-through text-gray-300">Post-call Automation</p>
            </div>

          </div>
        </div>
        {/* Section end */}

        {/* Section start */}
        <div className=" max-w-96 bg-white rounded-xl p-8">
          <h4 className=" text-2xl font-bold">Enterprise</h4>
          <p className="max-w-80">
          Customize without limits and access unrivaled support lorem ipsum
          </p>
          <div className=" flex gap-1 mt-3 mb-5">
            <h2 className=" font-bold text-5xl leading-11">$39,90</h2>
            <p className=" font-bold text-gray-400 self-end">/month</p>
          </div>
          <WhiteButton textInButton="Try for Free" />
          <p className=" text-sm text-center text-gray-500 mt-1">
            Free 14-day trial. No credit card required.
          </p>
          <span className=" w-full border border-gray-200 block my-6"></span>
          <div className=" flex flex-col gap-4">
            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>2 team members</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>1,000 Contacts & Companies</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>5 Campaign Workflows</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>10 Nodes Per Campaign</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>5 Automation Rules (Triggers)</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>3 Plugins/Integrations</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>Marketing Automation</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>Custom Deal Tracks</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>Automated Voicemails</p>
            </div>

            <div className=" flex gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
                  fill="#00CC61"
                />
              </svg>
              <p>Post-call Automation</p>
            </div>

          </div>
        </div>
        {/* Section end */}
      </div>
      {/* Plan section end  */}
      <div className=" max-w-projContainer m-auto border-t border-gray-300 mt-24 py-12 px-24 sm:px-0">
        <div className=" flex gap-11 sm:flex-col sm:justify-center">
            <h4 className=" font-bold text-3xl">Need help choosing the right plan?</h4>
            <div className=" flex gap-7 w-96 sm:gap-4 sm:w-80">
                <WhiteButton textInButton="Contact sales"/>
                <PurpleButton textInButton="Compare plans"/>
            </div>
        </div>
      </div>
    </div>
  );
};
