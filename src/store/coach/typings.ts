import { CoachData } from '@/data/interfaces';

export interface CoachState {
    coaches: CoachData[];
    filteredSkills: string[];
}
