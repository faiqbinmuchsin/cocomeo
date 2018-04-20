import { reducerGenerator } from "../../../util/redux";
import initialState from "./initial-state";
import types from "./type";

const imageActionHandler = guardedInitialState => ({
    [types.FLUSH_IMAGE]: () => guardedInitialState,
    [types.GET_IMAGE_LOADING]: state => ({
        ...state,
        status: "loading"
    }),
    [types.GET_IMAGE_ERROR]: state => ({
        ...state,
        status: "error"
    }),
    [types.GET_IMAGE_SUCCESS]: (state, action) => ({
        ...state,
        status: "success",
        image: [...state.image, ...action.image]
    })
});

const reducer = (pageName, pageInitialState) => {
    const guardedInitialState = pageInitialState || initialState;
    return reducerGenerator(
        pageName,
        imageActionHandler(guardedInitialState),
        guardedInitialState
    );
};

export default reducer;
