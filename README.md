# s3-pre-signed-url-generator
This small utility help you generating a pre-signed GETObject URL.


# Setup:

Set AWS Environment Variables

open terminal and set following environment variables with proper values:

```
export AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"
export AWS_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY"
export AWS_SESSION_TOKEN="YOUR_SESSION_TOKEN"
```

Once Environment variable are set, open `config/default.json` file in project and set proper config values:

```json
{  
  "s3": {
    "bucket": "YOUR_S3_BUCKET",
    "key": "YOUR_OBJECT_NAME",
    "region": "YOUR_REGION",
    "expiresIn": 604800 //default 7 days
  }
}
```

after setting above values run following command to install npm packages:

```
npm install
```
once packages are successfully installed, run:

```
npm start
```
Pre-signed url will logged in console, you can copy it :)