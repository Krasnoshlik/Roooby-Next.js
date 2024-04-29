export const PreFooter = ({ bg }) => {
  return (
    <div className=" bg-white">
    <div className={`${bg}` + " h-96 bg-cover max-w-screen-2xl m-auto pt-28 lg:pt-4 sm:pt-2 sm:flex sm:items-center"}>
      <div className=" max-w-projContainer m-auto flex flex-row justify-between items-center text-white sm:flex-col lg:mx-5 lg:flex-col lg:justify-center sm:mx-3 sm:text-center sm:gap-2">
        <div className=" max-w-screen-md flex flex-col gap-6 sm:items-center sm:justify-center">
          <h1 className=" font-bold text-6xl leading-12 sm:text-4xl">Ready to supercharge your business?</h1>
          <p className=" max-w-xl font-medium leading-7">
            Ask about <span className=" font-bold"> Roooby </span> products, pricing, implementation, or anything <br />
            else. Our highly trained reps are standing by, ready to help.
          </p>
        </div>
        <div className=" flex flex-col items-center gap-5 mr-16 lg:self-end sm:mr-0">
          <button className=" flex gap-4 text-black items-center bg-white px-6 py-4 text-lg font-bold rounded-lg">
            Try for Free
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 16.59L12.9447 12L8 7.41L9.52227 6L16 12L9.52227 18L8 16.59Z"
                fill="black"
              />
            </svg>
          </button>
          <p className=" text-sm font-medium">Full access. No credit card required.</p>
        </div>
      </div>
    </div>
    </div>
  );
};
