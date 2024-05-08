

## Run

```bash
npm i
# to run Kafka
docker compose up 
# to run REST API (producer)
npm run serve:api-gateway
# to run consumer
npm run serve:tasks-microservice
# to generate the load requests
npm run autocannon -- -c 100 -d 5 http://localhost:3000/task/xxx
```