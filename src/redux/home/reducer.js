import { combineReducers } from "redux";

import imageReducerGenerator from "../common/image";

const bannerReducer = imageReducerGenerator("home/banner");
const slickReducer = imageReducerGenerator("home/slick");
const thumbnailReducer = imageReducerGenerator("home/thumbnail");

const reducer = combineReducers({
    banner: bannerReducer,
    slick: slickReducer,
    thumbnail: thumbnailReducer
});

export default reducer;
