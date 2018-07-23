export interface QueryBuilder {
    toQueryMap: () => Map<string, string>;
    toQueryString: () => string;
}

export class QueryOptions implements QueryBuilder {
    constructor(public skip: number = 0, public take: number = 100, public lang: string = 'en',
        public orderByNames: string = '', public where: string = '', public detail: string = 'e') {
    }

    toQueryMap() {
        const queryMap = new Map<string, string>();
        queryMap.set('skip', `${this.skip}`);
        queryMap.set('take', `${this.take}`);
        queryMap.set('lang', `${this.lang}`);
        queryMap.set('orderByNames', `${this.orderByNames}`);
        queryMap.set('where', `${this.where}`);
        queryMap.set('detail', `${this.detail}`);

        return queryMap;
    }

    toQueryString() {
        let queryString = '';
        this.toQueryMap().forEach((value: string, key: string) => {
            if (value !== 'null') {
                queryString = queryString.concat(`${key}=${value}&`);

            } else {
                queryString = queryString.concat(`${key}=&`);

            }
        });

        return queryString.substring(0, queryString.length - 1);
    }
}
