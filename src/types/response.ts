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

export type skills<T = 'get'> = Structure<
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

export type carrerList<T = 'get'> = Structure<
  T,
  {
    /**
     * 会社名
     */
    companyName: string;
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
    responsible: string;
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
    skills: skills<'get'>;
    'carrer-list': carrerList<'get'>;
  };
  gets: {
    skills: skills<'gets'>;
    'carrer-list': carrerList<'gets'>;
  };
  post: {
    skills: skills<'post'>;
    'carrer-list': carrerList<'post'>;
  };
  put: {
    skills: skills<'put'>;
    'carrer-list': carrerList<'put'>;
  };
  patch: {
    skills: skills<'patch'>;
    'carrer-list': carrerList<'patch'>;
  };
}
