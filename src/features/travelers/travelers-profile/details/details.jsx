import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../card/card";
import TravelCredits from "./travel-credits";

const Details = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-details">
      <h3 className="title">Customer Information</h3>
      <div className="personal-details">
        <Card name="Name" value="Andrew Carter" />
        <Card name="Email" value="andrewc@email.com" />
        <Card name="Phone number" value="+1 (555) 976 4098 6" />
        <Card
          name="Subscription"
          value={[
            <div className="user-type monthly">Monthly subscription</div>,
          ]}
        />
        <Card name="Emergency Contact" value="Sara Carter" />
        <Card name="Co-Travelers" value="Emma Carter, Jessica Lee" />
        <Card
          name="Inner Circle"
          value={[
            <div className="team-inner">
              <div>
                <span>Emma Carter</span>{" "}
                <div className="user-type documents">3 documents</div>{" "}
              </div>
              <div>
                <span>Jessica Carter</span>{" "}
                <div className="user-type documents">3 documents</div>{" "}
              </div>
              <div>
                <span>Paul Carter</span>{" "}
                <div className="user-type documents">3 documents</div>{" "}
              </div>
            </div>,
          ]}
        />
      </div>
      <div className="credit-details">
        <Card name="Travel Credit available" value="$ 455.00" />
        <button
          to="/"
          className="button button-credits"
          onClick={() => setIsOpen(!isOpen)}
        >
          See Credits
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.6665 6.24984C1.25229 6.24984 0.916504 6.58562 0.916504 6.99984C0.916504 7.41405 1.25229 7.74984 1.6665 7.74984V6.24984ZM13.3332 6.99984L13.8635 7.53017C14.1564 7.23727 14.1564 6.7624 13.8635 6.46951L13.3332 6.99984ZM8.03017 0.636174C7.73727 0.343281 7.2624 0.343281 6.96951 0.636174C6.67661 0.929067 6.67661 1.40394 6.96951 1.69683L8.03017 0.636174ZM6.96951 12.3028C6.67661 12.5957 6.67661 13.0706 6.96951 13.3635C7.2624 13.6564 7.73727 13.6564 8.03017 13.3635L6.96951 12.3028ZM1.6665 7.74984H13.3332V6.24984H1.6665V7.74984ZM6.96951 1.69683L12.8028 7.53017L13.8635 6.46951L8.03017 0.636174L6.96951 1.69683ZM12.8028 6.46951L6.96951 12.3028L8.03017 13.3635L13.8635 7.53017L12.8028 6.46951Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <TravelCredits isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Details;
