const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const config = require('config');


const s3 = config.get('s3');

const REGION = s3.region;

// Create S3 client object
const client = new S3Client({ region: REGION });

const params = {
    Bucket: s3.bucket,
    Key: s3.key,
    Region: s3.region
};

const command = new GetObjectCommand(params);
getSignedUrl(client, command, { expiresIn: s3.expiresIn })
    .then((url) => {
        console.log(url);
    })
    .catch((err) => {
        console.log(err);
    });
