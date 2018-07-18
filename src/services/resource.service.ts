import { HttpClient } from '@angular/common/http';
import { Serializer, Resource, QueryOptions } from './serializer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class ResourceService<T> {
    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string,
        private serializer: Serializer) { }

    create(item: T): Observable<T> {
        return this.httpClient.post<T>(`${this.url}/${this.endpoint}`, item);
    }

    update(item: T): Observable<T> {
        return this.httpClient.put<T>(`${this.url}/${this.endpoint}/${item.id}`, item);
    }

    read(id: number): Observable<T> {
        return this.httpClient.get(`${this.url}/${this.endpoint}/${id}`);
    }

    list(queryOptions: QueryOptions): Observable<T[]> {
        return this.httpClient.get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`);
    }

    delete(id: number) {
        return this.httpClient.delete(`${this.url}/${this.endpoint}/${id}`);
    }
}
