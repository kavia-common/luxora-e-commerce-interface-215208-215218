#!/bin/bash
cd /home/kavia/workspace/code-generation/luxora-e-commerce-interface-215208-215218/luxury_ecommerce_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

