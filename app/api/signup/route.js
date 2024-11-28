import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";


export async function POST(req) {
    const body = await req.json();
    const { name, email, password } = body;


    if (!name || !email || !password) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    try {
        const existingUser = await db.user.findUnique({
            where: {
                email,
            },
        });
        if (!existingUser) {

            try {
                const user = await db.User.create({
                    data: {
                        name,
                        email,
                        hashpassword: password,
                    },
                });
                    const token = jwt.sign({id: user}, process.env.JWT_SECRET, {expiresIn: '7d'});
               
             
                return NextResponse.json(token, { status: 200 });

            } catch (error) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
        }
        return NextResponse.json({ error: 'user with this mail already exist'}, { status: 500 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }




}