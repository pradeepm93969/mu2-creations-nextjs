"use client";

import { useState } from "react";
import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const ImageGallery = ({ photos, title }) => {
  const [currenPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handlePrevious = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const maximumVisiblePhotos = 4;
  const totalPhotos = photos.length;
  const displayPhotos = photos.slice(1, maximumVisiblePhotos - 1);
  const remainingPhotosCount = totalPhotos - maximumVisiblePhotos;

  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 relative gap-5 px-3">
        <div className="h-[405px] lg:h-[540px] rounded-2xl overflow-hidden w-full ">
          <div className="hidden md:flex justify-center items-center w-full h-full relative bg-slate-300">
            <Image
              src={photos[0] + "?w=720"}
              alt={`${title} ${currenPhotoIndex + 1}`}
              className="img scale-animation cursor-pointer"
              fill
              sizes="100%"
              onClick={openModal.bind(this, 0)}
            />
          </div>
          <div className="md:hidden block justify-center items-center w-[400px] h-full relative bg-slate-300">
            <Image
              src={
                photos[currenPhotoIndex] + "?w=720"
              }
              alt={`${title} ${
                currenPhotoIndex + 1
              }`}
              className="img object-cover"
              fill
              sizes="100%"
              onClick={openModal.bind(this, 0)}
            />
          </div>
        </div>
        <div className="md:hidden flex justify-between items-center min-w-fit">
          <div className="flex space-x-2">
            <FaArrowLeft className="cursor-pointer" onClick={handlePrevious} />
            <FaArrowRight className="cursor-pointer" onClick={handleNext} />
          </div>
          <span>
            {currenPhotoIndex + 1} / {photos.length}
          </span>
        </div>

        <div className="hidden md:grid grid-cols-2 h-full gap-5">
          {displayPhotos.map((photo, index) => (
            <div
              key={index}
              className="cursor-pointer md:h-48 lg:h-64 rounded-2xl overflow-hidden bg-slate-300"
            >
              <Image
                width={300}
                height={300}
                src={photo + "?w=360"}
                alt={`${title} ${index + 2}`}
                className="img scale-animation object-cover"
              />
            </div>
          ))}
          {remainingPhotosCount > 0 && (
            <div
              className="cursor-pointer relative md:h-48 lg:h-64 rounded-2xl overflow-hidden"
              onClick={openModal.bind(this, maximumVisiblePhotos)}
            >
              <Image
                fill
                sizes="100%"
                src={
                  photos[maximumVisiblePhotos - 1] +
                  "?w=360"
                }
                alt={`Photo Gallery ${maximumVisiblePhotos}`}
                className="img"
              />
              <div className="absolute cursor-pointer text-white inset-0 flex justify-center bg-[rgba(0,0,0,0.5)] items-center text-2xl">
                + {remainingPhotosCount}
              </div>
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90 z-[55]">
            <div className="h-[75vh] w-[320px] md:w-[700px] relative bg-black">
              <Image
                src={
                  photos[currenPhotoIndex] + "?w=720"
                }
                alt={`${title} ${
                  currenPhotoIndex + 1
                }`}
                fill
                sizes="100%"
                placeholder="blur"
                blurDataURL="/images/blur.png"
                className="img object-contain"
              />

              <div className="absolute -bottom-14 w-full flex justify-between items-center py-3">
                <div className="flex space-x-2 items-center text-white">
                  <FaArrowLeft
                    className="cursor-pointer"
                    onClick={handlePrevious}
                  />
                  <FaArrowRight
                    className="cursor-pointer"
                    onClick={handleNext}
                  />
                </div>
                <span className="text-white text-sm">
                  {currenPhotoIndex + 1} / {photos.length}
                </span>
              </div>
              <button
                className="absolute top-2 right-2 text-white text-lg"
                onClick={closeModal}
              >
                <MdCancel className="font-medium text-3xl text-secondary-dark" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
