import { type NextRequest, NextResponse } from 'next/server'

async function POST (request: NextRequest) {
  try {
    const { name, description } = await request.json()

    const category = { name, description }

    console.log(category)

    return NextResponse.json(category)
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: 'Failed to create a category'
      },
      {
        status: 500
      }
    )
  }
}

export { POST }
