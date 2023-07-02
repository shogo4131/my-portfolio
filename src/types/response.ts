type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type Skills<T = 'get'> = Structure<
  T,
  {
    /**
     * スキル
     */
    skill: string;
    /**
     * 画像リンク
     */
    image: string;
  }
>;

export type Companies<T = 'get'> = Structure<
  T,
  {
    /**
     * 会社名
     */
    company: string;
    /**
     * キャリアリスト
     */
    carrierList?: CarrierList[];
  }
>;

export type CarrierList<T = 'get'> = Structure<
  T,
  {
    /**
     * 会社名
     */
    companyName: Reference<T, unknown>;
    /**
     * プロジェクト名
     */
    projectName: string;
    /**
     * 案件開始
     */
    start: string;
    /**
     * 案件終了
     */
    end?: string;
    /**
     * ブロジェクト内容
     */
    projectContent: string;
    /**
     * 職種
     */
    occupation: ['フロントエンドエンジニア' | 'バックエンドエンジニア' | 'フルスタックエンジニア'];
    /**
     * 担当業務
     */
    responsible: any;
    /**
     * スキル
     */
    skill: Reference<T, unknown>[];
    /**
     * 従業員
     */
    employee: boolean;
  }
>;

export interface EndPoints {
  get: {
    skills: Skills<'get'>;
    companies: Companies<'get'>;
    'carrier-list': CarrierList<'get'>;
  };
  gets: {
    skills: Skills<'gets'>;
    companies: Companies<'gets'>;
    'carrier-list': CarrierList<'gets'>;
  };
  post: {
    skills: Skills<'post'>;
    companies: Companies<'post'>;
    'carrier-list': CarrierList<'post'>;
  };
  put: {
    skills: Skills<'put'>;
    companies: Companies<'put'>;
    'carrier-list': CarrierList<'put'>;
  };
  patch: {
    skills: Skills<'patch'>;
    companies: Companies<'patch'>;
    'carrier-list': CarrierList<'patch'>;
  };
}
