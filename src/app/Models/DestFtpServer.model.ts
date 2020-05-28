import { ModelTemplate } from './ModelTemplate';

export class DestFtp extends ModelTemplate
{
    IdConfiguration: number;
    Site: string;
    Login: string;
    Password: string;
    Port: string;
    FileSuffix: string;
    TransferMode: boolean;
    Encryption: number;

}
