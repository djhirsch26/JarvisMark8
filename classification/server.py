from out import classifier_service_pb2
from out import classifier_service_pb2_grpc
import grpc
import sys
import concurrent.futures as futures

PORT = 8800


class ClassifierService(classifier_service_pb2_grpc.ClassifierServicer):
    def ClassifyQuery(self, request, context):
        return classifier_service_pb2.ClassifyQueryResponse(intent={"unknown": True})


def serve():
    print(f"Staring GRPC Server at {PORT}")
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    classifier_service_pb2_grpc.add_ClassifierServicer_to_server(
        ClassifierService(), server)
    # Replace with your desired address and port
    server.add_insecure_port(f"[::]:{PORT}")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
