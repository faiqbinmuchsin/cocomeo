import { createSelector } from "reselect";
import { imageSelectors } from "../common/image";

const selectPageRoot = state => state.home;
const selectBanner = createSelector(selectPageRoot, page => page.banner);
const selectSlick = createSelector(selectPageRoot, page => page.slick);
const selectThumbnail = createSelector(selectPageRoot, page => page.thumbnail);

const selectBannerData = createSelector(selectBanner, banner =>
    imageSelectors.selectImageData(banner)
);

const selectSlickData = createSelector(selectSlick, slick =>
    imageSelectors.selectImageData(slick)
);

const selectThumbnailData = createSelector(selectThumbnail, thumbnail =>
    imageSelectors.selectImageData(thumbnail)
);

const isBannerFetched = createSelector(selectBanner, banner =>
    imageSelectors.isImageFetched(banner)
);

const isSlickFetched = createSelector(selectBanner, slick =>
    imageSelectors.isImageFetched(slick)
);

const isThumbnailFetched = createSelector(selectBanner, thumbnail =>
    imageSelectors.isImageFetched(thumbnail)
);

export default {
    selectBannerData,
    selectSlickData,
    selectThumbnailData,
    isBannerFetched,
    isSlickFetched,
    isThumbnailFetched
};
