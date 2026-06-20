#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_DIR="$SCRIPT_DIR/../site"
REMOTE_HOST="taek-amzlnx-1"
# nginx root는 taicki-dev-home/ → compi/ 서브디렉토리로 배포하면 /compi/ 자동 서빙
REMOTE_PATH="/home/ec2-user/projects/taicki-dev-home/compi"

echo "📦 Building..."
cd "$SITE_DIR"
npm run build

echo "🚀 Deploying to $REMOTE_HOST:$REMOTE_PATH..."
rsync -avz --delete \
  --exclude='.DS_Store' \
  dist/ "$REMOTE_HOST:$REMOTE_PATH/"

echo "✅ Done — https://taicki.dev/compi/"
