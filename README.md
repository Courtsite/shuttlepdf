# shuttlepdf

📃 Smashingly simple, and scalable _("serverless")_ HTML to PDF conversions using Google Cloud Functions, and Puppeteer.


## Getting Started

```
# 1. Install `gcloud` CLI tool: https://cloud.google.com/sdk/gcloud/
# 2. Set-up:
gcloud init

# (Optional) Set your current working project
gcloud config set project <project>

# 3. Deploy!
./deploy.sh
```

Update `deploy.sh` to suit your needs (e.g. higher timeouts, different region, more memory, etc).
