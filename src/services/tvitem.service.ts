import { ResourceService } from './resource.service';
import { TVItem, TVItemSerializer } from '../models/tvitem';
import { HttpClient } from '@angular/common/http';

export class TVItemService extends ResourceService<TVItem> {
    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'api/',
            'tvitem',
            new TVItemSerializer());
    }
}
