import { ModelTemplate } from '../ModelTemplate';
import DateTimeFormat = Intl.DateTimeFormat;

export class IncomingBackupsQuery extends ModelTemplate
{
  Datum: Date;
  ClientName: string;
  ConfigurationName: string;
  Description: string;
}
