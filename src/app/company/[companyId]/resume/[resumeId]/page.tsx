import { getCarrier } from '@/apis/carrier';

type Props = {
  params: {
    companyId: string;
    resumeId: string;
  };
};

const ResumeDetail = async ({ params }: Props) => {
  const { projectName } = await getCarrier(params.resumeId);

  return <div>{projectName}</div>;
};

export default ResumeDetail;
