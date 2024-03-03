// package: classificaiton
// file: proto/classifier_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_classifier_service_pb from "../proto/classifier_service_pb";

interface IClassifierService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    classifyQuery: IClassifierService_IClassifyQuery;
}

interface IClassifierService_IClassifyQuery extends grpc.MethodDefinition<proto_classifier_service_pb.ClassifyQueryRequest, proto_classifier_service_pb.ClassifyQueryResponse> {
    path: "/classificaiton.Classifier/ClassifyQuery";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_classifier_service_pb.ClassifyQueryRequest>;
    requestDeserialize: grpc.deserialize<proto_classifier_service_pb.ClassifyQueryRequest>;
    responseSerialize: grpc.serialize<proto_classifier_service_pb.ClassifyQueryResponse>;
    responseDeserialize: grpc.deserialize<proto_classifier_service_pb.ClassifyQueryResponse>;
}

export const ClassifierService: IClassifierService;

export interface IClassifierServer {
    classifyQuery: grpc.handleUnaryCall<proto_classifier_service_pb.ClassifyQueryRequest, proto_classifier_service_pb.ClassifyQueryResponse>;
}

export interface IClassifierClient {
    classifyQuery(request: proto_classifier_service_pb.ClassifyQueryRequest, callback: (error: grpc.ServiceError | null, response: proto_classifier_service_pb.ClassifyQueryResponse) => void): grpc.ClientUnaryCall;
    classifyQuery(request: proto_classifier_service_pb.ClassifyQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_classifier_service_pb.ClassifyQueryResponse) => void): grpc.ClientUnaryCall;
    classifyQuery(request: proto_classifier_service_pb.ClassifyQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_classifier_service_pb.ClassifyQueryResponse) => void): grpc.ClientUnaryCall;
}

export class ClassifierClient extends grpc.Client implements IClassifierClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public classifyQuery(request: proto_classifier_service_pb.ClassifyQueryRequest, callback: (error: grpc.ServiceError | null, response: proto_classifier_service_pb.ClassifyQueryResponse) => void): grpc.ClientUnaryCall;
    public classifyQuery(request: proto_classifier_service_pb.ClassifyQueryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_classifier_service_pb.ClassifyQueryResponse) => void): grpc.ClientUnaryCall;
    public classifyQuery(request: proto_classifier_service_pb.ClassifyQueryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_classifier_service_pb.ClassifyQueryResponse) => void): grpc.ClientUnaryCall;
}
