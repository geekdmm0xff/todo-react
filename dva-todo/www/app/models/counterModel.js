export default {
    namespace: 'counter',

    state: {
        v: 10
    },

    reducers: {
        add(state, { payload: { num } }) {
            return {
                ...state,
                v: state.v + num,
            }
        },

        reduce(state, { payload: { num } }) {
            return {
                ...state,
                v: state.v - num,
            }
        }
    }
}