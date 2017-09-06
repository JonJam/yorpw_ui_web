// TODO Refactor this to use reselect see http://redux.js.org/docs/recipes/ComputingDerivedData.html
export default function isBusy(pendingActions: number) {
  return pendingActions > 0;
}
