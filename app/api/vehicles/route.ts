import { NextResponse } from 'next/server'

// Mock database - replace with actual database in production
let vehicles = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 28500,
    location: 'Ghana',
    status: 'Active',
    featured: true,
    vin: 'JT2BF18K0V0123456',
    mileage: 12000,
    color: 'Silver',
    condition: 'Used',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    description: 'Well-maintained sedan with full service history.',
    images: []
  }
]

// GET all vehicles
export async function GET() {
  try {
    return NextResponse.json({ success: true, data: vehicles })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch vehicles' },
      { status: 500 }
    )
  }
}

// POST create new vehicle
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.make || !body.model || !body.year || !body.price || !body.vin) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const newVehicle = {
      id: vehicles.length + 1,
      ...body,
      createdAt: new Date().toISOString()
    }

    vehicles.push(newVehicle)

    return NextResponse.json(
      { success: true, data: newVehicle },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create vehicle' },
      { status: 500 }
    )
  }
}
