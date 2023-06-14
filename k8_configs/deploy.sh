#!/bin/bash

 

files=(
  "mongodb_storage.yaml"
  "secret.yaml"
  "mongo-app.yaml"
  "mongo-service.yaml"
  "node-config.yaml"
  "node-app.yaml"
  "node-service.yaml"
)

 

for file in "${files[@]}"; do
  echo "Applying $file..."
  kubectl apply -f "$file"
  sleep 1
done