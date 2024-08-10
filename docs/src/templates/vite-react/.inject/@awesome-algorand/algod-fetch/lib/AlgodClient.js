import { Interceptors } from './core/OpenAPI.js';
import { FetchHttpRequest } from './core/FetchHttpRequest.js';
import { CommonService } from './services.gen.js';
import { DataService } from './services.gen.js';
import { ExperimentalService } from './services.gen.js';
import { NonparticipatingService } from './services.gen.js';
import { ParticipatingService } from './services.gen.js';
import { PrivateService } from './services.gen.js';
import { PublicService } from './services.gen.js';
export class AlgodClient {
    common;
    data;
    experimental;
    nonparticipating;
    participating;
    private;
    public;
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
        this.common = new CommonService(this.request);
        this.data = new DataService(this.request);
        this.experimental = new ExperimentalService(this.request);
        this.nonparticipating = new NonparticipatingService(this.request);
        this.participating = new ParticipatingService(this.request);
        this.private = new PrivateService(this.request);
        this.public = new PublicService(this.request);
    }
}
