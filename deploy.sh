#!/bin/sh

set +e

gcloud functions deploy pdfByURL \
    --runtime=nodejs14 \
    --memory=1024MB \
    --trigger-http \
    --timeout=30s
