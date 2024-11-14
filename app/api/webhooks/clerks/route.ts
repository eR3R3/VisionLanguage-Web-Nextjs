export async function GET(req: Request) {
    console.log('Received a GET request at /api/hello');
    return new Response(
        JSON.stringify({ message: 'Hello, this is a test API!' }),
        { status: 200 }
    );
}