import dotenv from 'dotenv';
import { cleanEnv, num, str } from 'envalid';
import path from 'path';

// joining the .env path
dotenv.config({ path: path.join(process.cwd(), '.env') });

console.log(dotenv.config({ path: path.join(process.cwd(), '.env') }));

const env_var = cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: num(),
});

export default env_var;
