import { client } from '@/libs/client';
import { Companies } from '@/types/response';
import Link from 'next/link';

const CompanyDetail = async (context: any) => {
  const {
    company,
    carrierList,
    id: companyId,
  } = await client.get<Companies>({
    endpoint: 'companies',
    contentId: context.params.companyId,
  });

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
