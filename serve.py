#!/usr/bin/env python3
"""Local preview server that DISABLES caching, so every reload shows your
latest edits (plain `python3 -m http.server` caches JS/CSS and hides changes).

Usage:
    python3 serve.py            # serves on http://localhost:8000
    python3 serve.py 8001       # custom port
"""
import http.server, socketserver, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"Serving http://localhost:{PORT}  (no-cache; Ctrl+C to stop)")
    httpd.serve_forever()
