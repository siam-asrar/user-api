import app from './app'

const port = 4000;

async function connect() {
    try {
        console.log('🛢  - Successfully Connected to API')
        app.listen(port, () => {
            console.log(`App is listening to port ${port}`)
        })
    } catch (err) {
        console.log('Failed to connect to DB:', err)
    }
}
connect()
