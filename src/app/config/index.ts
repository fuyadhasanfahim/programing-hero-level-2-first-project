import dotEnv from 'dotenv'
import path from 'path'

dotEnv.config({ path: path.join(process.cwd(), '.env') })

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
}
