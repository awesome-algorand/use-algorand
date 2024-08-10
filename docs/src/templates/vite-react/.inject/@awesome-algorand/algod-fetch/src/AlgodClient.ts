import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { Interceptors } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { CommonService } from './services.gen';
import { DataService } from './services.gen';
import { ExperimentalService } from './services.gen';
import { NonparticipatingService } from './services.gen';
import { ParticipatingService } from './services.gen';
import { PrivateService } from './services.gen';
import { PublicService } from './services.gen';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class AlgodClient {

	public readonly common: CommonService;
	public readonly data: DataService;
	public readonly experimental: ExperimentalService;
	public readonly nonparticipating: NonparticipatingService;
	public readonly participating: ParticipatingService;
	public readonly private: PrivateService;
	public readonly public: PublicService;

	public readonly request: BaseHttpRequest;

	constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
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
