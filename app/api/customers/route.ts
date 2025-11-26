import { NextResponse } from 'next/server'

// Mock database - replace with actual database in production
let customers = [
  {
    id: 1,
    name: 'John Mensah',
    email: 'john@example.com',
    phone: '+233 XX XXX XXXX',
    orders: 3,
    spent: 85000,
    joined: '2024-01-15',
    status: 'Active'
  }
]

// GET all customers
export async function GET() {
  try {
    return NextResponse.json({ success: true, data: customers })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch customers' },
      { status: 500 }
    )
  }
}

// POST create new customer
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const newCustomer = {
      id: customers.length + 1,
      ...body,
      orders: 0,
      spent: 0,
      joined: new Date().toISOString(),
      status: 'Active'
    }

    customers.push(newCustomer)

    return NextResponse.json(
      { success: true, data: newCustomer },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create customer' },
      { status: 500 }
    )
  }
}
