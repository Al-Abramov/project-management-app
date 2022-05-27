import { FileInterface } from '../../file/interfaces/file.interface';

export interface TasksInterface {
  id?: string;
  title: string;
  order?: number;
  description: string;
  userId: string;
  boardId?: string;
  columnId?: string;
  files?: FileInterface[];
}
