# Person Manager Backend

Node.js + Express + MongoDB RESTful API for managing person records.

## Endpoints

- GET /api/persons - List all persons
- GET /api/persons/:id - Get one person
- POST /api/persons - Create person (body: {name, email, phone})
- PUT /api/persons/:id - Update person
- DELETE /api/persons/:id - Delete person

## Notes

- Use MongoDB Atlas for easy setup.
- CORS is enabled only for origins in .env
