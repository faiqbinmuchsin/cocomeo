import { imageActions as imageActionsGenerator } from "../common/image";

import BannerAPI from "../../api/banner";
import SlickAPI from "../../api/slick";
import ThumbnailAPI from "../../api/thumbnail";

const bannerActions = imageActionsGenerator("home/banner");
const slickActions = imageActionsGenerator("home/slick");
const thumbnailActions = imageActionsGenerator("home/thumbnail");

const getBanner = () => dispatch => {
    dispatch(bannerActions.getImageLoading());
    return BannerAPI.getBanner()
        .then(response => {
            dispatch(bannerActions.getImageSuccess(response));
            console.log(response);
        })
        .catch(err => {
            console.error(err);
            dispatch(bannerActions.getImageError());
        });
};

const getSlick = () => dispatch => {
    dispatch(slickActions.getImageLoading());
    return SlickAPI.getSlick()
        .then(response => {
            dispatch(slickActions.getImageSuccess(response));
            console.log(response);
        })
        .catch(err => {
            console.error(err);
            dispatch(slickActions.getImageError());
        });
};

const getThumbnail = () => dispatch => {
    dispatch(bannerActions.getImageLoading());
    return ThumbnailAPI.getThumbnail()
        .then(response => {
            dispatch(thumbnailActions.getImageSuccess(response));
            console.log(response);
        })
        .catch(err => {
            console.error(err);
            dispatch(thumbnailActions.getImageError());
        });
};

export default {
    ...bannerActions,
    ...slickActions,
    ...thumbnailActions,
    getBanner,
    getSlick,
    getThumbnail
};
