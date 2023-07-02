import { getCompanies } from '@/apis/company';
import Link from 'next/link';

const Home = async () => {
  const companies = await getCompanies();

  return (
    <div>
      <h2>Reactおじさん(Shogo)</h2>
      <div>
        <h3>Profile</h3>
        <p>Webエンジニア4年目</p>
        <p>出身: 兵庫県</p>
        <p>東京のスタートアップでフロントエンドエンジニアとして活動しています。</p>
        <p>サウナ🧖と温泉♨️が趣味です</p>
      </div>
      <div>
        <h3>Resume</h3>
        <ul>
          {companies.map(({ id, company }) => (
            <li key={id}>
              <Link href={`/company/${id}`}>{company}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
