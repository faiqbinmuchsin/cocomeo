import { createSelector } from "reselect";

const selectImageStatus = state => state.status;
const selectImageData = state => state.image;

const isImageFetched = createSelector(
    selectImageStatus,
    status => status === "success"
);

export default {
    selectImageStatus,
    selectImageData,
    isImageFetched
};
