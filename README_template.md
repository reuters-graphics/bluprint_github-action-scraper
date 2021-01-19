![](badge.svg)

# {{ projectName }}
![Scrape data](https://github.com/reuters-graphics/action_{{ projectName }}/workflows/Scrape%20data/badge.svg)

A GitHub Action-based scraper. Built from our house [bluprint](https://github.com/reuters-graphics/bluprint_github-action-scraper).

## Data endpoint
`data.json` 
[https://graphics.thomsonreuters.com/data/2020/{{ projectName }}/data.json](https://graphics.thomsonreuters.com/data/2020/{{ projectName }}/data.json)


## Developing

1. Customize the script in `index.js` to scrape your data and upload it to somewhere on our graphics.thomsonreuters.com S3 bucket.
2. Set the cron schedule in `.github/workflows/action.yaml`.
3. Create a repository on the [reuters-graphics](https://github.com/reuters-graphics) GitHub org. Prefix the name with `action_`
4. Commit your repo to GitHub. You can check your action in the Actions tab.
5. You can run the scraper locally using `yarn run scrape`
