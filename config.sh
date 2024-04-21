remote=${1}
rm -f ./vue.config.js
ln -s ./config/vue.${remote}-config.js ./vue.config.js
python3 ./generate.py
