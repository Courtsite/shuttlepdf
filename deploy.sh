#!/bin/sh

set +e

gcloud functions deploy pdfByURL \
    --runtime=nodejs12 \
    --memory=1024MB \
    --trigger-http \
    --timeout=30s
