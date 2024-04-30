"use client";
import { useForm, SubmitHandler  } from "react-hook-form";
import Iframe from 'react-iframe'
import { TrustedByCust } from "../components/ui/trustedByCust";

interface FormValues {
  FullName: string;
  Email: string;
  Message: string;
}

export default function Contact() {
  //   Hook Form start
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <>
      <div className=" max-w-projContainer m-auto pt-16 pb-24 lg:mx-5 sm:mx-5">
        <h1 className=" text-6xl font-bold leading-12">
          Get in touch with <br /> our lovely team
        </h1>
        <div className=" flex justify-between mt-8 gap-8 lg:flex-col lg:items-center sm:flex-col sm:items-start">
          {/* Left section start  */}
          <div className=" w-458 sm:w-full flex flex-col justify-center items-center">
            <div className=" self-start">
              <p className=" text-lg font-bold">Roooby Technologies</p>
              <p className=" text-lg font-medium text-gray-500">
                Plovdiv, Bulgaria, bul Vasil Levski 96
              </p>
            </div>

            <div className=" w-full">
              <div className="w-full my-6">
              <Iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19329.417986529206!2d24.73963591350058!3d42.16033960816897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd18de452a06b%3A0x838e93baa43989e5!2z0KHQtdCy0LXRgNC10L0sINGD0LsuIOKAntCS0LDRgdC40Lsg0JvQtdCy0YHQutC44oCcIDk2LCA0MDAzINCf0LvQvtCy0LTQuNCy!5e0!3m2!1sru!2sbg!4v1714476355891!5m2!1sru!2sbg"
                  className=" w-full min-h-72" url={""} ></Iframe>
              </div>
            </div>
            <div className=" w-full flex justify-between">
              <div className=" pl-5 border-l-2 border-gray-300 self-start">
                <p className=" font-bold text-lg">General</p>
                <p className=" font-medium text-lg">hello@me.com</p>
              </div>

              <div className=" pl-5 border-l-2 border-gray-300 self-end">
                <p className=" font-bold text-lg">Support</p>
                <p className=" font-medium text-lg">support@me.com</p>
              </div>
            </div>
          </div>
          {/* Left section end  */}

          {/* Right section start  */}
          <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-555 sm:w-11/12 flex flex-col items-center self-center justify-between gap-5"
    >
      <input
        placeholder="Your Name"
        {...register("FullName", { required: "Please enter your name", minLength: { value: 6, message: "Name must be at least 6 characters long" } })}
        className={`p-5 w-full rounded-xl ${errors.FullName ? "border-red-500" : ""}`}
      />
      {errors.FullName && <label className="text-red-600 w-full relative -top-5 left-1 h-0">{errors.FullName.message}</label>}

      <input
        placeholder="Your Email"
        {...register("Email", {
          required: "Please enter your email",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Please enter a valid email address"
          }
        })}
        className={`p-5 w-full rounded-xl ${errors.Email ? "border-red-500" : ""}`}
      />
      {errors.Email && <label className="text-red-600 w-full relative -top-5 left-1 h-0">{errors.Email.message}</label>}

      <textarea
        placeholder="Message"
        {...register("Message", { required: "Please enter a message", minLength: { value: 18, message: "Message must be at least 18 characters long" }, maxLength: { value: 200, message: "Message must not exceed 200 characters" } })}
        className={`p-5 w-full rounded-xl h-48 ${errors.Message ? "border-red-500" : ""}`}
      />
      {errors.Message && <label className="text-red-600 w-full relative -top-5 left-1 h-0">{errors.Message.message}</label>}

      <button type="submit" className="bg-green-400 text-white font-bold text-lg py-2 px-4 rounded self-start hover:cursor-pointer">
        Send message {'>'}
      </button>
    </form>
          {/* Right section end  */}
        </div>
      </div>
      <div className=" bg-white">
      <div className=" py-20 mx-20">
      <TrustedByCust/>
      </div>
      </div>
    </>
  );
}
