![](badge.svg)

# Bluprint: GitHub action scraper

A [bluprint](https://github.com/reuters-graphics/bluprint) for scrapers executed using GitHub Actions.

- Node-based scraper executed via npm scripts.
- Executes script using [GitHub Actions](https://help.github.com/en/actions).
- Runs on a crontab schedule.
- Built-in publisher to post data to AWS S3.


### Quickstart

```
$ bluprint add reuters-graphics/bluprint_github-action-scraper
$ mkdir new-project && cd new-project
$ bluprint start
```
