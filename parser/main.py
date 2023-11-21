import json
from parserLib import download, parse
import re
import sys


def extract_id(url):
    match = re.search(r'resume[=/]([a-f0-9]+)', url)
    if match:
        return match.group(1)
    else:
        return None


if len(sys.argv) != 2:
    raise AttributeError("invalid number of arguments")

id = extract_id(sys.argv[1])
if id == None:
    raise AttributeError("Invalid link")

resume = download.resume(id)
resume = parse.resume(resume)

with open("data/resume.json", "w", encoding="utf-8") as f:
    json.dump(resume, f, ensure_ascii=False)
