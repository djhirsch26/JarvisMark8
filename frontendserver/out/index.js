"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import * as classifierservice from './out/classifier_service_grpc_pb';
const classifier_service_grpc_pb_1 = require("./proto/classifier_service_grpc_pb");
const classifier_service_pb_1 = require("./proto/classifier_service_pb");
// const { ClassifyQueryRequest, ClassifyQueryResponse } = require('./out/classifier_service_pb');
const grpc = require('@grpc/grpc-js');
const GrpcClient = grpc.Client;
const app = (0, express_1.default)();
const port = 3000;
// const classifierservice = require("./out/classifier_service_grpc_pb");
// console.log(ClassifyQueryRequest)
const client = new classifier_service_grpc_pb_1.ClassifierClient("localhost:8800", grpc.credentials.createInsecure());
// console.log(client.classifyQuery) 
const request = new classifier_service_pb_1.ClassifyQueryRequest();
request.setQuery("neat");
console.log(request);
const response = client.classifyQuery(request, new grpc.Metadata(), {}, (err, feature) => {
    console.log(err, feature.toObject());
});
function file(path) {
    return __dirname + path;
}
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    console.log("Got Base Request");
    res.sendFile(file('/public/index.html'));
});
app.get('/classiciation', (req, res) => {
    console.log("Got classification Request");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ classification: 'MUSIC' }));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
