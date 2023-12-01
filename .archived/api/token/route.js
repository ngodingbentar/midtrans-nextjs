import { NextResponse } from 'next/server';

const midtransClient = require('midtrans-client')
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT
})

export async function POST(request) {
  const {id, productName, price, quantity} = await request.json()

  let paramemter = {
    item_details: {
      name: productName,
      price,
      quantity
    },
    transaction_details: {
      order_id: id,
      gross_amount: price * quantity
    }
  }

  const token = await snap.createTransactionToken(paramemter)
  return NextResponse.json({token})
}