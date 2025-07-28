// app/api/videos/[id]/suggested/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json([
        {
            _id: '101',
            title: 'React Explained in 5 Minutes',
            thumbnailUrl: 'https://res.cloudinary.com/dbwxspexp/image/upload/f_auto,q_auto,w_250,h_375,c_fill/v1749468875/products/product_image-1749468874717_dswuba.png',
        },
        {
            _id: '102',
            title: 'Tailwind Tips & Tricks',
            thumbnailUrl: 'https://res.cloudinary.com/dbwxspexp/image/upload/f_auto,q_auto,w_250,h_375,c_fill/v1749468875/products/product_image-1749468874717_dswuba.png',
        },
        {
            _id: '103',
            title: 'Next.js 14 Tutorial',
            thumbnailUrl: 'https://res.cloudinary.com/dbwxspexp/image/upload/f_auto,q_auto,w_250,h_375,c_fill/v1749468875/products/product_image-1749468874717_dswuba.png',
        },
    ])
}
