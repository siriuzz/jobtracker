export type JobStatus = 'applied' | 'interview' | 'offer' | 'rejected';

export interface Job {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  link?: string;
  notes?: string;
  createdAt: string;
}
