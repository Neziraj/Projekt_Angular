import { ModelTemplate } from '../ModelTemplate';
import DateTimeFormat = Intl.DateTimeFormat;

export class CompletedBackupsQuery extends ModelTemplate
{
Datum: DateTimeFormat;
ClientName: string;
ConfigurationName: string;
Description: string;
Error: string;
}
