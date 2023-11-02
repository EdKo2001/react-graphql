import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { loadCompany } from "../utils";

export interface Company {
  id: string;
  name: string;
  description: string;
}

const CompanyDetail = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState<Company | null>();

  useEffect(() => {
    const getCompany = async () => {
      try {
        const company = await loadCompany(companyId!);
        setCompany(company);
      } catch (error) {
        console.error(error);
      }
    };

    getCompany();
  }, []);

  return (
    <>
      {company ? (
        <>
          <h1 className="title">{company.name}</h1>
          <div className="box">{company.description}</div>
        </>
      ) : (
        <p>Company not found</p>
      )}
    </>
  );
};

export default CompanyDetail;
