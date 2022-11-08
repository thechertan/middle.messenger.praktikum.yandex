import {Store} from './Store';

describe('test core/Store', () => {
    const store = new Store({});
    it('should return value method getState from class Store', () => {
        expect(store.getState()).toEqual({});
    })
    it('should set state', () => {
        store.set({userId: 123});
        expect(store.getState()).toEqual({userId: 123});
    })
    it('should new state from method dispatch', () => {
        store.dispatch({userId: 124});
        expect(store.getState()).toEqual({userId: 124});
    })
});