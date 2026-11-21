#!/usr/bin/env bash
# Render a concept HTML file to PNG at an exact size with headless Chrome.
# Usage: render.sh <file.html> <width> <height> <out.png>
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
abs(){ echo "$(cd "$(dirname "$1")" && pwd -W)/$(basename "$1")"; }
src="$(abs "$1")"; out="$(abs "$4")"
prof="$(mktemp -d)"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --user-data-dir="$(cd "$prof" && pwd -W)" --virtual-time-budget=9000 \
  --window-size="$2,$3" --screenshot="$out" "file:///$src" 2>&1 | grep -v -i "devtools\|bytes written" || true
rm -rf "$prof"
