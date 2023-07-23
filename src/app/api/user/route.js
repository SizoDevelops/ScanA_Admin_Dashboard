import { Deta } from "deta";
import * as bcrypt from 'bcrypt'
import * as voucher_codes from "voucher-code-generator"
const deta = Deta()
const db = deta.Base("schools_db")


export async function POST(request) {
    const body = await request.json();

    const code = voucher_codes.generate({
        length: 6,
        count: 1,
        charset: voucher_codes.charset("alphabetic")
    });
    const user = await db.insert({
        school_name: body.school_name,
        school_code: body.school_code,
        school_email: body.school_email,
        school_number: body.school_number,
        school_logo: body.school_logo,
        school_address:{
            address_line_one: body.address_line_one,
            address_line_two: body.address_line_two,
            province: body.province,
            city: body.city,
            zip_code: body.zip_code
        },
        school_members: [],
        admins:[],
        password: await bcrypt.hash(body.password, 10),
        
    }, code[0])

    const { password, ...result } = user;

    return new Response(JSON.stringify(result))
}
