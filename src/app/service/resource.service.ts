import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QueryOptions } from './queryoptions';
import { Observable } from 'rxjs';

export class ResourceService<T> {
    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string) { }

    create(item: T): Observable<T> {
        return this.httpClient.post<T>(`${this.url}/${this.endpoint}`, item);
    }

    update(item: T): Observable<T> {
        return this.httpClient.put<T>(`${this.url}/${this.endpoint}`, item);
    }

    read(id: number, queryOptions: QueryOptions): Observable<T> {
        return this.httpClient.get<T>(`${this.url}/${this.endpoint}/${id}?${queryOptions.toQueryString()}`);
    }

    list(queryOptions: QueryOptions): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`);
    }

    delete(id: number): Observable<T> {
        return this.httpClient.delete<T>(`${this.url}/${this.endpoint}/${id}`);
    }
}
