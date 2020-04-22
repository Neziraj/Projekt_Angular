import { ModelTemplate } from '../ModelTemplate';

export class IncomingBackupsQuery extends ModelTemplate
{
  Datum: Date;
  ClientName: string;
  ConfigurationName: string;
  Description: string;
}
