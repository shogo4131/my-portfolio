import { getCompany } from '@/apis/company';
import Link from 'next/link';

const CompanyDetail = async (context: any) => {
  const { id: companyId, company, carrierList } = await getCompany(context.params.companyId);

  return (
    <div>
      <h2>{company}</h2>
      <div>
        {carrierList.map(({ id, projectName }) => (
          <Link key={id} href={`/company/${companyId}/resume/${id}`}>
            <p>{projectName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetail;
