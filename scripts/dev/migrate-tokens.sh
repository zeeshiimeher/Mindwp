#!/bin/bash
set -e
CSS="src/styles/components.css"

echo "=== SPACING: margin-top: 0.125rem → var(--space-half) ==="
sed -i '' 's/margin-top: 0\.125rem/margin-top: var(--space-half)/g' "$CSS"

echo "=== SPACING: margin: 0 0 0.125rem → margin: 0 0 var(--space-half) ==="
sed -i '' 's/margin: 0 0 0\.125rem/margin: 0 0 var(--space-half)/g' "$CSS"

echo "=== SPACING: margin-top: 0.25rem → var(--space-1) ==="
sed -i '' 's/margin-top: 0\.25rem/margin-top: var(--space-1)/g' "$CSS"

echo "=== SPACING: margin-bottom: 0.25rem → var(--space-1) ==="
sed -i '' 's/margin-bottom: 0\.25rem/margin-bottom: var(--space-1)/g' "$CSS"

echo "=== SPACING: margin-top: 0.6rem → var(--space-3) ==="
sed -i '' 's/margin-top: 0\.6rem/margin-top: var(--space-3)/g' "$CSS"

echo "=== SPACING: margin-left: -0.5rem → calc ==="
sed -i '' 's/margin-left: -0\.5rem/margin-left: calc(-1 * var(--space-2))/g' "$CSS"

echo "=== SPACING: margin-top: -0.5rem → calc ==="
sed -i '' 's/margin-top: -0\.5rem/margin-top: calc(-1 * var(--space-2))/g' "$CSS"

echo "=== SPACING: margin: -1px → calc(-1px) ==="
sed -i '' 's/margin: -1px/margin: calc(-1px)/g' "$CSS"

echo "=== SPACING: padding shorthand replacements ==="
sed -i '' 's/padding: 0\.8rem 1\.2rem/padding: var(--space-3) var(--space-5)/g' "$CSS"
sed -i '' 's/padding: 0\.6rem 1rem/padding: var(--space-3) var(--space-4)/g' "$CSS"
sed -i '' 's/padding: 1rem 1\.5rem/padding: var(--space-4) var(--space-6)/g' "$CSS"
sed -i '' 's/padding: 0\.375rem 0\.75rem/padding: var(--space-1) var(--space-3)/g' "$CSS"
sed -i '' 's/padding: 0\.25rem 0\.5rem/padding: var(--space-1) var(--space-2)/g' "$CSS"
sed -i '' 's/padding: 0\.4rem;/padding: var(--space-2);/g' "$CSS"
sed -i '' 's/padding: 0\.4rem 0\.7rem/padding: var(--space-2) var(--space-3)/g' "$CSS"
sed -i '' 's/padding: 0\.625rem 1rem/padding: var(--space-3) var(--space-4)/g' "$CSS"
sed -i '' 's/padding: 0\.25rem 0\.75rem/padding: var(--space-1) var(--space-3)/g' "$CSS"
sed -i '' 's/gap: 0\.35rem/gap: var(--space-1)/g' "$CSS"
sed -i '' 's/padding-left: 1\.25rem/padding-left: var(--space-5)/g' "$CSS"

echo "=== SPACING: legal content margins ==="
sed -i '' 's/margin: 0 0 1rem 0;/margin: 0 0 var(--space-4) 0;/g' "$CSS"
sed -i '' 's/margin: 2rem 0 0\.75rem 0;/margin: var(--space-7) 0 var(--space-3) 0;/g' "$CSS"
sed -i '' 's/margin: 1\.5rem 0 0\.5rem 0;/margin: var(--space-6) 0 var(--space-2) 0;/g' "$CSS"
sed -i '' 's/margin: 0 0 1rem 1\.25rem;/margin: 0 0 var(--space-4) var(--space-5);/g' "$CSS"
sed -i '' 's/margin: 0\.5rem 0;/margin: var(--space-2) 0;/g' "$CSS"

echo "=== FONT-SIZE replacements ==="
sed -i '' 's/font-size: 0\.7rem/font-size: var(--font-xs)/g' "$CSS"
sed -i '' 's/font-size: 1\.5rem/font-size: var(--font-2xl)/g' "$CSS"
sed -i '' 's/font-size: 1\.875rem/font-size: var(--font-3xl)/g' "$CSS"
sed -i '' 's/font-size: 2\.25rem/font-size: var(--font-4xl)/g' "$CSS"

echo "✓ All token migrations applied"
