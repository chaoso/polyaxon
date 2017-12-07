import {Reducer} from "redux";
import * as _ from "lodash";

import {ExperimentAction, actionTypes} from "../actions/experiment";
import {ExperimentStateSchema, ExperimentsEmptyState} from "../models/experiment";

export const experimentsReducer: Reducer<ExperimentStateSchema> =
	(state: ExperimentStateSchema = ExperimentsEmptyState, action: ExperimentAction) => {

  switch (action.type) {
    case actionTypes.CREATE_EXPERIMENT:
      return {
        ...state,
        byUuids: {...state.byUuids, [action.experiment.uuid]: action.experiment},
        uuids: [...state.uuids, action.experiment.uuid]
      };
    case actionTypes.DELETE_EXPERIMENT:
      return {
        ...state,
        byUuids: {...state.byUuids, [action.experimentUuid]: {...state.byUuids[action.experimentUuid], deleted: true}},
        uuids: state.uuids.filter(uuid => uuid != action.experimentUuid),
      };
    case actionTypes.UPDATE_EXPERIMENT:
      return {
        ...state,
        byUuids: {...state.byUuids, [action.experiment.uuid]: action.experiment}
      };
    case actionTypes.RECEIVE_EXPERIMENTS:
      var newState = {...state};
      for (let xp of action.experiments) {
        if (!_.includes(newState.uuids, xp.uuid)) {
          newState.uuids.push(xp.uuid);
          newState.byUuids[xp.uuid] = xp;
        }
        newState.byUuids[xp.uuid] = xp;
      }
      return newState;
  }
  return state;
};
