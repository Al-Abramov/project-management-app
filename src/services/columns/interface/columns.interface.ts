import { TasksInterface } from '../../tasks/interface/tasks.interface';

export interface ColumnInterface {
  id?: string;
  title: string;
  order?: number;
  tasks?: TasksInterface[];
}
