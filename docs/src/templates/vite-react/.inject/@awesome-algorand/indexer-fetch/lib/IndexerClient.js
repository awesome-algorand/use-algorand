import { Interceptors } from './core/OpenAPI.js';
import { FetchHttpRequest } from './core/FetchHttpRequest.js';
import { CommonService } from './services.gen.js';
import { LookupService } from './services.gen.js';
import { SearchService } from './services.gen.js';
export class IndexerClient {
    common;
    lookup;
    search;
    request;
    constructor(config, HttpRequest = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://example.com',
            VERSION: config?.VERSION ?? '2.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
            interceptors: {
                request: config?.interceptors?.request ?? new Interceptors(),
                response: config?.interceptors?.response ?? new Interceptors(),
            },
        });
        this.common = new CommonService(this.request);
        this.lookup = new LookupService(this.request);
        this.search = new SearchService(this.request);
    }
}
