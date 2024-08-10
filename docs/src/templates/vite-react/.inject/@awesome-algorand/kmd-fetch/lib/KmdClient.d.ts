import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { OpenAPIConfig } from './core/OpenAPI.js';
import { DefaultService } from './services.gen.js';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export declare class KmdClient {
    readonly default: DefaultService;
    readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest?: HttpRequestConstructor);
}
export {};
