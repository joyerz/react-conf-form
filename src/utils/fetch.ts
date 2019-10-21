import axios from 'axios'

interface FetchConfig {
  url?: string,
  method?: any,
  headers?: object,
  data?: object,
  extract?: object,
}

export default async function fetch(config: FetchConfig): Promise<any> {
  const {
    url, method, data = {}, headers = {}, extract = {},
  } = config
  return await axios.request({
    url,
    method,
    data,
    headers,
    ...extract,
  })
    .then((res: any) => res.data)
    .catch((e: any) => {
      console.error(e)
      throw e
    })
}
