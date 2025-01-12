
import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";


export async function POST(request) {
  // const body = await request.json();
  // const data = await base.fetch({ "reset_tokens.token": body.token });
  // if (data.count > 0 ) {
  //   await base.update(
  //     { "password": await bcrypt.hash(body.password, 10), "reset_tokens.used": true },
  //     data.items[0].key
  //   );
  //   return NextResponse.json("User Updated");
  // } else {
  //   return NextResponse.json("Invalid Token");
  // }
}
