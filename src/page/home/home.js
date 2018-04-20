import React, {Component} from 'react';
import Banner from '../../component/banner';
import SlickWidget from '../../component/slick-widget';
import Thumbnail from '../../component/thumbnail';

import { connect } from "react-redux";
import { homeActions, homeSelectors } from "../../redux/home";

class Home extends Component{
    componentDidMount() {
        const {
            isBannerFetched,
            isSlickFetched,
            isThumbnailFetched,
            onPageEnter
        } = this.props;

        if (onPageEnter) {
            onPageEnter(isBannerFetched, isSlickFetched, isThumbnailFetched);
        }
    }

    render(){
        const {banner,slick,thumbnail} = this.props;
        return(
            <div className="home">
                <Banner banner={banner} />
                <SlickWidget slick={slick} />
                <Thumbnail thumbnail={thumbnail} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    banner: homeSelectors.selectBannerData(state),
    slick: homeSelectors.selectSlickData(state),
    thumbnail: homeSelectors.selectThumbnailData(state),
    isBannerFetched: homeSelectors.isBannerFetched(state),
    isSlickFetched: homeSelectors.isSlickFetched(state),
    isThumbnailFetched: homeSelectors.isThumbnailFetched(state)
});

const mapDispatchToProps = dispatch => ({
    onPageEnter: (isBannerFetched, isSlickFetched, isThumbnailFetched) => {
        if (!isBannerFetched) {
            dispatch(homeActions.getBanner());
        }
        if (!isSlickFetched) {
            dispatch(homeActions.getSlick());
        }
        if (!isThumbnailFetched) {
            dispatch(homeActions.getThumbnail());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);