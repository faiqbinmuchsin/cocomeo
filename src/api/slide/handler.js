import { get } from "axios";
import endpoint from "./endpoint";

const getSlide = () =>
    get(endpoint.slideEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getSlide
};
