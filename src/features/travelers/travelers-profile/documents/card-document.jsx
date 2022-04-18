import React from "react";

const CardDocument = ({ docName, docId, expiryDate, expire, docLink }) => {
  return (
    <div className="card-document">
      <div className="document-title-id">
        <span></span>
        <div>
          <span className="doc-title">{docName}</span>
          <span className="doc-id"># {docId}</span>
        </div>
      </div>
      <div className="details-expiry">
        <span className="date-expiry">Expiry {expiryDate}</span>
        {expire && <div className="user-type documents">Expiry soon</div>}
      </div>
      <div className="section-view">
        <a href={docLink} target="_blank" rel="noreferrer" className="button-link">
          View
        </a>
      </div>
    </div>
  );
};

export default CardDocument;
