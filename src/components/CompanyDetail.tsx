import { useParams } from "react-router-dom";

import { companies } from "../data/fake-data";

const CompanyDetail = () => {
  const { companyId } = useParams();
  const company = companies.find((company) => company.id === companyId);

  return (
    <div>
      {company ? (
        <>
          <h1 className="title">{company.name}</h1>
          <div className="box">{company.description}</div>
        </>
      ) : (
        <p>Company not found</p>
      )}
    </div>
  );
};

export default CompanyDetail;
