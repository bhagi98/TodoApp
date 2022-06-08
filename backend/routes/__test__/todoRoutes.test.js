const request = require('supertest');
const todo = require("../todoRoutes");



describe('Todos API', () => {

    test('GET / --> array todos', function () {
        request(todo)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(expect.arrayContaining([
                    expect.objectContaining({
                        title: expect.any(String),
                        completed: expect.any(Boolean),
                    }),
                ]))
            });
    });


    test('POST / --> created todos', () => {
        request(todo).post('/').send({
            title: 'todo1',
            completed: false,
        })
            .expect(201);

    });


    test('DELETE  /:id --> updated todos', () => {
        request(todo)
            .delete('/:id')
            .expect('Content-Type', /json/)
            .expect(200);
    });
})
