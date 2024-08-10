import { Interceptors } from './core/OpenAPI.js';
import { FetchHttpRequest } from './core/FetchHttpRequest.js';
import { DefaultService } from './services.gen.js';
export class KmdClient {
    default;
    request;
    constructor(config, HttpRequest = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost',
            VERSION: config?.VERSION ?? '0.0.1',
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
        this.default = new DefaultService(this.request);
    }
}
