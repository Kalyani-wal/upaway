import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem><Link to="/travelers">Travelers</Link></BreadcrumbItem> 
        <span className='separator'>/</span>
        <BreadcrumbItem>Andrew Carter</BreadcrumbItem> 
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
