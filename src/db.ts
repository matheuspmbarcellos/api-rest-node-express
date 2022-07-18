import { Pool } from "pg";

const connectionString = 'postgres://ipabiwbz:wPz6rZSXkmJyEgz06eSTDKaIcPaDMlEm@kesavan.db.elephantsql.com/ipabiwbz';

const db = new Pool({ connectionString });

export default db;