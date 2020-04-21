import { ModelTemplate } from './ModelTemplate';

export class Configuration extends ModelTemplate
{
    Name: string;
    Description: string;
    BackupType: string;
    Cron: string;
    RepeatableBackup: boolean;
    SavedBackupNumber: number;
}
