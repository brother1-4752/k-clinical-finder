export interface AxiosResponseTypes {
  config: Config;
  data: Data[];
  status: number;
  headers: Headers;
}

interface Config {
  method: string;
  baseURL: string;
  timeout: number;
  url: string;
}

interface Data {
  sickCd: string;
  sickNm: string;
}

interface Headers {
  'cache-control': string;
  'content-length': string;
  'content-type': string;
  expires: string;
  pragma: string;
}
