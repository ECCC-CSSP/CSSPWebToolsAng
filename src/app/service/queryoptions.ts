export interface QueryBuilder {
    toQueryMap: () => Map<string, string>;
    toQueryString: () => string;
}

export class QueryOptions implements QueryBuilder {
    constructor(public lang: string = 'en', public skip: number = 0, public take: number = 100,
        public order: string = '', public where: string = '', public extra: string = '') {
    }

    toQueryMap() {
        const queryMap = new Map<string, string>();
        queryMap.set('lang', `${this.lang}`);
        queryMap.set('skip', `${this.skip}`);
        queryMap.set('take', `${this.take}`);
        queryMap.set('order', `${this.order}`);
        queryMap.set('where', `${this.where}`);
        queryMap.set('extra', `${this.extra}`);

        return queryMap;
    }

    toQueryString() {
        let queryString = '';
        this.toQueryMap().forEach((value: string, key: string) => {
            if (!(value === 'null' || value === '')) {
                queryString = queryString.concat(`${key}=${value}&`);

            } else {
                queryString = queryString.concat(`${key}=&`);

            }
        });

        return queryString.substring(0, queryString.length - 1);
    }
}
