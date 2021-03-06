var express = require('express')
  , cors = require('cors')
  , app = express();

var corsOptions = {
  origin: 'http://127.0.0.1:9000',
  credentials: true
};

app.use(cors());

app.get('/organizations', cors(corsOptions), function (req, res) {
  res.send([
    {"id": 1, "name": "Enspiral Services", "current_round_id": 1},
    {"id": 2, "name": "Enspiral Foundation", "current_round_id": null}
  ]);
});

app.get('/round/:id', cors(corsOptions), function (req, res) {
  res.send(
    {
      "id": 1,
      "organization": {
        "id": 1,
        "name": "Enspiral Services",
        "current_round_id": 1
      },
      "buckets": [
        {
          "id": 1,
          "name": "Fund Cobudget Development",
          "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sit amet fringilla lacinia. Duis congue augue nisi, quis dignissim purus ullamcorper vel. Ut sapien augue, ultrices sit amet odio sed, consequat laoreet ante. ",
          "created_at": "2014-09-10T23:32:12.147Z",
          "min_cents": 20000,
          "target_cents": 50000,
          "max_cents": 100000,
          "allocation_total_cents": 20000,
          "allocations": [
            {
              "amount_cents": 20000,
              "created_at": "2014-09-10T23:50:27.486Z",
              "updated_at": "2014-09-10T23:54:27.665Z",
              "allocator": {
                "id": 1,
                "name": "Craig"
              }
            }
          ]
        },

        {
          "id": 2,
          "name": "Fund API Redesign",
          "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sit amet fringilla lacinia. Duis congue augue nisi, quis dignissim purus ullamcorper vel. Ut sapien augue, ultrices sit amet odio sed, consequat laoreet ante. ",
          "created_at": "2014-09-10T23:32:12.147Z",
          "min_cents": 3000000,
          "target_cents": 4000000,
          "max_cents": 20000000,
          "allocation_total_cents": 20000,
          "allocations": [
            {
              "amount_cents": 20000,
              "created_at": "2014-09-10T23:50:27.486Z",
              "updated_at": "2014-09-10T23:54:27.665Z",
              "allocator": {
                "id": 2,
                "name": "Nanz"
              }
            }
          ]
        }
      ]
    }
  );
});

app.get('/bucket/:id', cors(corsOptions), function (req, res) {
  res.send(
    {
      "id": 1,
      "name": "Fund Cobudget Development",
      "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sit amet fringilla lacinia. Duis congue augue nisi, quis dignissim purus ullamcorper vel. Ut sapien augue, ultrices sit amet odio sed, consequat laoreet ante. ",
      "created_at": "2014-09-10T23:32:12.147Z",
      "min_cents": 20000,
      "target_cents": 50000,
      "max_cents": 100000,
      "allocation_total_cents": 20000,
      "allocations": [
        {
          "amount_cents": 20000,
          "created_at": "2014-09-10T23:50:27.486Z",
          "updated_at": "2014-09-10T23:54:27.665Z",
          "allocator": {
            "id": 1,
            "name": "Craig"
          }
        }
      ]
    }
  );
});

app.listen(3000);
console.log('Listening on port 3000...');