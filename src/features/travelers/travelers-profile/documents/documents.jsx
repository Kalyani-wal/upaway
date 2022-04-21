import React from "react";
import Search from "../../../../common/components/search/Search";
import CardDocument from "./card-document";

const Documents = () => {
  return (
    <div className="container-activities container-trip-plans container-documents">
      <div className="section-title-filters title-search-bar-container">
        <div className="wrapper-filters">
          <Search />
        </div>
      </div>
      <div className="wrapper-documents">
        <div className="section-documents">
          <h3 className="title">Andrew Carter</h3>
          <div className="container-documents">
            <CardDocument
              docName="Vaccination Certificate"
              docId="6779 9985"
              expiryDate="02/21/2024"
              expire
              docLink="^_^"
            />
            <CardDocument
              docName="Vaccination Certificate"
              docId="6779 9985"
              expiryDate="02/21/2024"
              expire
              docLink="^_^"
            />
          </div>
        </div>
        <div className="section-documents">
          <h3 className="title">Andrew Carter</h3>
          <div className="container-documents">
            <CardDocument
              docName="Vaccination Certificate"
              docId="6779 9985"
              expiryDate="02/21/2024"
              expire
              docLink="^_^"
            />
            <CardDocument
              docName="Vaccination Certificate"
              docId="6779 9985"
              expiryDate="02/21/2024"
              expire
              docLink="^_^"
            />
            <CardDocument
              docName="Vaccination Certificate"
              docId="6779 9985"
              expiryDate="02/21/2024"
              docLink="^_^"
            />
          </div>
        </div>
        <div className="section-documents">
          <h3 className="title">Andrew Carter</h3>
          <div className="container-documents">
            <CardDocument
              docName="Vaccination Certificate"
              docId="6779 9985"
              expiryDate="02/21/2024"
              expire
              docLink="^_^"
            />
            <CardDocument
              docName="Vaccination Certificate"
              docId="6779 9985"
              expiryDate="02/21/2024"
              expire
              docLink="^_^"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
