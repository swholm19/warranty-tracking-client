#!/bin/bash

curl "http://localhost:4741/items" \
  --include \
  --request POST \
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
