import express, { Express, Request, Response } from 'express';
// import * as classifierservice from './out/classifier_service_grpc_pb';
import { ClassifierClient } from './proto/classifier_service_grpc_pb';
import { ClassifyQueryRequest, ClassifyQueryResponse } from './proto/classifier_service_pb';
// const { ClassifyQueryRequest, ClassifyQueryResponse } = require('./out/classifier_service_pb');
const grpc = require('@grpc/grpc-js')
const GrpcClient = grpc.Client;
const app: Express = express()
const port = 3000

// const classifierservice = require("./out/classifier_service_grpc_pb");

// console.log(ClassifyQueryRequest)
const client = new ClassifierClient("localhost:8800", grpc.credentials.createInsecure())
// console.log(client.classifyQuery) 
const request = new ClassifyQueryRequest();
request.setQuery("neat");
console.log(request);
const response = client.classifyQuery(request, new grpc.Metadata(), {}, (err: object, feature: ClassifyQueryResponse) => {
    console.log(err, feature.toObject());
})

function file(path: string) {
    return __dirname + path
}

app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    console.log("Got Base Request")
    res.sendFile(file('/public/index.html'))
})

app.get('/classiciation', (req: Request, res: Response) => {
    console.log("Got classification Request");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ classification: 'MUSIC' }));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})