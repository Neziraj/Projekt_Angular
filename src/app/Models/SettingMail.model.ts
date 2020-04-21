import { ModelTemplate } from './ModelTemplate';

export class SettingsMail extends ModelTemplate
{
    IdSettings: number;
    SendMail: boolean;
    Cron: string;
}
