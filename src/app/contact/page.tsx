"use client";
import Image from "next/image";
import Google from "../images/Trusted by/Google.svg";
import Atlassian from "../images/Trusted by/Atlassian.svg";
import Cannon from "../images/Trusted by/Canon.svg";
import Walmart from "../images/Trusted by/Walmart.svg";
import Amazon from "../images/Trusted by/Amazon.svg";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const containerStyle = {
  width: "458px",
  height: "288px",
};

const center = {
  lat: 42.162635434569474,
  lng: 24.743433669101663,
};

type Inputs = {
  FullName: string;
  Email: string;
  Message: string;
};

export default function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDNkb0RzRxM62eRfmcCzVN1GDp38_14YGU",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  //   Hook Form start
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className=" max-w-projContainer m-auto pt-16 pb-24">
        <h1 className=" text-6xl font-bold leading-12">
          Get in touch with <br /> our lovely team
        </h1>
        <div className=" flex justify-betwee mt-8 gap-8">
          {/* Left section start  */}
          <div>
            <div>
              <p className=" text-lg font-bold">Roooby Technologies</p>
              <p className=" text-lg font-medium text-gray-500">
                Plovdiv, Bulgaria, bul Vasil Levski 96
              </p>
            </div>

            <div>
              <div className="w-full my-6">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={11}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    <Marker
                      position={{
                        lat: 42.162635434569474,
                        lng: 24.743433669101663,
                      }}
                    />
                    <></>
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className=" flex justify-between">
              <div className=" pl-5 border-l-2 border-gray-300">
                <p className=" font-bold text-lg">General</p>
                <p className=" font-medium text-lg">hello@me.com</p>
              </div>

              <div className=" pl-5 border-l-2 border-gray-300">
                <p className=" font-bold text-lg">Support</p>
                <p className=" font-medium text-lg">support@me.com</p>
              </div>
            </div>
          </div>
          {/* Left section end  */}

          {/* Right section start  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-555 flex flex-col  items-center self-center justify-between gap-5"
          >
            {errors.FullName && <div className=" relative w-full"><label className=" absolute w-full text-red-600">This field is required</label></div>}
            <input
              placeholder="Your Name"
              {...register("FullName", { required: true })}
            className=" p-5 w-full rounded-xl"/>
            {/* include validation with required or other standard HTML validation rules */}
            {errors.Email && <div className=" relative w-full"><label className=" absolute w-full text-red-600">This field is required</label></div>}
            <input
              placeholder="Your Email"
              {...register("Email", { required: true })}
            className=" p-5 w-full rounded-xl"/>
            {/* errors will return when field validation fails  */}
            {errors.Message && <div className=" relative w-full"><label className=" absolute w-full text-red-600">This field is required</label></div>}
            <textarea
              placeholder="Message"
              {...register("Message", { required: true, min: 18, max: 200 })}
            className=" p-5 w-full rounded-xl h-48"/>
            <button title="Submit" onClick={handleSubmit(onSubmit)} className=" bg-green-400 text-white font-bold text-lg py-2 px-4 rounded self-start hover:cursor-pointer">Send message {'>'}</button>
          </form>
          {/* Right section end  */}
        </div>
      </div>
      <div className=" bg-white">
        <div className=" flex gap-24 py-24 max-w-projContainer m-auto">
          <p className=" font-medium">Trusted by 1,000+ customers</p>
          <div className=" flex gap-14">
            <Image src={Google} alt="Google" height={24} />
            <Image src={Atlassian} alt="Atlassian" height={17} />
            <Image src={Cannon} alt="Cannon" height={17} />
            <Image src={Walmart} alt="Walmart" height={24} />
            <Image src={Amazon} alt="Amazon" height={24} />
          </div>
        </div>
      </div>
    </>
  );
}
