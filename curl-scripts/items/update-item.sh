#!/bin/bash

# Run Using:
# ID=2 sh scripts/meals/update-meal.sh

curl "http://localhost:4741/items/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "item": {
      "name": "'"${NAME}"'",
      "price": "'"${PRICE}"'",
      "purchase_date": "'"${PDATE}"'",
      "expiration_date": "'"${EDATE}"'",
      "serial_id": "'"${SID}"'",
      "user_id": "'"${USERID}"'"
    }
  }'

echo
