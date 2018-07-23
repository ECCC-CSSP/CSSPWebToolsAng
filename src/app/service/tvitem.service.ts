import { ResourceService } from './resource.service';
import { TVItem } from '../model/TVItem';
import { HttpClient } from '@angular/common/http';

export class TVItemService extends ResourceService<TVItem> {
    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'api',
            'tvitem');
    }
}
