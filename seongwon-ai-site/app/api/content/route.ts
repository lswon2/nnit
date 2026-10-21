import {getDb} from '../../../db';
import {settings} from '../../../db/schema';
export async function GET(){try{const rows=await getDb().select().from(settings).limit(1);return Response.json(rows.length?JSON.parse(rows[0].content):null,{headers:{'Cache-Control':'no-store'}})}catch{return Response.json(null)}}
