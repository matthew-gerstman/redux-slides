import {StoreShape, GIPHY} from "../../data/types";
import {getStateAtNamespace} from "../../data/selectors";

export function getGifsForId(
  state: StoreShape,
  slytherinId: number
) {
  return getStateAtNamespace(state, GIPHY)[slytherinId];
}
