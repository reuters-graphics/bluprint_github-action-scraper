![](badge.svg)

# {{ projectName }}

A GitHub Action-based scraper. Built from our house [bluprint](https://github.com/reuters-graphics/bluprint_github-action-scraper).

## Developing

1. Customize the script in `index.js` to scrape your data and upload it to somewhere on our graphics.thomsonreuters.com S3 bucket.
2. Set the cron schedule in `.github/workflows/action.yaml`.
3. Create a repository on the [reuters-graphics](https://github.com/reuters-graphics) GitHub org.
4. Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to your repo's [secrets](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets).
5. Commit your repo to GitHub. You can check your action in the Actions tab.
