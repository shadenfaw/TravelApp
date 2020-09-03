const app = require('../src/server/server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
it('gets the image url endpoint', async done => {
    const response = await request.get('/cityImageUrl')
                            .query({ city: 'paris' })
    
  
    expect(response.body.hits.length).toBeGreaterThan(0)
    done()
  })