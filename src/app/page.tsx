import { getCompanies } from '@/apis/company';
import { getSkills } from '@/apis/skill';
import { Tag } from '@/components/Tag';
import Link from 'next/link';
import { formatDate } from '@/utils/date';

import styles from './page.module.css';

const Home = async () => {
  const companies = await getCompanies();
  const skills = await getSkills();

  return (
    <div>
      <h2>Reactおじさん(Shogo)</h2>
      <div>
        <h3>Profile</h3>
        <p>Webエンジニア4年目</p>
        <p>出身: 兵庫県</p>
        <p>東京のスタートアップでフロントエンドエンジニアとして活動しています。</p>
        <p>
          サウナ🧖と温泉<span className={styles.onsen}>♨️</span>が趣味です
        </p>
      </div>
      <div>
        <h3>Resume</h3>
        <ul>
          {companies.map(({ id, company, carrierList }) => (
            <li key={id}>
              <Link href={`/company/${id}`}>{`${formatDate(carrierList[0].start)} 〜 ${formatDate(
                carrierList[0].end
              )} ${company} `}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Skill</h3>
        {skills.map(({ id, skill }) => (
          <Tag key={id}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
};

export default Home;
