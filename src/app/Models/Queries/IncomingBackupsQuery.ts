import { ModelTemplate } from '../ModelTemplate';

export class IncomingBackupsQuery extends ModelTemplate
{
  BackupDate: Date;
  Name: string;
  Configuration: string;
  Description: string;
}
