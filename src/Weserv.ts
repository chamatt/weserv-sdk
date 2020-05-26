import { DEFAULT_WESERV_URL } from "./constants";
import { Constructor, CreateInstance, Transform } from "./types"
import flattenTransform from "./utils";
import urljoin from "url-join"

export class Weserv {
    private url: string;

    public constructor({ url }: Constructor) {
        if (!url) this.url = DEFAULT_WESERV_URL
        else this.url = url;
    }

    public create({ url }: CreateInstance): Weserv {
        return new Weserv({ url });
    }

    private removeEmpty(obj: { [key: string]: any }): { [key: string]: any } {
        return Object.keys(obj)
            .filter(k => obj[k] != null && obj[k] != false )
            .reduce(
                (newObj, k) =>
                    typeof obj[k] === "object"
                        ? { ...newObj, [k]: this.removeEmpty(obj[k]) }
                        : { ...newObj, [k]: obj[k] },
                {}
            );
    }

    public transform(image: string, transformation: Transform = {}) {
        const params = this.removeEmpty(flattenTransform(transformation))
        const queryString = new URLSearchParams({
            url: image,
            ...params
        }).toString()
        return urljoin(this.url, `?${queryString}`)
    }
}

export default new Weserv({})