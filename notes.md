For Proto Stuff
* Install Python GRPC tools `pip install grpcio-tools`
* Install Node GRPC Tools `npm install -g grpc-tools`

This generates python files:
* Run `python3 -m grpc_tools.protoc --python_out="./" --grpc_python_out="./" -Iout=proto/ proto/classifier_service.proto`

This generates JS files
* Run `grpc_tools_node_protoc --js_out=import_style=commonjs,binary:"./frontendserver" --grpc_out=grpc_js:"./frontendserver" -Iproto=proto/ proto/classifier_service.proto `

This generates typing files
* Run `protoc --plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts --ts_out="./frontendserver" -Iproto=proto/  proto/classifier_service.proto`

Add /Users/daniel/Documents/Jarvis/JarvisMark8/ to the PYTHONPATH. This can be done in the bash_profile.

