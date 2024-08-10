import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { OpenAPIConfig } from './core/OpenAPI.js';
import { CommonService } from './services.gen.js';
import { DataService } from './services.gen.js';
import { ExperimentalService } from './services.gen.js';
import { NonparticipatingService } from './services.gen.js';
import { ParticipatingService } from './services.gen.js';
import { PrivateService } from './services.gen.js';
import { PublicService } from './services.gen.js';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class AlgodClient {
    readonly common: CommonService;
    readonly data: DataService;
    readonly experimental: ExperimentalService;
    readonly nonparticipating: NonparticipatingService;
    readonly participating: ParticipatingService;
    readonly private: PrivateService;
    readonly public: PublicService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
