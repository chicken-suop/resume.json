#!/bin/bash
set -ex

npx eslint .
npx vitest --run --passWithNoTests
npx vite build