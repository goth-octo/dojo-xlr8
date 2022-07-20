import json
from datetime import datetime, timedelta, timezone
from typing import NamedTuple

TAGS_FILE = "repository_tags.json"
COMMITS_FILE = "repository_commits.json"


WORKED_DAYS_IN_A_MONTH = 20
WORKED_DAYS_IN_A_SPRINT = 10

LAST_DAY_OF_SPRINT = datetime(2021, 4, 17, 0, 0, tzinfo=timezone(timedelta(seconds=7200)))

Tag = NamedTuple("Tag", [("name", str), ("datetime", datetime)])
Commit = NamedTuple("Commit", [("sha", str), ("datetime", datetime)])


def read_json_file(path: str) -> dict:
    """Reads a json file and returns the data as a python dictionary"""
    with open(path, "r") as f:
        data = json.load(f)
    return data


def parse_datetime_from_string(date_string: str) -> datetime:
    """Parses a date string and returns a datetime object to easily manipulate dates"""
    return datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%S%z")
