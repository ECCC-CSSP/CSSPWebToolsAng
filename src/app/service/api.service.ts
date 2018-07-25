import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QueryOptions } from './queryoptions';
import { Observable } from 'rxjs';

export class ApiService<T> {
    constructor(
        private httpClient: HttpClient,
        private url: string) { }

    create(item: T): Observable<T> {
        return this.httpClient.post<T>(`${this.url}`, item);
    }

    update(item: T): Observable<T> {
        return this.httpClient.put<T>(`${this.url}`, item);
    }

    read(id: number, queryOptions: QueryOptions): Observable<T> {
        return this.httpClient.get<T>(`${this.url}/${id}?${queryOptions.toQueryString()}`);
    }

    list(queryOptions: QueryOptions): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.url}?${queryOptions.toQueryString()}`);
    }

    delete(id: number): Observable<T> {
        return this.httpClient.delete<T>(`${this.url}/${id}`);
    }
}
