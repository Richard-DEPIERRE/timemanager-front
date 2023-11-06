#!/bin/bash

git npm i
git npm run build
git add .
git commit -m 'adding dist subtree'
git subtree push --prefix dist origin gh-pages 
git commit -m 'adding dist subtree' 
git push