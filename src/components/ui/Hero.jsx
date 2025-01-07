import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import farmImage from "../../assets/farmManagement.jpg";
const Hero = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-10">
        <div className="px-4 pt-6 md:px-[10%] md:pt-[20%]">
          <h2 className="text-3xl font-display md:text-5xl">
            Modern <span className="text-[#357960]">Farm Management</span>
          </h2>
          <h2 className="text-3xl font-display md:text-5xl">
            & <span className="text-[#357960]">Traceability </span> Solution
          </h2>
          <p className="font-display py-6 text-xl">
            FarmTrace is a modern cloud-based universal farming application that
            provides comprehensive functions and features to manage and track
            your farm activities.
          </p>
          <div className="md:mt-8">
            <h3 className="font-display text-2xl text-[#357960] font-bold md:text-3xl">
              Trace your product
            </h3>
            <p className="font-display text-xl">
              View details farm activities of the purchased produce
            </p>
            <Link to="/tracker">
              <Button className="bg-main mt-4">
                Click here to get started
              </Button>
            </Link>

            {/* <TrackingFAQ /> */}
          </div>
        </div>
        <div>
          <img
            src={farmImage}
            alt={farmImage}
            style={{ maxWidth: "100%", height: "auto", marginBottom: "2rem" }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;