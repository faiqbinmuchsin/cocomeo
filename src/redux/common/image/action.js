import { typeGenerator, actionCreatorGenerator } from "../../../util/redux";
import types from "./type";

const getImageLoading = name => () => ({
    type: typeGenerator(name, types.GET_IMAGE_LOADING)
});

const getImageSuccess = name => image => ({
    type: typeGenerator(name, types.GET_IMAGE_SUCCESS),
    image
});

const getImageError = name => () => ({
    type: typeGenerator(name, types.GET_IMAGE_ERROR)
});

const flushImage = name => () => ({
    type: typeGenerator(name, types.FLUSH_IMAGE)
});

const action = (pageName, params) =>
    actionCreatorGenerator(
        pageName,
        {
            getImageError,
            getImageSuccess,
            getImageLoading,
            flushImage
        },
        params
    );

export default action;
