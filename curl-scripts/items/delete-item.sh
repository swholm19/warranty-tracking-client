#!/bin/bash

# Call using:
# ID=3 sh scripts/meals/delete-meal.sh

curl "http://localhost:4741/items/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
