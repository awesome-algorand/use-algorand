import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { OpenAPIConfig } from './core/OpenAPI.js';
import { CommonService } from './services.gen.js';
import { LookupService } from './services.gen.js';
import { SearchService } from './services.gen.js';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class IndexerClient {
    readonly common: CommonService;
    readonly lookup: LookupService;
    readonly search: SearchService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
