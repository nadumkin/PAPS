const {start} =require('../index')
const request = require('supertest')("http://localhost:3005");
const {expect} = require('chai')
const {v4: uuidv4} = require('uuid')

let email = '';
let jwtToken = '';

describe("SignUp Tests", async () => {

    before( (done) => {
        email = uuidv4();
        setTimeout(done, 1000);
    })

    it("Successful account creation", async  () => {
        return request.post("/signUp").send({
            email: email,
            password: "Qwe123",
            fullName: "Nikita"
        }).expect(201).then((res, err) => {
            expect(res.body).to.have.property("token")
        });
    });

    it("Account creation with the same email", async  () => {
        return request.post("/signUp").send({
            email: email,
            password: "Qwe123",
            fullName: "Nikita"
        }).expect(400).then((res, err) => {
            expect(res.body).to.have.property("message")
            expect(res.body.message).to.be.eql('User already exists')
        });
    });

    it("Empty body", async  () => {
        return request.post("/signUp").send({}).expect(400).then((res, err) => {
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("body")
            expect(res.body).to.have.property("params")
            expect(res.body).to.have.property("query")
            expect(res.body.body).to.have.length(3);
        });
    });
});