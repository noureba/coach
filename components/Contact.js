import React from "react";
import ButtonStyle from "../styles/css/buttons.module.css";
import AOS from "aos";

function Contact() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-primary" data-aos="fade-up" data-aos-once="true" id="contact">
      <div className="container mx-auto py-5">
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center py-3">
          <div className="FDM px-3">
            <p className="fs-1 text-start fw-bold  py-2 text-white">
              Contact Me
            </p>
            <p className="fs-3 text-start fw-bold   py-2 text-white ">
              Feel free to contact me for any questions and doubts​
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className=" FDM px-3">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control my-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Full name"
                />
                <input
                  type="email"
                  className="form-control my-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="form-control my-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Subject"
                />
                <div className="form-floating">
                  <textarea
                    className="form-control my-3"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
              </div>
              <button type="submit" className={ButtonStyle.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
