import { type NextRequest, NextResponse } from 'next/server'

async function POST (request: NextRequest) {
  try {
    const { name, location, type, description } = await request.json()

    const warehouse = { name, location, type, description }

    console.log(warehouse)

    return NextResponse.json(warehouse)
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: 'Failed to create a warehouse'
      },
      {
        status: 500
      }
    )
  }
}

export { POST }
