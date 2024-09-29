import { Smalltalk } from './Smalltalk.type';

export interface SmalltalkResponse {
  talk_subject: Smalltalk[];
  status: number;
  message: string;
}
