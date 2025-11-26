import { NextResponse } from 'next/server'

// Mock database - replace with actual database in production
const vehicles = [
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
  }
]

// GET single vehicle
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const vehicle = vehicles.find(v => v.id === parseInt(params.id))
    
    if (!vehicle) {
      return NextResponse.json(
        { success: false, error: 'Vehicle not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: vehicle })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch vehicle' },
      { status: 500 }
    )
  }
}

// PUT update vehicle
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const vehicleIndex = vehicles.findIndex(v => v.id === parseInt(params.id))
    
    if (vehicleIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Vehicle not found' },
        { status: 404 }
      )
    }

    vehicles[vehicleIndex] = {
      ...vehicles[vehicleIndex],
      ...body,
      updatedAt: new Date().toISOString()
    }

    return NextResponse.json({ success: true, data: vehicles[vehicleIndex] })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update vehicle' },
      { status: 500 }
    )
  }
}

// DELETE vehicle
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const vehicleIndex = vehicles.findIndex(v => v.id === parseInt(params.id))
    
    if (vehicleIndex === -1) {
      return NextResponse.json(
        { success: false, error: 'Vehicle not found' },
        { status: 404 }
      )
    }

    vehicles.splice(vehicleIndex, 1)

    return NextResponse.json({ success: true, message: 'Vehicle deleted' })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete vehicle' },
      { status: 500 }
    )
  }
}
