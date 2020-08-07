import ShopActionTypes from "./shop.types";
import ShoptActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});
