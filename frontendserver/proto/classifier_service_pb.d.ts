// package: classificaiton
// file: proto/classifier_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ClassifyQueryRequest extends jspb.Message { 

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): string | undefined;
    setQuery(value: string): ClassifyQueryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassifyQueryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClassifyQueryRequest): ClassifyQueryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassifyQueryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassifyQueryRequest;
    static deserializeBinaryFromReader(message: ClassifyQueryRequest, reader: jspb.BinaryReader): ClassifyQueryRequest;
}

export namespace ClassifyQueryRequest {
    export type AsObject = {
        query?: string,
    }
}

export class ClassifyQueryResponse extends jspb.Message { 

    hasIntent(): boolean;
    clearIntent(): void;
    getIntent(): Intent | undefined;
    setIntent(value?: Intent): ClassifyQueryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassifyQueryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClassifyQueryResponse): ClassifyQueryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassifyQueryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassifyQueryResponse;
    static deserializeBinaryFromReader(message: ClassifyQueryResponse, reader: jspb.BinaryReader): ClassifyQueryResponse;
}

export namespace ClassifyQueryResponse {
    export type AsObject = {
        intent?: Intent.AsObject,
    }
}

export class Intent extends jspb.Message { 

    hasAudio(): boolean;
    clearAudio(): void;
    getAudio(): Intent.Audio | undefined;
    setAudio(value?: Intent.Audio): Intent;

    hasUnknown(): boolean;
    clearUnknown(): void;
    getUnknown(): boolean;
    setUnknown(value: boolean): Intent;

    getIntentCase(): Intent.IntentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Intent.AsObject;
    static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Intent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Intent;
    static deserializeBinaryFromReader(message: Intent, reader: jspb.BinaryReader): Intent;
}

export namespace Intent {
    export type AsObject = {
        audio?: Intent.Audio.AsObject,
        unknown: boolean,
    }


    export class Audio extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Audio.AsObject;
        static toObject(includeInstance: boolean, msg: Audio): Audio.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Audio, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Audio;
        static deserializeBinaryFromReader(message: Audio, reader: jspb.BinaryReader): Audio;
    }

    export namespace Audio {
        export type AsObject = {
        }
    }


    export enum IntentCase {
        INTENT_NOT_SET = 0,
        AUDIO = 1,
        UNKNOWN = 2,
    }

}
