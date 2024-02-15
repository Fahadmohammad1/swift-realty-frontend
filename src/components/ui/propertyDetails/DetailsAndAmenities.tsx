import React from "react";

const DetailsAndAmenities = () => {
  return (
    <div className="lg:grid grid-cols-2 mt-[60px]">
      <div>
        <h4 className="text-[28px] font-medium mb-[30px]">Property Details</h4>
        <div className="">
          <div className="flex text-mutedText text-xl font-normal">
            <div className="flex gap-[50px]">
              <div>
                <div className="mb-5">
                  <p>Property ID:</p>
                </div>
                <div className="mb-5">
                  <p>Home Area</p>
                </div>
                <div className="mb-5">
                  <p>Rooms</p>
                </div>
                <div className="mb-5">
                  <p>Baths</p>
                </div>
              </div>

              <div className="w-fit">
                <div className="mb-5">
                  <p>AZ20</p>
                </div>
                <div className="mb-5">
                  <p>120sqft</p>
                </div>
                <div className="mb-5">
                  <p>7</p>
                </div>
                <div className="mb-5">
                  <p>2</p>
                </div>
              </div>
            </div>
            <div className="w-[1px] border mx-[61px]" />
            <div className="flex gap-[50px]">
              <div>
                <div className="mb-5">
                  <p>Property ID:</p>
                </div>
                <div className="mb-5">
                  <p>Home Area</p>
                </div>
                <div className="mb-5">
                  <p>Rooms</p>
                </div>
                <div className="mb-5">
                  <p>Baths</p>
                </div>
              </div>
              <div className="w-fit">
                <div className="mb-5">
                  <p>AZ20</p>
                </div>
                <div className="mb-5">
                  <p>120sqft</p>
                </div>
                <div className="mb-5">
                  <p>7</p>
                </div>
                <div className="mb-5">
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-[28px] font-medium mb-[30px] lg:ml-[106px]">
          Amenities
        </h4>
        <div>
          <div className="flex text-mutedText text-xl font-normal justify-end">
            <div className="flex gap-[50px]">
              <div className="text-srPrimary">
                <div className="mb-5">
                  <p>AC:</p>
                </div>
                <div className="mb-5">
                  <p>Gym:</p>
                </div>
                <div className="mb-5">
                  <p>Swimming Pool:</p>
                </div>
                <div className="mb-5">
                  <p>Wifi:</p>
                </div>
              </div>

              <div className="w-fit">
                <div className="mb-5">
                  <p>Yes</p>
                </div>
                <div className="mb-5">
                  <p>No</p>
                </div>
                <div className="mb-5">
                  <p>No</p>
                </div>
                <div className="mb-5">
                  <p>Yes</p>
                </div>
              </div>
            </div>

            <div className="w-[1px] border mx-[61px]" />
            <div className="flex gap-[50px]">
              <div className="text-srPrimary">
                <div className="mb-5">
                  <p>BBQ:</p>
                </div>
                <div className="mb-5">
                  <p>Bathup:</p>
                </div>
                <div className="mb-5">
                  <p>Washer:</p>
                </div>
                <div className="mb-5">
                  <p>Fireplace:</p>
                </div>
              </div>

              <div className="w-fit">
                <div className="mb-5">
                  <p>Yes</p>
                </div>
                <div className="mb-5">
                  <p>No</p>
                </div>
                <div className="mb-5">
                  <p>No</p>
                </div>
                <div className="mb-5">
                  <p>Yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsAndAmenities;
