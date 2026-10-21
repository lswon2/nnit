import {getDb} from '../../../db';
import {applications} from '../../../db/schema';
import {lt} from 'drizzle-orm';
export async function POST(request:Request){try{
 if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'허용되지 않은 요청'},{status:403});
 const body=await request.text();if(body.length>12000)return Response.json({error:'입력 길이 초과'},{status:413});const d=JSON.parse(body);
 for(const [key,max] of Object.entries({name:50,phone:30,email:200,age:30,occupation:200,experience:100,wish:2000})){if(typeof d[key]!=='string'||d[key].length>max)return Response.json({error:'입력 확인 필요'},{status:400})}
 if(!d.name.trim()||!/^\+?[\d\s()-]{8,30}$/.test(d.phone)||!/^\S+@\S+\.\S+$/.test(d.email)||!d.age||!d.experience||d.consent!=='on')return Response.json({error:'필수 항목 확인 필요'},{status:400});
 const db=getDb();await db.delete(applications).where(lt(applications.createdAt,Date.now()-90*86400000));await db.insert(applications).values({name:d.name.trim(),phone:d.phone,email:d.email,age:d.age,occupation:d.occupation,experience:d.experience,wish:d.wish,consentedAt:new Date().toISOString(),createdAt:Date.now()});return Response.json({ok:true});
}catch{return Response.json({error:'접수를 저장하지 못했습니다.'},{status:500})}}
