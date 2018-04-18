import { get } from "axios";
import endpoint from "./endpoint";

const getBanner = () =>
    get(endpoint.bannerEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getBanner
};
