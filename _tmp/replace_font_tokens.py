import os
import re

# Map old tokens to new tokens
TOKEN_MAP = {
    'text-xs': 'text-p-sm',
    'text-sm': 'text-3-sm',
    'text-base': 'text-p',
    'text-md': 'text-p-xl',
    'text-lg': 'text-5',
    'text-xl': 'text-4',
    'text-2xl': 'text-3-xl',
    'text-3xl': 'text-2',
    'text-hero': 'text-1',
}

# Only operate in /src/styles/ root CSS files
STYLE_DIR = os.path.join(os.path.dirname(__file__), '../src/styles')

# Only these files
FILES = [
    'foundation.css',
    'components.css',
    'framework.css',
    'primitives.css',
]

VAR_PATTERN = re.compile(r'var\(--(text-[a-z0-9-]+)\)')

for fname in FILES:
    path = os.path.join(STYLE_DIR, fname)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    def repl(match):
        old = match.group(1)
        return f"var(--{TOKEN_MAP.get(old, old)})"
    new_content = VAR_PATTERN.sub(repl, content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {fname}")
    else:
        print(f"No changes in {fname}")
print("Done.")
