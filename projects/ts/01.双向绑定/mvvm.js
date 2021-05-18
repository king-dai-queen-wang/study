export class Mvvm{
    el;
    _data = {};
    domPool = {};
    constructor(el, data) {
        this.el = document.querySelector(el);
        this._data = data;
        this.init();
    }
    init() {
        this.initDomPool(this.el);
        this.initData();
        this.initView();

    }

    updateView(modelName) {
        const _this = this;
        // const innerText = this.domPool[modelName].innerText;
        // const str = innerText.replace(/\{\{(.+)\}\}/, this.data[modelName]) ;
        this.domPool[modelName].innerText = this._data[modelName];
    }

    initDomPool(el) {
        const childNodes = el.childNodes;
        childNodes.forEach(item => {
            if (item.nodeType === 3) {
                if(/\{\{(.+)\}\}/.test(item.nodeValue)) {
                    const _key = item.nodeValue.match(/\{\{(.+)\}\}/)[1];
                    console.log(item, _key);
                    this.domPool[_key] = item.parentNode;
                }
            } else {
                this.initDomPool(item);
            }

        })
    }

    initView() {
        for (let modelName in this._data) {
            const _this = this;
            this.el.querySelectorAll(`[dww-model=${modelName}]`).forEach(el => {
                el.value = this._data[modelName];

                el.oninput = function({target}) {
                    Reflect.set(_this._data, modelName, target.value);
                }
                _this.updateView(modelName);
            })
        }
    }



    initData() {
        let _this = this;
        this._data = new Proxy(this._data, {
            get(target, key) {
                return Reflect.get(target, key);
            },
            set(target, key, value) {
                Reflect.set(target, key, value);
                _this.updateView(key);
            }
        })
        /*let _this = this;
        for (let key in this._data) {
            Object.defineProperty(this.data, key,  {
                enumerable: true,
                get() {
                    console.log('getter', key);

                    return _this._data[key];
                },
                set(v) {
                    console.log('setter', key, v);
                    // _this.initView(data, key, v);
                    _this._data[key] = v;
                    _this.updateView(key);
                }
            })
        }*/

    }
}
