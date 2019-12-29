import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
<<<<<<< HEAD
            promotions: Promotions,
            leaders: Leaders
=======
            leaders: Leaders,
            promotions: Promotions
>>>>>>> 11c53684840a8b50eceaa08657a1456b60253ec9
        })
    );

    return store;
};