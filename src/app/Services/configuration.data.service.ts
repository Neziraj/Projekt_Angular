
import {Configuration} from '../Models/Config.model';


@Injectable({
  providedIn: 'root'
})

export class ConfigurationDataService {
  constructor(private http: HttpClient) { }

  ConfigURL = 'http://localhost:49497/api/configuration';

  getConfig()
  {
    return this.http.get<Client[]>(this.ConfigURL);
  }
}
