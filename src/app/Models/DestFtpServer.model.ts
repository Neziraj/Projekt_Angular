import { ModelTemplate } from './ModelTemplate';

export class DestFtp extends ModelTemplate
{
    IdDestSource: number;
    Site: string;
    Login: string;
    Password: string;
    Port: string;
    FileSuffix: string;
}
