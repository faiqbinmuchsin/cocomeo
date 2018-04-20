import { get } from "axios";
import endpoint from "./endpoint";

const getSlick = () =>
    get(endpoint.slickEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getSlick
};
