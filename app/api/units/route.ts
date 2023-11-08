import { type NextRequest, NextResponse } from 'next/server'

async function POST (request: NextRequest) {
  try {
    const { name, abbreviation } = await request.json()

    const unit = { name, abbreviation }

    console.log(unit)

    return NextResponse.json(unit)
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: 'Failed to create a unit'
      },
      {
        status: 500
      }
    )
  }
}

export { POST }
