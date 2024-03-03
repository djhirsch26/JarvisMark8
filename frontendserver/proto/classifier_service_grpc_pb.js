// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_classifier_service_pb = require('../proto/classifier_service_pb.js');

function serialize_classificaiton_ClassifyQueryRequest(arg) {
  if (!(arg instanceof proto_classifier_service_pb.ClassifyQueryRequest)) {
    throw new Error('Expected argument of type classificaiton.ClassifyQueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_classificaiton_ClassifyQueryRequest(buffer_arg) {
  return proto_classifier_service_pb.ClassifyQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_classificaiton_ClassifyQueryResponse(arg) {
  if (!(arg instanceof proto_classifier_service_pb.ClassifyQueryResponse)) {
    throw new Error('Expected argument of type classificaiton.ClassifyQueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_classificaiton_ClassifyQueryResponse(buffer_arg) {
  return proto_classifier_service_pb.ClassifyQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ClassifierService = exports.ClassifierService = {
  classifyQuery: {
    path: '/classificaiton.Classifier/ClassifyQuery',
    requestStream: false,
    responseStream: false,
    requestType: proto_classifier_service_pb.ClassifyQueryRequest,
    responseType: proto_classifier_service_pb.ClassifyQueryResponse,
    requestSerialize: serialize_classificaiton_ClassifyQueryRequest,
    requestDeserialize: deserialize_classificaiton_ClassifyQueryRequest,
    responseSerialize: serialize_classificaiton_ClassifyQueryResponse,
    responseDeserialize: deserialize_classificaiton_ClassifyQueryResponse,
  },
};

exports.ClassifierClient = grpc.makeGenericClientConstructor(ClassifierService);
