import { get } from "axios";
import endpoint from "./endpoint";

const getThumbnail = () =>
    get(endpoint.thumbEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getThumbnail
};
