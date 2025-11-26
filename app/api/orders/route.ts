import { NextResponse } from 'next/server'

// Mock database - replace with actual database in production
let orders = [
  {
    id: 1234,
    orderNumber: 'ORD-2024-001',
    customer: {
      name: 'John Mensah',
      email: 'john@example.com',
      phone: '+233 XX XXX XXXX'
    },
    vehicle: {
      make: 'Toyota',
      model: 'Camry',
      year: 2024,
      price: 28500
    },
    status: 'Pending',
    payment: 'Paid',
    date: new Date().toISOString()
  }
]

// GET all orders
export async function GET() {
  try {
    return NextResponse.json({ success: true, data: orders })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

// POST create new order
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const newOrder = {
      id: orders.length + 1000,
      orderNumber: `ORD-2024-${String(orders.length + 1).padStart(3, '0')}`,
      ...body,
      date: new Date().toISOString()
    }

    orders.push(newOrder)

    return NextResponse.json(
      { success: true, data: newOrder },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
