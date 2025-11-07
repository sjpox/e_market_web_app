import type { RootState } from "../store";

export const selectProducts = (state: RootState) => state.product.data