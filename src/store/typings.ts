import { CoachState } from './coach/typings';
import { ModalState } from './modal/typings';

export interface RootState {
    modal: ModalState;
    coach: CoachState;
}
