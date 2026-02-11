export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface AddNewtask {
  title: string;
  summary: string;
  dueDate: string;
}
