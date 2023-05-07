npm run build

cd dist

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:juanvelasco03.github.io/Juego-kuepa.git main:gh-pages

cd -