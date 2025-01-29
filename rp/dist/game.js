'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/notice/NoticeView.ui
 * TIME: 2025.01.27-15.06.29
 */
let NoticeView_Generate = class NoticeView_Generate extends UIScript {
    get con_top_notice() {
        if (!this.con_top_notice_Internal && this.uiWidgetBase) {
            this.con_top_notice_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/con_top_notice');
        }
        return this.con_top_notice_Internal;
    }
    get con_second_notice() {
        if (!this.con_second_notice_Internal && this.uiWidgetBase) {
            this.con_second_notice_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/con_second_notice');
        }
        return this.con_second_notice_Internal;
    }
    get con_top_notice_2() {
        if (!this.con_top_notice_2_Internal && this.uiWidgetBase) {
            this.con_top_notice_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/con_top_notice_2');
        }
        return this.con_top_notice_2_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
NoticeView_Generate = __decorate([
    UIBind('UI/common/notice/NoticeView.ui')
], NoticeView_Generate);
var NoticeView_Generate$1 = NoticeView_Generate;

var foreign55 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: NoticeView_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/notice/TopNoticeItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let TopNoticeItem_Generate = class TopNoticeItem_Generate extends UIScript {
    get txt_context() {
        if (!this.txt_context_Internal && this.uiWidgetBase) {
            this.txt_context_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/txt_context');
        }
        return this.txt_context_Internal;
    }
    get eff() {
        if (!this.eff_Internal && this.uiWidgetBase) {
            this.eff_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/eff');
        }
        return this.eff_Internal;
    }
    get eff_line_1() {
        if (!this.eff_line_1_Internal && this.uiWidgetBase) {
            this.eff_line_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/eff_line_1');
        }
        return this.eff_line_1_Internal;
    }
    get eff_line_1_1() {
        if (!this.eff_line_1_1_Internal && this.uiWidgetBase) {
            this.eff_line_1_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/eff_line_1_1');
        }
        return this.eff_line_1_1_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.txt_context);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
TopNoticeItem_Generate = __decorate([
    UIBind('UI/common/notice/TopNoticeItem.ui')
], TopNoticeItem_Generate);
var TopNoticeItem_Generate$1 = TopNoticeItem_Generate;

var foreign57 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TopNoticeItem_Generate$1
});

/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
const Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.sin(((1.0 - amount) * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            const s = 1.70158;
            return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            const s = 1.70158;
            return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            const s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
    generatePow: function (power = 4) {
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 10000 ? 10000 : power;
        return {
            In: function (amount) {
                return amount ** power;
            },
            Out: function (amount) {
                return 1 - (1 - amount) ** power;
            },
            InOut: function (amount) {
                if (amount < 0.5) {
                    return (amount * 2) ** power / 2;
                }
                return (1 - (2 - amount * 2) ** power) / 2 + 0.5;
            },
        };
    },
};
/**
 *
 */
const Interpolation = {
    Linear: function (v, k) {
        const m = v.length - 1;
        const f = m * k;
        const i = Math.floor(f);
        const fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        let b = 0;
        const n = v.length - 1;
        const pw = Math.pow;
        const bn = Interpolation.Utils.Bernstein;
        for (let i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        const m = v.length - 1;
        let f = m * k;
        let i = Math.floor(f);
        const fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            const fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            const a = [1];
            return function (n) {
                let s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (let i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            const v0 = (p2 - p0) * 0.5;
            const v1 = (p3 - p1) * 0.5;
            const t2 = t * t;
            const t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};
class Sequence {
    static nextId() {
        return Sequence._nextId++;
    }
}
Sequence._nextId = 0;
class Group {
    constructor() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    getAll() {
        return Object.keys(this._tweens).map(tweenId => {
            return this._tweens[tweenId];
        });
    }
    removeAll() {
        this._tweens = {};
    }
    add(tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    }
    remove(tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    }
    update(time = now(), preserve = false) {
        let tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (let i = 0; i < tweenIds.length; i++) {
                const tween = this._tweens[tweenIds[i]];
                const autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    }
}
const mainGroup = new Group();
const now = function () {
    return Date.now();
};
let Tween$1 = class Tween {
    constructor(_object, _group = mainGroup) {
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        // eslint-disable-next-line
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    getId() {
        return this._id;
    }
    isPlaying() {
        return this._isPlaying;
    }
    isPaused() {
        return this._isPaused;
    }
    to(properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween's to on each update. That way the behavior is opt-in (there's
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    }
    duration(d = 1000) {
        this._duration = d;
        return this;
    }
    start(time = now()) {
        if (this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (const property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time;
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    }
    _setupProperties(_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (const property in _valuesEnd) {
            const startValue = _object[property];
            const startValueIsArray = Array.isArray(startValue);
            const propType = startValueIsArray ? 'array' : typeof startValue;
            const isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                let endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (const prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === 'undefined') {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    }
    stop() {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    }
    end() {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    }
    pause(time = now()) {
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    }
    resume(time = now()) {
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    }
    stopChainedTweens() {
        for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    }
    group(group = mainGroup) {
        this._group = group;
        return this;
    }
    delay(amount = 0) {
        this._delayTime = amount;
        return this;
    }
    repeat(times = 0) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    }
    repeatDelay(amount) {
        this._repeatDelayTime = amount;
        return this;
    }
    yoyo(yoyo = false) {
        this._yoyo = yoyo;
        return this;
    }
    easing(easingFunction = Easing.Linear.None) {
        this._easingFunction = easingFunction;
        return this;
    }
    interpolation(interpolationFunction = Interpolation.Linear) {
        this._interpolationFunction = interpolationFunction;
        return this;
    }
    // eslint-disable-next-line
    chain(...tweens) {
        this._chainedTweens = tweens;
        return this;
    }
    onStart(callback) {
        this._onStartCallback = callback;
        return this;
    }
    onUpdate(callback) {
        this._onUpdateCallback = callback;
        return this;
    }
    onRepeat(callback) {
        this._onRepeatCallback = callback;
        return this;
    }
    onComplete(callback) {
        this._onCompleteCallback = callback;
        return this;
    }
    onStop(callback) {
        this._onStopCallback = callback;
        return this;
    }
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    update(time = now(), autoStart = true) {
        if (this._isPaused)
            return true;
        let property;
        let elapsed;
        const endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        const value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (let i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    }
    _updateProperties(_object, _valuesStart, _valuesEnd, value) {
        for (const property in _valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            const start = _valuesStart[property] || 0;
            let end = _valuesEnd[property];
            const startIsArray = Array.isArray(_object[property]);
            const endIsArray = Array.isArray(end);
            const isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    }
    _handleRelativeValue(start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    }
    _swapEndStartRepeatValues(property) {
        const tmp = this._valuesStartRepeat[property];
        const endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    }
};
const nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
const TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
const getAll = TWEEN.getAll.bind(TWEEN);
const removeAll = TWEEN.removeAll.bind(TWEEN);
const add = TWEEN.add.bind(TWEEN);
const remove = TWEEN.remove.bind(TWEEN);
const update = TWEEN.update.bind(TWEEN);

var foreign2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    Sequence: Sequence,
    Tween: Tween$1,
    add: add,
    getAll: getAll,
    nextId: nextId,
    now: now,
    remove: remove,
    removeAll: removeAll,
    update: update
});

class UIPool {
    constructor(creator) {
        this.pool = [];
        this.creator = creator;
    }
    get count() {
        return this.pool ? this.pool.length : 0;
    }
    get firstActiveItem() {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden)
                continue;
            return t;
        }
    }
    byIndex(index) {
        return this.pool[index];
    }
    setCreator(func) {
        this.creator = func;
    }
    // 重新激活处理
    setPoolGetFunction(func) {
        this.poolGetFunction = func;
    }
    setResetItemFunction(resetItemFunction) {
        this.resetItemFunction = resetItemFunction;
    }
    get() {
        for (let item of this.pool) {
            if (item.uiObject.visibility == mw.SlateVisibility.Hidden) {
                item.uiObject.visibility = mw.SlateVisibility.SelfHitTestInvisible;
                if (this.poolGetFunction)
                    this.poolGetFunction(item);
                return item;
            }
        }
        let result = this.creator();
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        if (this.resetItemFunction)
            this.resetItemFunction(item);
        item.uiObject.visibility = (mw.SlateVisibility.Hidden);
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden)
                continue;
            action(t);
        }
    }
    eachVisibleItemWithoutFocus(action, focus) {
        for (let t of this.pool) {
            if (t.uiObject.visibility == mw.SlateVisibility.Hidden)
                continue;
            if (t == focus)
                continue;
            action(t);
        }
    }
}
class UIElementPool {
    constructor() {
        this.pool = [];
    }
    get count() {
        return this.pool ? this.pool.length : 0;
    }
    get firstActiveItem() {
        for (let t of this.pool) {
            if (t.visibility == mw.SlateVisibility.Hidden)
                continue;
            return t;
        }
    }
    setCreator(func) {
        this.creator = func;
    }
    get() {
        for (let i of this.pool) {
            if (i.visibility == mw.SlateVisibility.Hidden) {
                i.visibility = mw.SlateVisibility.SelfHitTestInvisible;
                return i;
            }
        }
        let result = this.creator();
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        item.visibility = (mw.SlateVisibility.Hidden);
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (t.visibility == mw.SlateVisibility.Hidden)
                continue;
            action(t);
        }
    }
}
class WorldUIPool {
    constructor(creatorFunc) {
        this.pool = [];
        if (creatorFunc)
            this.creator = creatorFunc;
    }
    setCreator(func) {
        this.creator = func;
    }
    setPoolGetFunction(func) {
        this.poolGetFunction = func;
    }
    setResetItemFunction(resetItemFunction) {
        this.resetItemFunction = resetItemFunction;
    }
    eachVisibleItem(action) {
        for (let t of this.pool) {
            if (!t.stage)
                continue;
            action(t);
        }
    }
    get() {
        for (let item of this.pool) {
            if (item.stage)
                continue;
            if (this.poolGetFunction)
                this.poolGetFunction(item);
            item.uiWidget.setVisibility(mw.PropertyStatus.On);
            item.stage = true;
            return item;
        }
        let result = this.creator();
        result.stage = true;
        this.pool.push(result);
        return result;
    }
    giveBack(item) {
        if (this.resetItemFunction)
            this.resetItemFunction(item);
        item.stage = false;
        item.uiWidget.setVisibility(mw.PropertyStatus.Off);
    }
    resetAll() {
        for (let item of this.pool) {
            this.giveBack(item);
        }
    }
}

var foreign3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    UIElementPool: UIElementPool,
    UIPool: UIPool,
    WorldUIPool: WorldUIPool
});

var updater;
(function (updater) {
    // 将函数注册到onUpdate函数里
    updater.updateByFrameInterval = (interval, targetFunctionName) => {
        return function (target, prototypeKey, prototypeDescriptor) {
            // 注册interval变量
            let intervalVaryingName = `${prototypeKey.toString()}_current_interval`;
            let targetIntervalVaryingName = `${prototypeKey.toString()}_target_interval`;
            target[intervalVaryingName] = 0;
            target[targetIntervalVaryingName] = interval;
            // 将函数放到onUpdate里面
            let updateFunc = target[targetFunctionName || 'onUpdate'];
            let targetFunc = prototypeDescriptor.value;
            target[targetFunctionName || 'onUpdate'] = function (...args) {
                target[intervalVaryingName]++;
                if (target[intervalVaryingName] >= target[targetIntervalVaryingName]) {
                    targetFunc.apply(this, args);
                    target[intervalVaryingName] = 0;
                }
                updateFunc.apply(this, args);
            };
        };
    };
})(updater || (updater = {}));

var foreign4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get updater () { return updater; }
});

class Notice {
    static showDownNotice(context) {
        this.checkView();
        this.view.topNoticeComponent2.insert(notice => {
            notice.setInfo(context);
        });
    }
    static checkView() {
        if (this.view)
            return;
        this.view = mw.UIService.show(NoticeView);
    }
}
class TopNoticeComponent {
    init(targetCanvas) {
        this.visibleNotice = [];
        this.pendingQueue = [];
        this.targetCanvas = targetCanvas;
        this.noticeCanvasHeight = this.targetCanvas.size.y;
        this.insertItemTempLocation = new mw.Vector2();
        this.noticeItemPool = new UIPool(() => {
            let item = mw.UIService.create(TopNoticeItem);
            this.targetCanvas.addChild(item.uiObject);
            item.uiObject.size = new mw.Vector2(700, 60);
            return item;
        });
    }
    insert(initAction) {
        this.pendingQueue.push(initAction);
    }
    update() {
        if (this.visibleNotice.length == 0)
            return;
        for (let item of this.visibleNotice) {
            item.lifeTime += 0.03;
        }
        let first = this.visibleNotice[0];
        if (first.lifeTime >= TopNoticeComponent.NoticeItemLifeTime) {
            this.fadeoutNoticeElement();
        }
        this.noticeItemPool.eachVisibleItem(item => {
            if (item.targetHeight >= item.position.y)
                return;
            item.setLocation(item.position.x, item.position.y - TopNoticeComponent.NoticeMoveStepCount);
        });
    }
    insertPendingNotice(initAction) {
        // 超出显示长度,旧的元素隐藏
        if (this.visibleNotice.length >= TopNoticeComponent.NoticeItemMaxCount) {
            this.fadeoutNoticeElement();
        }
        // 已显示元素上推
        for (let i = 0; i < this.visibleNotice.length; i++) {
            const element = this.visibleNotice[i];
            element.targetHeight =
                (this.noticeCanvasHeight - TopNoticeComponent.NoticeItemIntervalSpace) -
                    ((this.visibleNotice.length - i) * TopNoticeComponent.NoticeItemIntervalSpace);
        }
        // 插入新的元素
        let recent = this.noticeItemPool.get();
        this.visibleNotice.push(recent);
        initAction(recent);
        recent.lifeTime = 0;
        this.insertItemTempLocation.x = (this.targetCanvas.size.x / 2) - (recent.uiObject.size.x / 2);
        this.insertItemTempLocation.y = this.targetCanvas.size.y - TopNoticeComponent.NoticeItemIntervalSpace;
        recent.setLocation(this.insertItemTempLocation.x, this.insertItemTempLocation.y);
        recent.targetHeight = this.insertItemTempLocation.y;
        recent.uiObject.renderOpacity = 0;
        // 插入动效
        new Tween({ alpha: 0 })
            .to({ alpha: 1 }, 250)
            .onUpdate(arg => {
            recent.uiObject.renderOpacity = arg.alpha;
        })
            .start();
    }
    fadeoutNoticeElement() {
        let item = this.visibleNotice.shift();
        new Tween({ alpha: 1 })
            .to({ alpha: 0 }, 250)
            .onUpdate(arg => {
            item.uiObject.renderOpacity = arg.alpha;
        })
            .onComplete(() => {
            this.noticeItemPool.giveBack(item);
        })
            .start();
    }
    checkPendingNotice() {
        if (this.pendingQueue.length < 1)
            return;
        this.insertPendingNotice(this.pendingQueue.shift());
    }
}
TopNoticeComponent.NoticeItemLifeTime = 2;
TopNoticeComponent.NoticeItemMaxCount = 3;
TopNoticeComponent.NoticeMoveStepCount = 15;
TopNoticeComponent.NoticeItemIntervalSpace = 75;
__decorate([
    updater.updateByFrameInterval(15, 'update')
], TopNoticeComponent.prototype, "checkPendingNotice", null);
class TopNoticeComponent2 {
    constructor() {
        this.isLeft = false;
        this.isRemoveing = false;
        this.needmovingNotice = [];
        this.isinsert = false;
    }
    init(targetCanvas) {
        this.visibleNotice = [];
        this.targetCanvas = targetCanvas;
        this.noticeCanvasHeight = this.targetCanvas.size.y;
        this.insertItemTempLocation = new mw.Vector2();
        this.noticeItemPool = new UIPool(() => {
            let item = mw.UIService.create(TopNoticeItem);
            this.targetCanvas.addChild(item.uiObject);
            item.uiObject.size = new mw.Vector2(item.uiObject.size.x, item.uiObject.size.y);
            return item;
        });
    }
    insert(initAction) {
        this.insertPendingNotice(initAction);
    }
    update() {
        if (this.visibleNotice.length == 0)
            return;
        for (let item of this.visibleNotice) {
            item.lifeTime += 0.03;
            if (item.lifeTime >= TopNoticeComponent2.NoticeItemLifeTime) {
                if (!this.needmovingNotice.includes(item)) {
                    this.needmovingNotice.push(item);
                }
            }
        }
        this.eachLeftRightItem();
        this.noticeItemPool.eachVisibleItem(item => {
            if (item.targetHeight >= item.position.y)
                return;
            item.setLocation(item.position.x, item.position.y - TopNoticeComponent2.NoticeMoveStepCount);
        });
    }
    insertPendingNotice(initAction) {
        this.isinsert = true;
        // 超出显示长度,旧的元素隐藏
        if (this.visibleNotice.length >= TopNoticeComponent2.NoticeItemMaxCount) {
            //限制最多显示10个
            for (let index = 0; index < this.visibleNotice.length; index++) {
                let element = this.visibleNotice[index];
                if (index <= (this.visibleNotice.length - TopNoticeComponent2.NoticeItemMaxCount)) {
                    element.lifeTime += TopNoticeComponent2.NoticeItemLifeTime;
                }
            }
        }
        // 信息越多的时候，消失速度再快一点 （ 3个 1-3 每个加 0.3  5个每个加0.5  10个每个加1）
        if (this.visibleNotice.length >= TopNoticeComponent2.NoticeSameItemMaxCount) {
            let count = this.visibleNotice.length;
            for (let index = 0; index < count; index++) {
                let element = this.visibleNotice[index];
                element.lifeTime += count * TopNoticeComponent2.everydiveidetime;
            }
        }
        this.eachLeftRightItem();
        // 已显示元素
        for (let i = 0; i < this.visibleNotice.length; i++) {
            const element = this.visibleNotice[i];
            element.targetHeight = (TopNoticeComponent2.NoticeItemIntervalSpace) + ((i) * TopNoticeComponent2.NoticeItemIntervalSpace);
            element.setLocation(this.insertItemTempLocation.x, element.targetHeight);
        }
        // 插入新的元素
        let recent = this.noticeItemPool.get();
        this.visibleNotice.push(recent);
        initAction(recent);
        recent.lifeTime = 0;
        this.insertItemTempLocation.x = (this.targetCanvas.size.x / 2) - (recent.uiObject.size.x / 2);
        let targetHeight = (TopNoticeComponent2.NoticeItemIntervalSpace) + ((this.visibleNotice.length - 1) * TopNoticeComponent2.NoticeItemIntervalSpace);
        this.insertItemTempLocation.y = targetHeight;
        recent.targetHeight = this.insertItemTempLocation.y;
        recent.uiObject.renderOpacity = 0;
        recent.setLocation(this.insertItemTempLocation.x, -500);
        recent.uiObject.renderOpacity = 1;
        new Tween({ posy: -500 })
            .to({ posy: this.insertItemTempLocation.y }, 500)
            .onUpdate(arg => {
            recent.setLocation(this.insertItemTempLocation.x, arg.posy);
        })
            .start()
            .easing(Easing.Linear.None);
        this.isinsert = false;
    }
    eachLeftRightItem() {
        if (this.needmovingNotice.length <= 0) {
            return;
        }
        if (this.isRemoveing) {
            return;
        }
        this.isRemoveing = true;
        //计时
        new Tween({ posX: 0 })
            .to({ posX: 1 }, 500)
            .onComplete(() => {
            this.isRemoveing = false;
        }).start();
        // 已显示元素位置 
        let arr = this.visibleNotice.filter(e => !this.needmovingNotice.includes(e));
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.targetHeight = (TopNoticeComponent2.NoticeItemIntervalSpace) + ((i) * TopNoticeComponent2.NoticeItemIntervalSpace);
            new Tween({ posy: element.uiObject.position.y })
                .to({ posy: element.targetHeight }, 500)
                .onUpdate(arg => {
                element.setLocation(this.insertItemTempLocation.x, arg.posy);
            })
                .onComplete(() => {
            })
                .easing(Easing.Linear.None)
                .start();
        }
        // 插入动效
        while (this.needmovingNotice.length > 0) {
            let item = this.needmovingNotice.shift();
            let pos = item.uiObject.position;
            this.isLeft = !this.isLeft;
            let target = new mw.Vector(0, pos.y);
            new Tween({ posX: 0 })
                .to({ posX: this.isLeft ? 3000 : -3000 }, 250)
                .onUpdate(arg => {
                target.x = arg.posX;
                item.uiObject.position = target;
            })
                .onComplete(() => {
                this.noticeItemPool.giveBack(item);
            })
                .easing(Easing.Linear.None)
                .start();
            let index = this.visibleNotice.findIndex(ele => item);
            if (index != -1) {
                this.visibleNotice.splice(index, 1);
            }
        }
    }
}
//Notice提示存在时间
TopNoticeComponent2.NoticeItemLifeTime = 4;
//Notice提示最多存在数量
TopNoticeComponent2.NoticeItemMaxCount = 10;
//Notice提示ui垂直间隔
TopNoticeComponent2.NoticeItemIntervalSpace = 70;
//Notice提示同类型最多存在数量
TopNoticeComponent2.NoticeSameItemMaxCount = 3;
//Notice提示移动步长
TopNoticeComponent2.NoticeMoveStepCount = 15;
//Notice提示 间隔时间
TopNoticeComponent2.everydiveidetime = 0;
class NoticeView extends NoticeView_Generate$1 {
    onStart() {
        this.topNoticeComponent = new TopNoticeComponent();
        this.topNoticeComponent.init(this.con_top_notice);
        this.topNoticeComponent2 = new TopNoticeComponent2();
        this.topNoticeComponent2.init(this.con_top_notice_2);
        this.canUpdate = true;
        this.layer = mw.UILayerDialog;
    }
    onUpdate() {
        this.topNoticeComponent.update();
        this.topNoticeComponent2.update();
    }
}
class TopNoticeItem extends TopNoticeItem_Generate$1 {
    setLocation(x, y) {
        if (!this.position) {
            this.position = new mw.Vector2(x, y);
        }
        else {
            this.position.x = x;
            this.position.y = y;
        }
        this.uiObject.position = this.position;
    }
    setInfo(context) {
        this.txt_context.text = context;
    }
}

var foreign1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Notice: Notice
});

//配置的基类
class ConfigBase {
    constructor(excelData) {
        this.ELEMENTARR = [];
        this.ELEMENTMAP = new Map();
        this.KEYMAP = new Map();
        let headerLine = 2; //表头的行数
        this.ELEMENTARR = new Array(excelData.length - headerLine);
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            this.ELEMENTARR[i] = {};
        }
        let column = excelData[0].length; //列数
        for (let j = 0; j < column; j++) { //遍历各列
            let name = excelData[0][j];
            let tags = excelData[1][j].split('|');
            if (tags.includes(ConfigBase.TAG_CHILDLANGUAGE))
                continue;
            let jOffect = 0; //列偏移量
            if (tags.includes(ConfigBase.TAG_MAINLANGUAGE)) {
                let index = j + ConfigBase.languageIndex;
                let targetTags = excelData[1][index].split('|');
                if (index < column && targetTags.includes(ConfigBase.TAG_CHILDLANGUAGE)) {
                    jOffect = ConfigBase.languageIndex;
                }
            }
            let hasTag_Key = tags.includes(ConfigBase.TAG_KEY);
            let hasTag_Language = tags.includes(ConfigBase.TAG_LANGUAGE);
            for (let i = 0; i < this.ELEMENTARR.length; i++) {
                let ele = this.ELEMENTARR[i];
                let value = excelData[i + headerLine][j + jOffect];
                if (j == 0) { //ID
                    this.ELEMENTMAP.set(value, ele);
                }
                else {
                    if (hasTag_Key) {
                        this.KEYMAP.set(value, excelData[i + headerLine][0]);
                    }
                    if (hasTag_Language) {
                        if (ConfigBase.getLanguage != null) {
                            value = ConfigBase.getLanguage(value);
                        }
                        else {
                            value = "unknow";
                        }
                    }
                }
                ele[name] = value;
            }
        }
    }
    //设置获取语言的方法
    static initLanguage(languageIndex, getLanguageFun) {
        ConfigBase.languageIndex = languageIndex;
        ConfigBase.getLanguage = getLanguageFun;
        if (ConfigBase.languageIndex < 0) {
            ConfigBase.languageIndex = ConfigBase.getSystemLanguageIndex();
        }
    }
    //获取系统语言索引
    static getSystemLanguageIndex() {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        if (!!language.match("en")) {
            return 0;
        }
        if (!!language.match("zh")) {
            return 1;
        }
        if (!!language.match("ja")) {
            return 2;
        }
        if (!!language.match("de")) {
            return 3;
        }
        return 0;
    }
    /**
    * 根据id获取一个元素
    * @param id id|key
    * @returns Element
    */
    getElement(id) {
        let ele = this.ELEMENTMAP.get(Number(id)) || this.ELEMENTMAP.get(this.KEYMAP.get(id));
        if (ele == null) {
            console.warn(this.constructor.name + "配置表中找不到元素 id:" + id);
        }
        return ele;
    }
    /**
    * 根据字段名和字段值查找一个元素
    * @param fieldName 字段名
    * @param fieldValue 字段值
    * @returns 第一个找到的Element
    */
    findElement(fieldName, fieldValue) {
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            if (this.ELEMENTARR[i][fieldName] == fieldValue) {
                return this.ELEMENTARR[i];
            }
        }
    }
    /**
    * 根据字段名和字段值查找一组元素
    * @param fieldName 字段名
    * @param fieldValue 字段值
    * @returns 所有符合要求的Element
    */
    findElements(fieldName, fieldValue) {
        let arr = [];
        for (let i = 0; i < this.ELEMENTARR.length; i++) {
            if (this.ELEMENTARR[i][fieldName] == fieldValue) {
                arr.push(this.ELEMENTARR[i]);
            }
        }
        return arr;
    }
    /**获取所有元素*/
    getAllElement() {
        return this.ELEMENTARR;
    }
}
ConfigBase.TAG_KEY = 'Key'; //读取键(除了ID之外的别名，带key的字段必须是string类型)
ConfigBase.TAG_LANGUAGE = 'Language'; //关联语言表的id或key(如果有这个tag，导表工具要把数据生成为string类型，因为会自动进行值的转换)
ConfigBase.TAG_MAINLANGUAGE = 'MainLanguage'; //主语言tag
ConfigBase.TAG_CHILDLANGUAGE = 'ChildLanguage'; //子语言tag
ConfigBase.languageIndex = 0;

var foreign8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ConfigBase: ConfigBase
});

const EXCELDATA$8 = [["ID", "Tab", "Names", "Icon", "ActionId", "Loop", "Pos", "Rot", "Type"], ["", "", "", "", "", "", "", "", ""], [10000, 0, ["Double-双人", "Social-社交", "Dance-舞蹈", "Pose-拍照", "Other-其他"], null, null, 0, null, null, 0], [1, 1, ["Lift Up", "托举"], "98715-98699", "103085-4174", -1, new mw.Vector(-22, -2, 110), new mw.Vector(0, 0, 0), 1], [2, 1, ["Resistance Of Shoulder", "肩抗"], "98712-98700", "101653-101652", -1, new mw.Vector(-6, -2, -75), new mw.Vector(0, 0, 0), 1], [3, 1, ["Drag", "拖"], "98675-98701", "101651-101650", -1, new mw.Vector(-148, -2, -86), new mw.Vector(0, 23, 0), 1], [4, 1, ["The Princess Hug", "公主抱"], "86271-34435", "35464-38174", -1, new mw.Vector(-20, 0, -50), new mw.Vector(0, 0, 0), 1], [5, 1, ["Back", "背"], "98707-98708", "35463-38173", -1, new mw.Vector(-40, 0, -35), new mw.Vector(0, 0, 0), 1], [6, 1, ["Latin", "拉丁"], "145736-145734", "122807-122806", -1, new mw.Vector(0, 0, 0), new mw.Vector(0, 0, 0), 2], [7, 1, ["Hyundai 03", "现代03"], "145738-145737", "124192-124194", -1, new mw.Vector(0, 0, 0), new mw.Vector(0, 0, 0), 2], [8, 1, ["Jazz", "爵士"], "145741-145740", "122811-122809", -1, new mw.Vector(0, 0, 0), new mw.Vector(0, 0, 0), 2], [9, 1, ["Hyundai 02", "现代02"], "145735-145739", "122808-122810", -1, new mw.Vector(0, 0, 0), new mw.Vector(0, 0, 0), 2], [10, 2, ["Hello", "Say hello"], "158409", "29755", 0, null, null, 0], [11, 2, ["Farewell", "告别"], "158409", "29775", 0, null, null, 0], [12, 2, ["Applause", "鼓掌"], "158409", "29758", 0, null, null, 0], [13, 2, ["Salute", "行礼"], "158409", "15057", 0, null, null, 0], [14, 2, ["Cheers", "喝彩"], "158409", "123713", 0, null, null, 0], [15, 2, ["Cheers", "欢呼"], "158409", "123720", 0, null, null, 0], [16, 2, ["Hooray", "欢呼"], "158409", "14625", 0, null, null, 0], [17, 2, ["Let's Go", "加油"], "158409", "148733", 0, null, null, 0], [18, 2, ["Yes!", "开心跺脚"], "158409", "123633", 0, null, null, 0], [19, 2, ["Welcome", "高举击掌"], "158409", "123711", 0, null, null, 0], [20, 2, ["Handsome", "耍帅"], "158409", "108424", 0, null, null, 0], [21, 2, ["Backflip", "后空翻"], "158409", "14602", 0, null, null, 0], [22, 2, ["Refuse", "拒绝"], "158409", "118296", 0, null, null, 0], [23, 2, ["Reject", "拒绝"], "158409", "14767", 0, null, null, 0], [24, 2, ["NO!", "拒绝"], "158409", "14524", 0, null, null, 0], [25, 2, ["Hit Back", "不服气"], "158409", "123714", 0, null, null, 0], [26, 2, ["Defiant", "挑衅"], "158409", "15022", 0, null, null, 0], [27, 2, ["Taunt", "嘲讽"], "158409", "14531", 0, null, null, 0], [28, 2, ["Punch", "出拳"], "158409", "108414", 0, null, null, 0], [29, 2, ["Kick", "大脚踹"], "158409", "135373", 0, null, null, 0], [30, 2, ["Bow", "鞠躬"], "158409", "108427", 0, null, null, 0], [31, 2, ["Kneel", "跪拜"], "158409", "148567", 0, null, null, 0], [32, 2, ["Worship", "俯首跪姿"], "158409", "14584", 0, null, null, 0], [33, 2, ["Shy Face", "害羞捂脸"], "158409", "217872", 0, null, null, 0], [34, 2, ["Heart", "比心"], "158409", "198611", 0, null, null, 0], [35, 2, ["Blow Kiss", "飞吻"], "158409", "14771", 0, null, null, 0], [36, 2, ["Kiss", "亲吻"], "158409", "123632", 0, null, null, 0], [37, 2, ["Couple", "牵手吻"], "158409", "122814", 0, null, null, 0], [38, 2, ["One Knee", "单膝跪地"], "158409", "217871", 0, null, null, 0], [39, 2, ["Angry", "生气"], "158409", "95778", 0, null, null, 0], [40, 2, ["Mad", "生气"], "158409", "29719", 0, null, null, 0], [41, 2, ["Furious", "生气"], "158409", "14766", 0, null, null, 0], [42, 2, ["Disappointed", "失望"], "158409", "123729", 0, null, null, 0], [43, 2, ["Weep", "哭泣"], "158409", "14655", 0, null, null, 0], [44, 2, ["Cry", "哭泣"], "158409", "14655", 0, null, null, 0], [45, 2, ["In Tears", "哭泣"], "158409", "14633", 0, null, null, 0], [46, 3, ["Cheesy Moves", "科目三"], "153860", "232755", 1, null, null, 0], [47, 3, ["Breakdance", "霹雳舞"], "153860", "124498", 1, null, null, 0], [48, 3, ["Minute To Second", "一分一秒"], "153860", "124194", 1, null, null, 0], [49, 3, ["Second To Minute", "一分一秒"], "153860", "124192", 1, null, null, 0], [50, 3, ["Smooth Moves", "Robot"], "153860", "123405", 1, null, null, 0], [51, 3, ["Spirited Twirls", "Robot"], "153860", "123408", 1, null, null, 0], [52, 3, ["Graceful Swirls", "Robot"], "153860", "123407", 1, null, null, 0], [53, 3, ["Dynamic Steps", "Closet"], "153860", "123406", 1, null, null, 0], [54, 3, ["Energetic Shimmies", "Closet"], "153860", "123402", 1, null, null, 0], [55, 3, ["Fluid Gestures", "BOOM"], "153860", "122981", 1, null, null, 0], [56, 3, ["Expressive Dance", "BOOM"], "153860", "122982", 1, null, null, 0], [57, 3, ["Lively Rhythms", "BOOM"], "153860", "122983", 1, null, null, 0], [58, 3, ["Twinkle", "Twinkle"], "153860", "137750", 1, null, null, 0], [59, 3, ["Twinkle", "Twinkle"], "153860", "137749", 1, null, null, 0], [60, 3, ["Alien", "外星人"], "153860", "137324", 1, null, null, 0], [61, 3, ["Alien", "外星人"], "153860", "137325", 1, null, null, 0], [62, 3, ["In Love", "恋爱"], "153860", "137302", 1, null, null, 0], [63, 3, ["In Love", "恋爱"], "153860", "137304", 1, null, null, 0], [64, 3, ["In Love", "恋爱"], "153860", "137300", 1, null, null, 0], [65, 3, ["In Love", "恋爱"], "153860", "137298", 1, null, null, 0], [66, 3, ["Bear Dance", "小熊跳舞"], "153860", "135346", 1, null, null, 0], [67, 3, ["Love Shot", "爱杀宝贝"], "153860", "135159", 1, null, null, 0], [68, 3, ["Wave", "Wave"], "153860", "133177", 1, null, null, 0], [69, 3, ["Shake Hip", "Shake Hip"], "153860", "133151", 1, null, null, 0], [70, 3, ["A Heartbeat", "怦然心动"], "153860", "129504", 1, null, null, 0], [71, 3, ["Today We Start", "今天我们开始"], "153860", "129501", 1, null, null, 0], [72, 3, ["Hang Out With Me", "和我交往吗"], "153860", "126867", 1, null, null, 0], [73, 3, ["Swan Dance", "天鹅舞"], "153860", "126581", 1, null, null, 0], [74, 3, ["Seaweed Dance", "海草舞"], "153860", "126579", 1, null, null, 0], [75, 3, ["Disco", "Disco"], "153860", "126578", 1, null, null, 0], [76, 3, ["Senorita", "Senorita"], "153860", "126045", 1, null, null, 0], [77, 3, ["Billie Jean", "Billie Jean"], "153860", "125813", 1, null, null, 0], [78, 3, ["Hello Dance", "招呼舞"], "153860", "124623", 1, null, null, 0], [79, 3, ["Hip Hop", "街舞"], "153860", "124622", 1, null, null, 0], [80, 3, ["Pirate", "海盗"], "153860", "124621", 1, null, null, 0], [81, 3, ["Carp", "鲤鱼"], "153860", "124620", 1, null, null, 0], [82, 3, ["Latin Dance", "拉丁舞"], "153860", "124502", 1, null, null, 0], [83, 3, ["Ghost Steps", "鬼步舞"], "153860", "124500", 1, null, null, 0], [84, 3, ["National Dance", "拉丁舞"], "153860", "124499", 1, null, null, 0], [85, 3, ["Synchronized Beats", "Freaky"], "153860", "122812", 1, null, null, 0], [86, 3, ["Playful Jumps", "Freaky"], "153860", "122813", 1, null, null, 0], [87, 3, ["Cool With You", "Cool With You"], "153860", "122809", 1, null, null, 0], [88, 3, ["Get Your Love", "Get Your Love"], "153860", "122811", 1, null, null, 0], [89, 3, ["Walc", "Walc"], "153860", "122810", 1, null, null, 0], [90, 3, ["Walc", "Walc"], "153860", "122808", 1, null, null, 0], [91, 3, ["Yummy", "Yummy"], "153860", "122807", 1, null, null, 0], [92, 3, ["Yummy", "Yummy"], "153860", "122806", 1, null, null, 0], [93, 3, ["There Is No Tomorrow", "没有明天"], "153860", "122746", 1, null, null, 0], [94, 3, ["There Is No Tomorrow", "没有明天"], "153860", "122751", 1, null, null, 0], [95, 3, ["Current Dance", "电流舞"], "153860", "122750", 1, null, null, 0], [96, 3, ["Farewell to memory", "告别记忆"], "153860", "212984", 1, null, null, 0], [97, 3, ["Dynamite", "Dynamite"], "153860", "212813", 1, null, null, 0], [98, 3, ["Drunken Butterfly", "醉酒的蝴蝶"], "153860", "211149", 1, null, null, 0], [99, 3, ["Dance 01", "舞蹈01"], "153860", "210266", 1, null, null, 0], [100, 3, ["Queencard", "Queencard"], "153860", "197629", 1, null, null, 0], [101, 3, ["Bear Dance 01", "小熊跳舞01"], "153860", "200201", 1, null, null, 0], [102, 3, ["Magic Castle 01", "魔法城堡01"], "153860", "196071", 1, null, null, 0], [103, 3, ["Magic Castle 02", "魔法城堡02"], "153860", "196070", 1, null, null, 0], [104, 3, ["Magic Castle 03", "魔法城堡03"], "153860", "180850", 1, null, null, 0], [105, 3, ["Elysium Pure Land", "极乐净土"], "153860", "195754", 1, null, null, 0], [106, 3, ["Queencard", "Queencard"], "153860", "185610", 1, null, null, 0], [107, 3, ["Wheel Of Liberty", "自由之轮"], "153860", "122745", 1, null, null, 0], [108, 3, ["Full Video", "Full Video（女）"], "153860", "122684", 1, null, null, 0], [109, 3, ["Full Video", "Full Video（男）"], "153860", "122677", 1, null, null, 0], [110, 3, ["Permission", "Permission（女3）"], "153860", "122683", 1, null, null, 0], [111, 3, ["Permission", "Permission（男1）"], "153860", "122682", 1, null, null, 0], [112, 3, ["Permission", "Permission（女1）"], "153860", "122681", 1, null, null, 0], [113, 3, ["Permission", "Permission（女2）"], "153860", "122680", 1, null, null, 0], [114, 3, ["How You Like That", "How You Like That（女）"], "153860", "122679", 1, null, null, 0], [115, 3, ["How You Like That", "How You Like That（男）"], "153860", "122678", 1, null, null, 0], [116, 3, ["Kill This Love", "Kill This Love"], "153860", "122676", 1, null, null, 0], [117, 3, ["Pollo", "Pollo"], "153860", "122455", 1, null, null, 0], [118, 3, ["Crotch Twist", "扭胯"], "153860", "122454", 1, null, null, 0], [119, 3, ["Crotch Twist", "扭胯"], "153860", "122453", 1, null, null, 0], [120, 3, ["Crotch Twist", "扭胯"], "153860", "88544", 1, null, null, 0], [121, 3, ["Nobody", "Nobody"], "153860", "88543", 1, null, null, 0], [122, 3, ["Welcome Dance", "欢迎你来"], "153860", "88541", 1, null, null, 0], [123, 3, ["Street Dance", "街舞"], "153860", "88450", 1, null, null, 0], [124, 3, ["Swing Dance", "摇曳舞"], "153860", "88449", 1, null, null, 0], [125, 3, ["Fancy Feet", "Fancy Feet"], "153860", "88448", 1, null, null, 0], [126, 3, ["Love Song", "桃源恋歌"], "153860", "84930", 1, null, null, 0], [127, 3, ["Crab Dance", "螃蟹舞"], "153860", "29748", 1, null, null, 0], [128, 3, ["Love me", "Love me"], "153860", "29725", 1, null, null, 0], [129, 3, ["Shake The Shoulders", "抖肩舞"], "153860", "29717", 1, null, null, 0], [130, 3, ["Roll NRock", "Roll NRock"], "153860", "213624", 1, null, null, 0], [131, 3, ["Roll NRock", "Roll NRock"], "153860", "213625", 1, null, null, 0], [132, 4, ["Play Rabbit", "扮兔子"], "120728", "198590", 1, null, null, 0], [133, 4, ["Hands Down", "双手触地"], "120728", "198591", 1, null, null, 0], [134, 4, ["Think", "单手摆"], "120728", "14516", 1, null, null, 0], [135, 4, ["Idle", "女性站立"], "120728", "200191", 1, null, null, 0], [136, 4, ["Idle", "男性站立"], "120728", "200190", 1, null, null, 0], [137, 4, ["Superman", "握拳举起"], "120728", "198587", 1, null, null, 0], [138, 4, ["Fist Up", "握拳摆"], "120728", "173336", 1, null, null, 0], [139, 4, ["Refuse", "拒绝"], "120728", "198593", 1, null, null, 0], [140, 4, ["Play Cute", "托腮"], "120728", "198596", 1, null, null, 0], [141, 4, ["Play Cute", "托腮"], "120728", "198586", 1, null, null, 0], [142, 4, ["Peace", "比耶"], "120728", "198595", 1, null, null, 0], [143, 4, ["Peace", "比造型"], "120728", "198588", 1, null, null, 0], [144, 4, ["Play Cool", "扶头耍帅"], "120728", "198594", 1, null, null, 0], [145, 4, ["Groomed", "撑下巴"], "120728", "198589", 1, null, null, 0], [146, 4, ["Shy", "掩面"], "120728", "173344", 1, null, null, 0], [147, 4, ["Relaxed", "叉腰"], "120728", "173343", 1, null, null, 0], [148, 4, ["In Trouble", "撑头"], "120728", "173341", 1, null, null, 0], [149, 4, ["Relaxed", "叉腰"], "120728", "173340", 1, null, null, 0], [150, 4, ["Make Fist", "握拳"], "120728", "173336", 1, null, null, 0], [151, 4, ["Sideways", "侧身"], "120728", "173335", 1, null, null, 0], [152, 4, ["Look Out", "眺望"], "120728", "173334", 1, null, null, 0], [153, 4, ["Grab Wrist", "抓手腕"], "120728", "173333", 1, null, null, 0], [154, 4, ["Play Cool", "耍帅"], "120728", "173332", 1, null, null, 0], [155, 4, ["Relaxed", "叉腰"], "120728", "173331", 1, null, null, 0], [156, 4, ["On The Go", "双手握拳"], "120728", "173330", 1, null, null, 0], [157, 4, ["Ponder", "托腮"], "120728", "173329", 1, null, null, 0], [158, 4, ["Speak", "双手交叉"], "120728", "15163", 1, null, null, 0], [159, 4, ["Stand On One Foot", "单脚立地"], "120728", "15159", 1, null, null, 0], [160, 4, ["Grimace", "鬼脸"], "120728", "15122", 1, null, null, 0], [161, 4, ["Hold Head", "单手抱头"], "120728", "14764", 1, null, null, 0], [162, 4, ["Squat", "蹲姿"], "120728", "14761", 1, null, null, 0], [163, 4, ["Serious", "双手交叉"], "120728", "14760", 1, null, null, 0], [164, 4, ["Pray", "双手合十"], "120728", "14747", 1, null, null, 0], [165, 4, ["Ready To Fly", "模仿飞天"], "120728", "14707", 1, null, null, 0], [166, 4, ["Stretch Legs", "伸腿摸头"], "120728", "14702", 1, null, null, 0], [167, 4, ["Act Weird", "鬼畜"], "120728", "14687", 1, null, null, 0], [168, 4, ["Sit", "坐姿单腿伸出"], "120728", "14686", 1, null, null, 0], [169, 4, ["Hold Out One Hand", "单手张开"], "120728", "14682", 1, null, null, 0], [170, 4, ["Relaxed", "单手叉腰"], "120728", "14680", 1, null, null, 0], [171, 4, ["Peace", "比耶"], "120728", "14679", 1, null, null, 0], [172, 4, ["Shruggle", "顶肩"], "120728", "14678", 1, null, null, 0], [173, 4, ["Peace", "比耶"], "120728", "14660", 1, null, null, 0], [174, 4, ["Half Squat", "半蹲张手"], "120728", "14647", 1, null, null, 0], [175, 4, ["Half Lie", "半躺抱头"], "120728", "14634", 1, null, null, 0], [176, 4, ["Hit The Ground", "单手匝地"], "120728", "14632", 1, null, null, 0], [177, 4, ["Peace", "双手比耶"], "120728", "14600", 1, null, null, 0], [178, 4, ["On One Foot", "单脚站立"], "120728", "14592", 1, null, null, 0], [179, 4, ["Pray", "双手合并"], "120728", "14589", 1, null, null, 0], [180, 4, ["On One Hand", "半躺撑着"], "120728", "14565", 1, null, null, 0], [181, 4, ["Idle", "站姿双手"], "120728", "14548", 1, null, null, 0], [182, 4, ["Get Down", "双手抱头"], "120728", "14546", 1, null, null, 0], [183, 4, ["Seated With Bent Legs", "屈腿坐姿"], "120728", "14544", 1, null, null, 0], [184, 4, ["Picture Time", "摆照型"], "120728", "14516", 1, null, null, 0], [185, 4, ["Act Cute", "双手托脸"], "120728", "14513", 1, null, null, 0], [186, 4, ["Touch Chin", "半躺摸下巴"], "120728", "14986", 1, null, null, 0], [187, 4, ["Lift On One Foot", "单脚抬起"], "120728", "14778", 1, null, null, 0], [188, 4, ["Left Heart", "比心左"], "120728", "219280", 1, null, null, 0], [189, 4, ["Right Heart", "比心右"], "120728", "219281", 1, null, null, 0], [190, 5, ["Horse Dance", "骑马舞"], "158408", "137301", 1, null, null, 0], [191, 5, ["PPAP", "PPAP"], "158408", "129505", 1, null, null, 0], [192, 5, ["Bird Walk", "学鸟走"], "158408", "14522", 1, null, null, 0], [193, 5, ["Spin Ⅰ", "旋转01"], "158408", "14552", 1, null, null, 0], [194, 5, ["Spin Ⅱ", "旋转02"], "158408", "14741", 1, null, null, 0], [195, 5, ["Spin Ⅲ", "旋转03"], "158408", "218262", 1, null, null, 0], [196, 5, ["Spin Ⅳ", "旋转04"], "158408", "218263", 1, null, null, 0], [197, 5, ["Spin Ⅴ", "旋转05"], "158408", "218264", 1, null, null, 0], [198, 5, ["Spin Ⅵ", "旋转06"], "158408", "218265", 1, null, null, 0], [199, 5, ["Spin Ⅶ", "旋转07"], "158408", "29733", 1, null, null, 0], [200, 5, ["Street Dance", "街舞"], "158408", "122805", 1, null, null, 0], [201, 5, ["Dance", "跳舞"], "158408", "129503", 1, null, null, 0], [202, 5, ["Sing & Dance", "歌舞"], "158408", "14554", 1, null, null, 0], [203, 5, ["Tumble", "翻滚"], "158408", "150691", 1, null, null, 0], [204, 5, ["Sprint", "冲刺"], "158408", "150690", 1, null, null, 0], [205, 5, ["Glide", "滑翔"], "158408", "148890", 1, null, null, 0], [206, 5, ["Stomp", "空中蹬腿"], "158408", "148846", 1, null, null, 0], [207, 5, ["Squat Walk", "下蹲行走"], "158408", "156793", 1, null, null, 0], [208, 5, ["In Water", "水中"], "158408", "156792", 1, null, null, 0], [209, 5, ["Fly", "飞行"], "158408", "159198", 1, null, null, 0], [210, 5, ["Zombie Walk", "丧尸行"], "158408", "97857", 1, null, null, 0], [211, 5, ["Roll", "翻滚"], "158408", "95751", 1, null, null, 0], [212, 5, ["Situp", "仰卧起坐"], "158408", "14708", 1, null, null, 0], [213, 5, ["Circle", "转圈"], "158408", "14695", 1, null, null, 0], [214, 5, ["Tumble", "翻滚"], "158408", "14648", 1, null, null, 0], [215, 5, ["Duck Sit", "鸭子坐"], "158408", "14711", 1, null, null, 0], [216, 5, ["Sit Holding Knees", "抱膝坐"], "158408", "146800", 1, null, null, 0], [217, 5, ["Lie Down", "躺下"], "158408", "175980", 1, null, null, 0], [218, 5, ["Get Down", "趴下"], "158408", "86093", 1, null, null, 0], [219, 5, ["Get Down", "趴下"], "158408", "14757", 1, null, null, 0], [220, 5, ["Get Down", "趴下"], "158408", "125881", 1, null, null, 0], [221, 5, ["Crawl", "爬行"], "158408", "14613", 1, null, null, 0], [222, 5, ["Kneel", "跪拜"], "158408", "14612", 1, null, null, 0]];
class ActionConfigConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$8);
    }
}

var foreign5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ActionConfigConfig: ActionConfigConfig
});

const EXCELDATA$7 = [["ID", "Name", "NextId", "Tab", "Sort", "AssetId", "SlotType", "ModeOffsetParameter", "AnimationId", "AnimationParameter", "AnimationSlot", "EffectId", "EffectOffsetParameter", "EffectLoop", "SoundId", "SoundParameter", "MaterialId", "IsFly", "ButtonIconId", "Icon", "DelayParameter", "DelayAssetId", "DelayModeOffsetParameter", "DelayModeEffectId", "DelayModeEffectOffsetParameter", "DelayEffectId", "DelayEffectOffsetParameter", "DelayModeSoundId", "DelayModeSoundParameter", "VehiclesIcon", "VehiclesChildId", "VehiclesChildParameter", "VehiclesChildMoveId", "VehiclesChildIdleId", "VehiclesWalkStanceId", "VehiclesWalkStanceSlot", "VehiclesIdleStanceId", "VehiclesIdleStanceSlot", "VehiclesWalkAnimationId", "VehiclesWalkAnimationSlot", "VehiclesIdleAnimationId", "VehiclesIdleAnimationSlot", "BuffId", "BuffType", "BuffParams"], ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], [10006, "电吉他", 10106, 1, 1, "170487", 12, [11, 16, -40, 3.5, -35, -101, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10106, null, 10006, 0, 0, null, 13, [18.77, 32.96, -57.93, 1.88, -43.35, -83.69, 1, 1, 1], "121812", [1, 0], 1, "118436", [0, 0, 50, 5, -90, 90, 0.5, 0.5, 0.5], 0, "147341", [500, 1.5, 0], null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10093, "电吉他", 10193, 1, 7, "129224", 12, [11, 16, -40, 3.5, -35, -101, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10193, null, 10093, 0, 0, null, 13, [33.36, 29.26, -56.4, -11.98, -55.89, -89.71, 1, 1, 1], "122451", [1, 0], 1, "118436", [0, 0, 50, 5, -90, 90, 0.5, 0.5, 0.5], 0, "146098", [500, 1.5, 0], null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10094, "吉他", 10194, 1, 8, "170611", 12, [10, -38, -36, -14, 54, -105, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10194, null, 10094, 0, 0, null, 14, [20.47, -37.05, -57.34, -1.81, 47.06, -95.53, 1, 1, 1], "35412", [1, 0], 1, "172882", [0, 0, 0, 0, 0, 0, 1.5, 1.5, 1.5], 0, "52334", [500, 1.5, 0], null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10095, "吉他", 10195, 1, 9, "27099", 14, [26.4, -16.19, -63.36, -4.03, 28.21, -96.34, 0.6, 0.6, 0.6], "35415", [1, 0], 1, null, null, 0, null, null, null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10195, null, 10095, 0, 0, null, 14, [26.4, -16.19, -63.36, -4.03, 28.21, -96.34, 0.6, 0.6, 0.6], "35412", [1, 0], 1, "4368", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, "45287", [500, 1.5, 0], null, 0, "120649", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10320, "钢琴", 10420, 1, 2, "3C5A7B8940E805D7192F53ACF6989935", 23, [118.86, -21.18, -23.54, 0, 0, 90, 1, 1, 1], "29715", [1, 0], 3, null, null, 0, null, null, null, 0, "158398", "216957", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10420, null, 10320, 0, 0, null, 23, [118.86, -21.18, -23.54, 0, 0, 90, 1, 1, 1], "29715", [1, 0], 3, "130776", [0, 0, 20, 0, 0, 0, 1.5, 1.5, 1], 0, "117193", [500, 1.5, 0], null, 0, "158398", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10340, "架子鼓", 10440, 1, 3, "170495", 23, [59, 11, 0, 0, 0, -90, 1.2, 1.2, 1.2], "123634", [1, 0], 3, null, null, 0, null, null, null, 0, "120719", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10440, null, 10340, 0, 0, null, 23, [59, 11, 0, 0, 0, -90, 1.2, 1.2, 1.2], "123300", [1, 0], 3, "119917", [8, 0, 0, 0, 0, 0, 1, 1, 0.8], 0, "117197", [500, 1, 0], null, 0, "120719", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10338, "灯球", 10438, 1, 5, "05B519BD4F3FE68467C4F78BE870B7E2", 23, [0, 0, 260, 0, 0, 0, 0.8, 0.8, 0.8], null, null, 0, null, null, 0, null, null, null, 0, "159386", "132900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10438, null, 10338, 0, 0, null, 23, [0, 0, 260, 0, 0, 0, 0.8, 0.8, 0.8], "216688", [1, 0], 3, null, null, 0, "147340", [500, 1.5, 0], null, 0, "159386", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10339, "灯球", 10439, 1, 4, "807D3DAD4695AD616EF6B6A6DE05CF50", 23, [0, 0, 260, 0, 0, 0, 0.8, 0.8, 0.8], null, null, 0, null, null, 0, null, null, null, 0, "159386", "132901", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10439, null, 10339, 0, 0, null, 23, [0, 0, 260, 0, 0, 0, 0.8, 0.8, 0.8], "212813", [1, 0], 3, null, null, 0, "147338", [500, 1.5, 0], null, 0, "159386", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10341, "沙发", 10441, 1, 13, "173566", 23, [-65, -45, 0, 0, 0, -90, 1, 1, 1], "182947", [1, 0], 3, null, null, 0, null, null, null, 0, "120318", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10441, null, 10341, 0, 0, null, 23, [-65, -45, 0, 0, 0, -90, 1, 1, 1], "14516", [1, 0], 1, null, null, 0, null, null, null, 0, "120318", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10329, "卡通小人", 10429, 1, 38, "135229", 16, [0, -10, -10, 0, 5, -60, 4, 4, 4], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10429, null, 10329, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 4, 4, 4], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10330, "L", 10430, 1, 39, "198914", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10430, null, 10330, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10331, "O", 10431, 1, 40, "199057", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "210884", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10431, null, 10331, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 0, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10332, "V", 10432, 1, 41, "199090", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10432, null, 10332, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10333, "E", 10433, 1, 42, "198991", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10433, null, 10333, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10334, "F", 10434, 1, 42.1, "198902", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10434, null, 10334, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10335, "U", 10435, 1, 44, "198968", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10435, null, 10335, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 0, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10336, "C", 10436, 1, 46, "198896", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10436, null, 10336, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10337, "K", 10437, 1, 48, "198912", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10437, null, 10337, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10342, "箱子", 10442, 1, 17, "36250", 23, [0, 0, 0, 0, 0, 0, 2, 2, 2.5], "46285", [1, 0], 3, null, null, 0, null, null, null, 0, "153896", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10442, null, 10342, 0, 0, null, 23, [0, 0, 0, 0, 0, 0, 2, 2, 2.5], "46285", [1, 0], 3, null, null, 0, null, null, null, 0, "153896", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10343, "红手牌(笑脸)", 10443, 1, 23, "121354", 16, [0, 0, -10, 0, 0, 90, 2, 2, 2], null, null, 0, null, null, 0, null, null, null, 0, "159438", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10443, null, 10343, 0, 0, null, 16, [0, 0, -10, 0, 0, 90, 2, 2, 2], "174562", [1, 0], 1, null, null, 0, null, null, null, 0, "159438", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10344, "蓝手牌(委屈脸)", 10444, 1, 24, "121351", 16, [0, 0, -10, 0, 0, 90, 2, 2, 2], null, null, 0, null, null, 0, null, null, null, 0, "10344", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10444, null, 10344, 0, 0, null, 16, [0, 0, -10, 0, 0, 90, 2, 2, 2], "174562", [1, 0], 1, null, null, 0, null, null, null, 0, "10344", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10345, "A", 10445, 1, 43, "198892", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10445, null, 10345, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10346, "B", 10446, 1, 45, "198894", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10446, null, 10346, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10347, "D", 10447, 1, 47, "198898", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10447, null, 10347, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10348, "G", 10448, 1, 49, "198904", 16, [0, 0, 0, 0, 0, -90, 1, 1, 1], "14559", [1, 0], 1, null, null, 0, null, null, "211028", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10448, null, 10348, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10349, "凳子", 10449, 1, 11, "25354", 16, [12.72, 1.83, 10.34, -60.44, -42.82, -42.85, 0.6, 0.6, 0.6], "20257", [1, 0], 1, null, null, 0, null, null, null, 0, "86710", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10449, null, 10349, 0, 0, null, 23, [-16, 0, -15, 0, 0, -90, 1, 1, 1], "170905", [1, 0], 3, null, null, 0, null, null, null, 0, "86710", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10312, "蓝色法杖", 10412, 1, 19, "210651", 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "27447", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10412, null, 10312, 0, 0, null, 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "27447", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 2, 1, [0.4]], [10313, "红色法杖", 10413, 1, 20, "210652", 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "88021", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10413, null, 10313, 0, 0, null, 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "88021", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 3, 1, [3]], [10314, "扫帚法杖", 10414, 1, 21, "210790", 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "27399", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10414, null, 10314, 0, 0, null, 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "27399", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 4, 1, [0.2]], [10315, "魔法仗", 10415, 1, 22, "210820", 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "145506", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10415, null, 10315, 0, 0, null, 15, [0, 0, 0, 0, 0, 0, 0.3, 0.3, 0.3], "85026", [1, 1], 0, "145506", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10316, "地毯", 10416, 1, 12, "091282744E9FD074EC3B4A9336B2136F", 23, [70, 0, -1, 0, 0, 0, 2, 2, 1], "192126", [1, 0], 3, null, null, 0, null, null, null, 0, "158427", "22961", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10416, null, 10316, 0, 0, null, 23, [70, 0, -1, 0, 0, 0, 2, 2, 1], "14565", [1, 0], 3, "172886", [0, 0, 9, 0, 0, 0, 0.5, 0.5, 1], 0, null, null, null, 0, "158427", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10317, "足球筐", 10417, 1, 15, "22940", 23, [101, 0, 0, 0, 0, 90, 1.2, 1.2, 1.15], "181189", [1, 0], 1, null, null, 0, null, null, null, 0, "166610", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10417, null, 10317, 0, 0, null, 23, [101, 0, 0, 0, 0, 90, 1.2, 1.2, 1.15], "181189", [1, 0], 1, null, null, 0, null, null, null, 0, "166610", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10318, "纸板箱", 10418, 1, 16, "38008", 23, [13.7, 0, 0, 0, 0, 90, 1.5, 1.5, 1.5], "47756", [1, 0], 3, null, null, 0, null, null, null, 0, "153896", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10418, null, 10318, 0, 0, null, 1, [0, 0, 32, -180, 0, -45, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "153896", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10319, "热狗摊", 10419, 1, 14, "40876", 23, [39, -46, 0, 0, 0, 90, 0.9, 0.9, 0.9], "29759", [1, 0], 1, null, null, 0, null, null, null, 0, "59458", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10419, null, 10319, 0, 0, null, 23, [39, -46, 0, 0, 0, 90, 0.9, 0.9, 0.9], "29755", [1, 0], 1, null, null, 0, null, null, null, 0, "59458", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10321, "妲己耳朵", 10421, 1, 33, "212767", 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10421, null, 10321, 0, 0, null, 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], "198590", [1, 0], 1, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10322, "长耳兔灰耳朵", 10422, 1, 34, "212777", 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10422, null, 10322, 0, 0, null, 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], "198590", [1, 0], 1, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10323, "黑狼耳朵", 10423, 1, 35, "213047", 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10423, null, 10323, 0, 0, null, 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], "198590", [1, 0], 1, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10324, "气球", 10424, 1, 32, "218065", 16, [0, 0, -20, 0, 0, 0, 0.7, 0.7, 0.7], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "146441", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10424, null, 10324, 0, 0, null, 16, [0, 0, -20, 0, 0, 0, 0.7, 0.7, 0.7], "98754", [1, 1], 1, null, null, 0, null, null, null, 0, "146441", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10325, "卡通小人", 10425, 1, 36, "135222", 16, [0, -10, -10, 0, 5, -60, 4, 4, 4], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10425, null, 10325, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 4, 4, 4], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10326, "卡通小人", 10426, 1, 37, "135223", 16, [0, -10, -10, 0, 5, -60, 4, 4, 4], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10426, null, 10326, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 4, 4, 4], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10306, "凳子", 10406, 1, 10, "174452", 16, [12.72, 1.06, 31.84, 299.23, -42.82, 677.15, 0.6, 0.6, 0.6], "20257", [1, 0], 1, null, null, 0, null, null, null, 0, "86710", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10406, null, 10306, 0, 0, null, 23, [-16, 0, 10, 0, 0, -90, 1, 1, 1], "218259", [1, 0], 3, null, null, 0, null, null, null, 0, "86710", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10092, "女帽子", 10192, 1, 30.1, "173243", 16, [13.6, 6, -2, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10192, null, 10092, 0, 0, null, 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], "198590", [1, 1], 1, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10074, "法杖", 10174, 1, 18, "122954", 15, [0, 0, 50, 180, 0, 0, 1, 1, 1], "85026", [1, 1], 0, "27392", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10174, null, 10074, 0, 0, null, 15, [0, 0, 50, 180, 0, 0, 1, 1, 1], "85026", [1, 1], 0, "27392", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 1, 1, [2]], [10051, "射灯", 10151, 1, 31, "33028", 16, [0, -10, 10, 170, 25, -90, 0.5, 0.5, 0.5], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "131663", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10151, null, 10051, 0, 0, null, 16, [0, -10, 10, 170, 25, -90, 0.5, 0.5, 0.5], "88751", [1, 0], 1, "32254", [0, 0, 40, -120, 0, 0, 2, 5, 5], 0, null, null, null, 0, "131663", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10052, "喷火枪", 10152, 1, 25, "87019", 16, [0, 0, 0, 0, 0, 0, 1, 1, 1], "49094", [0.01, 0], 1, null, null, 0, null, null, null, 0, "138004", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10152, null, 10052, 0, 0, null, 16, [0, 0, 0, 0, 0, 0, 1, 1, 1], "49094", [0.1, 1], 1, "4394", [35, 0, 12, 0, 0, 180, 1, 1, 1], 1, "20322", [500, 1, 1], null, 0, "138004", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10047, "尖叫鸡", 10147, 1, 30, "20799", 16, [5, -3, 5, 0, 0, -90, 0.7, 0.7, 0.7], null, null, 0, null, null, 0, null, null, null, 0, "130565", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10147, null, 10047, 0, 0, null, 16, [5, -3, 5, 0, 0, -90, 0.7, 0.7, 0.7], "14557", [1, 1], 1, null, null, 0, "108734", [500, 0.8, 1], null, 0, "130565", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10005, "荧光棒", 10105, 1, 6, "88974", 16, [4, 0, 0, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10105, null, 10005, 0, 0, null, 16, [3.13, -1.62, -1.12, 0, 0, 0, 1, 1, 1], "174562", [1, 0], 1, null, null, 0, null, null, "152978", 0, "157198", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10007, "左轮手枪", 10107, 1, 28, "175291", 16, [8, 0, 0, 0, 0, -90, 1, 1, 1], "20244", [0.4, 1], 1, null, null, 0, null, null, null, 0, "106330", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10107, null, 10007, 0, 0, null, 16, [8, 0, 0, 0, 0, -90, 1, 1, 1], "20244", [0.4, 1], 1, "88791", [0, 18, 3, 0, 0, 90, 1, 1, 1], 1, "169140", [500, 0.5, 1], null, 0, "106330", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10008, "散弹枪", 10108, 1, 27, "176450", 16, [6, 0, 8, 0, 0, -90, 1, 1, 1], "49094", [0.01, 0], 1, null, null, 0, null, null, null, 0, "106330", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10108, null, 10008, 0, 0, null, 16, [6, 0, 8, 0, 0, -90, 1, 1, 1], "49094", [1, 1], 1, "4387", [0, 40, 0, 0, 0, 90, 1, 1, 1], 1, "39320", [500, 0.5, 1], null, 0, "106330", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10009, "步枪", 10109, 1, 26, "176541", 16, [20, 0, -1, 0, 0, 0, 1, 1, 1], "49094", [0.01, 0], 1, null, null, 0, null, null, null, 0, "106330", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10109, null, 10009, 0, 0, null, 16, [20, 0, -1, 0, 0, 0, 1, 1, 1], "49094", [1, 1], 1, "13594", [40, 0, 10, 0, 0, 0, 0.5, 0.5, 0.5], 1, "169140", [500, 0.5, 1], null, 0, "106330", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10012, "美元", 10112, 1, 29, "176320", 16, [10, -10, 0, 0, 0, -90, 1, 1, 1], "98751", [1, 0], 1, null, null, 0, null, null, null, 0, "125834", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10112, null, 10012, 0, 0, null, 16, [10, -10, 0, 0, 0, -90, 1, 1, 1], "98746", [1, 0], 1, "60761", [0, 0, 0, 0, 0, 90, 0.5, 0.5, 0.5], 0, null, null, null, 0, "125834", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10001, "洋娃娃", 10101, 3, 4, "163620", 15, [10, 10, -10, 0, 0, 0, 1, 1, 1], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "159349", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10101, null, 10001, 0, 0, null, 15, [10, 10, -10, 0, 0, 0, 1, 1, 1], "98739", [1, 1], 1, null, null, 0, "97383", [500, 1, 1], null, 0, "159349", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10002, "娃娃", 10102, 3, 5, "176521", 15, [10, 10, -10, 0, 0, 0, 1, 1, 1], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "159349", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10102, null, 10002, 0, 0, null, 15, [10, 10, -10, 0, 0, 0, 1, 1, 1], "98739", [1, 1], 1, null, null, 0, "97386", [500, 1, 1], null, 0, "159349", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10003, "书本", 10103, 3, 19, "88948", 16, [0, -3.19, -2.62, -2.88, -68.85, -88.79, 1, 1, 1], null, [1, 0], 1, null, null, 0, null, null, null, 0, "175742", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10103, null, 10003, 0, 0, null, 16, [0, -3.19, -2.62, -2.88, -68.85, -88.79, 1, 1, 1], "14739", [1, 0], 1, null, null, 0, null, null, null, 0, "175742", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10004, "相机", 10104, 3, 20, "176511", 16, [-5, -12, 0, 90, 0, -90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "175747", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10104, null, 10004, 0, 0, null, 16, [-5, -12, -2, 90, 0, -90, 1, 1, 1], "98797", [1, 1], 1, null, null, 0, "97374", [500, 1, 1], null, 0, "175747", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10011, "笔记本电脑", 10111, 3, 21, "176265", 16, [25, 0, -20, -90, 90, 0, 1, 1, 1], "98737", [1, 0], 1, null, null, 0, null, null, null, 0, "105234", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10111, null, 10011, 0, 0, null, 16, [25, 0, -20, -90, 90, 0, 1, 1, 1], "98740", [1, 1], 1, null, null, 0, "97379", [500, 1, 1], null, 0, "105234", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10014, "手机", 10114, 3, 22, "176478", 16, [5, 0, 0, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "162891", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10114, null, 10014, 0, 0, null, 16, [5, 0, 0, 0, 0, 0, 1, 1, 1], "98612", [1, 0], 1, null, null, 0, null, null, null, 0, "162891", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10016, "手捧鲜花", 10116, 3, 3, "162188", 16, [0, 0, -10, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "148869", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10116, null, 10016, 0, 0, null, 16, [0, 0, -10, 0, 0, 0, 1, 1, 1], "217871", [1, 1], 1, null, null, 0, null, null, null, 0, "148869", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10017, "购物车", 10117, 3, 7, "176260", 15, [65, 105, 20, 90, 0, 180, 1, 1, 1], "98753", [1, 0], 1, null, null, 0, null, null, null, 0, "166610", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10117, null, 10017, 0, 0, null, 15, [65, 105, 20, 90, 0, 180, 1, 1, 1], "98748", [1, 0], 1, null, null, 0, null, null, null, 0, "166610", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10019, "婴儿车", 10119, 3, 6, "176266", 15, [45, 105, 20, 90, -90, 180, 1.2, 1.2, 1.2], "98753", [1, 0], 1, null, null, 0, null, null, null, 0, "120653", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10119, null, 10019, 0, 0, null, 15, [45, 105, 20, 90, -90, 180, 1.2, 1.2, 1.2], "98748", [1, 0], 1, null, null, 0, null, null, null, 0, "120653", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10020, "行李箱", 10120, 3, 8, "176501", 16, [110, 12, 0, 0, -90, 180, 1, 1, 1], "98757", [1, 0], 1, null, null, 0, null, null, null, 0, "96595", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10120, null, 10020, 0, 0, null, 16, [110, 12, 0, 0, -90, 180, 1, 1, 1], "14557", [1, 0], 1, null, null, 0, null, null, null, 0, "96595", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10021, "黑色雨伞", 10121, 3, 1, "176321", 16, [0, 0, -5, 5, 5, 0, 1, 1, 1], "98752", [1, 0], 1, null, null, 0, null, null, null, 0, "159401", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10121, null, 10021, 0, 0, null, 16, [0, 0, -5, 5, 5, 0, 1, 1, 1], "14557", [0.1, 0], 1, null, null, 0, null, null, null, 0, "159401", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10046, "气球", 10146, 3, 2, "85003", 16, [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "146441", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10146, null, 10046, 0, 0, null, 16, [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "98754", [1, 1], 1, null, null, 0, null, null, null, 0, "146441", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10048, "小白兔玩偶", 10148, 3, 15, "23414", 16, [5, -10, -20, 10, 5, -60, 0.5, 0.5, 0.5], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10148, null, 10048, 0, 0, null, 16, [0, -10, 10, 160, 25, -90, 0.5, 0.5, 0.5], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10049, "玩偶", 10149, 3, 16, "32626", 16, [0, -15, -20, 0, 5, -60, 1.5, 1.5, 1.5], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10149, null, 10049, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 1.5, 1.5, 1.5], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10064, "杠铃", 10164, 3, 11, "27022", 16, [12, 0, 0, 0, 90, 0, 0.7, 0.7, 0.7], null, null, 0, null, null, 0, null, null, null, 0, "120669", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10164, null, 10064, 0, 0, null, 16, [12, 0, 0, 0, 90, 0, 0.7, 0.7, 0.7], "14557", [1, 0], 1, null, null, 0, null, null, null, 0, "120669", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10065, "杠铃", 10165, 3, 12, "72490", 16, [3, -10, -10, -60, 0, 0, 1, 1, 1], "14025", [1, 0], 1, null, null, 0, null, null, null, 0, "120669", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10165, null, 10065, 0, 0, null, 16, [0, -10, 0, 25, 0, 0, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120669", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10066, "玩偶", 10166, 3, 13, "32618", 16, [0, -15, -25, 0, 5, -60, 1, 1, 1], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10166, null, 10066, 0, 0, null, 16, [0, -10, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10067, "玩偶", 10167, 3, 14, "32622", 16, [0, -15, -25, 0, 5, -60, 1, 1, 1], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10167, null, 10067, 0, 0, null, 16, [0, -10, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10069, "奖杯", 10169, 3, 9, "27066", 16, [5, -8, -12, 0, 60, 90, 1, 1, 1], "14025", [1, 0], 1, null, null, 0, null, null, null, 0, "176328", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10169, null, 10069, 0, 0, null, 16, [0, -10, 10, 160, 25, -90, 1, 1, 1], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "176328", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10070, "靠垫", 10170, 3, 17, "32568", 16, [7, -10, -5, 40, 0, -60, 1, 1, 1], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "158393", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10170, null, 10070, 0, 0, null, 16, [5, 5, 15, -120, 0, -10, 1, 1, 1], "14654", [1, 0], 1, null, null, 0, null, null, null, 0, "158393", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10071, "靠垫", 10171, 3, 18, "32570", 16, [7, -10, -5, 40, 0, -60, 1, 1, 1], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "158393", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10171, null, 10071, 0, 0, null, 16, [5, 5, 15, -120, 0, -10, 1, 1, 1], "14654", [1, 0], 1, null, null, 0, null, null, null, 0, "158393", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10073, "游戏机", 10173, 3, 10, "32556", 16, [5, -3, 5, -70, -40, -20, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "175743", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10173, null, 10073, 0, 0, null, 16, [5, -3, 5, -70, -40, -20, 1, 1, 1], "98612", [1, 0], 1, null, null, 0, null, null, null, 0, "175743", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10075, "鲤鱼", 10175, 3, 201, "123357", 16, [-9, 0, -20, 90, 0, -90, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "96595", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10175, null, 10075, 0, 0, null, 23, [0, 0, 30, 0, 0, -90, 3, 3, 3], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10076, "龙虾", 10176, 3, 202, "123355", 16, [-14, 0, -18, 110, 0, -90, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10176, null, 10076, 0, 0, null, 23, [30, 0, 30, 0, 0, -90, 3, 3, 3], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10077, "金龙鱼", 10177, 3, 203, "136420", 16, [-4, 0, -21, -180, 90, 0, 1, 1.5, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10177, null, 10077, 0, 0, null, 23, [10, 0, 50, 0, 0, 180, 3, 5, 3], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10078, "毛鼻鲶", 10178, 3, 204, "136408", 16, [-4, 0, -21, -180, 90, 0, 1, 1.5, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10178, null, 10078, 0, 0, null, 23, [10, 0, 65, 0, 0, 180, 3, 5, 3], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10079, "尖吻鲈", 10179, 3, 205, "136422", 16, [-4, 0, -21, -180, 90, 0, 2, 3, 2], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10179, null, 10079, 0, 0, null, 23, [10, 0, 50, 0, 0, 180, 6, 6, 6], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10080, "蓝鳍金枪鱼", 10180, 3, 206, "136415", 16, [-4, 0, -21, -180, 90, 0, 0.2, 0.2, 0.2], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10180, null, 10080, 0, 0, null, 23, [10, 0, 10, 0, 0, 180, 1, 1, 1], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10081, "大眼鲤鱼", 10181, 3, 207, "136418", 16, [-10, 0, -16, -180, 90, 0, 2.5, 2.5, 2.5], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10181, null, 10081, 0, 0, null, 23, [10, 0, 40, 0, 0, 180, 6, 6, 6], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10082, "大口副鲈", 10182, 3, 208, "136409", 16, [-4, 0, -21, -180, 90, 0, 1.5, 2, 1.5], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10182, null, 10082, 0, 0, null, 23, [10, 0, 30, 0, 0, 180, 6, 6, 6], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10083, "皇带鱼", 10183, 3, 209, "136410", 16, [-3, 0, -21, -180, 90, 0, 0.3, 0.7, 0.3], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10183, null, 10083, 0, 0, null, 23, [0, 0, 40, 0, 0, 180, 1, 5, 2], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10084, "鲸鱼", 10184, 3, 210, "122172", 16, [5, -25, -5, 0, 60, 90, 0.15, 0.15, 0.15], "14025", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10184, null, 10084, 0, 0, null, 23, [20, 0, 60, 0, 0, 0, 0.2, 0.2, 0.2], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10085, "孔雀鱼", 10185, 3, 211, "136417", 16, [-4, 0, -15, -180, 90, 0, 7, 10, 7], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10185, null, 10085, 0, 0, null, 23, [20, 0, 60, 0, 0, 180, 20, 20, 20], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10086, "笛鲷", 10186, 3, 212, "136405", 16, [-4, 0, -21, -180, 90, 0, 1.5, 2, 1.5], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10186, null, 10086, 0, 0, null, 23, [10, 0, 50, 0, 0, 180, 4, 5, 3], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10087, "平颌鱲", 10187, 3, 213, "136416", 16, [-4, 0, -21, -180, 90, 0, 2, 3, 2], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10187, null, 10087, 0, 0, null, 23, [10, 0, 50, 0, 0, 180, 6, 6, 6], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10088, "鲨鱼", 10188, 3, 214, "136412", 16, [5, -8, -12, 0, 60, 90, 1, 1.2, 1.2], "14025", [1, 0], 1, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10188, null, 10088, 0, 0, null, 23, [-20, 0, 40, 0, 0, 180, 2, 2, 2], "169638", [1, 0], 3, null, null, 0, null, null, null, 0, "159381", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10089, "樱花枝", 10189, 3, 16, "218258", 15, [2, 0, 0, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "192129", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10189, null, 10089, 0, 0, null, 15, [2, 0, 0, 0, 0, 0, 1, 1, 1], "123718", [1, 1], 1, null, null, 0, null, null, null, 0, "192129", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10090, "咖啡", 10190, 3, 17, "40809", 16, [6.04, -7.74, -4.26, 0, 0, -79.46, 0.06, 0.06, 0.06], "35385", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10190, null, 10090, 0, 0, null, 16, [4.32, -2.89, -5.03, 0, 0, -33.59, 0.06, 0.06, 0.06], "14514", [1, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10091, "女帽子", 10191, 3, 18, "173243", 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10191, null, 10091, 0, 0, null, 20, [2.5, 0, -16, 0, 0, -90, 1, 1, 1], "198590", [1, 0], 1, null, null, 0, null, null, null, 0, "180436", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10097, "角色模型", 10197, 3, 38, "177590", 23, [0, 0, 0, 0, 0, 0, 0.01, 0.01, 0.01], null, null, 0, "177590", [-5000, 0, 0, 0, 0, -90, 100, 100, 100], 0, "126684", [500, 0.8, 1], null, 0, "211477", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10197, null, 10097, 0, 0, null, 23, [0, 0, 0, 0, 0, 0, 0.01, 0.01, 0.01], null, null, 0, null, null, 0, "126684", [500, 0.8, 1], null, 0, "211477", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10098, "背带鲨鱼", 10198, 3, 301, "180966", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10198, null, 10098, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], null, null, 0, "145506", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10099, "埃及鲨鱼", 10199, 3, 302, "184457", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10199, null, 10099, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], null, null, 0, "88020", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10300, "埃及章鱼", 10400, 3, 303, "184458", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10400, null, 10300, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], null, null, 0, "27392", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10301, "埃及金鱼", 10401, 3, 304, "184556", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10401, null, 10301, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], null, null, 0, "27447", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10302, "天使章鱼", 10402, 3, 305, "186655", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10402, null, 10302, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], null, null, 0, "145495", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10303, "嘟嘟嘴金鱼", 10403, 3, 306, "179470", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10403, null, 10303, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], null, null, 0, "151527", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10304, "嘟嘟嘴红金鱼", 10404, 3, 307, "180967", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10404, null, 10304, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], null, null, 0, "145512", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10305, "灯笼鱼形态的宠物", 10405, 3, 308, "80343", 16, [0, -12.64, -12.64, 0, 0, 0, 1, 1, 1], "181132", [1, 0], 1, null, null, 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10405, null, 10305, 0, 0, null, 23, [-50, -25, 123, 0, 0, -90, 1, 1, 1], "14620", [1, 0], 0, "153613", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 0, null, null, null, 0, "98210", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10307, "紫阳春剑", 10407, 3, 27, "172199", 14, [3.1, 12.9, -44.11, 63.65, -62.11, 22.9, 1, 1, 1], null, null, 0, "162221", [0, 0, 0, 90, 0, 0, 1, 1, 1], 0, null, null, null, 0, "98203", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10407, null, 10307, 0, 0, null, 16, [0, 0, 45, -90, 0, 0, 1, 1, 1], "122491", [1, 1], 3, "88442", [0, 80, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "98203", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10308, "剑", 10408, 3, 27, "122949", 12, [11.2, -32.84, 20.81, 180.05, -48.22, -90.01, 1, 1, 1], null, null, 0, "103123", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "98203", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10408, null, 10308, 0, 0, null, 16, [0, 0, 0, 0, 0, 0, 1, 1, 1], "111102", [1, 1], 3, "180505", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], 1, null, null, null, 0, "98203", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10309, "大剑", 10409, 3, 27, "186519", 12, [6.28, 33.79, 25.13, 180, 46.64, -90, 1, 1, 1], null, null, 0, "162250", [0, 0, 32, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "98203", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10409, null, 10309, 0, 0, null, 15, [0, 0, 0, -6.2, 10.73, 29.3, 1, 1, 1], "217289", [1, 1], 3, "14323", [0, 0, 95, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "98203", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10310, "樱花枝", 10410, 3, 30, "218258", 16, [2, 0, 0, 0, 0, 0, 1, 1, 1], "219281", [1, 0], 1, null, null, 0, null, null, null, 0, "192129", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10410, null, 10310, 0, 0, null, 16, [2, 0, 0, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "192129", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10311, "樱花枝", 10411, 3, 30, "218258", 15, [2, 0, 0, 0, 0, 0, 1, 1, 1], "219280", [1, 0], 1, null, null, 0, null, null, null, 0, "192129", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10411, null, 10311, 0, 0, null, 15, [2, 0, 0, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "192129", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10327, "卡通小人", 10427, 3, 15, "135233", 16, [0, -10, -10, 0, 5, -60, 4, 4, 4], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10427, null, 10327, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 4, 4, 4], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10328, "甜品店吉祥物", 10428, 3, 15, "128491", 16, [0, -10, -10, 0, 5, -60, 0.2, 0.2, 0.2], "98743", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10428, null, 10328, 0, 0, null, 16, [0, -13, 10, 160, 25, -90, 0.2, 0.2, 0.2], "88751", [1, 0], 1, null, null, 0, null, null, null, 0, "120679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10022, "汉堡", 10122, 4, 0, "37975", 16, [5, -9, -3, 0, 0, 0, 0.5, 0.5, 0.5], "98747", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10122, null, 10022, 0, 0, null, 16, [5, -9, -3, 0, 0, 0, 0.5, 0.5, 0.5], "14762", [0.7, 1], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10023, "羊奶", 10123, 4, 0, "29005", 16, [5, -3, -15, 0, 0, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10123, null, 10023, 0, 0, null, 16, [5, -3, -15, 0, 0, 0, 1, 1, 1], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10024, "面包", 10124, 4, 0, "46131", 16, [5, -3, -5, 0, 90, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10124, null, 10024, 0, 0, null, 16, [5, -3, -5, 0, 90, 0, 1, 1, 1], "14762", [0.7, 1], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10025, "面包", 10125, 4, 0, "46132", 16, [5, -3, -5, 0, 90, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10125, null, 10025, 0, 0, null, 16, [5, -3, -5, 0, 90, 0, 1, 1, 1], "14762", [0.7, 1], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10027, "饮料", 10127, 4, 0, "46150", 16, [5, -3, -10, 0, 0, 0, 0.5, 0.5, 0.5], "14557", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10127, null, 10027, 0, 0, null, 16, [5, -3, -10, 0, 0, 0, 0.5, 0.5, 0.5], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10028, "饮料", 10128, 4, 0, "46156", 16, [5, -3, -10, 0, 0, 0, 0.3, 0.3, 0.3], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10128, null, 10028, 0, 0, null, 16, [5, -3, -10, 0, 0, 0, 0.3, 0.3, 0.3], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10029, "饮料", 10129, 4, 0, "46158", 16, [5, -3, -10, 0, 0, 0, 0.4, 0.4, 0.4], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10129, null, 10029, 0, 0, null, 16, [5, -3, -10, 0, 0, 0, 0.4, 0.4, 0.4], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10031, "酒", 10131, 4, 0, "49441", 16, [5, -3, -15, 0, 0, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10131, null, 10031, 0, 0, null, 16, [5, -3, -15, 0, 0, 0, 1, 1, 1], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10033, "奶昔", 10133, 4, 0, "40819", 16, [3, -3, -10, 0, 0, 0, 0.05, 0.05, 0.05], "14557", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10133, null, 10033, 0, 0, null, 16, [3, -3, -10, 0, 0, 0, 0.05, 0.05, 0.05], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10034, "冰淇淋", 10134, 4, 0, "40832", 16, [3, -3, -10, 0, 0, 0, 0.05, 0.05, 0.05], "14557", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10134, null, 10034, 0, 0, null, 16, [3, -3, -10, 0, 0, 0, 0.05, 0.05, 0.05], "14762", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10038, "烧烤", 10138, 4, 0, "46136", 16, [15, -3, 0, -90, -90, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10138, null, 10038, 0, 0, null, 16, [15, -3, 0, -90, -90, 0, 1, 1, 1], "14762", [0.7, 1], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10041, "奶茶", 10141, 4, 0, "27826", 16, [3, -3, -10, 0, 0, 0, 1, 1, 1], "14557", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10141, null, 10041, 0, 0, null, 16, [3, -3, -10, 0, 0, 0, 1, 1, 1], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10043, "猫粮", 10143, 4, 0, "28995", 15, [5, 2, -8, 0, 0, 0, 0.7, 0.7, 0.7], "98606", [1, 0], 1, null, null, 0, null, null, null, 0, "163628", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10143, null, 10043, 0, 0, null, 15, [0, 0, 0, 90, 0, 0, 0.7, 0.7, 0.7], "14780", [1, 0], 1, null, null, 0, null, null, null, 0, "163628", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10054, "蛋糕", 10154, 4, 0, "23115", 15, [0, 0, 0, 0, 0, 0, 1, 1, 1], "98606", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10154, null, 10054, 0, 0, null, 15, [0, 0, 0, 90, 0, 0, 1, 1, 1], "14780", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10057, "一盘蛋糕", 10157, 4, 0, "23116", 15, [0, 0, 0, 0, 0, 0, 1, 1, 1], "98606", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10157, null, 10057, 0, 0, null, 15, [0, 0, 0, 90, 0, 0, 1, 1, 1], "14780", [1, 0], 1, null, null, 0, null, null, null, 0, "159430", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10059, "咖啡", 10159, 4, 0, "23191", 16, [8, 0, -5, 0, 0, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10159, null, 10059, 0, 0, null, 16, [8, 0, -5, 0, 0, 0, 1, 1, 1], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10062, "清酒", 10162, 4, 0, "23043", 16, [3, -3, -30, 0, 0, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10162, null, 10062, 0, 0, null, 16, [3, -3, -30, 0, 0, 0, 1, 1, 1], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10063, "清酒", 10163, 4, 0, "23071", 16, [3, -3, -27, 0, 0, 0, 1, 1, 1], "98736", [1, 0], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [10163, null, 10063, 0, 0, null, 16, [3, -3, -27, 0, 0, 0, 1, 1, 1], "8356", [0.7, 1], 1, null, null, 0, null, null, null, 0, "153900", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20001, "火焰翅膀", 20002, 2, 2, "223877", 12, [0, 0, 10, 0, 0, 90, 1.5, 1.5, 1.5], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20002, null, 20001, 2, 0, null, 12, [0, 0, 10, 0, 0, 90, 1.5, 1.5, 1.5], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20003, "翅膀", 20004, 2, 2, "135840", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20004, null, 20003, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20005, "翅膀", 20006, 2, 2, "135851", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20006, null, 20005, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20007, "翅膀", 20008, 2, 2, "135848", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20008, null, 20007, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20009, "双层翅膀", 20010, 2, 2, "334814", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20010, null, 20009, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20011, "翅膀", 20012, 2, 2, "42804", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20012, null, 20011, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20013, "翅膀", 20014, 2, 2, "42805", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20014, null, 20013, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20015, "翅膀", 20016, 2, 2, "42816", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20016, null, 20015, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20017, "翅膀", 20018, 2, 2, "42818", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20018, null, 20017, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20019, "翅膀", 20020, 2, 2, "42821", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20020, null, 20019, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20021, "翅膀", 20022, 2, 2, "42828", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20022, null, 20021, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20023, "翅膀", 20024, 2, 2, "145906", 12, [0, 0, -20, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20024, null, 20023, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20025, "翅膀", 20026, 2, 2, "145908", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20026, null, 20025, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20027, "翅膀", 20028, 2, 2, "145910", 12, [0, 0, 0, 0, 0, 180, 2, 2, 2], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20028, null, 20027, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20029, "翅膀", 20030, 2, 2, "145912", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20030, null, 20029, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20031, "翅膀", 20032, 2, 2, "145913", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20032, null, 20031, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20033, "翅膀", 20034, 2, 2, "340180", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20034, null, 20033, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20035, "翅膀", 20036, 2, 2, "342526", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20036, null, 20035, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20037, "翅膀", 20038, 2, 2, "342530", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20038, null, 20037, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20039, "翅膀", 20040, 2, 2, "375134", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20040, null, 20039, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20041, "翅膀", 20042, 2, 2, "375788", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20042, null, 20041, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20043, "翅膀", 20044, 2, 2, "393543", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20044, null, 20043, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20045, "六翼翅膀", 20046, 2, 1, "399002", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20046, null, 20045, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20047, "翅膀", 20048, 2, 2, "42830", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20048, null, 20047, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20049, "翅膀", 20050, 2, 2, "136963", 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20050, null, 20049, 2, 0, null, 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20051, "翅膀", 20052, 2, 2, "145902", 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20052, null, 20051, 2, 0, null, 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20053, "翅膀", 20054, 2, 2, "145904", 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20054, null, 20053, 2, 0, null, 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20055, "翅膀", 20056, 2, 2, "136966", 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20056, null, 20055, 2, 0, null, 12, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20057, "翅膀", 20058, 2, 2, "145909", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20058, null, 20057, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20059, "翅膀", 20060, 2, 2, "145911", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20060, null, 20059, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20061, "火焰翅膀", 20062, 2, 2, "211667", 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 1, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [20062, null, 20061, 2, 0, null, 12, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "129686", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30001, "烟花筒", 30002, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "125370", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30002, null, 30002, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "125370", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30003, "炮弹", 30004, 5, 0, "122174", 15, [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], null, null, 0, "86375", [0, 0, 0, 0, 0, 0, 1, 1, 1], 0, null, null, null, 0, "96613", "86375", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30004, null, 30004, 0, 0, null, 15, [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], "52981", [1, 1], 0, null, null, 0, null, null, null, 0, "96613", null, [2, 1, 1], "122174", [0, 0, 0, 0, 0, 0, 1, 1, 1], "86375", [0, 0, 30, 0, 0, 0, 1, 1, 1], "85151", [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5], "97385", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30005, "烟花筒", 30006, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "4374", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30006, null, 30006, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "4374", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30007, "烟花筒", 30008, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "4375", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30008, null, 30008, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "4375", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30009, "烟花筒", 30010, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "4376", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30010, null, 30010, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "4376", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30011, "烟花筒", 30012, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "4377", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30012, null, 30012, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "4377", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30013, "烟花筒", 30014, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "32679", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30014, null, 30014, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "32679", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30015, "烟花筒", 30016, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "81684", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30016, null, 30016, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "81684", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30017, "烟花筒", 30018, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "81685", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30018, null, 30018, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "81685", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30019, "烟花筒", 30020, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "88812", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30020, null, 30020, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "88812", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30021, "烟花筒", 30022, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "88816", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30022, null, 30022, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "88816", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30023, "烟花筒", 30024, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "88821", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30024, null, 30024, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "88821", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30025, "烟花筒", 30026, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "88828", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30026, null, 30026, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "88828", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30027, "烟花筒", 30028, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "88832", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30028, null, 30028, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "88832", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30029, "烟花筒", 30030, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "88835", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30030, null, 30030, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "88835", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30031, "烟花筒", 30032, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "125365", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30032, null, 30032, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "125365", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30033, "烟花筒", 30034, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "125373", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30034, null, 30034, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "125373", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30035, "烟花筒", 30036, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "141911", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30036, null, 30036, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "141911", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30037, "烟花筒", 30038, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "141912", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30038, null, 30038, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "141912", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30039, "烟花筒", 30040, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "141915", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30040, null, 30040, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "141915", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30041, "烟花筒", 30042, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "141916", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30042, null, 30042, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "141916", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30043, "烟花筒", 30044, 5, 0, "171837", 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "174253", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30044, null, 30044, 0, 0, null, 15, [6.47, -0.35, -15.02, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 3, 1], "171837", [0, 0, 100, 0, 45, 0, 1.5, 1.5, 1.5], null, null, "174253", [0, 0, 0, 0, 0, 0, 1, 1, 1], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30045, "炮竹", 30046, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "78884", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30046, null, 30046, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "78884", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30047, "炮竹", 30048, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "78885", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30048, null, 30048, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "78885", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30049, "炮竹", 30050, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "78886", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30050, null, 30050, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "78886", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30051, "炮竹", 30052, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "78887", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30052, null, 30052, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "78887", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30053, "炮竹", 30054, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "146328", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30054, null, 30054, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "146328", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30055, "炮竹", 30056, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "146329", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30056, null, 30056, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "146329", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30057, "炮竹", 30058, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "146753", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30058, null, 30058, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "146753", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30059, "炮竹", 30060, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "146754", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30060, null, 30060, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "146754", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30061, "炮竹", 30062, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "146781", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30062, null, 30062, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "146781", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30063, "炮竹", 30064, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "146782", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30064, null, 30064, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "146782", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30065, "炮竹", 30066, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "173515", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30066, null, 30066, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "173515", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30067, "炮竹", 30068, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "173518", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30068, null, 30068, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "173518", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30069, "炮竹", 30070, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "174247", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30070, null, 30070, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "174247", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30071, "炮竹", 30072, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "174249", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30072, null, 30072, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "174249", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30073, "炮竹", 30074, 5, 0, "96556", 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "103437", "174251", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [30074, null, 30074, 0, 0, null, 15, [4.52, 1.11, -5.3, 0, 0, 0, 1, 1, 1], "124999", [1, 1], 0, null, null, 0, null, null, null, 0, "103437", null, [2, 5, 1], "96556", [0, 0, 100, 0, 0, 0, 1.5, 1.5, 1.5], null, null, "174251", [0, 0, 0, 0, 0, 0, 0.7, 0.7, 0.7], "97372", [1, 500], null, null, null, null, null, null, 0, null, 0, null, 0, null, 0, 0, 0, null], [60001, "滑板", 0, 6, 0, "363FEA624259C1B9142621B378EF2D00", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "167883", null, null, null, null, null, null, null, null, null, null, "167883", null, null, null, null, "151060", 3, "151060", 3, null, 0, null, 0, 0, 0, null], [60002, "滑板2", 0, 6, 0, "E8023A80499578B92FF7FF9DC6B0C5DF", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "167952", null, null, null, null, null, null, null, null, null, null, "167952", null, null, null, null, "151060", 3, "151060", 3, null, 0, null, 0, 0, 0, null], [60003, "滑板3", 0, 6, 0, "DD372C0847DF60EA5A71188793CED8B9", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "167952", null, null, null, null, null, null, null, null, null, null, "167952", null, null, null, null, "151060", 3, "151060", 3, null, 0, null, 0, 0, 0, null], [60004, "冲浪板", 0, 6, 0, "CA4C723A47326DBDD6C15E81BF263948", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "120767", "112946", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "151060", 3, "151060", 3, null, 0, null, 0, 0, 0, null], [60005, "冲浪板_1", 0, 6, 0, "44C88B394905C23FAEB144A09D1C288F", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "120767", "112935", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "151060", 3, "151060", 3, null, 0, null, 0, 0, 0, null], [60006, "自行车", 0, 6, 0, "3535C0024A4AB595E185E696C68D7A92", 23, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "126636", "31526", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, "174560", 1, "285057", 3, null, 0, 0, 0, null], [60007, "自行车1", 0, 6, 0, "CD227C3B493C28D21247CF9B037E2C79", 23, [0, 0, 0, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "126636", "186109", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, "174560", 1, "285057", 3, null, 0, 0, 0, null], [60008, "花猪", 0, 6, 0, "10C7602E48F2D1CCFB972EBF05FCEB99", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "160429", "159590", null, null, null, null, null, null, null, null, null, null, "159590", [15, 0, 50, 0, 0, 0, 1, 1, 1], "181293", "181291", null, 0, null, 0, "169639", 3, "169638", 3, 0, 0, null], [60009, "狗儿子", 0, 6, 0, "30AACA6644A6A8934E7CBA8C6391853F", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "160427", "160319", null, null, null, null, null, null, null, null, null, null, "160319", [20, 0, 80, 0, 0, 0, 2, 2, 2], "181293", "181291", null, 0, null, 0, "169639", 3, "169638", 3, 0, 0, null], [60010, "彩虹马", 0, 6, 0, "04EC792B4A3A2234074439AD1B38B6A0", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "131921", "174968", null, null, null, null, null, null, null, null, null, null, "174968", [20, 0, 80, 0, 0, 0, 3, 3, 3], "181293", "181291", null, 0, null, 0, "169639", 3, "169638", 3, 0, 0, null], [60011, "熊猫", 0, 6, 0, "D15BB1CF4FA03737446352A21DFB0807", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "193823", "159933", null, null, null, null, null, null, null, null, null, null, "159933", [-10, 0, 60, 0, 0, 0, 1.5, 1.5, 1.5], "181293", "181291", null, 0, null, 0, "169639", 3, "169638", 3, 0, 0, null], [60012, "小龙", 0, 6, 0, "8A792E1B42F34D60C29234A0B038B26C", 23, [0, 0, 0, 0, 0, 90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "408381", "160634", null, null, null, null, null, null, null, null, null, null, "160634", [5, 0, 50, 0, 0, 0, 2.4, 2.4, 2.4], "160618", "160618", null, 0, null, 0, "169639", 3, "169638", 3, 0, 0, null], [60013, "御剑", 0, 6, 0, "C1CBB0A8489B5CC17AB0A49EBC78D26D", 23, [-50, 0, 0, 0, 0, -90, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "169463", "300435", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, "284751", 3, "284751", 3, 0, 0, null], [60014, "鱼", 0, 6, 0, "B76602D34118414D88C30ABABC20DCE1", 23, [15, 0, 50, 0, 0, 180, 1, 1, 1], null, null, 0, null, null, 0, null, null, null, 0, "123030", "23559", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, null, 0, "169639", 3, "169639", 3, 0, 0, null]];
class ActionPropConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$7);
    }
}

var foreign6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ActionPropConfig: ActionPropConfig
});

const EXCELDATA$6 = [["Id", "Chats", "ChatChilds"], ["", "", ""], [1, ["Praise", "赞美"], [["Your outfit looks great!", "你的搭配真好看！"], ["This dress fits you well!", "这件衣服好适合你！"], ["Hair and makeup match!", "发型和妆容绝配！"], ["You're so good!", "你太会搭了！"]]], [2, ["Help", "求助"], [["How about looking at this set for me?", "帮我看看这套怎么样？"], ["What shoes would go with this dress?", "这件衣服配什么鞋子好？"], ["Are there any recommended color combinations?", "有没有推荐的颜色搭配？"], ["Does this hairstyle suit me?", "这个发型适合我吗？"]]], [3, ["Interaction", "互动"], [["Share your outfit!", "分享一下穿搭吧！"], ["PK to match it!", "来PK一下搭配吧！"], ["What style do you prefer?", "你喜欢什么风格？"], ["We can try each other on!", "我们可以互相试穿哦！"]]], [4, ["Thank you", "感谢"], [["Thanks for the advice!", "谢谢你的建议！"], ["Thanks for sharing!", "感谢你的分享！"], ["Thanks for the compliment!", "谢谢夸奖！"], ["Thanks for your help!", "感谢你的帮助！"]]], [5, ["Make fun of", "吐槽"], [["This dress is so hard to match!", "这件衣服太难搭了！"], ["You are out of line!", "你好过分！"], ["No hee hee!", "不嘻嘻！"]]], [6, ["Invitation", "邀请"], [["Add a friend!", "加个好友吧！"], ["Team up!", "一起组队吧！"], ["Come on, my dress!", "试穿我的穿搭！"]]], [7, ["Show Time!", ")*o*( 我要开始表演了~"], null]];
class ChatConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$6);
    }
}

var foreign7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ChatConfig: ChatConfig
});

const EXCELDATA$5 = [["ID", "AssetId"], ["", ""], [1, "117806"], [2, "117804"], [3, "117807"], [4, "117803"], [5, "117808"], [6, "117809"], [7, "117812"], [8, "164705"], [9, "164706"], [10, "164707"], [11, "164708"], [12, "164709"], [13, "164710"], [14, "184427"], [15, "184428"], [16, "184429"], [17, "184430"], [18, "184431"], [19, "184432"], [20, "184433"], [21, "184434"], [22, "184437"], [23, "184438"], [24, "184439"], [25, "184440"], [26, "184441"], [27, "184443"], [28, "184444"], [29, "184445"], [30, "184446"], [31, "185312"], [32, "185313"], [33, "185314"], [34, "185315"], [35, "185316"], [36, "185317"], [37, "185318"], [38, "185319"], [39, "185320"], [40, "185321"], [41, "185322"], [42, "185323"], [43, "185324"], [44, "185325"], [45, "185326"], [46, "185327"], [47, "185328"]];
class ExpressionConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$5);
    }
}

var foreign9 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ExpressionConfig: ExpressionConfig
});

const EXCELDATA$4 = [["ID", "TriggerGuid", "ModelGuid", "ModelGuid_C", "BagId", "NpcId", "ShareId", "NpcAnimationId"], ["", "", "", "", "", "", "", ""], [1, "224AC214", null, null, 10106, null, 0, null, "电吉他"], [2, "35CDCC44", null, null, 10193, null, 0, null, "电吉他"], [3, "34350953", null, null, 10194, null, 0, null, "吉他"], [4, "3EA51D09", null, null, 10195, null, 0, null, "吉他"], [5, "04AEE481", null, null, 10420, null, 0, null, "钢琴"], [6, "05ED08EB", null, null, 10440, null, 0, null, "架子鼓"], [7, "0CAEBC7B", null, null, 10438, null, 0, null, "灯球"], [8, "1B1B284C", null, null, 10439, null, 0, null, "灯球"], [9, "3B1D90D9", null, null, 10441, null, 0, null, "沙发"], [10, "38A812F7", null, null, 10429, null, 0, null, "卡通小人"], [11, "2D253DE4", null, "198914", 10430, null, 0, null, "L"], [12, "1F461FC1", null, "199057", 10431, null, 0, null, "O"], [13, "122CF8D0", null, "199090", 10432, null, 0, null, "V"], [14, "135CB222", null, "198991", 10433, null, 0, null, "E"], [15, "13F0153C", null, "198902", 10434, null, 0, null, "F"], [16, "2B380279", null, "198968", 10435, null, 0, null, "U"], [17, "323796B5", null, "198896", 10436, null, 0, null, "C"], [18, "0BFB2115", null, "198912", 10437, null, 0, null, "K"], [19, "025E8339", null, null, 10442, null, 0, null, "箱子"], [20, "1CB8B39E", null, "121354", 10443, null, 0, null, "红手牌(笑脸)"], [21, "3218B841", null, "121351", 10444, null, 0, null, "蓝手牌(委屈脸)"], [22, "3FC7844F", null, "198892", 10445, null, 0, null, "A"], [23, "3A0B1AA4", null, "198894", 10446, null, 0, null, "B"], [24, "289874F8", null, "198898", 10447, null, 0, null, "D"], [25, "2D35158F", null, "198904", 10448, null, 0, null, "G"], [26, "37179069", null, null, 10449, null, 0, null, "凳子"], [27, "06A7F0E5", null, null, 10412, null, 0, null, "蓝色法杖"], [28, "22E2E57A", null, null, 10413, null, 0, null, "红色法杖"], [29, "2826DD99", null, null, 10414, null, 0, null, "扫帚法杖"], [30, "2A198EFA", null, null, 10415, null, 0, null, "魔法仗"], [31, "1E555942", null, null, 10416, null, 0, null, "地毯"], [32, "2D19DF6C", null, null, 10417, null, 0, null, "足球筐"], [33, "32A7A7B8", null, null, 10418, null, 0, null, "纸板箱"], [34, "34F4253C", null, null, 10419, null, 0, null, "热狗摊"], [35, "3D84B039", null, null, 10421, null, 0, null, "妲己耳朵"], [36, "3AA417A1", null, null, 10422, null, 0, null, "长耳兔灰耳朵"], [37, "3A0611CB", null, null, 10423, null, 0, null, "黑狼耳朵"], [38, "3AC125DE", null, null, 10424, null, 0, null, "气球"], [39, "32B8310E", null, null, 10425, null, 0, null, "卡通小人"], [40, "3E3B0A9B", null, null, 10426, null, 0, null, "卡通小人"], [41, "1A0BA065", null, null, 10406, null, 0, null, "凳子"], [42, "16726419", null, null, 10192, null, 0, null, "女帽子"], [43, "17FB3B3A", null, null, 10174, null, 0, null, "法杖"], [44, "359709F3", null, null, 10151, null, 0, null, "射灯"], [45, "39365A4F", null, "87019", 10152, null, 0, null, "喷火枪"], [46, "2B34AD30", null, null, 10147, null, 0, null, "尖叫鸡"], [47, "0E045A2F", null, null, 10105, null, 0, null, "荧光棒"], [48, "3DFE17A3", null, "175291", 10107, null, 0, null, "左轮手枪"], [49, "26253FF9", null, "176450", 10108, null, 0, null, "散弹枪"], [50, "2DA1B897", null, "176541", 10109, null, 0, null, "步枪"], [51, "31CB4D13", null, "176320", 10112, null, 0, null, "美元"], [52, "20002110", null, null, 10101, null, 0, null, "洋娃娃"], [53, "253BA295", null, "176521", 10102, null, 0, null, "娃娃"], [54, "03839C6A", null, null, 10103, null, 0, null, "书本"], [55, "364243CD", null, "176511", 10104, null, 0, null, "相机"], [56, "39E41FEF", null, "176265", 10111, null, 0, null, "笔记本电脑"], [57, "282CC813", null, "176478", 10114, null, 0, null, "手机"], [58, "09E06B43", null, "162188", 10116, null, 0, null, "手捧鲜花"], [59, "0B2EE355", null, "176260", 10117, null, 0, null, "购物车"], [60, "37CE4DD0", null, "176266", 10119, null, 0, null, "婴儿车"], [61, "2C2B7A39", null, "176501", 10120, null, 0, null, "行李箱"], [62, "0EC71B70", null, "176321", 10121, null, 0, null, "黑色雨伞"], [63, "170B6165", null, null, 10146, null, 0, null, "气球"], [64, "0C858992", null, null, 10148, null, 0, null, "小白兔玩偶"], [65, "1C3B1716", null, null, 10149, null, 0, null, "玩偶"], [66, "3099F378", null, null, 10164, null, 0, null, "杠铃"], [67, "1A6AA485", null, null, 10165, null, 0, null, "杠铃"], [68, "22A2C3CA", null, null, 10166, null, 0, null, "玩偶"], [69, "29C87271", null, null, 10167, null, 0, null, "玩偶"], [70, "22E0C2A0", null, null, 10169, null, 0, null, "奖杯"], [71, "317994EA", null, null, 10170, null, 0, null, "靠垫"], [72, "173E9CED", null, null, 10171, null, 0, null, "靠垫"], [73, "1F7EF865", null, null, 10173, null, 0, null, "游戏机"], [74, "1A4DEA4F", null, null, 10175, null, 0, null, "鲤鱼"], [75, "30DCA4CE", null, null, 10176, null, 0, null, "龙虾"], [76, "30DFB9BA", null, null, 10177, null, 0, null, "金龙鱼"], [77, "124A25AC", null, null, 10178, null, 0, null, "毛鼻鲶"], [78, "3A948C2D", null, null, 10179, null, 0, null, "尖吻鲈"], [79, "1A1960EC", null, null, 10180, null, 0, null, "蓝鳍金枪鱼"], [80, "137C3DFC", null, null, 10181, null, 0, null, "大眼鲤鱼"], [81, "3517B1C8", null, null, 10182, null, 0, null, "大口副鲈"], [82, "1B7F2A56", null, null, 10183, null, 0, null, "皇带鱼"], [83, "0F885A8D", null, null, 10184, null, 0, null, "鲸鱼"], [84, "033F8BC7", null, null, 10185, null, 0, null, "孔雀鱼"], [85, "2BBA0926", null, null, 10186, null, 0, null, "笛鲷"], [86, "0115C5D2", null, null, 10187, null, 0, null, "平颌鱲"], [87, "27471C8D", null, null, 10188, null, 0, null, "鲨鱼"], [88, "3D53903B", null, null, 10189, null, 0, null, "樱花枝"], [89, "3FC58217", null, null, 10190, null, 0, null, "咖啡"], [90, "011F309B", null, null, 10191, null, 0, null, "女帽子"], [91, "279B18E5", null, null, 10197, null, 0, null, "角色模型"], [92, "2ED0380E", null, null, 10198, null, 0, null, "背带鲨鱼"], [93, "0B82C187", null, null, 10199, null, 0, null, "埃及鲨鱼"], [94, "222E5F2C", null, null, 10400, null, 0, null, "埃及章鱼"], [95, "2B30B91A", null, null, 10401, null, 0, null, "埃及金鱼"], [96, "13072EE6", null, null, 10402, null, 0, null, "天使章鱼"], [97, "0EF164F2", null, null, 10403, null, 0, null, "嘟嘟嘴金鱼"], [98, "0A1F52D5", null, null, 10404, null, 0, null, "嘟嘟嘴红金鱼"], [99, "136497DE", null, null, 10405, null, 0, null, "灯笼鱼形态的宠物"], [100, "3F965EAA", null, "172199", 10407, null, 0, null, "紫阳春剑"], [101, "2EA2AC85", null, null, 10408, null, 0, null, "剑"], [102, "218D8D42", null, null, 10409, null, 0, null, "大剑"], [103, "08BA2210", null, null, 10410, null, 0, null, "樱花枝"], [104, "209DADD3", null, null, 10411, null, 0, null, "樱花枝"], [105, "26F28CC5", null, null, 10427, null, 0, null, "卡通小人"], [106, "080EB5B4", null, null, 10428, null, 0, null, "甜品店吉祥物"], [107, "050F3F49", null, null, 10122, null, 0, null, "汉堡"], [108, "103D03C0", null, null, 10123, null, 0, null, "羊奶"], [109, "2083D818", null, null, 10124, null, 0, null, "面包"], [110, "10A78A34", null, null, 10125, null, 0, null, "面包"], [111, "2A879D5B", null, null, 10127, null, 0, null, "饮料"], [112, "1A5C96B8", null, null, 10128, null, 0, null, "饮料"], [113, "004E4C1F", null, null, 10129, null, 0, null, "饮料"], [114, "1C676A4A", null, null, 10131, null, 0, null, "酒"], [115, "2300CB9F", null, null, 10133, null, 0, null, "奶昔"], [116, "214CD6A8", null, null, 10134, null, 0, null, "冰淇淋"], [117, "2B6173AC", null, null, 10138, null, 0, null, "烧烤"], [118, "192EEF1B", null, null, 10141, null, 0, null, "奶茶"], [119, "129123ED", null, null, 10143, null, 0, null, "猫粮"], [120, "2DDFA879", null, null, 10154, null, 0, null, "蛋糕"], [121, "1F5D16DF", null, "23116", 10157, null, 0, null, "一盘蛋糕"], [122, "2DBA3007", null, null, 10159, null, 0, null, "咖啡"], [123, "11DE3617", null, null, 10162, null, 0, null, "清酒"], [124, "1F8B4506", null, null, 10163, null, 0, null, "清酒"], [125, "1D2C18D1", null, null, 20002, null, 0, null, "火焰翅膀"], [126, "2916ADF8", null, null, 20004, null, 0, null, "翅膀"], [127, "06C9F1FE", null, null, 20006, null, 0, null, "翅膀"], [128, "142E03ED", null, null, 20008, null, 0, null, "翅膀"], [129, "26D884D0", null, null, 20010, null, 0, null, "双层翅膀"], [130, "1145F838", null, null, 20012, null, 0, null, "翅膀"], [131, "0DA363C5", null, null, 20014, null, 0, null, "翅膀"], [132, "18F12461", null, null, 20016, null, 0, null, "翅膀"], [133, "09A98640", null, null, 20018, null, 0, null, "翅膀"], [134, "29259717", null, null, 20020, null, 0, null, "翅膀"], [135, "18263521", null, null, 20022, null, 0, null, "翅膀"], [136, "2FEA3789", null, null, 20024, null, 0, null, "翅膀"], [137, "014FF45D", null, null, 20026, null, 0, null, "翅膀"], [138, "0405BC9D", null, null, 20028, null, 0, null, "翅膀"], [139, "094A02FA", null, null, 20030, null, 0, null, "翅膀"], [140, "299D82EF", null, null, 20032, null, 0, null, "翅膀"], [141, "3FAFE6CC", null, null, 20034, null, 0, null, "翅膀"], [142, "2AD6A4AE", null, null, 20036, null, 0, null, "翅膀"], [143, "36C39B14", null, null, 20038, null, 0, null, "翅膀"], [144, "3522E74F", null, null, 20040, null, 0, null, "翅膀"], [145, "2FE7B16D", null, null, 20042, null, 0, null, "翅膀"], [146, "37DAF393", null, null, 20044, null, 0, null, "翅膀"], [147, "3E372B7B", null, null, 20046, null, 0, null, "六翼翅膀"], [148, "2C44780B", null, null, 20048, null, 0, null, "翅膀"], [149, "3BE2742B", null, null, 20050, null, 0, null, "翅膀"], [150, "2D5EE2BA", null, null, 20052, null, 0, null, "翅膀"], [151, "21667B97", null, null, 20054, null, 0, null, "翅膀"], [152, "1BA1097C", null, null, 20056, null, 0, null, "翅膀"], [153, "01DAA052", null, null, 20058, null, 0, null, "翅膀"], [154, "0079B931", null, null, 20060, null, 0, null, "翅膀"], [155, "0A6CF066", null, null, 20062, null, 0, null, "火焰翅膀"], [156, "0170FAC5", "10EE2A0C", null, 30002, null, 0, null, "烟花筒"], [157, "26A8A892", null, null, 30004, null, 0, null, "炮弹"], [158, "17A75E0B", "11FC9E63", null, 30006, null, 0, null, "烟花筒"], [159, "00C80687", "009A5BCB", null, 30008, null, 0, null, "烟花筒"], [160, "35CFC979", "0BABC56F", null, 30010, null, 0, null, "烟花筒"], [161, "282879EE", "086F059A", null, 30012, null, 0, null, "烟花筒"], [162, "1348916C", "2CE0DFEA", null, 30014, null, 0, null, "烟花筒"], [163, "14BC2A1E", "1C4054BD", null, 30016, null, 0, null, "烟花筒"], [164, "351C315A", "0C3BA4A7", null, 30018, null, 0, null, "烟花筒"], [165, "1851FD98", "2BF65CD0", null, 30020, null, 0, null, "烟花筒"], [166, "0BC4E95E", "1FBB9B3D", null, 30022, null, 0, null, "烟花筒"], [167, "1926D26C", "1AD6F243", null, 30024, null, 0, null, "烟花筒"], [168, "3BE44928", "0CA04CBA", null, 30026, null, 0, null, "烟花筒"], [169, "3731FC4C", "1E7500AE", null, 30028, null, 0, null, "烟花筒"], [170, "2AB82CCF", "0DEDEC96", null, 30030, null, 0, null, "烟花筒"], [171, "23E53611", "29469B64", null, 30032, null, 0, null, "烟花筒"], [172, "09D6F64A", "038E0DE6", null, 30034, null, 0, null, "烟花筒"], [173, "21EBA335", "02D1FC4B", null, 30036, null, 0, null, "烟花筒"], [174, "0AEFD6F9", "1C1338D2", null, 30038, null, 0, null, "烟花筒"], [175, "2CEB6159", "0F8364EB", null, 30040, null, 0, null, "烟花筒"], [176, "3B8E291C", "2B16F449", null, 30042, null, 0, null, "烟花筒"], [177, "0942A9BF", "2A1D15C4", null, 30044, null, 0, null, "烟花筒"], [178, "0C77E34B", "2D266A62", null, 30046, null, 0, null, "炮竹"], [179, "03AABEC8", "19765D9B", null, 30048, null, 0, null, "炮竹"], [180, "0BAE4938", "224D3EAB", null, 30050, null, 0, null, "炮竹"], [181, "2072060C", "2B5E0169", null, 30052, null, 0, null, "炮竹"], [182, "125FDADA", "2BDB0504", null, 30054, null, 0, null, "炮竹"], [183, "0CEBF7F6", "0972F491", null, 30056, null, 0, null, "炮竹"], [184, "0CBA3B39", "03CA58A6", null, 30058, null, 0, null, "炮竹"], [185, "3C02005B", "3846CB30", null, 30060, null, 0, null, "炮竹"], [186, "197982A9", "249786AD", null, 30062, null, 0, null, "炮竹"], [187, "0C2A81EC", "22179468", null, 30064, null, 0, null, "炮竹"], [188, "385D9FB5", "04B8B96E", null, 30066, null, 0, null, "炮竹"], [189, "3684FDBA", "3DCE0055", null, 30068, null, 0, null, "炮竹"], [190, "30776600", "05A9EE0A", null, 30070, null, 0, null, "炮竹"], [191, "2FE9605C", "069FA242", null, 30072, null, 0, null, "炮竹"], [192, "3E3F8384", "38A2E844", null, 30074, null, 0, null, "炮竹"], [193, "2897C252", null, null, 60001, null, 0, null, "滑板"], [194, "0B49E4CA", null, null, 60002, null, 0, null, "滑板2"], [195, "046CC428", null, null, 60003, null, 0, null, "滑板3"], [196, "15F06D91", null, null, 60004, null, 0, null, "冲浪板"], [197, "33053BEF", null, null, 60005, null, 0, null, "冲浪板_1"], [198, "0074DBFD", null, null, 60006, null, 0, null, "自行车"], [199, "182128DB", null, null, 60007, null, 0, null, "自行车1"], [200, "2A6DF1E4", null, "159590", 60008, null, 0, null, "花猪"], [201, "17410470", null, "160319", 60009, null, 0, null, "狗儿子"], [202, "0A5C1D80", null, "174968", 60010, null, 0, null, "彩虹马"], [203, "071E50F6", null, "159933", 60011, null, 0, null, "熊猫"], [204, "08EF9811", null, "160634", 60012, null, 0, null, "小龙"], [205, "3A194CF5", null, null, 60013, null, 0, null, "御剑"], [206, "300D2EC9", null, null, 60014, null, 0, null, "鱼"], [207, null, null, null, 0, "39AB2FB0", 2, "151060", "冲浪板"], [208, null, null, null, 0, "254A21DD", 3, "151060", "冲浪板"], [209, null, null, null, 0, "31DE1825", 7, "151060", "鱼"], [210, null, null, null, 0, "0A031A75", 8, "151060", "滑板"]];
class InteractConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$4);
    }
}

var foreign11 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    InteractConfig: InteractConfig
});

const EXCELDATA$3 = [["ID", "Name", "Value", "Value_Ch"], ["", "Key|ReadByName", "MainLanguage", "ChildLanguage"], [1, "Text_TheItemBarIsFull", "The item bar is full", "道具栏已满"], [2, "Text_ThisItemIsInUse", "This item is in use", "正在使用此道具"], [3, "Text_Tips1", "Someone is using it, please try another one", "有人正在使用，请换个试试"], [4, "Text_SetUp1", "Base Setup", "基础设置"], [5, "Text_PictureQuality", "Picture Quality", "画质"], [6, "Text_SoundEffects", "Sound Effects", "音效"], [7, "Text_BackgroundMusic", "Background Music", "背景音乐"], [8, "Text_ViewAngleScaling", "View Angle Scaling", "视角缩放"], [9, "Text_DisplayNicknames", "Display Nicknames", "显示昵称"], [10, "Text_ResetLocation", "Reset Location", "重置位置"], [11, "Text_RestoringSettings", "Restoring Settings", "还原设置"], [12, "Text_On", "ON", "开"], [13, "Text_Off", "OFF", "关"], [14, "Text_ObtainedTips", "Obtained, open the knapsack to use", "已获得，打开背包使用"], [15, "Text_Advertising", "Advertising", "广告奖励"], [16, "Text_ADGetTips", "See the AD for free guide you get", "看广告免费指引你获得"], [17, "Text_Dont", "Don't", "不要"], [18, "Text_Free", "free", "免费获得"], [19, "Text_Fail", "Fail", "指引失败，请重试"], [20, "Text_NoOnTheList", "Not", "未上榜"], [21, "Text_Ranking", "Ranking", "排名"], [22, "Text_Nickname", "Nickname", "昵称"], [23, "Text_Score", "Score", "分数"], [24, "Text_Duration", "Duration", "时长"], [25, "Text_TopInTermsOfDuration", "Top {0} In Terms Of Duration", "时长全服前{0}名"], [26, "Text_StartGame", "Start the game", "开始游戏"], [27, "Text_WelcomeTo", "Welcome to\nMy Cherry blossom town", "欢迎来到\n春节免费换装"], [28, "Text_UpNext", "Up next", "下一个"], [29, "Text_GuideEnd", "With the guide over, start your trip to the cherry blossom town", "引导结束，开启你的樱花小镇之旅吧"], [30, "Text_Close", "Close", "关闭"], [31, "Text_MyCharacterId", "My Character ID- Share Friend Try On", "我的角色ID-分享好友试穿"], [32, "Text_PleaseEnter", "Please Enter The Friend Role ID", "请输入好友角色ID"], [33, "Text_Cancel", "Cancel", "取消"], [34, "Text_FreeTryOn", "Free Try On", "免费试穿"], [35, "Text_SaveImagesForFree", "Save images for free", "免费保存形象"], [36, "Text_TryOnYourFriendAvatarForFree", "Try On Your Friend's Avatar For Free", "免费试穿好友的角色形象"], [37, "Text_CopySuccessfully", "Copy Successfully", "复制成功"], [38, "Text_InvalidID", "Invalid ID!", "ID无效！"], [39, "Text_Loading", "Loading", "加载中"], [40, "Text_TryItOnSuccessfully", "Try it on successfully", "试穿成功"], [41, "Text_CopyTheCharacterIDShareFriendsTryOn", "Copy the character ID share friends try on", "复制角色ID分享好友试穿"], [42, "Text_TryItOnForFree", "Try it on for free", "看广告免费试穿"], [43, "Text_GuideTips", "Reach near the target point", "达到目标点附近"], [44, "Text_BootPrompt", "Boot prompt", "引导提示"], [45, "Text_FreeGuideYouGet", "Free guide you get", "免费指引你获得"], [46, "Text_SignIn_1", "Activity is not enabled", "活动未开启"], [47, "Text_SignIn_2", "Successful costume change", "换装成功"], [48, "Text_SignIn_3", "Insufficient check-in time", "签到时间不足"], [49, "Text_SignIn_4", "Check-in bonus", "签到奖励"], [50, "Text_SignIn_5", "Cumulative Check-In For {0} Days", "已经累积签到{0}天"], [51, "Text_SignIn_6", "Has been \nObtained", "已获得"], [52, "Text_SignIn_7", "Change of dress", "换装"], [53, "Text_SignIn_8", "Insufficient check-in", "签到不足"], [54, "Text_SignIn_9", "Day {0}", "第{0}天"], [55, "Text_SignIn_10", "Sign In", "签到"], [56, "Text_FreeChangeOfClothes", "Free change of clothes", "免费换装"], [57, "Text_FreeChangeOfClothes1", "Try on, please wait patiently.", "试穿中，请耐心等待。"], [58, "Text_FreeChangeOfClothes2", "Free fitting {0} minutes", "免费试穿{0}分钟"], [59, "Text_FreeChangeOfClothes3", "Try it on, please go back to try it on", "试穿结束，请打开商店重新试穿"], [60, "Text_Rank1", "The leaderboard is wrong.", "排行榜出错啦"]];
class LanguageConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$3);
    }
    /**道具栏已满*/
    get Text_TheItemBarIsFull() { return this.getElement(1); }
    ;
    /**正在使用此道具*/
    get Text_ThisItemIsInUse() { return this.getElement(2); }
    ;
    /**有人正在使用，请换个试试*/
    get Text_Tips1() { return this.getElement(3); }
    ;
    /**基础设置*/
    get Text_SetUp1() { return this.getElement(4); }
    ;
    /**画质*/
    get Text_PictureQuality() { return this.getElement(5); }
    ;
    /**音效*/
    get Text_SoundEffects() { return this.getElement(6); }
    ;
    /**背景音乐*/
    get Text_BackgroundMusic() { return this.getElement(7); }
    ;
    /**视角缩放*/
    get Text_ViewAngleScaling() { return this.getElement(8); }
    ;
    /**显示昵称*/
    get Text_DisplayNicknames() { return this.getElement(9); }
    ;
    /**重置位置*/
    get Text_ResetLocation() { return this.getElement(10); }
    ;
    /**还原设置*/
    get Text_RestoringSettings() { return this.getElement(11); }
    ;
    /**开*/
    get Text_On() { return this.getElement(12); }
    ;
    /**关*/
    get Text_Off() { return this.getElement(13); }
    ;
    /**已获得，打开背包使用*/
    get Text_ObtainedTips() { return this.getElement(14); }
    ;
    /**广告奖励*/
    get Text_Advertising() { return this.getElement(15); }
    ;
    /**看广告免费指引你获得*/
    get Text_ADGetTips() { return this.getElement(16); }
    ;
    /**不要*/
    get Text_Dont() { return this.getElement(17); }
    ;
    /**免费获得*/
    get Text_Free() { return this.getElement(18); }
    ;
    /**指引失败，请重试*/
    get Text_Fail() { return this.getElement(19); }
    ;
    /**未上榜*/
    get Text_NoOnTheList() { return this.getElement(20); }
    ;
    /**排名*/
    get Text_Ranking() { return this.getElement(21); }
    ;
    /**昵称*/
    get Text_Nickname() { return this.getElement(22); }
    ;
    /**分数*/
    get Text_Score() { return this.getElement(23); }
    ;
    /**时长*/
    get Text_Duration() { return this.getElement(24); }
    ;
    /**时长全服前{0}名*/
    get Text_TopInTermsOfDuration() { return this.getElement(25); }
    ;
    /**开始游戏*/
    get Text_StartGame() { return this.getElement(26); }
    ;
    /**欢迎来到
春节免费换装*/
    get Text_WelcomeTo() { return this.getElement(27); }
    ;
    /**下一个*/
    get Text_UpNext() { return this.getElement(28); }
    ;
    /**引导结束，开启你的樱花小镇之旅吧*/
    get Text_GuideEnd() { return this.getElement(29); }
    ;
    /**关闭*/
    get Text_Close() { return this.getElement(30); }
    ;
    /**我的角色ID-分享好友试穿*/
    get Text_MyCharacterId() { return this.getElement(31); }
    ;
    /**请输入好友角色ID*/
    get Text_PleaseEnter() { return this.getElement(32); }
    ;
    /**取消*/
    get Text_Cancel() { return this.getElement(33); }
    ;
    /**免费试穿*/
    get Text_FreeTryOn() { return this.getElement(34); }
    ;
    /**免费保存形象*/
    get Text_SaveImagesForFree() { return this.getElement(35); }
    ;
    /**免费试穿好友的角色形象*/
    get Text_TryOnYourFriendAvatarForFree() { return this.getElement(36); }
    ;
    /**复制成功*/
    get Text_CopySuccessfully() { return this.getElement(37); }
    ;
    /**ID无效！*/
    get Text_InvalidID() { return this.getElement(38); }
    ;
    /**加载中*/
    get Text_Loading() { return this.getElement(39); }
    ;
    /**试穿成功*/
    get Text_TryItOnSuccessfully() { return this.getElement(40); }
    ;
    /**复制角色ID分享好友试穿*/
    get Text_CopyTheCharacterIDShareFriendsTryOn() { return this.getElement(41); }
    ;
    /**看广告免费试穿*/
    get Text_TryItOnForFree() { return this.getElement(42); }
    ;
    /**达到目标点附近*/
    get Text_GuideTips() { return this.getElement(43); }
    ;
    /**引导提示*/
    get Text_BootPrompt() { return this.getElement(44); }
    ;
    /**免费指引你获得*/
    get Text_FreeGuideYouGet() { return this.getElement(45); }
    ;
    /**活动未开启*/
    get Text_SignIn_1() { return this.getElement(46); }
    ;
    /**换装成功*/
    get Text_SignIn_2() { return this.getElement(47); }
    ;
    /**签到时间不足*/
    get Text_SignIn_3() { return this.getElement(48); }
    ;
    /**签到奖励*/
    get Text_SignIn_4() { return this.getElement(49); }
    ;
    /**已经累积签到{0}天*/
    get Text_SignIn_5() { return this.getElement(50); }
    ;
    /**已获得*/
    get Text_SignIn_6() { return this.getElement(51); }
    ;
    /**换装*/
    get Text_SignIn_7() { return this.getElement(52); }
    ;
    /**签到不足*/
    get Text_SignIn_8() { return this.getElement(53); }
    ;
    /**第{0}天*/
    get Text_SignIn_9() { return this.getElement(54); }
    ;
    /**签到*/
    get Text_SignIn_10() { return this.getElement(55); }
    ;
    /**免费换装*/
    get Text_FreeChangeOfClothes() { return this.getElement(56); }
    ;
    /**试穿中，请耐心等待。*/
    get Text_FreeChangeOfClothes1() { return this.getElement(57); }
    ;
    /**免费试穿{0}分钟*/
    get Text_FreeChangeOfClothes2() { return this.getElement(58); }
    ;
    /**试穿结束，请打开商店重新试穿*/
    get Text_FreeChangeOfClothes3() { return this.getElement(59); }
    ;
    /**排行榜出错啦*/
    get Text_Rank1() { return this.getElement(60); }
    ;
}

var foreign12 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LanguageConfig: LanguageConfig
});

const EXCELDATA$2 = [["id", "Guid", "Annotation"], ["", "", ""], [1, "63341", "Chirp"], [2, "118698", "STAY"], [3, "118699", "bad guy"], [4, "117222", "I will live"], [5, "118697", "Let Me Love You"], [6, "118700", "Running up That Hill"], [7, "118701", "Love To Hate Me"], [8, "118702", "TOMBOY"], [9, "118703", "Shut Down"], [10, "118704", "Celestial"], [11, "118712", "As It Was"], [12, "118706", "Good Morning"], [13, "118707", "Alone"], [14, "118709", "Chanderiler"], [15, "118711", "Don't Wanna Know"], [16, "118716", "Mood"], [17, "117220", "Golden wheel"], [18, "128884", "I don't know what it's called"], [19, "128888", "I don't know what it's called"]];
class MusicConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$2);
    }
}

var foreign13 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MusicConfig: MusicConfig
});

const EXCELDATA$1 = [["ID", "ShareId"], ["", ""], [1, "1022S89K", "电锯人"], [2, "1022S8X6", "黑爵士"], [3, "1022S7KJ", "白-爵士"], [4, "1022S7KD", "鬼"], [5, "1022S7K9", "青蛙"], [6, "1022S88E", "恐龙"], [7, "1022S7IE", "射手-"], [8, "1022S861", "繁星"], [9, "1022S85O", "竹节虫-女-黑"], [10, "1022S85E", "竹节虫-女-黑"], [11, "1022S8QF", "竹节虫-男-黑"], [12, "1022S82R", "竹节虫-女-白"], [13, "1022S8R5", "挨个子-女"], [14, "1022S8RC", "竹节虫-女-黑"], [15, "1022S8RL", "新手礼包-矮个子"], [16, "1022S7FQ", "挨个子-女白"], [17, "1022S8RW", "挨个子-女白"], [18, "1022S8SB", "竹节虫-女-白"], [19, "1022S7G7", "挨个子-女黑"], [20, "1022S84B", "竹节虫-女-白"], [21, "1022S7GF", "挨个子-女黑"], [22, "1022S7GT", "兔子帽子女"], [23, "1022S8T2", "棺材女红"], [24, "1022S855", "挨个子-女白"], [25, "102383MF", "圣诞-女"], [26, "102383TY", "圣诞男"], [27, "102382PL", "女"]];
class ShareIdConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA$1);
    }
}

var foreign14 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ShareIdConfig: ShareIdConfig
});

class GameConfig {
    /**
    * 多语言设置
    * @param languageIndex 语言索引(-1为系统默认语言)
    * @param getLanguageFun 根据key获取语言内容的方法
    */
    static initLanguage(languageIndex, getLanguageFun) {
        ConfigBase.initLanguage(languageIndex, getLanguageFun);
        this.configMap.clear();
    }
    static getConfig(ConfigClass) {
        if (!this.configMap.has(ConfigClass.name)) {
            this.configMap.set(ConfigClass.name, new ConfigClass());
        }
        return this.configMap.get(ConfigClass.name);
    }
    static get ActionConfig() { return this.getConfig(ActionConfigConfig); }
    ;
    static get ActionProp() { return this.getConfig(ActionPropConfig); }
    ;
    static get Chat() { return this.getConfig(ChatConfig); }
    ;
    static get Expression() { return this.getConfig(ExpressionConfig); }
    ;
    static get Interact() { return this.getConfig(InteractConfig); }
    ;
    static get Language() { return this.getConfig(LanguageConfig); }
    ;
    static get Music() { return this.getConfig(MusicConfig); }
    ;
    static get ShareId() { return this.getConfig(ShareIdConfig); }
    ;
}
GameConfig.configMap = new Map();

var foreign10 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GameConfig: GameConfig
});

const EXCELDATA = [["ID", "TriggerGuid", "InteractivityGuid", "HumanoidSlotType", "SitStance", "BagId"], ["", "", "", "", "", ""], [1, "379F8E9E", "0D0850BD", 19, "122227", 10006], [2, "2555EDAA", "3D215C3A", 17, "122231", 10106], [3, "36A4512B", "270D9130", 18, "122232", 10016], [4, "0A2CF72B", "38F1AE5C", 19, "15208", 10016]];
class SitConfig extends ConfigBase {
    constructor() {
        super(EXCELDATA);
    }
}

var foreign15 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SitConfig: SitConfig
});

class GlobalData {
}
GlobalData.languageId = 1;
/**是否开启IAA */
GlobalData.isOpenIAA = false;
GlobalData.bagCount = 5;
GlobalData.worldCount = 500;
GlobalData.freeTime = 999;
/**关闭背景音乐图标Guid */
GlobalData.offMusicIconGuid = `133403`;
/**打开背景音乐图标Guid */
GlobalData.onMusicIconGuid = `133445`;

var foreign17 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GlobalData
});

class Utils {
    static setImageByAssetIconData(image, icon) {
        if (this.assetIconDataMap.has(icon)) {
            image.setImageByAssetIconData(this.assetIconDataMap.get(icon));
        }
        else {
            mw.assetIDChangeIconUrlRequest([icon]).then(() => {
                try {
                    let assetIconData = mw.getAssetIconDataByAssetID(icon);
                    image.setImageByAssetIconData(assetIconData);
                    this.assetIconDataMap.set(icon, assetIconData);
                }
                catch (error) { }
            });
        }
    }
    static async asyncDownloadAsset(InAssetId) {
        if (!mw.AssetUtil.assetLoaded(InAssetId)) {
            await mw.AssetUtil.asyncDownloadAsset(InAssetId);
        }
    }
    static setWidgetVisibility(ui, visibility) {
        if (ui.visibility != visibility)
            ui.visibility = visibility;
    }
    static getDay() {
        let day = "";
        day += new Date().getFullYear();
        day += (new Date().getMonth() + 1);
        day += new Date().getDate();
        return day;
    }
    static resetPlayerPos() {
        Player.localPlayer.character.worldTransform.position = this.birthPos;
    }
    static async applySharedId(character, sharedId) {
        return new Promise(async (resolve) => {
            mw.AccountService.applySharedId(character, sharedId, async (success) => {
                console.error(`success:${success}`);
                if (success)
                    character.syncDescription();
                await character.asyncReady();
                return resolve(success);
            });
        });
    }
    static async createSharedId(character) {
        return new Promise(async (resolve) => {
            mw.AccountService.createSharedId(character, (dataString) => {
                console.error(`dataString:${dataString}`);
                return resolve(dataString);
            });
        });
    }
    /**开始引导 */
    static startGuide(targetLoc, onComplete = null) {
        if (!mw.SystemUtil.isClient())
            return;
        if (!targetLoc)
            return;
        if (this.targetGuideEffectId) {
            EffectService.stop(this.targetGuideEffectId);
            this.targetGuideEffectId = null;
        }
        this.targetGuideEffectId = EffectService.playAtPosition(this.targetEffectGuid, targetLoc, { loopCount: 0 });
        if (this.guideIntervalId) {
            TimeUtil.clearInterval(this.guideIntervalId);
            this.guideIntervalId = null;
        }
        this.guideIntervalId = TimeUtil.setInterval(() => {
            let character = Player.localPlayer?.character;
            if (!character)
                return;
            let playerLoc = character?.worldTransform?.position;
            if (!playerLoc)
                return;
            if (Math.abs(playerLoc.x - this.prePlayerLoc.x) < 0.1 && Math.abs(playerLoc.y - this.prePlayerLoc.y) < 0.1 && Math.abs(playerLoc.z - this.prePlayerLoc.z) < 0.1)
                return;
            this.prePlayerLoc = playerLoc;
            let distance = mw.Vector.distance(playerLoc, targetLoc);
            if (distance <= 200) {
                TimeUtil.clearInterval(this.guideIntervalId);
                this.guideIntervalId = null;
                if (this.targetGuideEffectId) {
                    EffectService.stop(this.targetGuideEffectId);
                    this.targetGuideEffectId = null;
                }
                if (this.guideEffectIds.length != 0) {
                    this.guideEffectIds.forEach((effectId) => {
                        EffectService.stop(effectId);
                    });
                    this.guideEffectIds.length = 0;
                }
                Notice.showDownNotice(GameConfig.Language.Text_GuideTips.Value);
                if (onComplete)
                    onComplete();
                return;
            }
            let pointNum = Math.floor(distance / 100);
            let locs = this.getCurvePointsInNum([playerLoc, targetLoc], pointNum);
            if (pointNum > 35) {
                pointNum = 35;
            }
            if (this.guideEffectIds.length == 0) {
                for (let i = 1; i < pointNum; ++i) {
                    let effectId = EffectService.playAtPosition(this.guideEffectGuid, locs[i], { loopCount: 0 });
                    this.guideEffectIds.push(effectId);
                }
            }
            else {
                if (this.guideEffectIds.length == pointNum) {
                    for (let i = 1; i < pointNum; ++i) {
                        EffectService.getEffectById(this.guideEffectIds[i - 1]).then((effect) => {
                            effect.worldTransform.position = (new mw.Vector(locs[i].x, locs[i].y, locs[i].z - 85));
                        });
                    }
                    EffectService.stop(this.guideEffectIds[pointNum - 1]);
                    this.guideEffectIds.length = pointNum - 1;
                }
                else if (this.guideEffectIds.length < pointNum) {
                    for (let i = 0; i < this.guideEffectIds.length; ++i) {
                        EffectService.getEffectById(this.guideEffectIds[i]).then((effect) => {
                            effect.worldTransform.position = (new mw.Vector(locs[i + 1].x, locs[i + 1].y, locs[i + 1].z - 85));
                        });
                    }
                    for (let i = this.guideEffectIds.length; i < pointNum - 1; ++i) {
                        let effectId = EffectService.playAtPosition(this.guideEffectGuid, locs[i + 1], { loopCount: 0 });
                        this.guideEffectIds.push(effectId);
                    }
                }
                else if (this.guideEffectIds.length > pointNum) {
                    for (let i = 0; i < pointNum; ++i) {
                        EffectService.getEffectById(this.guideEffectIds[i]).then((effect) => {
                            if (!locs[i + 1])
                                return;
                            effect.worldTransform.position = (new mw.Vector(locs[i + 1].x, locs[i + 1].y, locs[i + 1].z - 85));
                        });
                    }
                    for (let i = pointNum; i < this.guideEffectIds.length; ++i) {
                        EffectService.stop(this.guideEffectIds[i]);
                    }
                    this.guideEffectIds.length = pointNum;
                }
            }
        }, 0.1);
    }
    /**
     * 获取贝塞尔曲线的点的集合
     * @param points 点的集合, 至少包含起点和终点
     * @param num 想要生成多少点
     * @returns
     */
    static getCurvePointsInNum(points, num) {
        let result = new Array();
        for (let i = 0; i < num; i++) {
            let t = i / (num - 1);
            let point = this.getKeyPoint(points, t);
            result.push(point);
        }
        return result;
    }
    static getKeyPoint(points, t) {
        if (points.length > 1) {
            let dirs = new Array();
            for (let i = 0; i < points.length - 1; ++i) {
                dirs.push(new mw.Vector(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y, points[i + 1].z - points[i].z));
            }
            let points2 = new Array();
            for (let j = 0; j < dirs.length; j++) {
                points2.push(new mw.Vector(points[j].x + dirs[j].x * t, points[j].y + dirs[j].y * t, points[j].z + dirs[j].z * t));
            }
            return this.getKeyPoint(points2, t);
        }
        else {
            return new mw.Vector(points[0].x, points[0].y, points[0].z);
        }
    }
    static async getCustomdata(key) {
        return (await DataStorage.asyncGetData(key)).data;
    }
    static async setCustomData(saveKey, dataInfo) {
        let code = null;
        code = await DataStorage.asyncSetData(saveKey, dataInfo);
        return code == mw.DataStorageResultCode.Success;
    }
}
Utils.assetIconDataMap = new Map();
Utils.buffMap = new Map();
Utils.birthPos = new mw.Vector(0, 0, 1000);
/**引导目标点特效ID */
Utils.targetGuideEffectId = null;
/**引导间隔标识 */
Utils.guideIntervalId = null;
/**引导线特效ID */
Utils.guideEffectIds = [];
/**记录上一次玩家的坐标 */
Utils.prePlayerLoc = mw.Vector.zero;
/**引导线特效Guid */
Utils.guideEffectGuid = `146775`;
/**引导目标点特效Guid */
Utils.targetEffectGuid = `142962`;

var foreign53 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Utils
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/tools/LoadingPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let LoadingPanel_Generate = class LoadingPanel_Generate extends UIScript {
    get mMainCanvas() {
        if (!this.mMainCanvas_Internal && this.uiWidgetBase) {
            this.mMainCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mMainCanvas');
        }
        return this.mMainCanvas_Internal;
    }
    get mLoadingImage() {
        if (!this.mLoadingImage_Internal && this.uiWidgetBase) {
            this.mLoadingImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mMainCanvas/mLoadingImage');
        }
        return this.mLoadingImage_Internal;
    }
    get mLoadingTextblock() {
        if (!this.mLoadingTextblock_Internal && this.uiWidgetBase) {
            this.mLoadingTextblock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/MainCanvas/mMainCanvas/mLoadingTextblock');
        }
        return this.mLoadingTextblock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mLoadingTextblock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
LoadingPanel_Generate = __decorate([
    UIBind('UI/tools/LoadingPanel.ui')
], LoadingPanel_Generate);
var LoadingPanel_Generate$1 = LoadingPanel_Generate;

var foreign84 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: LoadingPanel_Generate$1
});

class LoadingPanel extends LoadingPanel_Generate$1 {
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerTop;
    }
    /**
    * 每一帧调用
    * 通过canUpdate可以开启关闭调用
    * dt 两帧调用的时间差，毫秒
    */
    onUpdate(dt) {
        this.mLoadingImage.renderTransformAngle = this.mLoadingImage.renderTransformAngle + 180 * dt;
        if (this.mLoadingImage.renderTransformAngle > 180)
            this.mLoadingImage.renderTransformAngle = -180 + this.mLoadingImage.renderTransformAngle - 180;
    }
    setLock(isLock) {
        if (isLock) {
            this.canUpdate = true;
            this.rootCanvas.visibility = mw.SlateVisibility.SelfHitTestInvisible;
        }
        else {
            this.canUpdate = false;
            this.rootCanvas.visibility = mw.SlateVisibility.Collapsed;
        }
    }
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    hide() {
        mw.UIService.hideUI(this);
    }
}

var foreign52 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: LoadingPanel
});

class ExecutorBase {
    execute() { }
}
class Executor extends ExecutorBase {
    execute() {
        this.func(this.arg);
    }
}
class AsyncExecutor extends ExecutorBase {
    constructor() {
        super(...arguments);
        /**锁定输入 */
        this.lockInput = true;
    }
    async execute() {
        await this.asyncFunc(this.arg);
    }
}
class ExecutorManager {
    constructor() {
        this.executorList = new Array();
        this.running = false;
        this.index = 0;
        this.doneCb = new Action();
    }
    static get instance() {
        if (ExecutorManager._instance == undefined)
            ExecutorManager._instance = new ExecutorManager();
        return ExecutorManager._instance;
    }
    pushExecutor(func, arg = undefined, record = false, resetFunc = undefined) {
        let executor = new Executor();
        executor.func = func;
        executor.arg = arg;
        executor.record = record;
        executor.resetFunc = resetFunc;
        this.push(executor);
    }
    /** 添加异步命令
     * @param asyncFunc 异步函数
     * @param arg 函数参数
     * @param isAwait 是否等待(默认等待)
     * @param record 记录角色数据
     * @param resetFunc 恢复角色数据的操作
     */
    pushAsyncExecutor(asyncFunc, arg = undefined, isAwait = true, record = false, resetFunc = undefined, lockInput = true) {
        let asyncExecutor = new AsyncExecutor();
        asyncExecutor.asyncFunc = asyncFunc;
        asyncExecutor.arg = arg;
        asyncExecutor.isAwait = isAwait;
        asyncExecutor.record = record;
        asyncExecutor.lockInput = lockInput;
        asyncExecutor.resetFunc = resetFunc;
        this.push(asyncExecutor);
    }
    push(executor) {
        this.executorList.push(executor);
        this.run();
    }
    async run() {
        if (this.running)
            return;
        this.running = true;
        let executor = this.executorList[this.index];
        UIService.getUI(LoadingPanel).show();
        while (executor) {
            try {
                if (executor instanceof Executor) {
                    executor.execute();
                }
                else {
                    let asyncExecutor = executor;
                    UIService.getUI(LoadingPanel).setLock(asyncExecutor.lockInput);
                    if (asyncExecutor.isAwait) {
                        await this.runExecute(asyncExecutor.execute.bind(asyncExecutor));
                    }
                    else {
                        asyncExecutor.execute();
                    }
                }
                // if (executor.record) Event.dispatchToLocal(EventType.Event_Record, executor.resetFunc);
            }
            catch (error) {
                console.error(`命令执行异常:${error}`);
            }
            this.index++;
            executor = this.executorList[this.index];
        }
        UIService.getUI(LoadingPanel).hide();
        this.running = false;
        this.doneCb.call();
    }
    //执行命令，10秒超时
    runExecute(exeFunc) {
        return new Promise(async (resolve) => {
            let timeOut = setTimeout(() => {
                console.error(`命令执行10秒超时`);
                return resolve();
            }, 10 * 1000);
            await exeFunc();
            clearTimeout(timeOut);
            return resolve();
        });
    }
    /**等待执行完毕 */
    awaitDone() {
        return new Promise((resolve) => {
            if (!this.running)
                return resolve();
            const doneFunc = () => {
                this.doneCb.remove(doneFunc, this);
                return resolve();
            };
            this.doneCb.add(doneFunc, this);
        });
    }
}
ExecutorManager._instance = undefined;

var foreign54 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ExecutorManager
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/BubbleItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let BubbleItem_Generate = class BubbleItem_Generate extends UIScript {
    get mDialogBg1() {
        if (!this.mDialogBg1_Internal && this.uiWidgetBase) {
            this.mDialogBg1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDialogBg1');
        }
        return this.mDialogBg1_Internal;
    }
    get mDialogBg2() {
        if (!this.mDialogBg2_Internal && this.uiWidgetBase) {
            this.mDialogBg2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDialogBg2');
        }
        return this.mDialogBg2_Internal;
    }
    get mDialogTextBlock() {
        if (!this.mDialogTextBlock_Internal && this.uiWidgetBase) {
            this.mDialogTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDialogTextBlock');
        }
        return this.mDialogTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mDialogTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
BubbleItem_Generate = __decorate([
    UIBind('UI/module/DanMuModule/BubbleItem.ui')
], BubbleItem_Generate);
var BubbleItem_Generate$1 = BubbleItem_Generate;

var foreign64 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: BubbleItem_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/HUDModule/HUDItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let HUDItem_Generate = class HUDItem_Generate extends UIScript {
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    get mSelectImage() {
        if (!this.mSelectImage_Internal && this.uiWidgetBase) {
            this.mSelectImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSelectImage');
        }
        return this.mSelectImage_Internal;
    }
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.initLanguage(this.mClickButton);
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.initLanguage(this.mCloseButton);
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
HUDItem_Generate = __decorate([
    UIBind('UI/module/HUDModule/HUDItem.ui')
], HUDItem_Generate);
var HUDItem_Generate$1 = HUDItem_Generate;

var foreign72 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: HUDItem_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/HUDModule/HUDPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let HUDPanel_Generate = class HUDPanel_Generate extends UIScript {
    get mVirtualJoystickPanel() {
        if (!this.mVirtualJoystickPanel_Internal && this.uiWidgetBase) {
            this.mVirtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mVirtualJoystickPanel');
        }
        return this.mVirtualJoystickPanel_Internal;
    }
    get mOpenSetImage() {
        if (!this.mOpenSetImage_Internal && this.uiWidgetBase) {
            this.mOpenSetImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSetImage');
        }
        return this.mOpenSetImage_Internal;
    }
    get mOpenSetButton() {
        if (!this.mOpenSetButton_Internal && this.uiWidgetBase) {
            this.mOpenSetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSetImage/mOpenSetButton');
        }
        return this.mOpenSetButton_Internal;
    }
    get mOpenShareImage() {
        if (!this.mOpenShareImage_Internal && this.uiWidgetBase) {
            this.mOpenShareImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenShareImage');
        }
        return this.mOpenShareImage_Internal;
    }
    get mOpenShareButton() {
        if (!this.mOpenShareButton_Internal && this.uiWidgetBase) {
            this.mOpenShareButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenShareImage/mOpenShareButton');
        }
        return this.mOpenShareButton_Internal;
    }
    get mOpenClothImage() {
        if (!this.mOpenClothImage_Internal && this.uiWidgetBase) {
            this.mOpenClothImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage');
        }
        return this.mOpenClothImage_Internal;
    }
    get mOpenClothButton() {
        if (!this.mOpenClothButton_Internal && this.uiWidgetBase) {
            this.mOpenClothButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage/mOpenClothButton');
        }
        return this.mOpenClothButton_Internal;
    }
    get mOpenClothTextBlock() {
        if (!this.mOpenClothTextBlock_Internal && this.uiWidgetBase) {
            this.mOpenClothTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage/mOpenClothTextBlock');
        }
        return this.mOpenClothTextBlock_Internal;
    }
    get mFreeTextBlock() {
        if (!this.mFreeTextBlock_Internal && this.uiWidgetBase) {
            this.mFreeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage/mFreeTextBlock');
        }
        return this.mFreeTextBlock_Internal;
    }
    get mOpenRankImage() {
        if (!this.mOpenRankImage_Internal && this.uiWidgetBase) {
            this.mOpenRankImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenRankImage');
        }
        return this.mOpenRankImage_Internal;
    }
    get mOpenRankButton() {
        if (!this.mOpenRankButton_Internal && this.uiWidgetBase) {
            this.mOpenRankButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenRankImage/mOpenRankButton');
        }
        return this.mOpenRankButton_Internal;
    }
    get mOpenSignInImage() {
        if (!this.mOpenSignInImage_Internal && this.uiWidgetBase) {
            this.mOpenSignInImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSignInImage');
        }
        return this.mOpenSignInImage_Internal;
    }
    get mOpenSignInButton() {
        if (!this.mOpenSignInButton_Internal && this.uiWidgetBase) {
            this.mOpenSignInButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSignInImage/mOpenSignInButton');
        }
        return this.mOpenSignInButton_Internal;
    }
    get mOpenSignInTextBlock() {
        if (!this.mOpenSignInTextBlock_Internal && this.uiWidgetBase) {
            this.mOpenSignInTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSignInImage/mOpenSignInTextBlock');
        }
        return this.mOpenSignInTextBlock_Internal;
    }
    get mOpenMusicImage() {
        if (!this.mOpenMusicImage_Internal && this.uiWidgetBase) {
            this.mOpenMusicImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenMusicImage');
        }
        return this.mOpenMusicImage_Internal;
    }
    get mOpenMusicButton() {
        if (!this.mOpenMusicButton_Internal && this.uiWidgetBase) {
            this.mOpenMusicButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenMusicImage/mOpenMusicButton');
        }
        return this.mOpenMusicButton_Internal;
    }
    get mJumpBgImage() {
        if (!this.mJumpBgImage_Internal && this.uiWidgetBase) {
            this.mJumpBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mJumpBgImage');
        }
        return this.mJumpBgImage_Internal;
    }
    get mJumpButton() {
        if (!this.mJumpButton_Internal && this.uiWidgetBase) {
            this.mJumpButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mJumpBgImage/mJumpButton');
        }
        return this.mJumpButton_Internal;
    }
    get mCrouchBgImage() {
        if (!this.mCrouchBgImage_Internal && this.uiWidgetBase) {
            this.mCrouchBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mCrouchBgImage');
        }
        return this.mCrouchBgImage_Internal;
    }
    get mCrouchButton() {
        if (!this.mCrouchButton_Internal && this.uiWidgetBase) {
            this.mCrouchButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mCrouchBgImage/mCrouchButton');
        }
        return this.mCrouchButton_Internal;
    }
    get mBagBgImage() {
        if (!this.mBagBgImage_Internal && this.uiWidgetBase) {
            this.mBagBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mBagBgImage');
        }
        return this.mBagBgImage_Internal;
    }
    get mBagButton() {
        if (!this.mBagButton_Internal && this.uiWidgetBase) {
            this.mBagButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mBagBgImage/mBagButton');
        }
        return this.mBagButton_Internal;
    }
    get mExitBgImage() {
        if (!this.mExitBgImage_Internal && this.uiWidgetBase) {
            this.mExitBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mExitBgImage');
        }
        return this.mExitBgImage_Internal;
    }
    get mExitButton() {
        if (!this.mExitButton_Internal && this.uiWidgetBase) {
            this.mExitButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mExitBgImage/mExitButton');
        }
        return this.mExitButton_Internal;
    }
    get mActionBgImage() {
        if (!this.mActionBgImage_Internal && this.uiWidgetBase) {
            this.mActionBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mActionBgImage');
        }
        return this.mActionBgImage_Internal;
    }
    get mActionButton() {
        if (!this.mActionButton_Internal && this.uiWidgetBase) {
            this.mActionButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mActionBgImage/mActionButton');
        }
        return this.mActionButton_Internal;
    }
    get mGoodsCanvas() {
        if (!this.mGoodsCanvas_Internal && this.uiWidgetBase) {
            this.mGoodsCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas');
        }
        return this.mGoodsCanvas_Internal;
    }
    get mGoodsContentCanvas() {
        if (!this.mGoodsContentCanvas_Internal && this.uiWidgetBase) {
            this.mGoodsContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas');
        }
        return this.mGoodsContentCanvas_Internal;
    }
    get mGoodsListCanvas() {
        if (!this.mGoodsListCanvas_Internal && this.uiWidgetBase) {
            this.mGoodsListCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas/mGoodsListCanvas');
        }
        return this.mGoodsListCanvas_Internal;
    }
    get mDeleteAllGoodsButton() {
        if (!this.mDeleteAllGoodsButton_Internal && this.uiWidgetBase) {
            this.mDeleteAllGoodsButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas/mDeleteAllGoodsButton');
        }
        return this.mDeleteAllGoodsButton_Internal;
    }
    get mDeleteAllGoodsImage() {
        if (!this.mDeleteAllGoodsImage_Internal && this.uiWidgetBase) {
            this.mDeleteAllGoodsImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas/mDeleteAllGoodsButton/mDeleteAllGoodsImage');
        }
        return this.mDeleteAllGoodsImage_Internal;
    }
    get mShowHideGoodsButton() {
        if (!this.mShowHideGoodsButton_Internal && this.uiWidgetBase) {
            this.mShowHideGoodsButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mShowHideGoodsButton');
        }
        return this.mShowHideGoodsButton_Internal;
    }
    get mMusicCanvas() {
        if (!this.mMusicCanvas_Internal && this.uiWidgetBase) {
            this.mMusicCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas');
        }
        return this.mMusicCanvas_Internal;
    }
    get mCloseMusicBtn() {
        if (!this.mCloseMusicBtn_Internal && this.uiWidgetBase) {
            this.mCloseMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/mCloseMusicBtn');
        }
        return this.mCloseMusicBtn_Internal;
    }
    get mMusicText() {
        if (!this.mMusicText_Internal && this.uiWidgetBase) {
            this.mMusicText_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mMusicText');
        }
        return this.mMusicText_Internal;
    }
    get mLeftMusicBtn() {
        if (!this.mLeftMusicBtn_Internal && this.uiWidgetBase) {
            this.mLeftMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mLeftMusicBtn');
        }
        return this.mLeftMusicBtn_Internal;
    }
    get mOnOffMusicBtn() {
        if (!this.mOnOffMusicBtn_Internal && this.uiWidgetBase) {
            this.mOnOffMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mOnOffMusicBtn');
        }
        return this.mOnOffMusicBtn_Internal;
    }
    get mRightMusicBtn() {
        if (!this.mRightMusicBtn_Internal && this.uiWidgetBase) {
            this.mRightMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mRightMusicBtn');
        }
        return this.mRightMusicBtn_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mOpenSetButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenSetButton");
        });
        this.initLanguage(this.mOpenSetButton);
        this.mOpenSetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenShareButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenShareButton");
        });
        this.initLanguage(this.mOpenShareButton);
        this.mOpenShareButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenClothButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenClothButton");
        });
        this.initLanguage(this.mOpenClothButton);
        this.mOpenClothButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenRankButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenRankButton");
        });
        this.initLanguage(this.mOpenRankButton);
        this.mOpenRankButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenSignInButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenSignInButton");
        });
        this.initLanguage(this.mOpenSignInButton);
        this.mOpenSignInButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenMusicButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenMusicButton");
        });
        this.initLanguage(this.mOpenMusicButton);
        this.mOpenMusicButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mDeleteAllGoodsButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mDeleteAllGoodsButton");
        });
        this.initLanguage(this.mDeleteAllGoodsButton);
        this.mDeleteAllGoodsButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        this.mJumpButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mJumpButton");
        });
        this.mJumpButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCrouchButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCrouchButton");
        });
        this.mCrouchButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mBagButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mBagButton");
        });
        this.mBagButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mExitButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mExitButton");
        });
        this.mExitButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mActionButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mActionButton");
        });
        this.mActionButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mShowHideGoodsButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mShowHideGoodsButton");
        });
        this.mShowHideGoodsButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseMusicBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseMusicBtn");
        });
        this.mCloseMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mLeftMusicBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mLeftMusicBtn");
        });
        this.mLeftMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOnOffMusicBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOnOffMusicBtn");
        });
        this.mOnOffMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mRightMusicBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mRightMusicBtn");
        });
        this.mRightMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mOpenClothTextBlock);
        this.initLanguage(this.mFreeTextBlock);
        this.initLanguage(this.mOpenSignInTextBlock);
        this.initLanguage(this.mMusicText);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
HUDPanel_Generate = __decorate([
    UIBind('UI/module/HUDModule/HUDPanel.ui')
], HUDPanel_Generate);
var HUDPanel_Generate$1 = HUDPanel_Generate;

var foreign73 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: HUDPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ShareModule/SavePanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let SavePanel_Generate = class SavePanel_Generate extends UIScript {
    get mSaveButton() {
        if (!this.mSaveButton_Internal && this.uiWidgetBase) {
            this.mSaveButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSaveButton');
        }
        return this.mSaveButton_Internal;
    }
    get mSaveTipsTextBlock() {
        if (!this.mSaveTipsTextBlock_Internal && this.uiWidgetBase) {
            this.mSaveTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSaveButton/mSaveTipsTextBlock');
        }
        return this.mSaveTipsTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mSaveButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mSaveButton");
        });
        this.mSaveButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mSaveTipsTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
SavePanel_Generate = __decorate([
    UIBind('UI/module/ShareModule/SavePanel.ui')
], SavePanel_Generate);
var SavePanel_Generate$1 = SavePanel_Generate;

var foreign80 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SavePanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/ShareModule/SharePanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let SharePanel_Generate = class SharePanel_Generate extends UIScript {
    get mMainImage() {
        if (!this.mMainImage_Internal && this.uiWidgetBase) {
            this.mMainImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage');
        }
        return this.mMainImage_Internal;
    }
    get mMyselfTipsTextBlock() {
        if (!this.mMyselfTipsTextBlock_Internal && this.uiWidgetBase) {
            this.mMyselfTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mMyselfTipsTextBlock');
        }
        return this.mMyselfTipsTextBlock_Internal;
    }
    get mMyselfTextBlock() {
        if (!this.mMyselfTextBlock_Internal && this.uiWidgetBase) {
            this.mMyselfTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mMyselfTextBlock');
        }
        return this.mMyselfTextBlock_Internal;
    }
    get mCopyButton() {
        if (!this.mCopyButton_Internal && this.uiWidgetBase) {
            this.mCopyButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mMyselfTextBlock/mCopyButton');
        }
        return this.mCopyButton_Internal;
    }
    get mOtherTipsTextBlock() {
        if (!this.mOtherTipsTextBlock_Internal && this.uiWidgetBase) {
            this.mOtherTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mOtherTipsTextBlock');
        }
        return this.mOtherTipsTextBlock_Internal;
    }
    get mInputBgImage() {
        if (!this.mInputBgImage_Internal && this.uiWidgetBase) {
            this.mInputBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mInputBgImage');
        }
        return this.mInputBgImage_Internal;
    }
    get mInputBox() {
        if (!this.mInputBox_Internal && this.uiWidgetBase) {
            this.mInputBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mInputBgImage/mInputBox');
        }
        return this.mInputBox_Internal;
    }
    get mCancelButton() {
        if (!this.mCancelButton_Internal && this.uiWidgetBase) {
            this.mCancelButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mCancelButton');
        }
        return this.mCancelButton_Internal;
    }
    get mCancelTextBlock() {
        if (!this.mCancelTextBlock_Internal && this.uiWidgetBase) {
            this.mCancelTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mCancelButton/mCancelTextBlock');
        }
        return this.mCancelTextBlock_Internal;
    }
    get mUseButton() {
        if (!this.mUseButton_Internal && this.uiWidgetBase) {
            this.mUseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mUseButton');
        }
        return this.mUseButton_Internal;
    }
    get mUseTextBlock() {
        if (!this.mUseTextBlock_Internal && this.uiWidgetBase) {
            this.mUseTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mUseButton/mUseTextBlock');
        }
        return this.mUseTextBlock_Internal;
    }
    get mAdsButton() {
        if (!this.mAdsButton_Internal && this.uiWidgetBase) {
            this.mAdsButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainImage/mAdsButton');
        }
        return this.mAdsButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mCopyButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCopyButton");
        });
        this.mCopyButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCancelButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCancelButton");
        });
        this.mCancelButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mUseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mUseButton");
        });
        this.mUseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mMyselfTipsTextBlock);
        this.initLanguage(this.mMyselfTextBlock);
        this.initLanguage(this.mOtherTipsTextBlock);
        this.initLanguage(this.mCancelTextBlock);
        this.initLanguage(this.mUseTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
SharePanel_Generate = __decorate([
    UIBind('UI/module/ShareModule/SharePanel.ui')
], SharePanel_Generate);
var SharePanel_Generate$1 = SharePanel_Generate;

var foreign81 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SharePanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/AdModule/AdPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let AdPanel_Generate = class AdPanel_Generate extends UIScript {
    get mCanvas() {
        if (!this.mCanvas_Internal && this.uiWidgetBase) {
            this.mCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas');
        }
        return this.mCanvas_Internal;
    }
    get mTitleTxt() {
        if (!this.mTitleTxt_Internal && this.uiWidgetBase) {
            this.mTitleTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mTitleTxt');
        }
        return this.mTitleTxt_Internal;
    }
    get mContentTxt() {
        if (!this.mContentTxt_Internal && this.uiWidgetBase) {
            this.mContentTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mContentTxt');
        }
        return this.mContentTxt_Internal;
    }
    get mNoBtn() {
        if (!this.mNoBtn_Internal && this.uiWidgetBase) {
            this.mNoBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mNoBtn');
        }
        return this.mNoBtn_Internal;
    }
    get mYesBtn() {
        if (!this.mYesBtn_Internal && this.uiWidgetBase) {
            this.mYesBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mYesBtn');
        }
        return this.mYesBtn_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mNoBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mNoBtn");
        });
        this.initLanguage(this.mNoBtn);
        this.mNoBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTitleTxt);
        this.initLanguage(this.mContentTxt);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
AdPanel_Generate = __decorate([
    UIBind('UI/module/AdModule/AdPanel.ui')
], AdPanel_Generate);
var AdPanel_Generate$1 = AdPanel_Generate;

var foreign58 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: AdPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/AdModule/TipsPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let TipsPanel_Generate = class TipsPanel_Generate extends UIScript {
    get mCanvas() {
        if (!this.mCanvas_Internal && this.uiWidgetBase) {
            this.mCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas');
        }
        return this.mCanvas_Internal;
    }
    get mTitleTxt() {
        if (!this.mTitleTxt_Internal && this.uiWidgetBase) {
            this.mTitleTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mTitleTxt');
        }
        return this.mTitleTxt_Internal;
    }
    get mContentTxt() {
        if (!this.mContentTxt_Internal && this.uiWidgetBase) {
            this.mContentTxt_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mContentTxt');
        }
        return this.mContentTxt_Internal;
    }
    get mNoBtn() {
        if (!this.mNoBtn_Internal && this.uiWidgetBase) {
            this.mNoBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mNoBtn');
        }
        return this.mNoBtn_Internal;
    }
    get mYesBtn() {
        if (!this.mYesBtn_Internal && this.uiWidgetBase) {
            this.mYesBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCanvas/Canvas_1/mYesBtn');
        }
        return this.mYesBtn_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mNoBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mNoBtn");
        });
        this.initLanguage(this.mNoBtn);
        this.mNoBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mYesBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mYesBtn");
        });
        this.initLanguage(this.mYesBtn);
        this.mYesBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTitleTxt);
        this.initLanguage(this.mContentTxt);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
TipsPanel_Generate = __decorate([
    UIBind('UI/module/AdModule/TipsPanel.ui')
], TipsPanel_Generate);
var TipsPanel_Generate$1 = TipsPanel_Generate;

var foreign59 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: TipsPanel_Generate$1
});

class AdPanel extends AdPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.callback = null;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;
        this.bindButtons();
    }
    bindButtons() {
        this.mYesBtn.onClose.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
    }
    onClickYesButton(isSuccess) {
        if (!isSuccess) {
            Notice.showDownNotice(GameConfig.Language.Text_Fail.Value);
            return;
        }
        this.hide();
        if (this.callback)
            this.callback();
    }
    onClickNoButton() {
        this.hide();
    }
    showRewardAd(callback, contentText, noText, yesText, openType = 0) {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        setTimeout(() => {
            if (openType == 1) {
                this.mCanvas.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mCanvas.size.x, this.rootCanvas.size.y / 2 - this.mCanvas.size.y / 2);
            }
            else {
                this.mCanvas.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mCanvas.size.x / 2, this.rootCanvas.size.y / 2 - this.mCanvas.size.y / 2);
            }
        }, 1);
        this.show();
    }
}
class TipsPanel extends TipsPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.callback = null;
    }
    onStart() {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;
        this.bindButtons();
    }
    bindButtons() {
        this.mYesBtn.onClicked.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
    }
    onClickYesButton() {
        if (this.callback)
            this.callback();
        this.hide();
    }
    onClickNoButton() {
        this.hide();
    }
    showTips(callback, titleText, contentText, noText, yesText) {
        this.callback = callback;
        this.mTitleTxt.text = titleText;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.show();
    }
}

var foreign18 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    TipsPanel: TipsPanel,
    default: AdPanel
});

class HUDItem extends HUDItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudPanel = null;
        this.hudModuleC = null;
        this.bagId = 0;
        this.isUse = false;
    }
    get getHUDPanel() {
        if (!this.hudPanel) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    onStart() {
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.useState(false);
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
    }
    addClickButton() {
        let nextBagId = GameConfig.ActionProp.getElement(this.bagId).NextId;
        if (!nextBagId || nextBagId <= 0)
            return;
        this.getHUDModuleC.clickGoodItemAction.call(this.bagId);
    }
    addCloseButton() {
        this.getHUDModuleC.clickCloseGoodItemAction.call(this.bagId);
    }
    setDatas(bagId) {
        this.bagId = bagId;
        let actionPropElement = GameConfig.ActionProp.getElement(this.bagId);
        if (actionPropElement.Tab == 2 || actionPropElement.Tab == 6) {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
                this.useState(false);
            }
            else {
                this.useState(true);
            }
        }
        else {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
                this.useState(true);
            }
            else {
                this.useState(false);
            }
        }
        if (actionPropElement.VehiclesIcon) {
            this.mIconImage.imageGuid = actionPropElement.VehiclesIcon;
        }
        else if (actionPropElement.Icon) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.Icon);
        }
        else if (actionPropElement.AssetId) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.AssetId);
        }
        else if (bagId == actionPropElement.NextId) {
            let nextActionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId - 1);
            if (nextActionPropElement.VehiclesIcon) {
                this.mIconImage.imageGuid = nextActionPropElement.VehiclesIcon;
            }
            else if (nextActionPropElement.Icon) {
                Utils.setImageByAssetIconData(this.mIconImage, nextActionPropElement.Icon);
            }
            else if (nextActionPropElement.AssetId) {
                Utils.setImageByAssetIconData(this.mIconImage, nextActionPropElement.AssetId);
            }
        }
    }
    useState(isUse) {
        this.isUse = isUse;
        Utils.setWidgetVisibility(this.mSelectImage, this.isUse ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
}
class HUDPanel extends HUDPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.isOpenBGM = true;
        this.hudItems = [];
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    onStart() {
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.controllerExitUIVisible(false);
        this.controllerBagUIVisible(false);
        this.controllerActionUIVisible(false);
        this.constollerGoodsCanvasVisible(false);
        Utils.setWidgetVisibility(this.mMusicCanvas, mw.SlateVisibility.Collapsed);
        this.mOpenSignInTextBlock.text = GameConfig.Language.Text_SignIn_10.Value;
        this.mOpenClothTextBlock.text = GameConfig.Language.Text_FreeChangeOfClothes.Value;
        this.mFreeTextBlock.text = StringUtil.format(GameConfig.Language.Text_FreeChangeOfClothes2.Value, GlobalData.freeTime);
        Utils.setWidgetVisibility(this.mFreeTextBlock, mw.SlateVisibility.Collapsed);
        if (GlobalData.languageId == 0) {
            Utils.setWidgetVisibility(this.mOpenClothImage, mw.SlateVisibility.Collapsed);
        }
    }
    updateFreeTime() {
        console.error(`wfz - freeTime:${GlobalData.freeTime}`);
        if (GlobalData.freeTime <= 0 || GlobalData.freeTime >= 999) {
            Utils.setWidgetVisibility(this.mFreeTextBlock, mw.SlateVisibility.Collapsed);
        }
        else {
            Utils.setWidgetVisibility(this.mFreeTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
            this.mFreeTextBlock.text = StringUtil.format(GameConfig.Language.Text_FreeChangeOfClothes2.Value, GlobalData.freeTime);
        }
    }
    bindButton() {
        this.mJumpButton.onClicked.add(this.addJumpButton.bind(this));
        this.mCrouchButton.onClicked.add(this.addCrouchButton.bind(this));
        this.mExitButton.onClicked.add(this.addFlyButton.bind(this));
        this.mActionButton.onClicked.add(this.addActionButton.bind(this));
        this.mBagButton.onClicked.add(this.addBagButton.bind(this));
        this.mShowHideGoodsButton.onClicked.add(this.showHideGoodsButton.bind(this));
        this.mDeleteAllGoodsButton.onClicked.add(this.addDeleteAllGoods.bind(this));
        this.mOpenSetButton.onClicked.add(this.addSetButton.bind(this));
        this.mOpenClothButton.onClicked.add(this.addClothButton.bind(this));
        this.mOpenRankButton.onClicked.add(this.addOpenRankButton.bind(this));
        this.mOpenShareButton.onClicked.add(this.addOpenShareButton.bind(this));
        this.mOpenSignInButton.onClicked.add(this.addOpenSignInButton.bind(this));
        this.mOpenMusicButton.onClicked.add(this.addOpenMusicButton.bind(this));
        this.mOnOffMusicBtn.onClicked.add(this.addOnOffMusicButton.bind(this));
        this.mLeftMusicBtn.onClicked.add(this.addPreMusicButton.bind(this));
        this.mRightMusicBtn.onClicked.add(this.addNextMusicButton.bind(this));
        this.mCloseMusicBtn.onClicked.add(this.addCloseMusicButton.bind(this));
    }
    addJumpButton() {
        this.getHUDModuleC.onJumpAction.call();
    }
    addCrouchButton() {
        this.getHUDModuleC.onCrouchAction.call();
    }
    addFlyButton() {
        this.getHUDModuleC.onExitAction.call();
    }
    addActionButton() {
        this.getHUDModuleC.onActionButton.call();
    }
    addBagButton() {
        this.getHUDModuleC.onBagButton.call();
    }
    addOpenRankButton() {
        this.getHUDModuleC.onOpenRankAction.call();
    }
    addOpenShareButton() {
        this.getHUDModuleC.onOpenShareAction.call(1);
    }
    addOpenSignInButton() {
        this.getHUDModuleC.onOpenSignInAction.call();
    }
    addOpenMusicButton() {
        Utils.setWidgetVisibility(this.mMusicCanvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    addOnOffMusicButton() {
        this.isOpenBGM = !this.isOpenBGM;
        this.getHUDModuleC.onOnOffMusicAction.call(this.isOpenBGM);
        let offOnIcon = (this.isOpenBGM) ? GlobalData.onMusicIconGuid : GlobalData.offMusicIconGuid;
        this.mOnOffMusicBtn.normalImageGuid = offOnIcon;
        this.mOnOffMusicBtn.pressedImageGuid = offOnIcon;
        this.mOnOffMusicBtn.disableImageGuid = offOnIcon;
    }
    addNextMusicButton() {
        this.getHUDModuleC.onSwitchBgmAction.call(1);
    }
    addPreMusicButton() {
        this.getHUDModuleC.onSwitchBgmAction.call(-1);
    }
    addCloseMusicButton() {
        Utils.setWidgetVisibility(this.mMusicCanvas, mw.SlateVisibility.Collapsed);
    }
    showHideGoodsButton() {
        this.constollerGoodsContentCanvasVisible(!this.mGoodsContentCanvas.visible, false);
    }
    addDeleteAllGoods() {
        this.constollerGoodsContentCanvasVisible(false, true);
        this.getHUDModuleC.deleteAllGoodsAction.call();
    }
    addSetButton() {
        this.getHUDModuleC.onOpenSetAction.call();
    }
    addClothButton() {
        this.getHUDModuleC.onOpenClothAction.call();
    }
    controllerBagUIVisible(isVisible) {
        Utils.setWidgetVisibility(this.mBagBgImage, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    controllerActionUIVisible(isVisible) {
        Utils.setWidgetVisibility(this.mActionBgImage, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    controllerExitUIVisible(isVisible) {
        Utils.setWidgetVisibility(this.mExitBgImage, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    updateBagIcon(bagId) {
        if (bagId == 0) {
            this.controllerBagUIVisible(false);
        }
        else {
            this.controllerBagUIVisible(true);
            let bagIcon = GameConfig.ActionProp.getElement(bagId).ButtonIconId;
            this.mBagButton.normalImageGuid = bagIcon;
            this.mBagButton.pressedImageGuid = bagIcon;
            this.mBagButton.disableImageGuid = bagIcon;
        }
    }
    constollerGoodsCanvasVisible(isVisible) {
        Utils.setWidgetVisibility(this.mGoodsCanvas, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    constollerGoodsContentCanvasVisible(isVisible, isParent) {
        if (isParent)
            this.constollerGoodsCanvasVisible(isVisible);
        Utils.setWidgetVisibility(this.mGoodsContentCanvas, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    updateGoodsListCanvas(bagIds) {
        if (this.hudItems.length > bagIds.length) {
            for (let i = 0; i < bagIds.length; ++i) {
                this.hudItems[i].setDatas(bagIds[i]);
                Utils.setWidgetVisibility(this.hudItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = bagIds.length; i < this.hudItems.length; ++i) {
                Utils.setWidgetVisibility(this.hudItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
        else {
            for (let i = 0; i < this.hudItems.length; ++i) {
                this.hudItems[i].setDatas(bagIds[i]);
                Utils.setWidgetVisibility(this.hudItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.hudItems.length; i < bagIds.length; ++i) {
                let hudItem = UIService.create(HUDItem);
                this.mGoodsListCanvas.addChild(hudItem.uiObject);
                hudItem.setDatas(bagIds[i]);
                this.hudItems.push(hudItem);
            }
        }
        this.constollerGoodsContentCanvasVisible(bagIds.length > 0, true);
    }
    onShow(...params) {
        this.mVirtualJoystickPanel.resetJoyStick();
    }
    onHide() {
        this.mVirtualJoystickPanel.resetJoyStick();
    }
}
class HUDModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudPanel = null;
        this.danMuModuleC = null;
        this.sharePanel = null;
        this.savePanel = null;
        this.adPanel = null;
        this.onJumpAction = new Action();
        this.onCrouchAction = new Action();
        this.onExitAction = new Action();
        this.onActionButton = new Action();
        this.onBagButton = new Action();
        this.clickGoodItemAction = new Action1();
        this.clickCloseGoodItemAction = new Action1();
        this.deleteAllGoodsAction = new Action();
        this.onOpenSetAction = new Action();
        this.onOpenClothAction = new Action();
        this.onOpenRankAction = new Action();
        this.onOpenShareAction = new Action1();
        this.onUseShareAction = new Action2();
        this.onOpenSignInAction = new Action();
        this.onFreeTryOnAction = new Action();
        /**背景音乐按钮事件（true-打开|false-关闭） */
        this.onOnOffMusicAction = new Action1();
        /**切换背景音乐（-1前一首|1下一首） */
        this.onSwitchBgmAction = new Action1();
        this.freeNpc = null;
        /**当前播放的背景音乐 */
        this.currentBgmIndex = 1;
        /**背景音乐 */
        this.bgmMusics = [];
        this.changeDescription = null;
        this.resetDecriptionTimeoutId = null;
        this.isOpenAvatar = false;
        /**全局UI点击音效唯一标识 */
        this.uiClickSoundId = null;
    }
    get getHUDPanel() {
        if (!this.hudPanel) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    get getSharePanel() {
        if (!this.sharePanel) {
            this.sharePanel = UIService.getUI(SharePanel);
        }
        return this.sharePanel;
    }
    get getSavePanel() {
        if (!this.savePanel) {
            this.savePanel = UIService.getUI(SavePanel);
        }
        return this.savePanel;
    }
    get getAdPanel() {
        if (!this.adPanel) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initUI();
        this.bindAction();
    }
    onEnterScene(sceneType) {
        this.getHUDPanel.show();
        this.playBGMusic(0);
        this.registerGlobalClickSound();
        AvatarEditorService.setAvatarEditorButtonVisible(true); // 设置“去装扮”按钮隐藏
        this.initFreeNpc();
    }
    net_syncFreeTime(freeTime) {
        if (!isNaN(freeTime) && freeTime > 0)
            GlobalData.freeTime = freeTime;
        if (mw.UIService.getUI(HUDPanel, false)?.visible) {
            this.getHUDPanel.updateFreeTime();
        }
        else {
            TimeUtil.delaySecond(10).then(() => {
                this.getHUDPanel.updateFreeTime();
            });
        }
    }
    async initFreeNpc() {
        if (!this.freeNpc)
            this.freeNpc = await mw.GameObject.asyncFindGameObjectById("3CD2E610");
    }
    initUI() {
    }
    bindAction() {
        this.onJumpAction.add(this.onJumpActionHandler.bind(this));
        this.onCrouchAction.add(this.onCrouchActionHandler.bind(this));
        this.onActionButton.add(this.onActionButtonHandler.bind(this));
        this.onBagButton.add(this.onBagButtonHandler.bind(this));
        this.onOpenSetAction.add(this.onOpenSetActionHandler.bind(this));
        this.onOpenClothAction.add(this.onOpenClothActionHandler.bind(this));
        this.onOpenShareAction.add(this.onOpenShareActionHandler.bind(this));
        this.onUseShareAction.add(this.onUseShareActionHandler.bind(this));
        this.onFreeTryOnAction.add(this.addFreeTryOnAction.bind(this));
        mw.AvatarEditorService.avatarServiceDelegate.add(this.addAvatarServiceDelegate.bind(this));
        Event.addLocalListener(`OnOffMainUI`, this.addOnOffMainUI.bind(this));
        // this.localPlayer.character.onDescriptionChange.add(this.addDescriptionChange.bind(this));
        this.onOnOffMusicAction.add(this.addOnOffMusicAction.bind(this));
        this.onSwitchBgmAction.add(this.playBGMusic.bind(this));
    }
    addOnOffMusicAction(isOpenBGM) {
        isOpenBGM ? this.playBGMusic(0) : SoundService.stopBGM();
    }
    /**播放背景音乐 */
    playBGMusic(bgmIndex) {
        if (!this.bgmMusics || this.bgmMusics?.length == 0)
            this.bgmMusics = GameConfig.Music.getAllElement();
        this.currentBgmIndex = this.currentBgmIndex + bgmIndex;
        if (this.currentBgmIndex > this.bgmMusics.length) {
            this.currentBgmIndex = 1;
        }
        else if (this.currentBgmIndex < 1) {
            this.currentBgmIndex = this.bgmMusics.length;
        }
        let bgmId = this.bgmMusics[this.currentBgmIndex - 1].Guid;
        SoundService.playBGM(bgmId);
        this.getHUDPanel.mMusicText.text = this.bgmMusics[this.currentBgmIndex - 1].Annotation;
    }
    onJumpActionHandler() {
        if (this.localPlayer.character.getCurrentState() != mw.CharacterStateType.Jumping) {
            this.localPlayer.character.changeState(mw.CharacterStateType.Jumping);
        }
    }
    onCrouchActionHandler() {
        if (this.localPlayer.character.getCurrentState() == mw.CharacterStateType.Running) {
            this.localPlayer.character.changeState(mw.CharacterStateType.Crouching);
        }
        else if (this.localPlayer.character.getCurrentState() == mw.CharacterStateType.Crouching) {
            this.localPlayer.character.changeState(mw.CharacterStateType.Running);
        }
    }
    onActionButtonHandler() {
        this.getDanMuModuleC.onStopActionButton.call();
    }
    onBagButtonHandler() {
        this.getDanMuModuleC.onNextBagAction.call();
    }
    onOpenSetActionHandler() { }
    onOpenClothActionHandler() {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await AvatarEditorService.asyncOpenAvatarEditorModule();
        });
    }
    onOpenShareActionHandler(openType) {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            this.getSharePanel.show();
            let sharedId = await Utils.createSharedId(this.localPlayer.character);
            this.getSharePanel.showPanel(sharedId, openType);
        });
    }
    onUseShareActionHandler(shareId, openType) {
        if (openType == 1) {
            // if (GlobalData.isOpenIAA) {
            //     this.getAdPanel.showRewardAd(() => {
            //         this.useShareId(shareId);
            //     }, GameConfig.Language.Text_TryItOnForFree.Value
            //         , GameConfig.Language.Text_Cancel.Value
            //         , GameConfig.Language.Text_FreeTryOn.Value);
            // } else {
            // }
            this.useShareId(shareId);
        }
        else if (openType == 2) {
            // if (GlobalData.isOpenIAA) {
            //     this.getAdPanel.showRewardAd(() => {
            //         AvatarEditorService.asyncCloseAvatarEditorModule().then(() => {
            //             ExecutorManager.instance.pushAsyncExecutor(async () => {
            //                 await TimeUtil.delaySecond(5);
            //                 await this.useDescription();
            //             });
            //         });
            //     }, GameConfig.Language.Text_TryItOnForFree.Value
            //         , GameConfig.Language.Text_Cancel.Value
            //         , GameConfig.Language.Text_FreeTryOn.Value
            //         , 1);
            // } else {
            // }
            AvatarEditorService.asyncCloseAvatarEditorModule().then(() => {
                ExecutorManager.instance.pushAsyncExecutor(async () => {
                    await TimeUtil.delaySecond(5);
                    await this.useDescription();
                });
            });
        }
    }
    addDescriptionChange() {
        this.localPlayer.character.asyncReady().then(() => {
            console.error(`变化`);
            this.changeDescription = this.localPlayer.character.getDescription();
            if (this.isOpenAvatar) {
                if (!UIService.getUI(SavePanel, false)?.visible)
                    this.getSavePanel.show();
            }
        });
    }
    useShareId(shareId) {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            let isSuccess = await Utils.applySharedId(this.localPlayer.character, shareId);
            if (isSuccess) {
                Notice.showDownNotice(GameConfig.Language.Text_TryItOnSuccessfully.Value);
            }
            else {
                Notice.showDownNotice(GameConfig.Language.Text_InvalidID.Value);
            }
        });
    }
    addFreeTryOnAction() {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.initFreeNpc();
            Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
            this.freeNpc.setDescription(this.localPlayer.character.getDescription());
            await this.freeNpc.asyncReady();
            await TimeUtil.delaySecond(1);
            await AvatarEditorService.asyncCloseAvatarEditorModule();
            TimeUtil.delaySecond(2).then(() => {
                Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
                TimeUtil.delaySecond(2).then(() => {
                    Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
                });
            });
            Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
            await TimeUtil.delaySecond(5);
            await this.useDescription();
        });
    }
    async useDescription() {
        await this.localPlayer.character.asyncReady();
        this.localPlayer.character.setDescription(this.freeNpc.getDescription());
        await this.localPlayer.character.asyncReady();
        this.localPlayer.character.syncDescription();
        Notice.showDownNotice(GameConfig.Language.Text_TryItOnSuccessfully.Value);
        this.resetDecription();
    }
    resetDecription() {
        this.clearResetDecriptionTimeoutId();
        this.resetDecriptionTimeoutId = setTimeout(() => {
            AccountService.downloadData(this.localPlayer.character, (success) => {
                if (!success)
                    return;
                Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes3.Value);
            });
        }, GlobalData.freeTime * 60 * 1000);
    }
    clearResetDecriptionTimeoutId() {
        if (this.resetDecriptionTimeoutId) {
            clearTimeout(this.resetDecriptionTimeoutId);
            this.resetDecriptionTimeoutId = null;
        }
    }
    addAvatarServiceDelegate(eventName, ...params) {
        console.error(`eventName: ${eventName}`);
        switch (eventName) {
            case "AE_OnQuit":
                Event.dispatchToLocal(`OnOffMainUI`, true);
                // Player.localPlayer.character.setStateEnabled(CharacterStateType.Running, true);
                if (UIService.getUI(SavePanel, false)?.visible)
                    this.getSavePanel.hide();
                this.isOpenAvatar = false;
                break;
            case "AE_OnOpen":
                Event.dispatchToLocal(`OnOffMainUI`, false);
                this.isOpenAvatar = true;
                if (!UIService.getUI(SavePanel, false)?.visible)
                    this.getSavePanel.show();
                // Player.localPlayer.character.setStateEnabled(CharacterStateType.Running, false);
                break;
        }
    }
    addOnOffMainUI(isShow) {
        console.error(`isShow: ${isShow}`);
        isShow ? this.getHUDPanel.show() : this.getHUDPanel.hide();
    }
    controllerBagUIVisible(isVisible) {
        this.getHUDPanel.controllerBagUIVisible(isVisible);
    }
    controllerActionUIVisible(isVisible) {
        this.getHUDPanel.controllerActionUIVisible(isVisible);
    }
    controllerExitUIVisible(isVisible) {
        this.getHUDPanel.controllerExitUIVisible(isVisible);
    }
    updateBagIcon(bagId) {
        this.getHUDPanel.updateBagIcon(bagId);
    }
    updateGoodsListCanvas(bagIds) {
        this.getHUDPanel.updateGoodsListCanvas(bagIds);
    }
    action(bagId) {
        this.getDanMuModuleC.onClickBagItemAction.call(bagId);
    }
    /**注册全局点击音效 */
    registerGlobalClickSound() {
        /**全局UI点击音效 */
        Event.addLocalListener("PlayButtonClick", (v) => {
            // if (v == "mJumpButton") return;
            if (this.uiClickSoundId) {
                SoundService.stopSound(this.uiClickSoundId);
                this.uiClickSoundId = null;
            }
            this.uiClickSoundId = SoundService.playSound(`12723`);
        });
    }
}
class HUDModuleS extends ModuleS {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    onPlayerEnterGame(player) {
        this.initFreeTime(player);
    }
    initFreeTime(player) {
        Utils.getCustomdata(`FreeTime`).then((freeTime) => {
            this.getClient(player).net_syncFreeTime(freeTime);
        });
    }
}
class SharePanel extends SharePanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.openType = 1;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    onStart() {
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mMyselfTipsTextBlock.text = GameConfig.Language.Text_MyCharacterId.Value;
        this.mOtherTipsTextBlock.text = GameConfig.Language.Text_TryOnYourFriendAvatarForFree.Value;
        this.mInputBox.text = "";
        this.mInputBox.hintString = GameConfig.Language.Text_PleaseEnter.Value;
        this.mCancelTextBlock.text = GameConfig.Language.Text_Cancel.Value;
        this.mUseTextBlock.text = GameConfig.Language.Text_FreeTryOn.Value;
        this.mAdsButton.text = GameConfig.Language.Text_FreeTryOn.Value;
        Utils.setWidgetVisibility(this.mAdsButton, mw.SlateVisibility.Collapsed);
    }
    bindButton() {
        this.mCopyButton.onClicked.add(this.addCopyButton.bind(this));
        this.mCancelButton.onClicked.add(this.addCancelButton.bind(this));
        this.mUseButton.onClicked.add(this.addUseButton.bind(this));
    }
    addCopyButton() {
        let copyText = this.mMyselfTextBlock.text;
        if (!copyText || copyText == "" || copyText.length == 0)
            return;
        StringUtil.clipboardCopy(copyText);
        Notice.showDownNotice(GameConfig.Language.Text_CopySuccessfully.Value);
    }
    addCancelButton() {
        this.hide();
    }
    addUseButton() {
        if (this.openType == 1) {
            let shareId = this.mInputBox.text;
            if (!shareId || shareId == "" || shareId.length == 0)
                return;
            this.getHUDModuleC.onUseShareAction.call(shareId, this.openType);
        }
        else if (this.openType == 2) {
            this.getHUDModuleC.onUseShareAction.call(null, this.openType);
        }
        this.hide();
    }
    showPanel(shareId, openType) {
        this.openType = openType;
        this.mMyselfTextBlock.text = shareId;
        if (openType == 1) {
            Utils.setWidgetVisibility(this.mInputBgImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mOtherTipsTextBlock.text = GameConfig.Language.Text_TryOnYourFriendAvatarForFree.Value;
            setTimeout(() => {
                this.mMainImage.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mMainImage.size.x / 2, this.rootCanvas.size.y / 2 - this.mMainImage.size.y / 2);
            }, 1);
        }
        else if (openType == 2) {
            Utils.setWidgetVisibility(this.mInputBgImage, mw.SlateVisibility.Collapsed);
            this.mOtherTipsTextBlock.text = GameConfig.Language.Text_CopyTheCharacterIDShareFriendsTryOn.Value;
            setTimeout(() => {
                this.mMainImage.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mMainImage.size.x, this.rootCanvas.size.y / 2 - this.mMainImage.size.y / 2);
            }, 1);
        }
    }
    onShow(...params) {
        this.mMyselfTextBlock.text = GameConfig.Language.Text_Loading.Value;
        this.mInputBox.text = ``;
    }
}
class SavePanel extends SavePanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    onStart() {
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mSaveTipsTextBlock.text = GameConfig.Language.Text_SaveImagesForFree.Value;
    }
    bindButton() {
        this.mSaveButton.onClicked.add(this.addSaveButton.bind(this));
    }
    addSaveButton() {
        this.getHUDModuleC.onFreeTryOnAction.call();
    }
}

var foreign34 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HUDItem: HUDItem,
    HUDModuleC: HUDModuleC,
    HUDModuleS: HUDModuleS,
    HUDPanel: HUDPanel,
    SavePanel: SavePanel,
    SharePanel: SharePanel
});

class Bubble {
    /**
     *
     * @param object 所属的物体
     * @param _ui 所属的UI，从对象池拿
     * @param _text 所属的UI，展示的文字
     */
    constructor(_object, _uiPool, _text, _onMeasureCallback) {
        /**
         * Z轴偏移
         */
        this.offsetZ = 0;
        this._halfWidth = 0;
        this._height = 0;
        this._currentHeight = 0;
        this.tempSize = Vector2.zero;
        this._object = _object;
        this._uiPool = _uiPool;
        this._text = _text;
        this._onMeasureCallback = _onMeasureCallback;
        this._ui = _uiPool.spawn();
        this.tempSize.x = 1920;
        this.tempSize.y = 0;
        this._ui.mDialogTextBlock.size = this.tempSize;
        this._ui.mDialogTextBlock.text = _text;
        this._ui.show();
        this._fsm = new BubbleFsm(this);
    }
    /**获取所属对象 */
    get object() {
        return this._object;
    }
    /** 更新状态机
    * @param number dt
    * @return
    */
    onUpdate(dt) {
        return this._fsm.update(dt);
    }
    jump(_scale) {
        this._currentHeight = _scale * this._height;
        this._onMeasureCallback(this._object);
    }
    /**
     * 隐藏UI，移除到屏幕外面
     */
    scale(_scale) {
        this.tempSize.x = Math.min(1, _scale * 3);
        this.tempSize.y = _scale;
        this._ui.rootCanvas.renderScale = this.tempSize;
    }
    offset(offset) {
        this.offsetZ = offset;
    }
    get height() {
        return this._currentHeight;
    }
    measure() {
        const size = this._ui.mDialogTextBlock.size;
        //计算总长度
        this.tempSize.x = size.x;
        //计算富文本高度
        this.tempSize.x = size.x + 20; //Math.max(, 128);
        this.tempSize.y = size.y + 20; //Math.max(, 128);
        this._halfWidth = this.tempSize.x / 2;
        this._height = this.tempSize.y + 12;
        this._ui.rootCanvas.size = this.tempSize;
        this._ui.mDialogTextBlock.size = this.tempSize;
        this.tempSize.x += 4;
        this.tempSize.y += 4;
        this._ui.mDialogTextBlock.size = this.tempSize;
        this._ui.mDialogTextBlock.text = "";
    }
    get isSizeValidate() {
        const size = this._ui.mDialogTextBlock.size;
        return size.y > 0;
    }
    /**
     * 显示文本
     */
    showText() {
        this._ui.mDialogTextBlock.text = this._text;
    }
    /**销毁对象 */
    destory() {
        this._ui.rootCanvas.visibility = mw.SlateVisibility.Collapsed;
        this._uiPool.despawn(this._ui);
    }
    /**
     * 更新气泡在屏幕中的位置
     */
    updatePosition() {
        const loc = this._object.worldTransform.position;
        loc.z += 80;
        this.tempSize = mw.InputUtil.projectWorldPositionToWidgetPosition(loc, false).screenPosition;
        this.tempSize.y -= this.offsetZ;
        this.tempSize.x -= this._halfWidth;
        this._ui.rootCanvas.position = this.tempSize;
    }
}
/**
 * 状态机
 */
class BubbleFsm {
    constructor(bubble) {
        this.bubble = bubble;
        this._stateList = [];
        this._stateList.push(this._currentState = new StateMeasure(this));
        this._stateList.push(new StateExpand(this));
        this._stateList.push(new StateView(this));
        this._stateList.push(new StateJump(this));
        this._currentState.onEnter();
    }
    /**
     * 状态机完成
     */
    finish() {
        this._isFinish = true;
    }
    /**
     * 更新状态机
     * @param dt
     */
    update(dt) {
        this._currentState.update(dt);
        this._doChangeState();
        return this._isFinish;
    }
    /**
     * 调用切换到下一个状态，为了防止状态混乱，仅在update期间调用
     */
    _doChangeState() {
        if (this._nextState) {
            this._currentState.onExit();
            this._currentState = this._nextState;
            this._currentState.onEnter();
            this._nextState = null;
        }
    }
    /**
     * 切换到下一个状态
     */
    switchState(stateClass) {
        if (this._currentState.constructor.name != stateClass.name) {
            this._nextState = this._stateList.find(i => i.constructor.name == stateClass.name);
        }
    }
}
/**
 * 显示状态
 */
class StateView {
    constructor(fsm) {
        this.fsm = fsm;
    }
    onExit() {
    }
    onEnter() {
        this._timer = 4;
        this.fsm.bubble.showText();
    }
    update(dt) {
        this._timer -= dt;
        if (this._timer <= 0) {
            this.fsm.finish();
        }
        this.fsm.bubble.updatePosition();
    }
}
/**
 * 展开状态
 */
class StateExpand {
    constructor(fsm) {
        this.fsm = fsm;
    }
    onExit() {
    }
    onEnter() {
        this._timer = 0;
    }
    update(dt) {
        this._timer += dt * 5;
        if (this._timer >= 1) {
            this._timer = 1;
            this.fsm.switchState(StateView);
        }
        this.fsm.bubble.scale(this._timer);
        this.fsm.bubble.updatePosition();
    }
}
/**
 * 顶开状态
 */
class StateJump {
    constructor(fsm) {
        this.fsm = fsm;
    }
    onExit() {
    }
    onEnter() {
        this._timer = 0;
    }
    update(dt) {
        this._timer += dt * 5;
        if (this._timer >= 1) {
            this._timer = 1;
            this.fsm.switchState(StateExpand);
        }
        this.fsm.bubble.jump(this._timer);
    }
}
/**
 * 计算状态
 */
class StateMeasure {
    constructor(fsm) {
        this.fsm = fsm;
    }
    onExit() {
    }
    onEnter() {
        this._timer = 0.2;
        this.fsm.bubble.scale(0);
    }
    update(dt) {
        this._timer -= dt;
        if (this._timer <= 0) {
            if (this.fsm.bubble.isSizeValidate) {
                this.fsm.bubble.measure();
                this.fsm.switchState(StateJump);
            }
            else {
                this._timer = 0.2;
            }
        }
    }
}

var foreign19 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Bubble: Bubble
});

class DanMuItem {
}
class ChatData {
}
class ActionData {
} //AssetId:96612
// AssetId:168261

var foreign21 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ActionData: ActionData,
    ChatData: ChatData,
    DanMuItem: DanMuItem
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/ChatPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let ChatPanel_Generate = class ChatPanel_Generate extends UIScript {
    get mOpenChatCanvas() {
        if (!this.mOpenChatCanvas_Internal && this.uiWidgetBase) {
            this.mOpenChatCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenChatCanvas');
        }
        return this.mOpenChatCanvas_Internal;
    }
    get mOpenChatBgImage() {
        if (!this.mOpenChatBgImage_Internal && this.uiWidgetBase) {
            this.mOpenChatBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenChatCanvas/mOpenChatBgImage');
        }
        return this.mOpenChatBgImage_Internal;
    }
    get mOpenChatButton() {
        if (!this.mOpenChatButton_Internal && this.uiWidgetBase) {
            this.mOpenChatButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenChatCanvas/mOpenChatButton');
        }
        return this.mOpenChatButton_Internal;
    }
    get mOpenExpressionCanvas() {
        if (!this.mOpenExpressionCanvas_Internal && this.uiWidgetBase) {
            this.mOpenExpressionCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenExpressionCanvas');
        }
        return this.mOpenExpressionCanvas_Internal;
    }
    get mOpenExpressionBgImage() {
        if (!this.mOpenExpressionBgImage_Internal && this.uiWidgetBase) {
            this.mOpenExpressionBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenExpressionCanvas/mOpenExpressionBgImage');
        }
        return this.mOpenExpressionBgImage_Internal;
    }
    get mOpenExpressionButton() {
        if (!this.mOpenExpressionButton_Internal && this.uiWidgetBase) {
            this.mOpenExpressionButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenExpressionCanvas/mOpenExpressionButton');
        }
        return this.mOpenExpressionButton_Internal;
    }
    get mOpenBagCanvas() {
        if (!this.mOpenBagCanvas_Internal && this.uiWidgetBase) {
            this.mOpenBagCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenBagCanvas');
        }
        return this.mOpenBagCanvas_Internal;
    }
    get mOpenBagBgImage() {
        if (!this.mOpenBagBgImage_Internal && this.uiWidgetBase) {
            this.mOpenBagBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenBagCanvas/mOpenBagBgImage');
        }
        return this.mOpenBagBgImage_Internal;
    }
    get mOpenBagButton() {
        if (!this.mOpenBagButton_Internal && this.uiWidgetBase) {
            this.mOpenBagButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenBagCanvas/mOpenBagButton');
        }
        return this.mOpenBagButton_Internal;
    }
    get mUnloadButton() {
        if (!this.mUnloadButton_Internal && this.uiWidgetBase) {
            this.mUnloadButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenBagCanvas/mUnloadButton');
        }
        return this.mUnloadButton_Internal;
    }
    get mOpenActionCanvas() {
        if (!this.mOpenActionCanvas_Internal && this.uiWidgetBase) {
            this.mOpenActionCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenActionCanvas');
        }
        return this.mOpenActionCanvas_Internal;
    }
    get mOpenActionBgImage() {
        if (!this.mOpenActionBgImage_Internal && this.uiWidgetBase) {
            this.mOpenActionBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenActionCanvas/mOpenActionBgImage');
        }
        return this.mOpenActionBgImage_Internal;
    }
    get mOpenActionButton() {
        if (!this.mOpenActionButton_Internal && this.uiWidgetBase) {
            this.mOpenActionButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenActionCanvas/mOpenActionButton');
        }
        return this.mOpenActionButton_Internal;
    }
    get mChatList1Canvas() {
        if (!this.mChatList1Canvas_Internal && this.uiWidgetBase) {
            this.mChatList1Canvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList1Canvas');
        }
        return this.mChatList1Canvas_Internal;
    }
    get mChatListBg1Image() {
        if (!this.mChatListBg1Image_Internal && this.uiWidgetBase) {
            this.mChatListBg1Image_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList1Canvas/ChatList1Canvas/mChatListBg1Image');
        }
        return this.mChatListBg1Image_Internal;
    }
    get mChatList1ScrollBox() {
        if (!this.mChatList1ScrollBox_Internal && this.uiWidgetBase) {
            this.mChatList1ScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList1Canvas/ChatList1Canvas/mChatList1ScrollBox');
        }
        return this.mChatList1ScrollBox_Internal;
    }
    get mChatList1ContentCanvas() {
        if (!this.mChatList1ContentCanvas_Internal && this.uiWidgetBase) {
            this.mChatList1ContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList1Canvas/ChatList1Canvas/mChatList1ScrollBox/mChatList1ContentCanvas');
        }
        return this.mChatList1ContentCanvas_Internal;
    }
    get mCloseChatList1Button() {
        if (!this.mCloseChatList1Button_Internal && this.uiWidgetBase) {
            this.mCloseChatList1Button_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList1Canvas/ChatList1Canvas/mCloseChatList1Button');
        }
        return this.mCloseChatList1Button_Internal;
    }
    get mChatList2Canvas() {
        if (!this.mChatList2Canvas_Internal && this.uiWidgetBase) {
            this.mChatList2Canvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList2Canvas');
        }
        return this.mChatList2Canvas_Internal;
    }
    get mChatListBg2Image() {
        if (!this.mChatListBg2Image_Internal && this.uiWidgetBase) {
            this.mChatListBg2Image_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList2Canvas/ChatList2Canvas/mChatListBg2Image');
        }
        return this.mChatListBg2Image_Internal;
    }
    get mChatList2ScrollBox() {
        if (!this.mChatList2ScrollBox_Internal && this.uiWidgetBase) {
            this.mChatList2ScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList2Canvas/ChatList2Canvas/mChatList2ScrollBox');
        }
        return this.mChatList2ScrollBox_Internal;
    }
    get mChatList2ContentCanvas() {
        if (!this.mChatList2ContentCanvas_Internal && this.uiWidgetBase) {
            this.mChatList2ContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList2Canvas/ChatList2Canvas/mChatList2ScrollBox/mChatList2ContentCanvas');
        }
        return this.mChatList2ContentCanvas_Internal;
    }
    get mCloseChatList2Button() {
        if (!this.mCloseChatList2Button_Internal && this.uiWidgetBase) {
            this.mCloseChatList2Button_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mChatList2Canvas/ChatList2Canvas/mCloseChatList2Button');
        }
        return this.mCloseChatList2Button_Internal;
    }
    get mExpressionListCanvas() {
        if (!this.mExpressionListCanvas_Internal && this.uiWidgetBase) {
            this.mExpressionListCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mExpressionListCanvas');
        }
        return this.mExpressionListCanvas_Internal;
    }
    get mExpressionBgImage() {
        if (!this.mExpressionBgImage_Internal && this.uiWidgetBase) {
            this.mExpressionBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mExpressionListCanvas/ExpressionListCanvas/mExpressionBgImage');
        }
        return this.mExpressionBgImage_Internal;
    }
    get mExpressionScrollBox() {
        if (!this.mExpressionScrollBox_Internal && this.uiWidgetBase) {
            this.mExpressionScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mExpressionListCanvas/ExpressionListCanvas/mExpressionScrollBox');
        }
        return this.mExpressionScrollBox_Internal;
    }
    get mExpressionListContentCanvas() {
        if (!this.mExpressionListContentCanvas_Internal && this.uiWidgetBase) {
            this.mExpressionListContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mExpressionListCanvas/ExpressionListCanvas/mExpressionScrollBox/mExpressionListContentCanvas');
        }
        return this.mExpressionListContentCanvas_Internal;
    }
    get mCloseExpressionListButton() {
        if (!this.mCloseExpressionListButton_Internal && this.uiWidgetBase) {
            this.mCloseExpressionListButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mExpressionListCanvas/ExpressionListCanvas/mCloseExpressionListButton');
        }
        return this.mCloseExpressionListButton_Internal;
    }
    get mActionListCanvas() {
        if (!this.mActionListCanvas_Internal && this.uiWidgetBase) {
            this.mActionListCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionListCanvas');
        }
        return this.mActionListCanvas_Internal;
    }
    get mActionBgImage() {
        if (!this.mActionBgImage_Internal && this.uiWidgetBase) {
            this.mActionBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionListCanvas/ActionListCanvas/mActionBgImage');
        }
        return this.mActionBgImage_Internal;
    }
    get mActionTabListCanvas() {
        if (!this.mActionTabListCanvas_Internal && this.uiWidgetBase) {
            this.mActionTabListCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionListCanvas/ActionListCanvas/mActionTabListCanvas');
        }
        return this.mActionTabListCanvas_Internal;
    }
    get mActionScrollBox() {
        if (!this.mActionScrollBox_Internal && this.uiWidgetBase) {
            this.mActionScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionListCanvas/ActionListCanvas/mActionScrollBox');
        }
        return this.mActionScrollBox_Internal;
    }
    get mActionListContentCanvas() {
        if (!this.mActionListContentCanvas_Internal && this.uiWidgetBase) {
            this.mActionListContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionListCanvas/ActionListCanvas/mActionScrollBox/mActionListContentCanvas');
        }
        return this.mActionListContentCanvas_Internal;
    }
    get mCloseActionListButton() {
        if (!this.mCloseActionListButton_Internal && this.uiWidgetBase) {
            this.mCloseActionListButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionListCanvas/ActionListCanvas/mCloseActionListButton');
        }
        return this.mCloseActionListButton_Internal;
    }
    get mBagCanvas() {
        if (!this.mBagCanvas_Internal && this.uiWidgetBase) {
            this.mBagCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagCanvas');
        }
        return this.mBagCanvas_Internal;
    }
    get mCloseBagButton() {
        if (!this.mCloseBagButton_Internal && this.uiWidgetBase) {
            this.mCloseBagButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagCanvas/mCloseBagButton');
        }
        return this.mCloseBagButton_Internal;
    }
    get mBagTabCanvas() {
        if (!this.mBagTabCanvas_Internal && this.uiWidgetBase) {
            this.mBagTabCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagCanvas/mBagTabCanvas');
        }
        return this.mBagTabCanvas_Internal;
    }
    get mBagScrollBox() {
        if (!this.mBagScrollBox_Internal && this.uiWidgetBase) {
            this.mBagScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagCanvas/mBagScrollBox');
        }
        return this.mBagScrollBox_Internal;
    }
    get mBagContentCanvas() {
        if (!this.mBagContentCanvas_Internal && this.uiWidgetBase) {
            this.mBagContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagCanvas/mBagScrollBox/mBagContentCanvas');
        }
        return this.mBagContentCanvas_Internal;
    }
    get mBackBagButton() {
        if (!this.mBackBagButton_Internal && this.uiWidgetBase) {
            this.mBackBagButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagCanvas/mBackBagButton');
        }
        return this.mBackBagButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mOpenChatButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenChatButton");
        });
        this.initLanguage(this.mOpenChatButton);
        this.mOpenChatButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenExpressionButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenExpressionButton");
        });
        this.initLanguage(this.mOpenExpressionButton);
        this.mOpenExpressionButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenBagButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenBagButton");
        });
        this.initLanguage(this.mOpenBagButton);
        this.mOpenBagButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mOpenActionButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenActionButton");
        });
        this.initLanguage(this.mOpenActionButton);
        this.mOpenActionButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseBagButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseBagButton");
        });
        this.initLanguage(this.mCloseBagButton);
        this.mCloseBagButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mBackBagButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mBackBagButton");
        });
        this.initLanguage(this.mBackBagButton);
        this.mBackBagButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        this.mUnloadButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mUnloadButton");
        });
        this.mUnloadButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseChatList1Button.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseChatList1Button");
        });
        this.mCloseChatList1Button.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseChatList2Button.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseChatList2Button");
        });
        this.mCloseChatList2Button.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseExpressionListButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseExpressionListButton");
        });
        this.mCloseExpressionListButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseActionListButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseActionListButton");
        });
        this.mCloseActionListButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ChatPanel_Generate = __decorate([
    UIBind('UI/module/DanMuModule/ChatPanel.ui')
], ChatPanel_Generate);
var ChatPanel_Generate$1 = ChatPanel_Generate;

var foreign67 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ChatPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/InteractionModule/GuidePanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let GuidePanel_Generate = class GuidePanel_Generate extends UIScript {
    get mMainBgImage_0() {
        if (!this.mMainBgImage_0_Internal && this.uiWidgetBase) {
            this.mMainBgImage_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0');
        }
        return this.mMainBgImage_0_Internal;
    }
    get mItemCanvas() {
        if (!this.mItemCanvas_Internal && this.uiWidgetBase) {
            this.mItemCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mItemCanvas');
        }
        return this.mItemCanvas_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mItemCanvas/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    get mTitleImage_0() {
        if (!this.mTitleImage_0_Internal && this.uiWidgetBase) {
            this.mTitleImage_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mTitleImage_0');
        }
        return this.mTitleImage_0_Internal;
    }
    get mTitleImage_1() {
        if (!this.mTitleImage_1_Internal && this.uiWidgetBase) {
            this.mTitleImage_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mTitleImage_1');
        }
        return this.mTitleImage_1_Internal;
    }
    get mClickNextStepButton() {
        if (!this.mClickNextStepButton_Internal && this.uiWidgetBase) {
            this.mClickNextStepButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mClickNextStepButton');
        }
        return this.mClickNextStepButton_Internal;
    }
    get mClickNextStepTextBlock() {
        if (!this.mClickNextStepTextBlock_Internal && this.uiWidgetBase) {
            this.mClickNextStepTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mClickNextStepButton/mClickNextStepTextBlock');
        }
        return this.mClickNextStepTextBlock_Internal;
    }
    get mMainBgImage_1() {
        if (!this.mMainBgImage_1_Internal && this.uiWidgetBase) {
            this.mMainBgImage_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1');
        }
        return this.mMainBgImage_1_Internal;
    }
    get mTitleImage_2() {
        if (!this.mTitleImage_2_Internal && this.uiWidgetBase) {
            this.mTitleImage_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mTitleImage_2');
        }
        return this.mTitleImage_2_Internal;
    }
    get mTitleImage_3() {
        if (!this.mTitleImage_3_Internal && this.uiWidgetBase) {
            this.mTitleImage_3_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mTitleImage_3');
        }
        return this.mTitleImage_3_Internal;
    }
    get mContentTextBlock() {
        if (!this.mContentTextBlock_Internal && this.uiWidgetBase) {
            this.mContentTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mContentTextBlock');
        }
        return this.mContentTextBlock_Internal;
    }
    get mClickStartButton() {
        if (!this.mClickStartButton_Internal && this.uiWidgetBase) {
            this.mClickStartButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mClickStartButton');
        }
        return this.mClickStartButton_Internal;
    }
    get mClickStartTextBlock() {
        if (!this.mClickStartTextBlock_Internal && this.uiWidgetBase) {
            this.mClickStartTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mClickStartButton/mClickStartTextBlock');
        }
        return this.mClickStartTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mClickNextStepButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickNextStepButton");
        });
        this.mClickNextStepButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mClickStartButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickStartButton");
        });
        this.mClickStartButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mClickNextStepTextBlock);
        this.initLanguage(this.mContentTextBlock);
        this.initLanguage(this.mClickStartTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
GuidePanel_Generate = __decorate([
    UIBind('UI/module/InteractionModule/GuidePanel.ui')
], GuidePanel_Generate);
var GuidePanel_Generate$1 = GuidePanel_Generate;

var foreign74 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GuidePanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/InteractionModule/OnClickPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let OnClickPanel_Generate = class OnClickPanel_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage');
        }
        return this.mBgImage_Internal;
    }
    get mClickBtn() {
        if (!this.mClickBtn_Internal && this.uiWidgetBase) {
            this.mClickBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickBtn');
        }
        return this.mClickBtn_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mClickBtn.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickBtn");
        });
        this.mClickBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
OnClickPanel_Generate = __decorate([
    UIBind('UI/module/InteractionModule/OnClickPanel.ui')
], OnClickPanel_Generate);
var OnClickPanel_Generate$1 = OnClickPanel_Generate;

var foreign75 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: OnClickPanel_Generate$1
});

class RoomData {
    constructor(userId, name, killCount, time) {
        this.userId = "";
        this.playerName = "";
        this.score = 0;
        this.time = 0;
        this.userId = userId;
        this.playerName = name;
        this.score = killCount;
        this.time = time;
    }
    setData(userId, name, killCount, time) {
        this.userId = userId;
        this.playerName = name;
        this.score = killCount;
        this.time = time;
    }
}
class WorldData {
    constructor(userId, name, time) {
        this.userId = "";
        this.playerName = "";
        this.time = 0;
        this.userId = userId;
        this.playerName = name;
        this.time = time;
    }
    setData(userId, name, time) {
        this.userId = userId;
        this.playerName = name;
        this.time = time;
    }
}
class RankData extends Subdata {
    constructor() {
        super(...arguments);
        this.time = 0;
    }
    setTime(addTime) {
        this.time += addTime;
        this.save(false);
    }
    get getTime() {
        return this.time;
    }
}
__decorate([
    Decorator.persistence()
], RankData.prototype, "time", void 0);

var foreign37 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    RankData: RankData,
    RoomData: RoomData,
    WorldData: WorldData
});

class RankModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.worldDatas = [];
        this.isInitWorldDatas = false;
        this.time = 60;
        this.timer = 0;
        this.syncPlayerMap = new Map();
        this.roomDataMap = new Map();
        this.roomUserIds = [];
        this.roomNames = [];
        this.roomScores = [];
        this.roomTimes = [];
        this.worldUserIds = [];
        this.worldNames = [];
        this.worldTimes = [];
        this.redFirstModel = null;
        this.blueFirstModel = null;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initData();
    }
    async initData() {
        this.worldDatas = (await Utils.getCustomdata("WorldData"));
        this.isInitWorldDatas = true;
    }
    onUpdate(dt) {
        this.timer += dt;
        if (this.timer >= this.time) {
            this.timer = 0;
            this.refreshTime();
        }
    }
    onPlayerLeft(player) {
        let userId = player.userId;
        if (this.roomDataMap.has(userId))
            this.roomDataMap.delete(userId);
        if (this.syncPlayerMap.has(player))
            this.syncPlayerMap.delete(player);
        this.synchrodata_Room();
    }
    net_updateSyncPlayer(isSync) {
        let player = this.currentPlayer;
        if (!this.syncPlayerMap.has(player))
            return;
        this.syncPlayerMap.set(player, isSync);
        if (isSync)
            this.synchrodata_aRoomWorld(player);
    }
    net_onEnterScene(playerName, score, time) {
        this.syncPlayerMap.set(this.currentPlayer, false);
        let userId = this.currentPlayer.userId;
        this.currentPlayer.character.displayName = playerName;
        this.onEnterScene(userId, playerName, score, time);
    }
    onEnterScene(userId, playerName, score, time) {
        let roomData = new RoomData(userId, playerName, score, time);
        this.roomDataMap.set(userId, roomData);
        let worldData = new WorldData(userId, playerName, time);
        this.isRefreshWorldData([worldData]);
        this.synchrodata_onEnterScene(userId);
    }
    refreshScore(userId, score) {
        if (!this.roomDataMap.has(userId))
            return;
        let roomData = this.roomDataMap.get(userId);
        roomData.score = score;
        this.synchrodata_Room();
    }
    async refreshTime() {
        if (!this.syncPlayerMap || this.syncPlayerMap.size == 0)
            return;
        let tmpWorldDatas = [];
        this.syncPlayerMap.forEach((value, key) => {
            DataCenterS.getData(key, RankData).setTime(1);
            let userId = key.userId;
            if (!this.roomDataMap.has(userId))
                return;
            let roomData = this.roomDataMap.get(userId);
            roomData.time += 1;
            let worldData = new WorldData(userId, roomData.playerName, roomData.time);
            tmpWorldDatas.push(worldData);
        });
        this.worldDatas = (await Utils.getCustomdata("WorldData"));
        this.isRefreshWorldData(tmpWorldDatas);
        this.synchrodata_World();
    }
    isRefreshWorldData(tmpWorldDatas) {
        if (!this.isInitWorldDatas)
            return false;
        if (this.worldDatas == null)
            this.worldDatas = [];
        let isNeedSave = false;
        for (let k = 0; k < tmpWorldDatas.length; ++k) {
            let isPush = false;
            let ishasDelete = false;
            let ishasData = false;
            let worldData = tmpWorldDatas[k];
            if (this.worldDatas.length < GlobalData.worldCount) {
                if (this.worldDatas.length == 0) {
                    this.worldDatas.push(worldData);
                    isPush = true;
                    isNeedSave = true;
                }
                else {
                    for (let i = 0; i < this.worldDatas.length; ++i) {
                        if (this.worldDatas[i].userId != worldData.userId)
                            continue;
                        if (worldData.time > this.worldDatas[i].time) {
                            this.worldDatas.splice(i, 1);
                            break;
                        }
                        else {
                            ishasData = true;
                            break;
                        }
                    }
                    if (ishasData)
                        continue;
                    for (let i = 0; i < this.worldDatas.length; i++) {
                        if (worldData.time > this.worldDatas[i].time) {
                            this.worldDatas.splice(i, 0, worldData);
                            isPush = true;
                            isNeedSave = true;
                            break;
                        }
                    }
                    if (!isPush) {
                        this.worldDatas.push(worldData);
                        isPush = true;
                        isNeedSave = true;
                    }
                }
            }
            else {
                for (let i = 0; i < this.worldDatas.length; ++i) {
                    if (this.worldDatas[i].userId != worldData.userId)
                        continue;
                    if (worldData.time > this.worldDatas[i].time) {
                        this.worldDatas.splice(i, 1);
                        ishasDelete = true;
                        break;
                    }
                    else {
                        ishasData = true;
                        break;
                    }
                }
                if (ishasData)
                    continue;
                for (let i = 0; i < this.worldDatas.length; i++) {
                    if (worldData.time > this.worldDatas[i].time) {
                        this.worldDatas.splice(i, 0, worldData);
                        if (!ishasDelete) {
                            this.worldDatas.pop();
                        }
                        isPush = true;
                        isNeedSave = true;
                        break;
                    }
                }
            }
        }
        if (isNeedSave) {
            Utils.setCustomData("WorldData", this.worldDatas);
        }
        return isNeedSave;
    }
    updateRoomData() {
        if (this.roomDataMap.size == 0 || !this.roomDataMap)
            return;
        this.roomUserIds.length = 0;
        this.roomNames.length = 0;
        this.roomScores.length = 0;
        this.roomDataMap.forEach((value, key) => {
            this.roomUserIds.push(value.userId);
            this.roomNames.push(value.playerName);
            this.roomScores.push(value.score);
            this.roomTimes.push(value.time);
        });
    }
    updateWorldData() {
        if (!this.worldDatas || this.worldDatas.length == 0)
            return;
        this.worldUserIds.length = 0;
        this.worldNames.length = 0;
        this.worldTimes.length = 0;
        for (let i = 0; i < this.worldDatas.length; i++) {
            this.worldUserIds.push(this.worldDatas[i].userId);
            this.worldNames.push(this.worldDatas[i].playerName);
            this.worldTimes.push(this.worldDatas[i].time);
        }
    }
    synchrodata_onEnterScene(sendUserId) {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            if (sendUserId == key.userId) {
                this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomScores, this.roomTimes, this.worldUserIds, this.worldNames, this.worldTimes);
            }
            else {
                this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomScores, this.roomTimes);
            }
        });
    }
    synchrodata_Room() {
        this.updateRoomData();
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomRankData(this.roomUserIds, this.roomNames, this.roomScores, this.roomTimes);
        });
    }
    synchrodata_World() {
        this.updateWorldData();
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            this.getClient(key).net_syncWorldRankData(this.worldUserIds, this.worldNames, this.worldTimes);
        });
    }
    synchrodata_RoomWorld() {
        this.updateRoomData();
        this.updateWorldData();
        this.syncPlayerMap.forEach((value, key) => {
            // if (!value) return;
            this.getClient(key).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomScores, this.roomTimes, this.worldUserIds, this.worldNames, this.worldTimes);
        });
    }
    synchrodata_aRoomWorld(player) {
        this.getClient(player).net_syncRoomWorldRankData(this.roomUserIds, this.roomNames, this.roomScores, this.roomTimes, this.worldUserIds, this.worldNames, this.worldTimes);
    }
    getNamesByUserId(userId1, userId2) {
        if (this.roomDataMap.has(userId1) && this.roomDataMap.has(userId2)) {
            return [this.roomDataMap.get(userId1).playerName, this.roomDataMap.get(userId2).playerName];
        }
        return null;
    }
    getNameByUserId(userId) {
        if (this.roomDataMap.has(userId)) {
            return this.roomDataMap.get(userId).playerName;
        }
        return null;
    }
    net_setFirstModel(isRed) {
        let character = this.currentPlayer.character;
        this.setFirstModel(character, isRed);
    }
    async setFirstModel(character, isRed) {
        if (isRed) {
            if (!this.redFirstModel)
                this.redFirstModel = await GameObjPool.asyncSpawn("C825D655443D938EB73591BEEB5CCC81", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.redFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.redFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.redFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        }
        else {
            if (!this.blueFirstModel)
                this.blueFirstModel = await GameObjPool.asyncSpawn("0B59ECA6477D8CA6237016BF613FB019", mwext.GameObjPoolSourceType.Prefab);
            character.attachToSlot(this.blueFirstModel, mw.HumanoidSlotType.BackOrnamental);
            this.blueFirstModel.localTransform.position = new mw.Vector(15, 0, 0);
            this.blueFirstModel.localTransform.rotation = new mw.Rotation(0, 0, -90);
        }
    }
}
__decorate([
    Decorator.noReply()
], RankModuleS.prototype, "net_updateSyncPlayer", null);
__decorate([
    Decorator.noReply()
], RankModuleS.prototype, "net_onEnterScene", null);
__decorate([
    Decorator.noReply()
], RankModuleS.prototype, "net_setFirstModel", null);

var foreign39 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankModuleS
});

class GuidePanel extends GuidePanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.clickNextStepCallBack = null;
        this.clickStartCallBack = null;
    }
    onStart() {
        this.initUI();
        this.binButtons();
    }
    initUI() {
        if (GlobalData.languageId == 0) {
            Utils.setWidgetVisibility(this.mTitleImage_0, mw.SlateVisibility.SelfHitTestInvisible);
            Utils.setWidgetVisibility(this.mTitleImage_1, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mTitleImage_2, mw.SlateVisibility.SelfHitTestInvisible);
            Utils.setWidgetVisibility(this.mTitleImage_3, mw.SlateVisibility.Collapsed);
        }
        else {
            Utils.setWidgetVisibility(this.mTitleImage_0, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mTitleImage_1, mw.SlateVisibility.SelfHitTestInvisible);
            Utils.setWidgetVisibility(this.mTitleImage_2, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mTitleImage_3, mw.SlateVisibility.SelfHitTestInvisible);
        }
    }
    binButtons() {
        this.mClickNextStepButton.onClicked.add(this.onClickNextStepButton.bind(this));
        this.mClickStartButton.onClicked.add(this.onClickStartButton.bind(this));
    }
    onClickNextStepButton() {
        if (this.clickNextStepCallBack)
            this.clickNextStepCallBack();
        this.hide();
    }
    onClickStartButton() {
        if (this.clickStartCallBack)
            this.clickStartCallBack();
        this.hide();
    }
    showStepTips(bagId, clickCallBack, clickTextBlock) {
        if (GameConfig.ActionProp.getElement(bagId).NextId == bagId)
            bagId -= 1;
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        if (!actionPropElement.AssetId) {
            bagId = actionPropElement.NextId;
        }
        this.setIcon(bagId);
        this.clickNextStepCallBack = clickCallBack;
        this.mClickNextStepTextBlock.text = clickTextBlock;
        Utils.setWidgetVisibility(this.mMainBgImage_0, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mMainBgImage_1, mw.SlateVisibility.Collapsed);
        this.show();
    }
    setIcon(bagId) {
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        if (actionPropElement.Tab == 2 || actionPropElement.Tab == 6) {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
            }
        }
        else {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
            }
        }
        if (actionPropElement.VehiclesIcon) {
            this.mIconImage.imageGuid = actionPropElement.VehiclesIcon;
        }
        else if (actionPropElement.Icon) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.Icon);
        }
        else if (actionPropElement.AssetId) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.AssetId);
        }
        else if (bagId == actionPropElement.NextId) {
            let nextActionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId - 1);
            if (nextActionPropElement.VehiclesIcon) {
                this.mIconImage.imageGuid = nextActionPropElement.VehiclesIcon;
            }
            else if (nextActionPropElement.Icon) {
                Utils.setImageByAssetIconData(this.mIconImage, nextActionPropElement.Icon);
            }
            else if (nextActionPropElement.AssetId) {
                Utils.setImageByAssetIconData(this.mIconImage, nextActionPropElement.AssetId);
            }
        }
    }
    showStartTips(clickStartCallBack, clickStartTextBlock, contentTextBlock) {
        this.clickStartCallBack = clickStartCallBack;
        this.mClickStartTextBlock.text = clickStartTextBlock;
        this.mContentTextBlock.text = contentTextBlock;
        Utils.setWidgetVisibility(this.mMainBgImage_1, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mMainBgImage_0, mw.SlateVisibility.Collapsed);
        this.show();
    }
}
class OnClickPanel extends OnClickPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.interactionModuleC = null;
        this.id = -1;
        this.offset = new mw.Vector(0, 0, 0);
        this.obj = null;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getInteractionModuleC() {
        if (this.interactionModuleC == null) {
            this.interactionModuleC = ModuleService.getModule(InteractionModuleC);
        }
        return this.interactionModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerMiddle;
        this.initUI();
        this.bindButtons();
        this.registerActions();
    }
    initUI() {
        // Utils.setWidgetVisibility(this.mBgImage, mw.SlateVisibility.Collapsed);
    }
    /**按钮绑定 */
    bindButtons() {
        this.mClickBtn.onClicked.add(this.onClickButtons.bind(this));
    }
    /**注册事件 */
    registerActions() {
        this.getHUDModuleC.onExitAction.add(this.onExitHandler.bind(this));
    }
    onExitHandler() {
        // this.getInteractionModuleC.interact(false, this.id);
    }
    onClickButtons() {
        if (!this.id)
            return;
        console.warn("OnClickPanel-this.id = " + this.id);
        this.canUpdate = false;
        this.hide();
        if (this.id <= 0)
            return;
        this.getInteractionModuleC.interact(true, this.id);
    }
    /**显示NPC按钮 */
    showBtn(id, obj) {
        this.id = id;
        this.canUpdate = true;
        this.obj = obj;
        let pos = InputUtil.projectWorldPositionToWidgetPosition(this.obj.worldTransform.position.add(this.offset), false).screenPosition;
        this.rootCanvas.position = pos.subtract(this.rootCanvas.size.multiply(0.5));
        this.rootCanvas.visibility = mw.SlateVisibility.SelfHitTestInvisible;
        this.show();
    }
    /**隐藏NPC按钮 */
    hideBtn() {
        this.canUpdate = false;
        this.hide();
    }
    onShow(...params) {
        console.error("[OnClickPanel-onShow]");
    }
    onUpdate(dt) {
        if (!this.obj)
            return;
        let pos = mw.InputUtil.projectWorldPositionToWidgetPosition(this.obj.worldTransform.position.add(this.offset), false).screenPosition;
        this.rootCanvas.position = pos.subtract(this.rootCanvas.size.multiply(0.5));
    }
}
class InteractionModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.onClickPanel = null;
        this.hudModuleC = null;
        this.adPanel = null;
        this.tipsPanel = null;
        this.onClickBagItemAction = new Action1();
        this.currentDescription = null;
        this.triggerLocMap = new Map();
        this.bagIds = [];
        this.guidePanel = null;
        this.guideStep = 0;
        this.guideBagIds = [60004, 20002, 10106, 30002];
    }
    get getOnClickPanel() {
        if (this.onClickPanel == null) {
            this.onClickPanel = mw.UIService.getUI(OnClickPanel);
        }
        return this.onClickPanel;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getAdPanel() {
        if (this.adPanel == null) {
            this.adPanel = mw.UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    get getTipsPanel() {
        if (this.tipsPanel == null) {
            this.tipsPanel = mw.UIService.getUI(TipsPanel);
        }
        return this.tipsPanel;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.bindEvent();
    }
    onEnterScene(sceneType) {
        this.initBagIds();
        this.initGuide();
        this.findTriggers();
    }
    bindEvent() {
        this.onClickBagItemAction.add(this.addClickBagItemAction.bind(this));
    }
    findTriggers() {
        GameConfig.Interact.getAllElement().forEach(async (value) => {
            let triggerGuid = value.TriggerGuid;
            if (triggerGuid && triggerGuid.length > 0) {
                let trigger = await GameObject.asyncFindGameObjectById(triggerGuid);
                await trigger.asyncReady();
                trigger.onEnter.add((char) => {
                    this.onEnterTrigger(char, value.ID, trigger);
                });
                trigger.onLeave.add((char) => {
                    this.onLeaveTrigger(char);
                });
                let bagId = value.BagId;
                this.triggerLocMap.set(bagId, trigger.worldTransform.position);
                // if (GameConfig.ActionProp.getElement(bagId).NextId == bagId) bagId -= 1;
                // let actionPropElement = GameConfig.ActionProp.getElement(bagId);
                // if (!actionPropElement.AssetId) {
                //     bagId = actionPropElement.NextId;
                // }
                if (value.ModelGuid_C && value.ModelGuid_C.length > 0) {
                    GameObject.asyncSpawn(value.ModelGuid_C).then((model) => {
                        model.worldTransform.position = trigger.worldTransform.position;
                        // model.worldTransform.rotation = trigger.worldTransform.rotation;
                        // model.worldTransform.scale = trigger.worldTransform.scale;
                    });
                }
            }
            let npcId = value.NpcId;
            if (npcId && npcId.length > 0) {
                let npc = await GameObject.asyncFindGameObjectById(npcId);
                await npc.asyncReady();
                npc.complexMovementEnabled = false;
                npc.collisionWithOtherCharacterEnabled = false;
                let shareId = value.ShareId;
                if (shareId > 0) {
                    let shareIdStr = GameConfig.ShareId.getElement(shareId).ShareId;
                    if (shareIdStr && shareIdStr.length > 0) {
                        Utils.applySharedId(npc, shareIdStr);
                    }
                }
                else {
                    this.currentDescription = this.localPlayer.character.getDescription();
                    npc.setDescription(this.currentDescription);
                }
                let npcAnimationId = value.NpcAnimationId;
                if (npcAnimationId && npcAnimationId.length > 0) {
                    await Utils.asyncDownloadAsset(npcAnimationId);
                    npc.loadSubStance(npcAnimationId).play();
                    setTimeout(() => {
                        npc.localTransform.position = new mw.Vector(0, 0, npc.localTransform.position.z);
                    }, 1000);
                }
            }
            console.error(this.triggerLocMap.size);
        });
    }
    onEnterTrigger(char, id, go) {
        if (char != Player.localPlayer.character)
            return;
        this.getOnClickPanel.showBtn(id, go);
    }
    onLeaveTrigger(char) {
        if (char != Player.localPlayer.character)
            return;
        this.getOnClickPanel.hideBtn();
    }
    interact(isInteract, id) {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            let interact = GameConfig.Interact.getElement(id);
            let bagId = interact.BagId;
            if (bagId && bagId > 0) {
                let modelGuid = interact.ModelGuid;
                if (modelGuid && modelGuid.length > 0) {
                    this.server.net_playInteract(bagId, modelGuid).then((interactCode) => {
                        if (interactCode == 0) {
                            Notice.showDownNotice(GameConfig.Language.Text_ThisItemIsInUse.Value);
                        }
                    });
                }
                if (GameConfig.ActionProp.getElement(bagId).NextId == bagId)
                    bagId -= 1;
                this.getHUDModuleC.action(bagId);
                let actionPropElement = GameConfig.ActionProp.getElement(bagId);
                if (!actionPropElement.AssetId) {
                    bagId = actionPropElement.NextId;
                }
                this.setBagId(bagId);
            }
            let npcId = interact.NpcId;
            if (npcId && npcId.length > 0) {
                let shareId = interact.ShareId;
                if (shareId > 0) {
                    let shareIdStr = GameConfig.ShareId.getElement(shareId).ShareId;
                    if (shareIdStr && shareIdStr.length > 0) {
                        await Utils.applySharedId(this.localPlayer.character, shareIdStr);
                    }
                }
                else {
                    this.localPlayer.character.setDescription(this.currentDescription);
                    await this.localPlayer.character.asyncReady();
                    this.localPlayer.character.syncDescription();
                }
            }
        });
    }
    addClickBagItemAction(bagId) {
        if (this.bagIds.includes(bagId))
            return;
        let nextId = GameConfig.ActionProp.getElement(bagId).NextId;
        if (nextId && nextId > 0)
            bagId = nextId;
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                if (this.triggerLocMap.has(bagId)) {
                    let targetLoc = this.triggerLocMap.get(bagId);
                    Utils.startGuide(targetLoc, () => { });
                }
            }, GameConfig.Language.Text_ADGetTips.Value, GameConfig.Language.Text_Dont.Value, GameConfig.Language.Text_Free.Value);
        }
        else {
            this.getTipsPanel.showTips(() => {
                if (this.triggerLocMap.has(bagId)) {
                    let targetLoc = this.triggerLocMap.get(bagId);
                    Utils.startGuide(targetLoc, () => { });
                }
            }, GameConfig.Language.Text_BootPrompt.Value, GameConfig.Language.Text_FreeGuideYouGet.Value, GameConfig.Language.Text_Dont.Value, GameConfig.Language.Text_Free.Value);
        }
    }
    initBagIds() {
        this.bagIds = this.data.bagIds;
    }
    setBagId(bagId) {
        if (this.bagIds.includes(bagId))
            return;
        Notice.showDownNotice(GameConfig.Language.Text_ObtainedTips.Value);
        this.bagIds.push(bagId);
        this.server.net_setBagId(bagId);
    }
    get getBagIds() {
        return this.bagIds;
    }
    get getGuidePanel() {
        if (this.guidePanel == null) {
            this.guidePanel = mw.UIService.getUI(GuidePanel);
        }
        return this.guidePanel;
    }
    initGuide() {
        this.guideStep = this.data.guideStep;
        this.startGuide();
    }
    setGuideStep(addStep) {
        this.guideStep += addStep;
        this.server.net_setGuideStep(addStep);
    }
    startGuide() {
        if (!this.guideBagIds || this.guideBagIds.length == 0)
            return;
        if (this.guideStep >= this.guideBagIds.length - 1) {
            this.localPlayer.character.asyncReady().then(() => {
                this.getHUDModuleC.onOpenClothAction.call();
            });
            return;
        }
        this.getGuidePanel.showStartTips(() => {
            this.getHUDModuleC.onOpenClothAction.call();
            let bagId = this.guideBagIds[0];
            console.error(`bagId1:${bagId}`);
            if (!this.triggerLocMap.has(bagId)) {
                console.error(`bagId2:${bagId}`);
                return;
            }
            let targetLoc = this.triggerLocMap.get(bagId);
            console.error(`targetLoc:${targetLoc}`);
            Utils.startGuide(targetLoc, () => {
                this.setGuideStep(1);
                this.getGuidePanel.showStepTips(bagId, () => {
                    this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                    if (this.guideStep >= this.guideBagIds.length)
                        return;
                    bagId = this.guideBagIds[1];
                    if (!this.triggerLocMap.has(bagId))
                        return;
                    targetLoc = this.triggerLocMap.get(bagId);
                    Utils.startGuide(targetLoc, () => {
                        this.setGuideStep(1);
                        this.getGuidePanel.showStepTips(bagId, () => {
                            this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                            if (this.guideStep >= this.guideBagIds.length)
                                return;
                            bagId = this.guideBagIds[2];
                            if (!this.triggerLocMap.has(bagId))
                                return;
                            targetLoc = this.triggerLocMap.get(bagId);
                            Utils.startGuide(targetLoc, () => {
                                this.setGuideStep(1);
                                this.getGuidePanel.showStepTips(bagId, () => {
                                    this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                                    if (this.guideStep >= this.guideBagIds.length)
                                        return;
                                    bagId = this.guideBagIds[3];
                                    if (!this.triggerLocMap.has(bagId))
                                        return;
                                    targetLoc = this.triggerLocMap.get(bagId);
                                    Utils.startGuide(targetLoc, () => {
                                        this.setGuideStep(1);
                                        this.getGuidePanel.showStepTips(bagId, () => {
                                            this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                                            this.getGuidePanel.showStepTips(bagId, () => {
                                                this.getGuidePanel.showStartTips(() => {
                                                }, GameConfig.Language.Text_Close.Value, GameConfig.Language.Text_GuideEnd.Value);
                                            }, GameConfig.Language.Text_UpNext.Value);
                                        }, GameConfig.Language.Text_UpNext.Value);
                                    });
                                }, GameConfig.Language.Text_UpNext.Value);
                            });
                        }, GameConfig.Language.Text_UpNext.Value);
                    });
                }, GameConfig.Language.Text_UpNext.Value);
            });
        }, GameConfig.Language.Text_StartGame.Value, GameConfig.Language.Text_WelcomeTo.Value);
    }
}
class InteractionModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.rankModuleS = null;
        this.modelGuidMap = new Map();
        this.usingBagIdMap = new Map();
    }
    get getRankModuleS() {
        if (this.rankModuleS == null) {
            this.rankModuleS = ModuleService.getModule(RankModuleS);
        }
        return this.rankModuleS;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    onPlayerLeft(player) {
    }
    async net_playInteract(bagId, modelGuid) {
        let player = this.currentPlayer;
        let playerId = player.playerId;
        let usingBagIds = [];
        if (this.usingBagIdMap.has(playerId)) {
            usingBagIds = this.usingBagIdMap.get(playerId);
            if (usingBagIds.includes(bagId))
                return 0;
            usingBagIds.push(bagId);
        }
        else {
            usingBagIds.push(bagId);
            this.usingBagIdMap.set(playerId, usingBagIds);
        }
        console.error(`usingBagIds = ${usingBagIds}`);
        let model = null;
        if (this.modelGuidMap.has(modelGuid)) {
            model = this.modelGuidMap.get(modelGuid);
        }
        else {
            model = await mw.GameObject.asyncFindGameObjectById(modelGuid);
            this.modelGuidMap.set(modelGuid, model);
        }
        await model.asyncReady();
        this.placingItems(player, bagId, model).then(() => {
            usingBagIds.splice(usingBagIds.indexOf(bagId), 1);
            console.error(`usingBagIds = ${usingBagIds}`);
        });
        return 1;
    }
    async placingItems(player, bagId, itemMode) {
        if (!player)
            return;
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        let animationId = actionPropElement.AnimationId;
        if (animationId && animationId.length > 0) {
            await Utils.asyncDownloadAsset(animationId);
            let animation = player.character.loadAnimation(animationId);
            if (actionPropElement.AnimationSlot)
                animation.slot = actionPropElement.AnimationSlot;
            let parameter = actionPropElement.AnimationParameter;
            if (parameter && parameter.length > 0) {
                animation.speed = parameter[0];
                animation.loop = parameter[1];
            }
            animation.play();
        }
        let playAnimationTime = 1;
        if (actionPropElement.AnimationParameter && actionPropElement.AnimationParameter.length > 0) {
            playAnimationTime = actionPropElement.AnimationParameter[0];
        }
        await TimeUtil.delaySecond(playAnimationTime);
        let delayModeEffectId = null;
        let delayModeEffectAssetId = actionPropElement.DelayModeEffectId;
        if (delayModeEffectAssetId && delayModeEffectAssetId.length > 0) {
            await Utils.asyncDownloadAsset(delayModeEffectAssetId);
            let delayModeEffectOffsetParameter = actionPropElement.DelayModeEffectOffsetParameter;
            delayModeEffectId = EffectService.playOnGameObject(delayModeEffectAssetId, itemMode, {
                loopCount: 0,
                position: new mw.Vector(delayModeEffectOffsetParameter[0], delayModeEffectOffsetParameter[1], delayModeEffectOffsetParameter[2]),
                rotation: new mw.Rotation(delayModeEffectOffsetParameter[3], delayModeEffectOffsetParameter[4], delayModeEffectOffsetParameter[5]),
                scale: new mw.Vector(delayModeEffectOffsetParameter[6], delayModeEffectOffsetParameter[7], delayModeEffectOffsetParameter[8])
            });
        }
        let delayParameter = actionPropElement.DelayParameter;
        let delayTime = delayParameter[0];
        let delayCount = delayParameter[1];
        let delayInterval = delayParameter[2];
        await TimeUtil.delaySecond(delayTime - playAnimationTime);
        for (let i = 0; i < delayCount; ++i) {
            await new Promise((resolve) => {
                setTimeout(async () => {
                    let DelayEffectAssetId = actionPropElement.DelayEffectId;
                    if (DelayEffectAssetId && DelayEffectAssetId.length > 0) {
                        await Utils.asyncDownloadAsset(DelayEffectAssetId);
                        let delayEffectOffsetParameter = actionPropElement.DelayEffectOffsetParameter;
                        EffectService.playAtPosition(DelayEffectAssetId, itemMode.worldTransform.position, {
                            loopCount: 1,
                            rotation: itemMode.worldTransform.rotation,
                            scale: new mw.Vector(delayEffectOffsetParameter[6], delayEffectOffsetParameter[7], delayEffectOffsetParameter[8])
                        });
                        let delayModeSoundId = actionPropElement.DelayModeSoundId;
                        if (delayModeSoundId && delayModeSoundId.length > 0) {
                            await Utils.asyncDownloadAsset(delayModeSoundId);
                            let delayModeSoundParameter = actionPropElement.DelayModeSoundParameter;
                            SoundService.play3DSound(delayModeSoundId, itemMode.worldTransform.position, 1, delayModeSoundParameter[0], { radius: delayModeSoundParameter[1], falloffDistance: delayModeSoundParameter[1] * 1.2 });
                        }
                    }
                    return resolve();
                }, delayInterval * 1000);
            });
        }
        if (actionPropElement.ID != 30004)
            await TimeUtil.delaySecond(delayInterval);
        if (delayModeEffectId)
            EffectService.stop(delayModeEffectId);
    }
    net_setBagId(bagId) {
        this.currentData.setBagId(bagId);
        let score = this.currentData.bagIds.length;
        this.getRankModuleS.refreshScore(this.currentPlayer.userId, score);
    }
    net_setGuideStep(addStep) {
        this.currentData.setGuideStep(addStep);
    }
}
__decorate([
    Decorator.noReply()
], InteractionModuleS.prototype, "net_setBagId", null);
__decorate([
    Decorator.noReply()
], InteractionModuleS.prototype, "net_setGuideStep", null);
class PlayerInteractor {
    constructor() {
        this.isCanSit = true;
        this.interactor = null;
    }
}
var OnClickType;
(function (OnClickType) {
    OnClickType[OnClickType["Sit"] = 1] = "Sit";
    OnClickType[OnClickType["Shake"] = 2] = "Shake";
    OnClickType[OnClickType["Dance"] = 3] = "Dance";
})(OnClickType || (OnClickType = {}));
class InteractionData extends Subdata {
    constructor() {
        super(...arguments);
        this.bagIds = [];
        this.guideStep = 0;
    }
    setBagId(bagId) {
        if (this.bagIds.includes(bagId))
            return;
        this.bagIds.push(bagId);
        this.save(false);
    }
    setGuideStep(addStep) {
        this.guideStep += addStep;
        this.save(false);
    }
}
__decorate([
    Decorator.persistence()
], InteractionData.prototype, "bagIds", void 0);
__decorate([
    Decorator.persistence()
], InteractionData.prototype, "guideStep", void 0);

var foreign35 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GuidePanel: GuidePanel,
    InteractionData: InteractionData,
    InteractionModuleC: InteractionModuleC,
    InteractionModuleS: InteractionModuleS,
    OnClickPanel: OnClickPanel,
    get OnClickType () { return OnClickType; },
    PlayerInteractor: PlayerInteractor
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/ActionItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let ActionItem_Generate = class ActionItem_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage');
        }
        return this.mBgImage_Internal;
    }
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    get nNameTextBlock() {
        if (!this.nNameTextBlock_Internal && this.uiWidgetBase) {
            this.nNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/nNameTextBlock');
        }
        return this.nNameTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.nNameTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ActionItem_Generate = __decorate([
    UIBind('UI/module/DanMuModule/ActionItem.ui')
], ActionItem_Generate);
var ActionItem_Generate$1 = ActionItem_Generate;

var foreign60 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActionItem_Generate$1
});

class ActionItem extends ActionItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.isCanClick = true;
        this.index = 0;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButton();
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
    }
    addClickButton() {
        if (!this.isCanClick)
            return;
        this.isCanClick = false;
        TimeUtil.delaySecond(1).then(() => { this.isCanClick = true; });
        this.getDanMuModuleC.onClickActionItemAction.call(this.index);
    }
    setDatas(tabIndex, index, actionData) {
        this.index = index;
        this.mIconImage.imageGuid = tabIndex != 1 ? actionData.icon : actionData.icon.split('-')[1];
        this.nNameTextBlock.text = actionData.names[GlobalData.languageId];
    }
}

var foreign24 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActionItem
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/ActionTabItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let ActionTabItem_Generate = class ActionTabItem_Generate extends UIScript {
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    get mTabNameTextBlock() {
        if (!this.mTabNameTextBlock_Internal && this.uiWidgetBase) {
            this.mTabNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton/mTabNameTextBlock');
        }
        return this.mTabNameTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTabNameTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ActionTabItem_Generate = __decorate([
    UIBind('UI/module/DanMuModule/ActionTabItem.ui')
], ActionTabItem_Generate);
var ActionTabItem_Generate$1 = ActionTabItem_Generate;

var foreign61 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActionTabItem_Generate$1
});

class ActionTabItem extends ActionTabItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.index = 0;
        this.isSelect = false;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mClickButton.normalImageGuid = `221282`;
        this.mClickButton.pressedImageGuid = `221283`;
        this.mClickButton.disableImageGuid = `221283`;
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
        this.getDanMuModuleC.onClickActionTabAction.add(this.addClickActionTabAction.bind(this));
    }
    addClickButton() {
        this.getDanMuModuleC.onClickActionTabAction.call(this.index);
    }
    addClickActionTabAction(index) {
        if (index == this.index) {
            this.select(true);
        }
        else {
            this.select(false);
        }
    }
    setDatas(index, name) {
        this.index = index;
        let nameStr = name.split(`-`);
        this.mTabNameTextBlock.text = nameStr[GlobalData.languageId];
    }
    select(isSelect) {
        if (this.isSelect == isSelect)
            return;
        this.isSelect = isSelect;
        let icon = isSelect ? `221283` : `221282`;
        this.mClickButton.normalImageGuid = icon;
    }
}

var foreign25 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ActionTabItem
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/BagItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let BagItem_Generate = class BagItem_Generate extends UIScript {
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    get mLockCanvas() {
        if (!this.mLockCanvas_Internal && this.uiWidgetBase) {
            this.mLockCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mLockCanvas');
        }
        return this.mLockCanvas_Internal;
    }
    get mLockImage() {
        if (!this.mLockImage_Internal && this.uiWidgetBase) {
            this.mLockImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mLockCanvas/mLockImage');
        }
        return this.mLockImage_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
BagItem_Generate = __decorate([
    UIBind('UI/module/DanMuModule/BagItem.ui')
], BagItem_Generate);
var BagItem_Generate$1 = BagItem_Generate;

var foreign62 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: BagItem_Generate$1
});

class BagItem extends BagItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.interactionModuleC = null;
        this.bagId = 0;
        this.isHas = false;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    get getInteractionModuleC() {
        if (!this.interactionModuleC) {
            this.interactionModuleC = ModuleService.getModule(InteractionModuleC);
        }
        return this.interactionModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButton();
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
    }
    addClickButton() {
        if (this.isHas) {
            this.getDanMuModuleC.onClickBagItemAction.call(this.bagId);
        }
        else {
            this.getInteractionModuleC.onClickBagItemAction.call(this.bagId);
        }
    }
    setDatas(bagId, isHas) {
        this.bagId = bagId;
        let actionPropElement = GameConfig.ActionProp.getElement(this.bagId);
        if (actionPropElement.VehiclesIcon) {
            this.mIconImage.imageGuid = actionPropElement.VehiclesIcon;
        }
        else if (actionPropElement.Icon) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.Icon);
        }
        else if (actionPropElement.AssetId) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.AssetId);
        }
        this.isHas = isHas;
        this.updateState();
    }
    updateState() {
        if (this.isHas) {
            Utils.setWidgetVisibility(this.mLockCanvas, mw.SlateVisibility.Collapsed);
            // this.mIconImage.setImageColorByHex("FFFFFFFF");
        }
        else {
            Utils.setWidgetVisibility(this.mLockCanvas, mw.SlateVisibility.SelfHitTestInvisible);
            // this.mIconImage.setImageColorByHex("646464FF");
        }
    }
}

var foreign26 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: BagItem
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/BagTabItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let BagTabItem_Generate = class BagTabItem_Generate extends UIScript {
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    get mTabNameTextBlock() {
        if (!this.mTabNameTextBlock_Internal && this.uiWidgetBase) {
            this.mTabNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton/mTabNameTextBlock');
        }
        return this.mTabNameTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTabNameTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
BagTabItem_Generate = __decorate([
    UIBind('UI/module/DanMuModule/BagTabItem.ui')
], BagTabItem_Generate);
var BagTabItem_Generate$1 = BagTabItem_Generate;

var foreign63 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: BagTabItem_Generate$1
});

class BagTabItem extends BagTabItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.index = 0;
        this.isSelect = false;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mClickButton.normalImageGuid = `221282`;
        this.mClickButton.pressedImageGuid = `221283`;
        this.mClickButton.disableImageGuid = `221283`;
        if (GlobalData.languageId == 0) {
            this.mTabNameTextBlock.fontSize = 15;
        }
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
        this.getDanMuModuleC.onClickBagTabAction.add(this.addClickActionTabAction.bind(this));
    }
    addClickButton() {
        this.getDanMuModuleC.onClickBagTabAction.call(this.index);
    }
    addClickActionTabAction(index) {
        if (index == this.index) {
            this.select(true);
        }
        else {
            this.select(false);
        }
    }
    setDatas(index, name) {
        this.index = index;
        let nameStr = name.split(`-`);
        this.mTabNameTextBlock.text = nameStr[GlobalData.languageId];
    }
    select(isSelect) {
        if (this.isSelect == isSelect)
            return;
        this.isSelect = isSelect;
        let icon = isSelect ? `221283` : `221282`;
        this.mClickButton.normalImageGuid = icon;
    }
}

var foreign27 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: BagTabItem
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/ChatItem1.ui
 * TIME: 2025.01.27-15.06.29
 */
let ChatItem1_Generate = class ChatItem1_Generate extends UIScript {
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.initLanguage(this.mClickButton);
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ChatItem1_Generate = __decorate([
    UIBind('UI/module/DanMuModule/ChatItem1.ui')
], ChatItem1_Generate);
var ChatItem1_Generate$1 = ChatItem1_Generate;

var foreign65 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ChatItem1_Generate$1
});

class ChatItem1 extends ChatItem1_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.isCanClick = true;
        this.index = 0;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButton();
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
    }
    addClickButton() {
        if (!this.isCanClick)
            return;
        this.isCanClick = false;
        TimeUtil.delaySecond(1).then(() => { this.isCanClick = true; });
        this.getDanMuModuleC.onClickChatItem1Action.call(this.index);
    }
    setData(index, text) {
        this.index = index;
        this.mClickButton.text = text;
    }
}

var foreign28 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ChatItem1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/ChatItem2.ui
 * TIME: 2025.01.27-15.06.29
 */
let ChatItem2_Generate = class ChatItem2_Generate extends UIScript {
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.initLanguage(this.mClickButton);
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ChatItem2_Generate = __decorate([
    UIBind('UI/module/DanMuModule/ChatItem2.ui')
], ChatItem2_Generate);
var ChatItem2_Generate$1 = ChatItem2_Generate;

var foreign66 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ChatItem2_Generate$1
});

class ChatItem2 extends ChatItem2_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.isCanClick = true;
        this.index = 0;
        this.childIndex = 0;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButton();
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
    }
    addClickButton() {
        if (!this.isCanClick)
            return;
        this.isCanClick = false;
        TimeUtil.delaySecond(1).then(() => { this.isCanClick = true; });
        this.getDanMuModuleC.onClickChatItem2Action.call(this.index, this.childIndex);
    }
    setData(index, childIndex, text) {
        this.index = index;
        this.childIndex = childIndex;
        this.mClickButton.text = text;
    }
}

var foreign29 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ChatItem2
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/ExpressionItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let ExpressionItem_Generate = class ExpressionItem_Generate extends UIScript {
    get mClickButton() {
        if (!this.mClickButton_Internal && this.uiWidgetBase) {
            this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mClickButton');
        }
        return this.mClickButton_Internal;
    }
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mClickButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mClickButton");
        });
        this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
ExpressionItem_Generate = __decorate([
    UIBind('UI/module/DanMuModule/ExpressionItem.ui')
], ExpressionItem_Generate);
var ExpressionItem_Generate$1 = ExpressionItem_Generate;

var foreign69 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ExpressionItem_Generate$1
});

class ExpressionItem extends ExpressionItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.isCanClick = true;
        this.index = 0;
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.bindButton();
    }
    bindButton() {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
    }
    addClickButton() {
        if (!this.isCanClick)
            return;
        this.isCanClick = false;
        TimeUtil.delaySecond(5).then(() => { this.isCanClick = true; });
        this.getDanMuModuleC.onClickExpressionItemAction.call(this.index);
    }
    setDatas(index, assetId) {
        this.index = index;
        Utils.setImageByAssetIconData(this.mIconImage, assetId);
    }
}

var foreign32 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ExpressionItem
});

class ChatPanel extends ChatPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuModuleC = null;
        this.interactionModuleC = null;
        //#region 聊天列表
        this.chatDatas = []; //聊天列表
        this.chatItems2 = []; //聊天列表
        //#endregion
        //#region 表情列表
        this.expressionAssets = []; //表情列表
        //#endregion
        //#region 动作列表
        this.actionDataMap = new Map(); //动作列表
        this.actionItems = [];
        this.bagTabTexts = [
            `Hot-热门`,
            `Wing-翅膀`,
            `Prop-道具`,
            `Food-食品`,
            `Firework-烟花`,
            `Vehicles-载具`,
        ]; //背包标签
        this.bagTabItems = [];
        this.isInitBagUI = false;
        this.bagItems = [];
        this.bagTabIndex = 1;
        //#endregion
    }
    get getDanMuModuleC() {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }
    get getInteractionModuleC() {
        if (!this.interactionModuleC) {
            this.interactionModuleC = ModuleService.getModule(InteractionModuleC);
        }
        return this.interactionModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        this.initUI();
        this.bindButton();
    }
    onShow(...params) {
    }
    onHide() {
        this.initUI();
    }
    initUI() {
        this.closeChatList1List2();
        this.closeExpressionList(false);
        this.closeActionList(false);
        this.closeBagCanvas(false);
        this.updateBagIcon(0);
    }
    bindButton() {
        this.mOpenChatButton.onClicked.add(this.addOpenChatButton.bind(this));
        this.mCloseChatList1Button.onClicked.add(this.addCloseChatList1Button.bind(this));
        this.mCloseChatList2Button.onClicked.add(this.addCloseChatList2Button.bind(this));
        this.mOpenExpressionButton.onClicked.add(this.addOpenExpressionButton.bind(this));
        this.mCloseExpressionListButton.onClicked.add(this.addCloseExpressionButton.bind(this));
        this.mOpenActionButton.onClicked.add(this.addOpenActionButton.bind(this));
        this.mCloseActionListButton.onClicked.add(this.addCloseActionListButton.bind(this));
        // this.mStopActionButton.onClicked.add(this.addStopActionButton.bind(this));
        this.mOpenBagButton.onClicked.add(this.addOpenBagButton.bind(this));
        this.mCloseBagButton.onClicked.add(this.addCloseBagButton.bind(this));
        this.mBackBagButton.onClicked.add(this.addCloseBagButton.bind(this));
        this.mUnloadButton.onClicked.add(this.addUnloadButton.bind(this));
    }
    addOpenChatButton() {
        if (!this.mChatList1Canvas.visible) {
            this.getDanMuModuleC.onOpenChatAction.call();
        }
        else {
            this.closeChatList1List2();
        }
    }
    addCloseChatList1Button() {
        this.closeChatList1List2();
    }
    addCloseChatList2Button() {
        this.closeChatList2(false);
    }
    addOpenExpressionButton() {
        if (!this.mExpressionListCanvas.visible) {
            this.getDanMuModuleC.onOpenExpressionAction.call();
        }
        else {
            this.closeExpressionList(false);
        }
    }
    addCloseExpressionButton() {
        this.closeExpressionList(false);
    }
    addOpenActionButton() {
        if (!this.mActionListCanvas.visible) {
            this.getDanMuModuleC.onOpenActionAction.call();
        }
        else {
            this.closeActionList(false);
        }
    }
    addCloseActionListButton() {
        this.closeActionList(false);
    }
    addStopActionButton() {
        this.getDanMuModuleC.onStopActionButton.call();
    }
    addOpenBagButton() {
        if (!this.mBagCanvas.visible) {
            this.getDanMuModuleC.onOpenBagAction.call();
        }
        else {
            this.closeBagCanvas(false);
        }
    }
    addCloseBagButton() {
        this.closeBagCanvas(false);
    }
    addUnloadButton() {
        this.getDanMuModuleC.onClickUnloadBagItemAction.call();
    }
    showChatList1(chatDatas, isAlreadyInitChatDatas) {
        this.closeChatList1(true);
        this.closeExpressionList(false);
        this.closeActionList(false);
        if (isAlreadyInitChatDatas)
            return;
        if (!chatDatas || chatDatas.length == 0) {
            this.closeChatList1(false);
            return;
        }
        this.chatDatas = chatDatas;
        for (let i = 0; i < chatDatas.length; ++i) {
            let chatData = chatDatas[i];
            let chatItem1 = mw.UIService.create(ChatItem1);
            let text = chatData.chats[GlobalData.languageId];
            // if (chatData.chatChilds && chatData.chatChilds.length > 0) {
            // 	let reg = /\{[\d]\}/;
            // 	text = text.replace(reg, "...");
            // }
            chatItem1.setData(i, text);
            this.mChatList1ContentCanvas.addChild(chatItem1.uiObject);
        }
    }
    closeChatList1List2() {
        this.closeChatList1(false);
        this.closeChatList2(false);
    }
    closeChatList1(isOpen) {
        Utils.setWidgetVisibility(this.mChatList1Canvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    closeChatList2(isOpen) {
        Utils.setWidgetVisibility(this.mChatList2Canvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    showChatList2(index, chatChilds) {
        this.closeChatList2(true);
        this.closeExpressionList(false);
        this.closeActionList(false);
        if (!chatChilds || chatChilds.length == 0) {
            this.closeChatList2(false);
            return;
        }
        if (chatChilds.length > this.chatItems2.length) {
            for (let i = 0; i < this.chatItems2.length; ++i) {
                this.chatItems2[i].setData(index, i, chatChilds[i][GlobalData.languageId]);
                this.chatItems2[i].uiObject.visibility = mw.SlateVisibility.SelfHitTestInvisible;
            }
            for (let i = this.chatItems2.length; i < chatChilds.length; ++i) {
                let chatItem2 = mw.UIService.create(ChatItem2);
                chatItem2.setData(index, i, chatChilds[i][GlobalData.languageId]);
                this.mChatList2ContentCanvas.addChild(chatItem2.uiObject);
                this.chatItems2.push(chatItem2);
            }
        }
        else {
            for (let i = 0; i < chatChilds.length; ++i) {
                this.chatItems2[i].setData(index, i, chatChilds[i][GlobalData.languageId]);
                this.chatItems2[i].uiObject.visibility = mw.SlateVisibility.SelfHitTestInvisible;
            }
            for (let i = chatChilds.length; i < this.chatItems2.length; ++i) {
                this.chatItems2[i].uiObject.visibility = mw.SlateVisibility.Collapsed;
            }
        }
    }
    showExpressionList(expressionAssets, isAlreadyInitExpressionDatas) {
        this.closeExpressionList(true);
        this.closeChatList1List2();
        this.closeActionList(false);
        if (isAlreadyInitExpressionDatas)
            return;
        if (!expressionAssets || expressionAssets.length == 0) {
            this.closeExpressionList(false);
            return;
        }
        this.expressionAssets = expressionAssets;
        for (let i = 0; i < expressionAssets.length; ++i) {
            let expressionItem = mw.UIService.create(ExpressionItem);
            expressionItem.setDatas(i, expressionAssets[i]);
            this.mExpressionListContentCanvas.addChild(expressionItem.uiObject);
        }
    }
    closeExpressionList(isOpen) {
        Utils.setWidgetVisibility(this.mExpressionListCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    showActionList(actionDataMap, isAlreadyInitActionDatas) {
        this.closeActionList(true);
        this.closeChatList1List2();
        this.closeExpressionList(false);
        if (isAlreadyInitActionDatas)
            return;
        if (!actionDataMap || actionDataMap.size == 0) {
            this.closeActionList(false);
            return;
        }
        this.actionDataMap = actionDataMap;
        if (!this.actionDataMap.has(0)) {
            this.closeActionList(false);
            return;
        }
        let tabNames = this.actionDataMap.get(0)[0]?.names;
        for (let i = 0; i < tabNames.length; ++i) {
            let actionTabItem = mw.UIService.create(ActionTabItem);
            actionTabItem.setDatas(i + 1, tabNames[i]);
            this.mActionTabListCanvas.addChild(actionTabItem.uiObject);
        }
        this.getDanMuModuleC.onClickActionTabAction.call(1);
    }
    showActionItemList(tabIndex) {
        if (!this.actionDataMap.has(tabIndex))
            return;
        let actionDatas = this.actionDataMap.get(tabIndex);
        if (!actionDatas || actionDatas.length == 0)
            return;
        if (actionDatas.length > this.actionItems.length) {
            for (let i = 0; i < this.actionItems.length; ++i) {
                this.actionItems[i].setDatas(tabIndex, i, actionDatas[i]);
                Utils.setWidgetVisibility(this.actionItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.actionItems.length; i < actionDatas.length; ++i) {
                let actionItem = mw.UIService.create(ActionItem);
                actionItem.setDatas(tabIndex, i, actionDatas[i]);
                this.mActionListContentCanvas.addChild(actionItem.uiObject);
                this.actionItems.push(actionItem);
            }
        }
        else {
            for (let i = 0; i < actionDatas.length; ++i) {
                this.actionItems[i].setDatas(tabIndex, i, actionDatas[i]);
                Utils.setWidgetVisibility(this.actionItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = actionDatas.length; i < this.actionItems.length; ++i) {
                Utils.setWidgetVisibility(this.actionItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    closeActionList(isOpen) {
        Utils.setWidgetVisibility(this.mActionListCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
    //#endregion
    //#region 动作道具
    updateBagIcon(bagId) {
        if (bagId == 0) {
            this.mUnloadButton.visibility = mw.SlateVisibility.Collapsed;
            this.mOpenBagButton.normalImageGuid = `153892`;
            this.mOpenBagButton.pressedImageGuid = `153892`;
            this.mOpenBagButton.disableImageGuid = `153892`;
        }
        else {
            this.mUnloadButton.visibility = mw.SlateVisibility.Visible;
            let bagIcon = GameConfig.ActionProp.getElement(bagId).ButtonIconId;
            this.mOpenBagButton.normalImageGuid = bagIcon;
            this.mOpenBagButton.pressedImageGuid = bagIcon;
            this.mOpenBagButton.disableImageGuid = bagIcon;
            this.closeBagCanvas(false);
        }
    }
    showBagCanvas() {
        if (!this.isInitBagUI) {
            this.isInitBagUI = true;
            for (let i = 0; i < this.bagTabTexts.length; ++i) {
                let bagTabItem = mw.UIService.create(BagTabItem);
                bagTabItem.setDatas(i + 1, this.bagTabTexts[i]);
                this.mBagTabCanvas.addChild(bagTabItem.uiObject);
                this.bagTabItems.push(bagTabItem);
            }
            // this.bagTabItems[4].uiObject.visibility = mw.SlateVisibility.Collapsed;
        }
        this.getDanMuModuleC.onClickBagTabAction.call(this.bagTabIndex);
        this.closeBagCanvas(true);
    }
    showBagItemList(index) {
        this.bagTabIndex = index;
        switch (index) {
            case 1:
                this.updatePropList(1);
                break;
            case 2:
                this.updatePropList(2);
                break;
            case 3:
                this.updatePropList(3);
                break;
            case 4:
                this.updatePropList(4);
                break;
            case 5:
                this.updatePropList(5);
                break;
            case 6:
                this.updatePropList(6);
                break;
        }
    }
    updatePropList(tabIndex) {
        let actionPropElement = GameConfig.ActionProp.getAllElement();
        actionPropElement = actionPropElement.filter((value) => { return value.AssetId && value.AssetId != "" && value.Tab == tabIndex; });
        actionPropElement.sort((a, b) => { return a.Sort - b.Sort; });
        // if (!actionPropElement || actionPropElement.length == 0) return;
        let bagIds = this.getInteractionModuleC.getBagIds;
        if (actionPropElement.length > this.bagItems.length) {
            for (let i = 0; i < this.bagItems.length; ++i) {
                this.bagItems[i].setDatas(actionPropElement[i].ID, bagIds.includes(actionPropElement[i].ID));
                Utils.setWidgetVisibility(this.bagItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.bagItems.length; i < actionPropElement.length; ++i) {
                let bagItem = mw.UIService.create(BagItem);
                bagItem.setDatas(actionPropElement[i].ID, bagIds.includes(actionPropElement[i].ID));
                this.mBagContentCanvas.addChild(bagItem.uiObject);
                this.bagItems.push(bagItem);
            }
        }
        else {
            for (let i = 0; i < actionPropElement.length; ++i) {
                this.bagItems[i].setDatas(actionPropElement[i].ID, bagIds.includes(actionPropElement[i].ID));
                Utils.setWidgetVisibility(this.bagItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = actionPropElement.length; i < this.bagItems.length; ++i) {
                Utils.setWidgetVisibility(this.bagItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    closeBagCanvas(isOpen) {
        Utils.setWidgetVisibility(this.mBagCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
}

var foreign30 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: ChatPanel
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/DanMuModule/DanMuPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let DanMuPanel_Generate = class DanMuPanel_Generate extends UIScript {
    get mDanMuCanvas() {
        if (!this.mDanMuCanvas_Internal && this.uiWidgetBase) {
            this.mDanMuCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDanMuCanvas');
        }
        return this.mDanMuCanvas_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
DanMuPanel_Generate = __decorate([
    UIBind('UI/module/DanMuModule/DanMuPanel.ui')
], DanMuPanel_Generate);
var DanMuPanel_Generate$1 = DanMuPanel_Generate;

var foreign68 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DanMuPanel_Generate$1
});

class DanMuPanel extends DanMuPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.danMuItems = []; //弹幕列表
        this.axisMin = 0;
        this.axisMax = 500;
        this.time = 10;
        this.lockY = -1;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;
        this.initData();
    }
    initData() {
        setTimeout(() => {
            this.axisMin = 0;
            this.axisMax = this.mDanMuCanvas.size.y;
            console.error(`this.axisMax:${this.axisMax}`);
        }, 1);
    }
    createDanMuItem(msg, isActive, isSelf) {
        if (!msg || !msg["toString"])
            return;
        msg = msg.toString();
        if (msg.length <= 0)
            return;
        let danMuItem = this.getNewBc(msg, this.lockY);
        let fontColor = "FFFFFFFF";
        let outlineColor = "000000FF";
        if (isActive) {
            outlineColor = "FF0000FF";
        }
        else if (isSelf) {
            outlineColor = "00FF00FF";
        }
        danMuItem.textBlock.setFontColorByHex(fontColor);
        danMuItem.textBlock.setOutlineColorByHex(outlineColor);
        let endpos = { x: danMuItem.size.x * -1, y: danMuItem.pos.y }; //获取结束点
        let textBlock = danMuItem.textBlock;
        new Tween(danMuItem.pos)
            .to(endpos, this.time * 1000)
            .onUpdate((v) => {
            textBlock.position = v;
        })
            .onComplete(() => {
            danMuItem.run = false;
        }).start();
    }
    getNewBc(msg, lockY) {
        msg = msg.toString();
        let danMuItem = this.danMuItems.find(v => { return !v.run; });
        if (!danMuItem) { //没找到没使用的旧弹幕对象
            let ui = mw.TextBlock.newObject(this.mDanMuCanvas, "msgUIObject");
            this.mDanMuCanvas.addChild(ui);
            danMuItem = new DanMuItem();
            danMuItem.textBlock = ui;
            danMuItem.run = true;
            danMuItem.pos = new mw.Vector2(this.mDanMuCanvas.size.x, 0);
            danMuItem.size = new mw.Vector2(35, 100);
            danMuItem.textBlock.outlineSize = 1;
            this.danMuItems.push(danMuItem);
        }
        else {
            danMuItem.run = true; //置为正在使用中
        }
        danMuItem.pos.x = this.mDanMuCanvas.size.x; //放到屏幕右边
        danMuItem.pos.y = lockY < 0 ? Math.random() * (this.axisMax - this.axisMin) + this.axisMin : lockY; //随机Y轴
        danMuItem.size.x = 40 * msg.length; //字符对象长度
        danMuItem.textBlock.text = msg;
        danMuItem.textBlock.size = new mw.Vector2(danMuItem.size.x, danMuItem.size.y);
        return danMuItem;
    }
}

var foreign31 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: DanMuPanel
});

const DanmuSyncServer = "DanmuSyncServer";
const DanmuSyncClient = "DanmuSyncClient";
const StopAction = "StopAction";
class DanMuModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.danMuPanel = null;
        this.chatPanel = null;
        this.hudModule = null;
        this.onOpenChatAction = new Action();
        this.onClickChatItem1Action = new Action1();
        this.onClickChatItem2Action = new Action2();
        this.onOpenExpressionAction = new Action();
        this.onClickExpressionItemAction = new Action1();
        this.onOpenActionAction = new Action();
        this.onClickActionTabAction = new Action1();
        this.onClickActionItemAction = new Action1();
        this.onStopActionButton = new Action();
        this.onOpenBagAction = new Action();
        this.onClickBagTabAction = new Action1();
        this.onClickBagItemAction = new Action1();
        this.onClickUnloadBagItemAction = new Action();
        this.onNextBagAction = new Action();
        //#endregion
        //#region 聊天
        this.chatDatas = [];
        this.isAlreadyInitChatDatas = false;
        //#endregion
        //#region 气泡
        /**气泡对象 */
        this._bubbles = [];
        /**
         * 排序这个玩家的所有气泡，超过最大数量则删除上面的
         * @param owner 拥有者
         */
        this.sortAllBubbles = (owner) => {
            const playerBubbles = this._bubbles.filter(i => i.object == owner);
            let offset = 0;
            for (let i = playerBubbles.length - 1; i >= 0; i--) {
                offset += playerBubbles[i].height;
                playerBubbles[i].offset(offset);
                offset += 5;
            }
        };
        //#endregion
        //#region 表情
        this.expressionAssets = [];
        this.isAlreadyInitExpressionDatas = false;
        this.expressionMap = new Map();
        //#endregion
        //#region 动作
        this.actionDatas = [];
        this.actionDataMap = new Map();
        this.isAlreadyInitActionDatas = false;
        this.actionTabIndex = 0;
        this.isPlaying = false;
        this.isCanInteract = true;
        this.actionTimeOutId = null;
        this.bagTabIndex = 0;
        this.currentBagId = 0;
        this.currentBagIds = [];
        //#endregion
        //this.iconImg.imageGuid = "117002";
        //#region 降落伞
        /**是否在滑翔 */
        this.isGlide = false;
        /**最大下落速度 */
        this.maxFallingSpeed = 400;
        /**重力 */
        this.gravityScale = 0.2;
        /**转向灵活度 */
        this.rotateRate = 90;
        this.isInitParachute = false;
        //#endregion
    }
    get getDanMuPanel() {
        if (!this.danMuPanel) {
            this.danMuPanel = mw.UIService.getUI(DanMuPanel);
        }
        return this.danMuPanel;
    }
    get getChatPanel() {
        if (!this.chatPanel) {
            this.chatPanel = mw.UIService.getUI(ChatPanel);
        }
        return this.chatPanel;
    }
    get getHudModuleC() {
        if (!this.hudModule) {
            this.hudModule = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModule;
    }
    onStart() {
        this.bindEvent();
        InputUtil.onKeyDown(mw.Keys.P, () => {
            Event.dispatchToLocal(DanmuSyncClient, "测试弹幕");
        });
        InputUtil.onKeyDown(mw.Keys.O, () => {
            Event.dispatchToLocal(DanmuSyncServer, "测试弹幕");
        });
        InputUtil.onKeyDown(mw.Keys.SpaceBar, () => {
            this.localPlayer.character.jump();
        });
    }
    onEnterScene(sceneType) {
        this.showPanels();
        // this.initDance();
        this.initParachute();
    }
    onUpdate(dt) {
        this.updateBubble(dt);
        this.checkParachute();
    }
    showPanels() {
        this.getDanMuPanel.show();
        this.getChatPanel.show();
        this.initBubble();
    }
    bindEvent() {
        Event.addLocalListener(DanmuSyncServer, this.sendDanMuSyncServer.bind(this));
        Event.addLocalListener(DanmuSyncClient, this.sendDanMuSyncClient.bind(this));
        RoomService.registerMGSChatMessageEvent(this.addMGSChatMessageEvent.bind(this));
        this.onOpenChatAction.add(this.addOpenChatAction.bind(this));
        this.onClickChatItem1Action.add(this.addClickChatItem1Action.bind(this));
        this.onClickChatItem2Action.add(this.addClickChatItem2Action.bind(this));
        this.onOpenExpressionAction.add(this.addOpenExpressionAction.bind(this));
        this.onClickExpressionItemAction.add(this.addClickExpressionItemAction.bind(this));
        this.onOpenActionAction.add(this.addOpenActionAction.bind(this));
        this.onClickActionTabAction.add(this.addClickActionTabAction.bind(this));
        this.onClickActionItemAction.add(this.addClickActionItemAction.bind(this));
        Event.addLocalListener(StopAction, this.addStopAction.bind(this));
        this.onStopActionButton.add(this.addStopAction.bind(this));
        this.onOpenBagAction.add(this.addOpenBagAction.bind(this));
        this.onClickBagTabAction.add(this.addClickBagTabAction.bind(this));
        this.onClickBagItemAction.add(this.addClickBagItemAction_filter.bind(this));
        this.onClickUnloadBagItemAction.add(this.addClickUnloadBagItemAction.bind(this));
        this.onNextBagAction.add(this.addNextBagAction.bind(this));
        this.getHudModuleC.clickGoodItemAction.add(this.addClickGoodItemAction.bind(this));
        this.getHudModuleC.clickCloseGoodItemAction.add(this.addClickCloseGoodItemAction.bind(this));
        this.getHudModuleC.deleteAllGoodsAction.add(this.addDeleteAllGoodsAction.bind(this));
        Event.addLocalListener(`OnOffMainUI`, this.addOnOffMainUI.bind(this));
    }
    addOnOffMainUI(isShow) {
        console.error(`wfz - addOnOffMainUI - isShow:${isShow}`);
        isShow ? this.getChatPanel.show() : this.getChatPanel.hide();
    }
    //#region  弹幕
    sendDanMuSyncServer(msg, isActive) {
        this.server.net_sendDanMu(msg, isActive);
    }
    sendDanMuSyncClient(msg, isActive) {
        this.getDanMuPanel.createDanMuItem(msg, isActive, true);
    }
    addMGSChatMessageEvent(jsonData) {
        this.getDanMuPanel.createDanMuItem(jsonData, false, false);
        this.showBubbleText(jsonData);
    }
    net_sendDanMu(userId, msg, isActive) {
        this.getDanMuPanel.createDanMuItem(msg, isActive, userId == this.localPlayer.userId);
    }
    net_initChatDatas(chatDatas) {
        this.chatDatas = chatDatas;
        console.error(JSON.stringify(chatDatas));
    }
    addOpenChatAction() {
        if (!this.isAlreadyInitChatDatas) {
            if (!this.chatDatas || this.chatDatas.length == 0) {
                this.chatDatas = [];
                GameConfig.Chat.getAllElement().forEach((value) => {
                    this.chatDatas.push({ chats: value.Chats, chatChilds: value.ChatChilds });
                });
            }
            this.getChatPanel.showChatList1(this.chatDatas, this.isAlreadyInitChatDatas);
            this.isAlreadyInitChatDatas = true;
        }
        else {
            this.getChatPanel.showChatList1(this.chatDatas, this.isAlreadyInitChatDatas);
        }
    }
    addClickChatItem1Action(index) {
        if (this.chatDatas.length <= index)
            return;
        let chatData = this.chatDatas[index];
        if (!chatData)
            return;
        if (chatData.chatChilds && chatData.chatChilds.length > 0) {
            this.getChatPanel.showChatList2(index, chatData.chatChilds);
        }
        else {
            Event.dispatchToLocal(DanmuSyncServer, chatData.chats[1]);
            this.showBubbleText(chatData.chats[1]);
            // this.getChatPanel.closeChatList1List2();
        }
    }
    addClickChatItem2Action(index, childIndex) {
        if (this.chatDatas.length <= index)
            return;
        let chatData = this.chatDatas[index];
        if (!chatData)
            return;
        if (chatData.chatChilds && chatData.chatChilds.length > childIndex) {
            let text = chatData.chatChilds[childIndex][GlobalData.languageId];
            // text = StringUtil.format(chatData.chats[GlobalData.languageId], text);
            Event.dispatchToLocal(DanmuSyncServer, text);
            this.showBubbleText(text);
            // this.getChatPanel.closeChatList1List2();
        }
    }
    initBubble() {
        this._uiPool = new ObjPool(() => {
            const ui = UIService.create(BubbleItem_Generate$1);
            return ui;
        }, (ui) => {
            ui.rootCanvas.visibility = mw.SlateVisibility.HitTestInvisible;
            ui.rootCanvas.renderScale = Vector2.zero;
            ui.mDialogTextBlock.autoSizeEnable = true;
            ui.mDialogTextBlock.textHorizontalLayout = mw.UITextHorizontalLayout.NoClipping;
            ui.mDialogTextBlock.text = "";
            ui.mDialogTextBlock.invalidateLayoutAndVolatility();
        }, (ui) => { ui.destroy(); }, () => { }, 3);
    }
    /**
     * 显示UI
     * @param text
     */
    showBubbleText(text) {
        this.server.net_showBubbleText(this.localPlayer.character.gameObjectId, text);
    }
    net_showBubbleText(gameObjectId, text) {
        mw.GameObject.asyncFindGameObjectById(gameObjectId).then((value) => {
            value.onDestroyDelegate.add(() => {
                this.clear(value);
            });
            this.showDialog(value, text);
        });
    }
    /**
     * 显示聊天气泡
     * @param object 所属的物体
     * @param text 展示的文字
     */
    showDialog(object, text) {
        const playerBubbles = this._bubbles.filter(i => i.object == object);
        if (playerBubbles.length > 4) {
            // 删除多余文本，每个人只能说4条
            const index = this._bubbles.findIndex(i => i.object == object);
            this._bubbles[index].destory();
            this._bubbles.splice(index, 1);
        }
        this._bubbles.push(new Bubble(object, this._uiPool, text, this.sortAllBubbles));
    }
    /**
     * 清除这个玩家的所有消息
     * @param playerId
     */
    clear(object) {
        for (let i = 0; i < this._bubbles.length; i++) {
            if (this._bubbles[i].object == object) {
                this._bubbles[i].destory();
                this._bubbles.splice(i, 1);
                i--;
            }
        }
    }
    updateBubble(dt) {
        for (let i = 0; i < this._bubbles.length; i++) {
            if (this._bubbles[i].onUpdate(dt)) {
                this._bubbles[i].destory();
                this._bubbles.splice(i, 1);
                i--;
            }
        }
    }
    net_initExpressionDatas(expressionAssets) {
        this.expressionAssets = expressionAssets;
        console.error(JSON.stringify(expressionAssets));
    }
    addOpenExpressionAction() {
        if (!this.isAlreadyInitExpressionDatas) {
            if (!this.expressionAssets || this.expressionAssets.length == 0) {
                this.expressionAssets = [];
                GameConfig.Expression.getAllElement().forEach((value) => {
                    this.expressionAssets.push(value.AssetId);
                });
            }
            this.getChatPanel.showExpressionList(this.expressionAssets, this.isAlreadyInitExpressionDatas);
            this.isAlreadyInitExpressionDatas = true;
        }
        else {
            this.getChatPanel.showExpressionList(this.expressionAssets, this.isAlreadyInitExpressionDatas);
        }
    }
    addClickExpressionItemAction(index) {
        if (this.expressionAssets.length <= index)
            return;
        let assetId = this.expressionAssets[index];
        if (!assetId || assetId == "")
            return;
        // this.getChatPanel.closeExpressionList();
        this.server.net_playExpression(assetId);
    }
    net_playExpression(playerId, assetId) {
        let player = Player.getPlayer(playerId);
        if (!player)
            return;
        Utils.asyncDownloadAsset(assetId).then(() => {
            if (this.expressionMap.has(playerId)) {
                let expression = this.expressionMap.get(playerId);
                if (expression.playId) {
                    EffectService.stop(expression.playId);
                    expression.playId = null;
                }
                if (expression.timeoutId) {
                    clearTimeout(expression.timeoutId);
                    expression.timeoutId = null;
                }
            }
            let playId = EffectService.playOnGameObject(assetId, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(0, 0, 200) });
            let timeoutId = setTimeout(() => {
                if (this.expressionMap.has(playerId)) {
                    let expression = this.expressionMap.get(playerId);
                    if (expression.playId) {
                        EffectService.stop(expression.playId);
                        expression.playId = null;
                    }
                    if (expression.timeoutId) {
                        clearTimeout(expression.timeoutId);
                        expression.timeoutId = null;
                    }
                }
            }, 5 * 1000);
            this.expressionMap.set(playerId, { playId: playId, timeoutId: timeoutId });
        });
    }
    net_initActionDatas(actionDatas) {
        this.actionDatas = actionDatas;
        console.error(JSON.stringify(actionDatas));
        this.actionDataMap.clear();
        actionDatas.forEach((value) => {
            if (this.actionDataMap.has(value.tab)) {
                let actionDatas = this.actionDataMap.get(value.tab);
                actionDatas.push(value);
            }
            else {
                this.actionDataMap.set(value.tab, [value]);
            }
        });
    }
    addOpenActionAction() {
        if (!this.isAlreadyInitActionDatas) {
            if (!this.actionDataMap || this.actionDataMap.size == 0) {
                this.actionDataMap = new Map();
                this.actionDataMap.clear();
                GameConfig.ActionConfig.getAllElement().forEach((value) => {
                    let actionData = new ActionData();
                    actionData.tab = value.Tab;
                    actionData.icon = value.Icon;
                    actionData.assetId = value.ActionId;
                    actionData.names = value.Names;
                    actionData.loop = value.Loop;
                    actionData.pos = value.Pos;
                    actionData.rot = new mw.Rotation(value.Rot);
                    actionData.type = value.Type;
                    if (this.actionDataMap.has(actionData.tab)) {
                        let actionDatas = this.actionDataMap.get(actionData.tab);
                        actionDatas.push(actionData);
                    }
                    else {
                        this.actionDataMap.set(actionData.tab, [actionData]);
                    }
                });
            }
            this.getChatPanel.showActionList(this.actionDataMap, this.isAlreadyInitActionDatas);
            this.isAlreadyInitActionDatas = true;
        }
        else {
            this.getChatPanel.showActionList(this.actionDataMap, this.isAlreadyInitActionDatas);
        }
    }
    addClickActionTabAction(index) {
        if (this.actionTabIndex == index)
            return;
        this.actionTabIndex = index;
        this.getChatPanel.showActionItemList(this.actionTabIndex);
    }
    addClickActionItemAction(index) {
        if (!this.actionDataMap.has(this.actionTabIndex))
            return;
        let actionDatas = this.actionDataMap.get(this.actionTabIndex);
        if (!actionDatas || actionDatas.length == 0 || index >= actionDatas.length)
            return;
        let actionData = actionDatas[index];
        if (!actionData)
            return;
        if (!this.isCanInteract) {
            console.error("交互还未准备完成");
            return;
        }
        this.isCanInteract = false;
        this.server.net_EnterInteract(actionData).then(async () => {
            this.isPlaying = true;
            this.isCanInteract = true;
            this.clearActionTimeOut();
            this.getHudModuleC.controllerActionUIVisible(true);
            if (actionData.loop != 0)
                return;
            await Utils.asyncDownloadAsset(actionData.assetId);
            let length = this.localPlayer.character.loadAnimation(actionData.assetId).length;
            this.actionTimeOutId = setTimeout(() => {
                this.getHudModuleC.controllerActionUIVisible(false);
                this.clearActionTimeOut();
            }, length * 1000);
        });
    }
    clearActionTimeOut() {
        if (this.actionTimeOutId) {
            clearTimeout(this.actionTimeOutId);
            this.actionTimeOutId = null;
        }
    }
    addStopAction() {
        this.getHudModuleC.controllerActionUIVisible(false);
        this.clearActionTimeOut();
        if (!this.localPlayer.character.movementEnabled)
            this.localPlayer.character.movementEnabled = true;
        if (!this.isPlaying)
            return;
        this.server.net_LeaveInteract().then(() => {
            this.isPlaying = false;
        });
    }
    //#endregion
    //#region 背包
    addOpenBagAction() {
        this.getChatPanel.showBagCanvas();
    }
    addClickBagTabAction(index) {
        // if (this.bagTabIndex == index) return;
        this.bagTabIndex = index;
        this.getChatPanel.showBagItemList(this.bagTabIndex);
    }
    addClickBagItemAction_filter(bagId) {
        if (this.currentBagIds.includes(bagId)) {
            Notice.showDownNotice(GameConfig.Language.Text_ThisItemIsInUse.Value);
            return;
        }
        this.addClickBagItemAction(bagId);
    }
    addNextBagAction() {
        let nextBagId = GameConfig.ActionProp.getElement(this.currentBagId).NextId;
        if (!nextBagId || nextBagId <= 0)
            return;
        this.addClickBagItemAction(nextBagId);
    }
    addClickBagItemAction(bagId) {
        console.error(`wfz - ClickBagItem - bagId:${bagId}`);
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            let bagIds = await this.server.net_useBag(bagId);
            this.getChatPanel.closeBagCanvas(false);
            this.currentBagIds = bagIds;
            if (this.currentBagIds.includes(bagId)) {
                this.currentBagId = bagId;
                this.getHudModuleC.updateBagIcon(bagId);
                this.getHudModuleC.updateGoodsListCanvas(this.currentBagIds);
                console.error(`wfz - ClickBagItem - this.currentBagIds:${this.currentBagIds}  this.currentBagId:${this.currentBagId}`);
            }
            else {
                Notice.showDownNotice(GameConfig.Language.Text_TheItemBarIsFull.Value);
            }
        });
    }
    addClickCloseGoodItemAction(bagId) {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            if (this.currentBagIds.includes(bagId)) {
                let bagIds = await this.server.net_unloadBag(bagId);
                this.currentBagIds = bagIds;
                console.error(`wfz  - CloseGoodItem - bagIds:${bagIds}`);
                this.getHudModuleC.updateGoodsListCanvas(this.currentBagIds);
                if (this.currentBagId == bagId) {
                    this.currentBagId = 0;
                    this.getHudModuleC.updateBagIcon(this.currentBagId);
                }
                console.error(`wfz  - CloseGoodItem - this.currentBagIds:${this.currentBagIds}`);
            }
        });
    }
    addClickGoodItemAction(bagId) {
        if (this.currentBagIds.includes(bagId)) {
            let nextBagId = GameConfig.ActionProp.getElement(bagId).NextId;
            if (!nextBagId || nextBagId <= 0)
                return;
            this.addClickBagItemAction(nextBagId);
        }
    }
    addDeleteAllGoodsAction() {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            let bagIds = await this.server.net_unloadAllBag();
            this.currentBagIds = bagIds;
            this.currentBagId = 0;
            this.getHudModuleC.updateBagIcon(this.currentBagId);
            this.getHudModuleC.updateGoodsListCanvas(this.currentBagIds);
            console.error(`wfz - DeleteAllGoods - this.currentBagIds:${this.currentBagIds}  this.currentBagId:${this.currentBagId}`);
        });
    }
    addClickUnloadBagItemAction() {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            if (this.currentBagId == 0)
                return;
            let bagIds = await this.server.net_unloadBag(this.currentBagId);
            this.currentBagIds = bagIds;
            this.currentBagId = 0;
            this.getChatPanel.updateBagIcon(this.currentBagId);
        });
    }
    //#endregion
    //#region 跳舞交互
    initDance() {
        danceInteracts.forEach(async (value) => {
            let npcs = [];
            for (let i = 0; i < value.npcIds.length; ++i) {
                let npc = await mw.GameObject.asyncFindGameObjectById(value.npcIds[i]);
                npc.collisionWithOtherCharacterEnabled = false;
                await Utils.asyncDownloadAsset(value.danceIds[i]);
                await npc.asyncReady();
                npcs.push(npc);
            }
            for (let i = 0; i < npcs.length; ++i) {
                npcs[i].loadSubStance(value.danceIds[i]).play();
            }
            // npcs[1].localTransform.position = npcs[0].localTransform.position;
        });
    }
    initParachute() {
        this.maxFallingSpeed = this.localPlayer.character.maxFallingSpeed;
        this.gravityScale = this.localPlayer.character.gravityScale;
        this.rotateRate = this.localPlayer.character.rotateRate;
        this.isInitParachute = true;
    }
    checkParachute() {
        return;
    }
    startGlide() {
        this.isGlide = true;
        this.localPlayer.character.maxFallingSpeed = 400; //通过改变角色下落时的速度，模拟滑翔时的速度；
        this.localPlayer.character.gravityScale = 0.2; //通过改变角色的重力，延长角色下落的时间，也可以通过改变最大下落速度来模拟滑翔效果；
        this.localPlayer.character.rotateRate = 90; //设置角色在空中的转向灵活度，改不改都可以，主要是模拟在空中的一个滑翔效果；
        this.server.net_startGlide().then(() => {
            this.localPlayer.character.addImpulse(new mw.Vector(0, 0, 1000), true); //开伞时添加一个向上的冲量，模拟空中开伞时气流的效果；
            let checkIsGlide = TimeUtil.setInterval(() => {
                if (!this.localPlayer.character.isJumping) {
                    this.server.net_stopGlide();
                    this.isGlide = false;
                    this.localPlayer.character.maxFallingSpeed = this.maxFallingSpeed;
                    this.localPlayer.character.gravityScale = this.gravityScale;
                    this.localPlayer.character.rotateRate = this.rotateRate;
                    TimeUtil.clearInterval(checkIsGlide);
                }
            }, 2 / 100);
        });
    }
}
const danceInteracts = [
    { npcIds: ["28F96714", "15CEFD34"], danceIds: ["122807", "122806"] },
    { npcIds: ["1B359E64", "22C58295"], danceIds: ["124192", "124194"] },
    { npcIds: ["3D8A73D5", "24D81C76"], danceIds: ["122811", "122809"] },
    { npcIds: ["1C528004", "2C9FC93B"], danceIds: ["122808", "122810"] },
];

var foreign22 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DanmuSyncClient: DanmuSyncClient,
    DanmuSyncServer: DanmuSyncServer,
    StopAction: StopAction,
    default: DanMuModuleC
});

let Buff = class Buff extends Script {
    constructor() {
        super(...arguments);
        this.bagId = 0;
        this.playerId = 0;
        this.springArmLength = 350;
        this.startScale = 1;
        this.targetScale = 1;
        this.time = 0;
        this.targetPlayer = null;
        this.localPlayer = null;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.useUpdate = false;
    }
    onBagIdChange() {
        if (!this.targetPlayer || !this.localPlayer)
            return;
        if (this.bagId == 0) {
            this.startScale = this.targetPlayer.character.worldTransform.scale.x;
            this.targetScale = 1;
            if (this.targetPlayer.playerId == this.localPlayer.playerId) {
                Camera.currentCamera.springArm.length = this.springArmLength * this.targetScale;
            }
        }
        else {
            let actionPropElement = GameConfig.ActionProp.getElement(this.bagId);
            if (actionPropElement.BuffId <= 0)
                return;
            let buffParams = actionPropElement.BuffParams;
            this.startScale = this.targetPlayer.character.worldTransform.scale.x;
            this.targetScale = buffParams[0];
            if (this.targetPlayer.playerId == this.localPlayer.playerId) {
                Camera.currentCamera.springArm.length = this.springArmLength * this.targetScale;
            }
        }
        this.time = 0;
        this.useUpdate = true;
    }
    async onPlayerIdChange() {
        this.targetPlayer = await Player.asyncGetPlayer(this.playerId);
        this.localPlayer = await Player.asyncGetLocalPlayer();
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (this.targetPlayer == null || this.time >= 1)
            return;
        this.time = Math.min(this.time + dt * 5, 1);
        this.startScale = this.startScale + (this.targetScale - this.startScale) * this.time;
        try {
            this.targetPlayer.character.worldTransform.scale = mw.Vector.multiply(mw.Vector.one, this.startScale);
        }
        catch (error) { }
    }
    /** 脚本被销毁时最后一帧执行完调用此函数 */
    onDestroy() {
    }
};
__decorate([
    mw.Property({ replicated: true, onChanged: "onBagIdChange" })
], Buff.prototype, "bagId", void 0);
__decorate([
    mw.Property({ replicated: true, onChanged: "onPlayerIdChange" })
], Buff.prototype, "playerId", void 0);
Buff = __decorate([
    Component
], Buff);
var Buff$1 = Buff;

var foreign20 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Buff$1
});

const WorldChatDatas = "WorldChatDatas";
const WorldExpressionDatas = "WorldExpressionDatas";
const WorldActionDatas = "WorldActionDatas";
class DanMuModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.maxShowDistance = 2000;
        this.playerInteractMap = new Map();
        this.playerBagMap = new Map();
        this.playerGlideMap = new Map();
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        // this.setChat_Test();
        // this.setExpression_Test();
        // this.setAction_Test();
    }
    onPlayerEnterGame(player) {
        this.initChatDatas(player);
        this.initExpressionDatas(player);
        // this.initActionDatas(player);
        this.initBuff(player);
    }
    onPlayerLeft(player) {
        if (Utils.buffMap.has(player.playerId)) {
            Utils.buffMap.get(player.playerId)?.destroy();
            Utils.buffMap.delete(player.playerId);
        }
        this.unloadAllBag(player, false);
    }
    initBuff(player) {
        let buff = player.character.addComponent(Buff$1, true);
        buff.playerId = player.playerId;
        Utils.buffMap.set(player.playerId, buff);
    }
    onUpdate(dt) {
        this.playerBagMap.forEach((value) => {
            value.forEach((bag) => {
                if (bag.isUpdate)
                    bag.update();
            });
        });
    }
    initChatDatas(player) {
        this.getCustomdata(WorldChatDatas).then((chatDatas) => {
            if (!chatDatas || chatDatas.length == 0)
                return;
            this.getClient(player).net_initChatDatas(chatDatas);
        });
    }
    initExpressionDatas(player) {
        this.getCustomdata(WorldExpressionDatas).then((expressionAssets) => {
            if (!expressionAssets || expressionAssets.length == 0)
                return;
            this.getClient(player).net_initExpressionDatas(expressionAssets);
        });
    }
    initActionDatas(player) {
        this.getCustomdata(WorldActionDatas).then((actionDatas) => {
            if (!actionDatas || actionDatas.length == 0)
                return;
            this.getClient(player).net_initActionDatas(actionDatas);
        });
    }
    setChat_Test() {
        let chatDatas = [];
        for (let i = 1; i <= 10; ++i) {
            let ch = GameConfig.Chat.getElement(i);
            let chats = ch.Chats;
            let chatChilds = ch.ChatChilds;
            chatDatas.push({ chats: chats, chatChilds: chatChilds });
        }
        this.setCustomData(WorldChatDatas, chatDatas);
    }
    setExpression_Test() {
        let expressionAssets = [];
        GameConfig.Expression.getAllElement().forEach((value) => {
            expressionAssets.push(value.AssetId);
        });
        this.setCustomData(WorldExpressionDatas, expressionAssets);
    }
    setAction_Test() {
        let actionDatas = [];
        GameConfig.ActionConfig.getAllElement().forEach((value) => {
            actionDatas.push({
                tab: value.Tab,
                icon: value.Icon,
                assetId: value.ActionId,
                names: value.Names,
                loop: value.Loop,
                pos: value.Pos,
                rot: new mw.Rotation(value.Rot),
                type: value.Type
            });
        });
        this.setCustomData(WorldActionDatas, actionDatas);
    }
    net_sendDanMu(msg, isActive) {
        this.getAllClient().net_sendDanMu(this.currentPlayer.userId, msg, isActive);
    }
    async getCustomdata(key) {
        return (await DataStorage.asyncGetData(key)).data;
    }
    async setCustomData(saveKey, dataInfo) {
        let code = null;
        code = await DataStorage.asyncSetData(saveKey, dataInfo);
        return code == mw.DataStorageResultCode.Success;
    }
    net_showBubbleText(gameObjectId, text) {
        let currentPlayer = this.currentPlayer;
        if (this.maxShowDistance == -1) {
            Player.getAllPlayers().forEach((player) => {
                this.getClient(player).net_showBubbleText(gameObjectId, text);
            });
        }
        else {
            const players = Player.getAllPlayers();
            for (const player of players) {
                if (player === currentPlayer) {
                    this.getClient(player).net_showBubbleText(gameObjectId, text);
                }
                else {
                    const len = Vector.distance(player.character.worldTransform.position, currentPlayer.character.worldTransform.position);
                    if (len <= this.maxShowDistance) {
                        this.getClient(player).net_showBubbleText(gameObjectId, text);
                    }
                }
            }
        }
    }
    net_playExpression(assetId) {
        this.getAllClient().net_playExpression(this.currentPlayerId, assetId);
    }
    async net_EnterInteract(actionData) {
        let player = this.currentPlayer;
        return await this.enterInteract(player, actionData);
    }
    async enterInteract(player, actionData) {
        let playerId = player.playerId;
        if (!this.playerInteractMap.has(playerId)) {
            this.playerInteractMap.set(playerId, new PlayerInteract());
        }
        let playerInteract = this.playerInteractMap.get(playerId);
        await playerInteract.clearInteractor(player);
        if (actionData.type == 0) {
            return await playerInteract.playSingleAni(player, actionData);
        }
        else if (actionData.type == 1) {
            return await playerInteract.interact(player, actionData);
        }
        else if (actionData.type == 2) {
            return await playerInteract.playDoubleAni(player, actionData);
        }
    }
    async net_LeaveInteract() {
        let player = this.currentPlayer;
        return await this.leaveInteract(player);
    }
    async leaveInteract(player) {
        let playerId = player.playerId;
        if (!this.playerInteractMap.has(playerId))
            return true;
        let playerInteract = this.playerInteractMap.get(playerId);
        return await playerInteract.clearInteractor(player);
    }
    async net_useBag(bagId) {
        let player = this.currentPlayer;
        let playerBag = null;
        let bagIds = [];
        if (!this.playerBagMap.has(player.playerId)) {
            playerBag = new PlayerBag();
            this.playerBagMap.set(player.playerId, [playerBag]);
        }
        else {
            let playerBags = this.playerBagMap.get(player.playerId);
            for (let i = 0; i < playerBags.length; ++i) {
                if (GameConfig.ActionProp.getElement(bagId).Tab == 6) {
                    if (GameConfig.ActionProp.getElement(playerBags[i].bagId).Tab == 6) {
                        playerBag = playerBags[i];
                        break;
                    }
                }
                if (playerBags[i].bagId == bagId || GameConfig.ActionProp.getElement(playerBags[i].bagId).NextId == bagId) {
                    playerBag = playerBags[i];
                    break;
                }
            }
            if (!playerBag) {
                if (playerBags.length >= GlobalData.bagCount) {
                    playerBags.forEach((value) => {
                        bagIds.push(value.bagId);
                    });
                    return bagIds;
                }
                playerBag = new PlayerBag();
                playerBags.push(playerBag);
            }
        }
        await playerBag.equip(player, bagId);
        this.playerBagMap.get(player.playerId).forEach((value) => {
            bagIds.push(value.bagId);
        });
        return bagIds;
    }
    async net_unloadBag(bagId) {
        let player = this.currentPlayer;
        let bagIds = [];
        if (!this.playerBagMap.has(player.playerId))
            return bagIds;
        let playerBags = this.playerBagMap.get(player.playerId);
        let unloadIndex = -1;
        for (let i = 0; i < playerBags.length; ++i) {
            if (playerBags[i].bagId == bagId) {
                await playerBags[i].unEquip(player, bagId);
                unloadIndex = i;
                break;
            }
        }
        if (unloadIndex == -1 || !playerBags || playerBags.length == 0)
            return bagIds;
        if (playerBags.length == 1) {
            playerBags.length = 0;
            playerBags = [];
        }
        else {
            for (let i = unloadIndex + 1; i < playerBags.length; ++i) {
                playerBags[i - 1] = playerBags[i];
            }
            playerBags.length = playerBags.length - 1;
        }
        console.error(`playerBags.length:${playerBags.length}`);
        playerBags.forEach((value) => {
            bagIds.push(value.bagId);
        });
        return bagIds;
    }
    async net_unloadAllBag() {
        let player = this.currentPlayer;
        return await this.unloadAllBag(player, true);
    }
    async unloadAllBag(player, isSync) {
        if (!this.playerBagMap.has(player.playerId))
            return;
        let playerBag = this.playerBagMap.get(player.playerId);
        for (let i = 0; i < playerBag.length; ++i) {
            await playerBag[i].unEquip(player, playerBag[i].bagId, isSync);
        }
        this.playerBagMap.delete(player.playerId);
        return [];
    }
    async net_startGlide() {
        let player = this.currentPlayer;
        if (!this.playerGlideMap.has(player.playerId)) {
            this.playerGlideMap.set(player.playerId, new PlayerGlide());
        }
        let playerGlide = this.playerGlideMap.get(player.playerId);
        return await playerGlide.startGlide(player);
    }
    net_stopGlide() {
        let player = this.currentPlayer;
        if (!this.playerGlideMap.has(player.playerId))
            return true;
        let playerGlide = this.playerGlideMap.get(player.playerId);
        playerGlide.stopGlide();
        this.playerGlideMap.delete(player.playerId);
        return true;
    }
}
__decorate([
    Decorator.noReply()
], DanMuModuleS.prototype, "net_sendDanMu", null);
__decorate([
    Decorator.noReply()
], DanMuModuleS.prototype, "net_showBubbleText", null);
__decorate([
    Decorator.noReply()
], DanMuModuleS.prototype, "net_playExpression", null);
class PlayerGlide {
    constructor() {
        this.animation = null;
        this.glideObj = null;
        this.effectId = null;
    }
    async startGlide(player) {
        await Utils.asyncDownloadAsset(`148890`);
        this.animation = player.character.loadAnimation(`148890`);
        this.animation.loop = 0;
        this.animation.play();
        await Utils.asyncDownloadAsset(`162566`);
        this.glideObj = await GameObjPool.asyncSpawn("162566");
        await this.glideObj.asyncReady();
        await this.glideObj.setCollision(mw.PropertyStatus.Off, true);
        await Utils.asyncDownloadAsset(`27392`);
        this.effectId = EffectService.playOnGameObject("27392", this.glideObj, { loopCount: 0 });
        player.character.attachToSlot(this.glideObj, mw.HumanoidSlotType.LeftHand);
        this.glideObj.localTransform.position = new mw.Vector(0, 0, 0);
        this.glideObj.localTransform.rotation = new mw.Rotation(-90, 0, 0);
        return true;
    }
    stopGlide() {
        if (this.effectId) {
            EffectService.stop(this.effectId);
            this.effectId = null;
        }
        if (this.animation) {
            this.animation.stop();
            this.animation = null;
        }
        if (this.glideObj) {
            GameObjPool.despawn(this.glideObj);
            this.glideObj = null;
        }
    }
}
class PlayerBag {
    constructor() {
        this.player = null;
        this.bagId = null;
        this.mode = null;
        this.vehiclesMode = null;
        this.isUpdate = false;
        this.isMove = false;
        this.playerVelocity = null;
        this.actionPropElement = null;
        this.vehiclesModeAnimation = null;
        this.playerAnimation = null;
        this.playerStatce = null;
        this.originalMaterialId = null;
        this.animation = null;
        this.effectId = null;
        this.soundId = null;
    }
    async equip(player, bagId) {
        this.player = player;
        this.bagId = bagId;
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        this.actionPropElement = actionPropElement;
        if (actionPropElement.BuffId > 0) {
            if (Utils.buffMap.has(player.playerId)) {
                Utils.buffMap.get(player.playerId).bagId = bagId;
            }
        }
        else {
            if (actionPropElement.NextId > 0) {
                if (GameConfig.ActionProp.getElement(actionPropElement.NextId).BuffId > 0) {
                    if (Utils.buffMap.has(player.playerId)) {
                        Utils.buffMap.get(player.playerId).bagId = 0;
                    }
                }
            }
        }
        if (actionPropElement.AssetId && actionPropElement.AssetId.length > 0) {
            this.recycleMode();
            await this.spawnMode(player, actionPropElement.AssetId, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
        }
        else {
            await this.updateMode(player, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
        }
        if (actionPropElement.VehiclesChildId && actionPropElement.VehiclesChildId.length > 0) {
            this.recycleVehiclesMode();
            await this.spawnVehiclesMode(player, actionPropElement.VehiclesChildId, actionPropElement.VehiclesChildParameter);
        }
        else {
            this.recycleVehiclesMode();
        }
        if (actionPropElement.MaterialId && actionPropElement.MaterialId.length > 0) {
            this.setMaterial(actionPropElement.MaterialId);
        }
        else {
            this.resetMaterial();
        }
        if (actionPropElement.IsFly == 1) {
            this.switchFlyState(player);
        }
        else if (actionPropElement.IsFly == 0) {
            if (actionPropElement.NextId > 0) {
                if (GameConfig.ActionProp.getElement(actionPropElement.NextId).IsFly == 1) {
                    this.switchRunState(player);
                }
            }
        }
        if (actionPropElement.AnimationId && actionPropElement.AnimationId.length > 0) {
            await this.playAnimation(player, actionPropElement.AnimationId, actionPropElement.AnimationSlot, actionPropElement.AnimationParameter);
        }
        else {
            this.stopAnimation();
        }
        if (actionPropElement.DelayAssetId && actionPropElement.DelayAssetId.length > 0) {
            this.placingItems(player, actionPropElement);
        }
        if (actionPropElement.EffectId && actionPropElement.EffectId.length > 0) {
            this.stopEffect();
            await this.playEffect(actionPropElement.EffectId, actionPropElement.EffectLoop, actionPropElement.EffectOffsetParameter);
        }
        else {
            this.stopEffect();
        }
        if (actionPropElement.SoundId && actionPropElement.SoundId.length > 0) {
            this.stop3DSound();
            await this.play3DSound(actionPropElement.SoundId, actionPropElement.SoundParameter);
        }
        else {
            this.stop3DSound();
        }
        this.isUpdate = actionPropElement.Tab == 6;
        await TimeUtil.delaySecond(0.1);
        return true;
    }
    async unEquip(player, bagId, isSync = true) {
        this.isUpdate = false;
        this.stopEffect();
        this.stop3DSound();
        this.stopAnimation();
        this.stopPlayerVehiclesModeAnimation();
        this.resetMaterial();
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        if (actionPropElement.IsFly == 1 && GameConfig.ActionProp.getElement(actionPropElement.NextId).IsFly == 0) {
            this.switchRunState(player);
        }
        if (actionPropElement.BuffId > 0) {
            if (actionPropElement.NextId > 0) {
                if (GameConfig.ActionProp.getElement(actionPropElement.NextId).BuffId <= 0) {
                    if (Utils.buffMap.has(player.playerId)) {
                        Utils.buffMap.get(player.playerId).bagId = 0;
                    }
                }
            }
        }
        this.recycleMode();
        this.recycleVehiclesMode();
        if (isSync)
            await TimeUtil.delaySecond(0.1);
        return true;
    }
    async spawnMode(player, assetId, slotType, parameter) {
        await Utils.asyncDownloadAsset(assetId);
        this.mode = await GameObjPool.asyncSpawn(assetId);
        await this.mode.asyncReady();
        this.mode.setCollision(mw.PropertyStatus.Off, true);
        player.character.attachToSlot(this.mode, slotType);
        this.mode.localTransform.position = new Vector(parameter[0], parameter[1], parameter[2]);
        this.mode.localTransform.rotation = new Rotation(parameter[3], parameter[4], parameter[5]);
        this.mode.localTransform.scale = new Vector(parameter[6], parameter[7], parameter[8]);
    }
    recycleMode() {
        if (!this.mode)
            return;
        GameObjPool.despawn(this.mode);
        this.mode = null;
    }
    async updateMode(player, slotType, parameter) {
        if (!this.mode) {
            if (this.actionPropElement.AssetId && this.actionPropElement.AssetId.length > 0) ;
            else {
                if (this.actionPropElement.NextId > 0) {
                    if (this.actionPropElement.NextId == this.actionPropElement.ID) {
                        let actionPropElement = GameConfig.ActionProp.getElement(this.actionPropElement.NextId - 1);
                        if (actionPropElement.AssetId && actionPropElement.AssetId.length > 0) {
                            await this.spawnMode(player, actionPropElement.AssetId, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
                        }
                    }
                    else {
                        let actionPropElement = GameConfig.ActionProp.getElement(this.actionPropElement.NextId);
                        if (actionPropElement.AssetId && actionPropElement.AssetId.length > 0) {
                            await this.spawnMode(player, actionPropElement.AssetId, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
                        }
                    }
                }
            }
        }
        player.character.attachToSlot(this.mode, slotType);
        this.mode.localTransform.position = new Vector(parameter[0], parameter[1], parameter[2]);
        this.mode.localTransform.rotation = new Rotation(parameter[3], parameter[4], parameter[5]);
        this.mode.localTransform.scale = new Vector(parameter[6], parameter[7], parameter[8]);
    }
    async spawnVehiclesMode(player, assetId, parameter) {
        await Utils.asyncDownloadAsset(`Character`);
        this.vehiclesMode = await GameObjPool.asyncSpawn(`Character`);
        await this.vehiclesMode.asyncReady();
        await Utils.asyncDownloadAsset(assetId);
        this.vehiclesMode.description.base.wholeBody = assetId;
        await this.vehiclesMode.asyncReady();
        this.vehiclesMode.collisionWithOtherCharacterEnabled = false;
        this.vehiclesMode.complexMovementEnabled = false;
        // this.vehiclesMode.gravityScale = 0;
        // this.vehiclesMode.maxFallingSpeed = 0;
        // this.vehiclesMode.horizontalBrakingDecelerationFalling = 0;
        // this.vehiclesMode.driftControl = 0;
        player.character.attachToSlot(this.vehiclesMode, mw.HumanoidSlotType.Root);
        this.vehiclesMode.localTransform.rotation = new Rotation(parameter[3], parameter[4], parameter[5]);
        this.vehiclesMode.localTransform.scale = new Vector(parameter[6], parameter[7], parameter[8]);
        this.vehiclesMode.localTransform.position = new Vector(parameter[0], parameter[1], parameter[2]);
    }
    recycleVehiclesMode() {
        if (!this.vehiclesMode)
            return;
        GameObjPool.despawn(this.vehiclesMode);
        this.vehiclesMode = null;
    }
    update() {
        if (!this.isUpdate)
            return;
        if (!this.player)
            return;
        if (!this.playerVelocity)
            this.playerVelocity = this.player.character.velocity;
        if (!this.isMove && (this.player.character.velocity.x != 0 || this.player.character.velocity.y != 0)) {
            this.isMove = true;
            this.playerMoveAction();
        }
        else if (this.isMove && (this.player.character.velocity.x == 0 && this.player.character.velocity.y == 0)) {
            this.isMove = false;
            this.playerIdleAction();
        }
    }
    stopPlayerVehiclesModeAnimation() {
        if (this.vehiclesModeAnimation) {
            this.vehiclesModeAnimation.stop();
            this.vehiclesModeAnimation = null;
        }
        if (this.playerAnimation) {
            this.playerAnimation.stop();
            this.playerAnimation = null;
        }
        if (this.playerStatce) {
            this.playerStatce.stop();
            this.playerStatce = null;
        }
    }
    async playerMoveAction() {
        this.stopPlayerVehiclesModeAnimation();
        if (this.vehiclesMode) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesChildMoveId);
            this.vehiclesModeAnimation = this.vehiclesMode.loadAnimation(this.actionPropElement.VehiclesChildMoveId);
            this.vehiclesModeAnimation.loop = 0;
            this.vehiclesModeAnimation.play();
        }
        if (this.actionPropElement.VehiclesWalkAnimationId && this.actionPropElement.VehiclesWalkAnimationId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesWalkAnimationId);
            this.playerAnimation = this.player.character.loadAnimation(this.actionPropElement.VehiclesWalkAnimationId);
            this.playerAnimation.slot = this.actionPropElement.VehiclesWalkAnimationSlot;
            this.playerAnimation.loop = 0;
            this.playerAnimation.play();
        }
        if (this.actionPropElement.VehiclesWalkStanceId && this.actionPropElement.VehiclesWalkStanceId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesWalkStanceId);
            this.playerStatce = this.player.character.loadSubStance(this.actionPropElement.VehiclesWalkStanceId);
            this.playerStatce.blendMode = this.actionPropElement.VehiclesWalkStanceSlot - 1;
            this.playerStatce.play();
        }
    }
    async playerIdleAction() {
        this.stopPlayerVehiclesModeAnimation();
        if (this.vehiclesMode) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesChildIdleId);
            this.vehiclesModeAnimation = this.vehiclesMode.loadAnimation(this.actionPropElement.VehiclesChildIdleId);
            this.vehiclesModeAnimation.loop = 0;
            this.vehiclesModeAnimation.play();
        }
        if (this.actionPropElement.VehiclesIdleAnimationId && this.actionPropElement.VehiclesIdleAnimationId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesIdleAnimationId);
            this.playerAnimation = this.player.character.loadAnimation(this.actionPropElement.VehiclesIdleAnimationId);
            this.playerAnimation.slot = this.actionPropElement.VehiclesIdleAnimationSlot;
            this.playerAnimation.loop = 0;
            this.playerAnimation.play();
        }
        if (this.actionPropElement.VehiclesIdleStanceId && this.actionPropElement.VehiclesIdleStanceId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesIdleStanceId);
            this.playerStatce = this.player.character.loadSubStance(this.actionPropElement.VehiclesIdleStanceId);
            this.playerStatce.blendMode = this.actionPropElement.VehiclesIdleStanceSlot - 1;
            this.playerStatce.play();
        }
    }
    switchFlyState(player) {
        if (player.character.getCurrentState() != mw.CharacterStateType.Flying) {
            player.character.changeState(mw.CharacterStateType.Flying);
        }
    }
    switchRunState(player) {
        if (player.character.getCurrentState() != mw.CharacterStateType.Running) {
            player.character.changeState(mw.CharacterStateType.Running);
        }
    }
    setMaterial(materialId) {
        if (!this.mode)
            return;
        this.originalMaterialId = materialId;
        this.mode.setMaterial(materialId);
    }
    resetMaterial() {
        if (!this.mode)
            return;
        if (!this.originalMaterialId)
            return;
        this.mode.resetMaterial();
        this.originalMaterialId = null;
    }
    async playAnimation(player, assetId, slotType, parameter) {
        await Utils.asyncDownloadAsset(assetId);
        this.animation = player.character.loadAnimation(assetId);
        if (slotType)
            this.animation.slot = slotType;
        this.animation.speed = parameter[0];
        this.animation.loop = parameter[1];
        this.animation.play();
    }
    stopAnimation() {
        if (!this.animation)
            return;
        this.animation?.stop();
        this.animation = null;
    }
    async placingItems(player, actionPropElement) {
        if (!player || !actionPropElement)
            return;
        let playAnimationTime = 1;
        if (actionPropElement.AnimationParameter && actionPropElement.AnimationParameter.length > 0) {
            playAnimationTime = actionPropElement.AnimationParameter[0];
        }
        await TimeUtil.delaySecond(playAnimationTime);
        if (!player || !actionPropElement)
            return;
        let delayModeOffsetParameter = actionPropElement.DelayModeOffsetParameter;
        let playerPos = player.character.worldTransform.position;
        let offsetZ = player.character.collisionExtent.z / 2;
        let playerForward = player.character.worldTransform.getForwardVector();
        let itemPos = new Vector(playerPos.x + (playerForward.x * 40), playerPos.y + (playerForward.y * 40), playerPos.z + (playerForward.z * 40) - offsetZ);
        let itemRot = new mw.Rotation(new mw.Vector(playerForward.x * delayModeOffsetParameter[4], playerForward.y * delayModeOffsetParameter[4], playerForward.z * delayModeOffsetParameter[4] - 90));
        let itemSca = new mw.Vector(delayModeOffsetParameter[6], delayModeOffsetParameter[7], delayModeOffsetParameter[8]);
        let delayAssetId = actionPropElement.DelayAssetId;
        await Utils.asyncDownloadAsset(delayAssetId);
        let itemMode = await GameObjPool.asyncSpawn(delayAssetId);
        await itemMode.asyncReady();
        itemMode.worldTransform.position = itemPos;
        itemMode.worldTransform.rotation = itemRot;
        itemMode.worldTransform.scale = itemSca;
        let delayModeEffectId = null;
        let delayModeEffectAssetId = actionPropElement.DelayModeEffectId;
        if (delayModeEffectAssetId && delayModeEffectAssetId.length > 0) {
            await Utils.asyncDownloadAsset(delayModeEffectAssetId);
            let delayModeEffectOffsetParameter = actionPropElement.DelayModeEffectOffsetParameter;
            delayModeEffectId = EffectService.playOnGameObject(delayModeEffectAssetId, itemMode, {
                loopCount: 0,
                position: new mw.Vector(delayModeEffectOffsetParameter[0], delayModeEffectOffsetParameter[1], delayModeEffectOffsetParameter[2]),
                rotation: new mw.Rotation(delayModeEffectOffsetParameter[3], delayModeEffectOffsetParameter[4], delayModeEffectOffsetParameter[5]),
                scale: new mw.Vector(delayModeEffectOffsetParameter[6], delayModeEffectOffsetParameter[7], delayModeEffectOffsetParameter[8])
            });
        }
        let delayParameter = actionPropElement.DelayParameter;
        let delayTime = delayParameter[0];
        let delayCount = delayParameter[1];
        let delayInterval = delayParameter[2];
        await TimeUtil.delaySecond(delayTime - playAnimationTime);
        for (let i = 0; i < delayCount; ++i) {
            await new Promise((resolve) => {
                setTimeout(async () => {
                    let DelayEffectAssetId = actionPropElement.DelayEffectId;
                    if (DelayEffectAssetId && DelayEffectAssetId.length > 0) {
                        await Utils.asyncDownloadAsset(DelayEffectAssetId);
                        let delayEffectOffsetParameter = actionPropElement.DelayEffectOffsetParameter;
                        EffectService.playAtPosition(DelayEffectAssetId, itemMode.worldTransform.position, {
                            loopCount: 1,
                            rotation: itemMode.worldTransform.rotation,
                            scale: new mw.Vector(delayEffectOffsetParameter[6], delayEffectOffsetParameter[7], delayEffectOffsetParameter[8])
                        });
                        let delayModeSoundId = actionPropElement.DelayModeSoundId;
                        if (delayModeSoundId && delayModeSoundId.length > 0) {
                            await Utils.asyncDownloadAsset(delayModeSoundId);
                            let delayModeSoundParameter = actionPropElement.DelayModeSoundParameter;
                            SoundService.play3DSound(delayModeSoundId, itemMode.worldTransform.position, 1, delayModeSoundParameter[0], { radius: delayModeSoundParameter[1], falloffDistance: delayModeSoundParameter[1] * 1.2 });
                        }
                    }
                    return resolve();
                }, delayInterval * 1000);
            });
        }
        if (actionPropElement.ID != 30004)
            await TimeUtil.delaySecond(delayInterval);
        if (delayModeEffectId)
            EffectService.stop(delayModeEffectId);
        GameObjPool.despawn(itemMode);
    }
    async playEffect(assetId, loop, parameter) {
        await Utils.asyncDownloadAsset(assetId);
        this.effectId = EffectService.playOnGameObject(assetId, this.mode, {
            loopCount: loop,
            position: new mw.Vector(parameter[0], parameter[1], parameter[2]),
            rotation: new mw.Rotation(parameter[3], parameter[4], parameter[5]),
            scale: new mw.Vector(parameter[6], parameter[7], parameter[8])
        });
    }
    stopEffect() {
        if (!this.effectId)
            return;
        EffectService.stop(this.effectId);
        this.effectId = null;
    }
    async play3DSound(assetId, parameter) {
        await Utils.asyncDownloadAsset(assetId);
        this.soundId = SoundService.play3DSound(assetId, this.mode, parameter[2], parameter[1], { radius: parameter[0], falloffDistance: parameter[0] * 1.2 });
    }
    stop3DSound() {
        if (!this.soundId)
            return;
        SoundService.stop3DSound(this.soundId);
        this.soundId = null;
    }
}
class PlayerInteract {
    constructor() {
        this.interactObj = null;
        this.npc = null;
        this.npcSubStance = null;
        this.singleAni = null;
        this.playerSubStance = null;
    }
    async initNpc() {
        if (this.npc)
            return;
        this.npc = await mw.GameObject.asyncSpawn("Character");
        this.npc.collisionWithOtherCharacterEnabled = false;
        await this.npc.asyncReady();
    }
    async playSingleAni(player, actionData) {
        await Utils.asyncDownloadAsset(actionData.assetId);
        this.singleAni = player.character.loadAnimation(actionData.assetId);
        this.singleAni.loop = actionData.loop == 0 ? 1 : 0;
        let isPlaySuccess = this.singleAni.play();
        console.error(`isPlaySuccess:${isPlaySuccess}`);
        return isPlaySuccess;
    }
    async playDoubleAni(player, actionData) {
        await this.initNpc();
        this.npc.setVisibility(true, true);
        player.character.collisionWithOtherCharacterEnabled = false;
        player.character.movementEnabled = false;
        this.npc.worldTransform.position = player.character.worldTransform.position.add(actionData.pos);
        let tmpRot = mw.Rotation.zero;
        mw.Rotation.add(player.character.worldTransform.rotation, actionData.rot, tmpRot);
        this.npc.worldTransform.rotation = tmpRot;
        let aniStr = actionData.assetId.split('-');
        await Utils.asyncDownloadAsset(aniStr[0]);
        await Utils.asyncDownloadAsset(aniStr[1]);
        this.playerSubStance = player.character.loadSubStance(aniStr[0]);
        this.playerSubStance.play();
        this.npcSubStance = this.npc.loadSubStance(aniStr[1]);
        this.npcSubStance.play();
        return true;
    }
    async interact(player, actionData) {
        return new Promise(async (resolve) => {
            await this.initNpc();
            this.npc.setVisibility(true, true);
            player.character.collisionWithOtherCharacterEnabled = false;
            this.interactObj = await mw.GameObject.asyncSpawn("Interactor");
            await this.interactObj.asyncReady();
            player.character.attachToSlot(this.interactObj, mw.HumanoidSlotType.FaceOrnamental);
            this.interactObj.onEnter.add(async () => {
                let aniStr = actionData.assetId.split('-');
                await Utils.asyncDownloadAsset(aniStr[0]);
                await Utils.asyncDownloadAsset(aniStr[1]);
                this.playerSubStance = player.character.loadSubStance(aniStr[0]);
                this.playerSubStance.play();
                this.npcSubStance = this.npc.loadSubStance(aniStr[1]);
                this.npcSubStance.play();
                this.interactObj.localTransform.position = actionData.pos;
                this.interactObj.localTransform.rotation = actionData.rot;
                return resolve(true);
            });
            this.interactObj.enter(this.npc, mw.HumanoidSlotType.Buttocks);
        });
    }
    async clearInteractor(player) {
        if (this.singleAni) {
            this.singleAni?.stop();
            this.singleAni = null;
        }
        if (this.playerSubStance) {
            this.playerSubStance.stop();
            this.playerSubStance = null;
        }
        if (this.npcSubStance) {
            this.npcSubStance.stop();
            this.npcSubStance = null;
            this.npc.setVisibility(false, true);
        }
        return await this.leaveInteract(player);
    }
    async leaveInteract(player) {
        return new Promise((resolve) => {
            if (!this.interactObj)
                return resolve(true);
            this.interactObj.onLeave.add(async () => {
                this.interactObj.parent = null;
                this.interactObj.destroy();
                this.interactObj = null;
                this.npc.parent = null;
                this.npc.setVisibility(false, true);
                if (!player.character.collisionWithOtherCharacterEnabled)
                    player.character.collisionWithOtherCharacterEnabled = true;
                await TimeUtil.delaySecond(1);
                return resolve(true);
            });
            this.interactObj.leave();
        });
    }
}

var foreign23 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PlayerBag: PlayerBag,
    PlayerGlide: PlayerGlide,
    PlayerInteract: PlayerInteract,
    default: DanMuModuleS
});

class NavigationConfig {
    constructor() {
        this.speed = 10;
    }
}
class NavigationModel {
    constructor() {
        this.model = null;
        this.interactor = null;
        this.npc = null;
        this.pathVecs = [];
        this.speed = 10;
        this.isInitComplete = false;
        this.pathIndex = 0;
        this.currentLocation = new mw.Vector();
        this.startDirection = new mw.Vector();
        this.stride = mw.Vector.zero;
    }
    prepareMove() {
        if (!this.model)
            return;
        if (!this.pathVecs || this.pathVecs.length <= 1)
            return;
        this.pathIndex = 0;
        this.currentLocation = this.pathVecs[this.pathIndex];
        this.model.worldTransform.position = this.currentLocation;
        mw.Vector.subtract(this.pathVecs[this.pathIndex + 1], this.currentLocation, this.startDirection);
        this.startDirection = this.startDirection.normalized;
        mw.Vector.multiply(this.startDirection, this.speed, this.stride);
        this.model.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
        let modelRot = this.model.worldTransform.rotation;
        this.model.worldTransform.rotation = new mw.Rotation(modelRot.x, modelRot.y, modelRot.z + 90);
        this.pathIndex++;
        if (this.pathIndex == this.pathVecs.length)
            this.pathIndex = 0;
        this.isInitComplete = true;
    }
    updateMove() {
        if (!this.model || !this.pathVecs || this.pathVecs.length <= 1 || !this.isInitComplete)
            return;
        if (mw.Vector.distance(this.currentLocation, this.pathVecs[this.pathIndex]) <= 10) {
            this.currentLocation = this.pathVecs[this.pathIndex];
            this.model.worldTransform.position = this.currentLocation;
            if (this.pathIndex + 1 == this.pathVecs.length) {
                mw.Vector.subtract(this.pathVecs[0], this.currentLocation, this.startDirection);
            }
            else {
                mw.Vector.subtract(this.pathVecs[this.pathIndex + 1], this.currentLocation, this.startDirection);
            }
            this.startDirection = this.startDirection.normalized;
            mw.Vector.multiply(this.startDirection, this.speed, this.stride);
            this.model.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
            let modelRot = this.model.worldTransform.rotation;
            this.model.worldTransform.rotation = new mw.Rotation(modelRot.x, modelRot.y, modelRot.z + 90);
            this.pathIndex++;
            if (this.pathIndex == this.pathVecs.length)
                this.pathIndex = 0;
        }
        this.currentLocation = this.model.worldTransform.position;
        this.currentLocation.x += this.stride.x;
        this.currentLocation.y += this.stride.y;
        this.currentLocation.z += this.stride.z;
        this.model.worldTransform.position = this.currentLocation;
    }
    async enterInteractor() {
        if (!this.interactor || !this.npc)
            return;
        await this.interactor.asyncReady();
        await this.npc.asyncReady();
        this.interactor.onEnter.clear();
        this.interactor.onEnter.add(() => {
            this.npc.localTransform.position = mw.Vector.zero;
            this.npc.localTransform.rotation = mw.Rotation.zero;
        });
        this.interactor.enter(this.npc, mw.HumanoidSlotType.Root);
    }
}
class NavigationModuleC extends ModuleC {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
}
const navigationConfigs = [
    { modelId: "040055A6", interactionObjId: "0A394447", npcId: "39AB2FB0", pathId: "356DCBF1", speed: 10 },
    { modelId: "348F4F22", interactionObjId: "048FB28D", npcId: "254A21DD", pathId: "01087776", speed: 10 },
    { modelId: "289E46DE", interactionObjId: "09295629", npcId: "31DE1825", pathId: "340AFE18", speed: 10 },
    { modelId: "2963B95A", interactionObjId: "1CEC6972", npcId: "0A031A75", pathId: "1D44FD67", speed: 10 },
];
class NavigationModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.navigationModels = [];
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initNavigation();
    }
    initNavigation() {
        TimeUtil.delaySecond(15).then(() => {
            this.initNavigationModels();
        });
    }
    initNavigationModels() {
        navigationConfigs.forEach((navigationConfig) => {
            let navigationModel = new NavigationModel();
            navigationModel.speed = navigationConfig.speed;
            GameObject.asyncFindGameObjectById(navigationConfig.modelId).then((model) => {
                navigationModel.model = model;
                GameObject.asyncFindGameObjectById(navigationConfig.npcId).then(async (npcModel) => {
                    navigationModel.npc = npcModel;
                    GameObject.asyncFindGameObjectById(navigationConfig.interactionObjId).then(async (interactorModel) => {
                        navigationModel.interactor = interactorModel;
                        navigationModel.enterInteractor();
                        GameObject.asyncFindGameObjectById(navigationConfig.pathId).then((pathModel) => {
                            let path = pathModel.getChildren();
                            path.forEach((pathNode) => {
                                navigationModel.pathVecs.push(pathNode.worldTransform.position);
                            });
                            navigationModel.prepareMove();
                            this.navigationModels.push(navigationModel);
                        });
                    });
                });
            });
        });
    }
    onUpdate(dt) {
        if (!this.navigationModels || this.navigationModels.length == 0)
            return;
        this.navigationModels.forEach((navigationModel) => {
            navigationModel.updateMove();
        });
    }
}

var foreign36 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NavigationConfig: NavigationConfig,
    NavigationModel: NavigationModel,
    NavigationModuleC: NavigationModuleC,
    NavigationModuleS: NavigationModuleS
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/RankPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let RankPanel_Generate = class RankPanel_Generate extends UIScript {
    get mOpenRoomRankImage() {
        if (!this.mOpenRoomRankImage_Internal && this.uiWidgetBase) {
            this.mOpenRoomRankImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenRoomRankImage');
        }
        return this.mOpenRoomRankImage_Internal;
    }
    get mOpenRoomRankButton() {
        if (!this.mOpenRoomRankButton_Internal && this.uiWidgetBase) {
            this.mOpenRoomRankButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenRoomRankImage/mOpenRoomRankButton');
        }
        return this.mOpenRoomRankButton_Internal;
    }
    get mRoomCanvas() {
        if (!this.mRoomCanvas_Internal && this.uiWidgetBase) {
            this.mRoomCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas');
        }
        return this.mRoomCanvas_Internal;
    }
    get mCloseRoomButton() {
        if (!this.mCloseRoomButton_Internal && this.uiWidgetBase) {
            this.mCloseRoomButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mCloseRoomButton');
        }
        return this.mCloseRoomButton_Internal;
    }
    get mRoomRankTextBlock() {
        if (!this.mRoomRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRoomRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/TitleRoomCanvas/mRoomRankTextBlock');
        }
        return this.mRoomRankTextBlock_Internal;
    }
    get mRoomNameTextBlock() {
        if (!this.mRoomNameTextBlock_Internal && this.uiWidgetBase) {
            this.mRoomNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/TitleRoomCanvas/mRoomNameTextBlock');
        }
        return this.mRoomNameTextBlock_Internal;
    }
    get mRoomScoreTextBlock() {
        if (!this.mRoomScoreTextBlock_Internal && this.uiWidgetBase) {
            this.mRoomScoreTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/TitleRoomCanvas/mRoomScoreTextBlock');
        }
        return this.mRoomScoreTextBlock_Internal;
    }
    get mRoomScrollBox() {
        if (!this.mRoomScrollBox_Internal && this.uiWidgetBase) {
            this.mRoomScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mRoomScrollBox');
        }
        return this.mRoomScrollBox_Internal;
    }
    get mRoomContentCanvas() {
        if (!this.mRoomContentCanvas_Internal && this.uiWidgetBase) {
            this.mRoomContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mRoomScrollBox/mRoomContentCanvas');
        }
        return this.mRoomContentCanvas_Internal;
    }
    get mWorldCanvas() {
        if (!this.mWorldCanvas_Internal && this.uiWidgetBase) {
            this.mWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas');
        }
        return this.mWorldCanvas_Internal;
    }
    get mTitleTextBlock() {
        if (!this.mTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/MainWorldCanvas/TitleWorldCanvas/mTitleTextBlock');
        }
        return this.mTitleTextBlock_Internal;
    }
    get mWorldRankTextBlock() {
        if (!this.mWorldRankTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldRankTextBlock');
        }
        return this.mWorldRankTextBlock_Internal;
    }
    get mWorldNameTextBlock() {
        if (!this.mWorldNameTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldNameTextBlock');
        }
        return this.mWorldNameTextBlock_Internal;
    }
    get mWorldTimeTextBlock() {
        if (!this.mWorldTimeTextBlock_Internal && this.uiWidgetBase) {
            this.mWorldTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldTimeTextBlock');
        }
        return this.mWorldTimeTextBlock_Internal;
    }
    get mWorldContentCanvas() {
        if (!this.mWorldContentCanvas_Internal && this.uiWidgetBase) {
            this.mWorldContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/ScrollBox/mWorldContentCanvas');
        }
        return this.mWorldContentCanvas_Internal;
    }
    get mSelfWorldCanvas() {
        if (!this.mSelfWorldCanvas_Internal && this.uiWidgetBase) {
            this.mSelfWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas');
        }
        return this.mSelfWorldCanvas_Internal;
    }
    get mSelfWorldRankTextBlock() {
        if (!this.mSelfWorldRankTextBlock_Internal && this.uiWidgetBase) {
            this.mSelfWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas/mSelfWorldRankTextBlock');
        }
        return this.mSelfWorldRankTextBlock_Internal;
    }
    get mSelfWorldNameTextBlock() {
        if (!this.mSelfWorldNameTextBlock_Internal && this.uiWidgetBase) {
            this.mSelfWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas/mSelfWorldNameTextBlock');
        }
        return this.mSelfWorldNameTextBlock_Internal;
    }
    get mSelfWorldTimeTextBlock() {
        if (!this.mSelfWorldTimeTextBlock_Internal && this.uiWidgetBase) {
            this.mSelfWorldTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas/mSelfWorldTimeTextBlock');
        }
        return this.mSelfWorldTimeTextBlock_Internal;
    }
    get mCloseWorldButton() {
        if (!this.mCloseWorldButton_Internal && this.uiWidgetBase) {
            this.mCloseWorldButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseWorldButton');
        }
        return this.mCloseWorldButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.mOpenRoomRankButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mOpenRoomRankButton");
        });
        this.initLanguage(this.mOpenRoomRankButton);
        this.mOpenRoomRankButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        this.mCloseRoomButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseRoomButton");
        });
        this.mCloseRoomButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseWorldButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseWorldButton");
        });
        this.mCloseWorldButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRoomRankTextBlock);
        this.initLanguage(this.mRoomNameTextBlock);
        this.initLanguage(this.mRoomScoreTextBlock);
        this.initLanguage(this.mTitleTextBlock);
        this.initLanguage(this.mWorldRankTextBlock);
        this.initLanguage(this.mWorldNameTextBlock);
        this.initLanguage(this.mWorldTimeTextBlock);
        this.initLanguage(this.mSelfWorldRankTextBlock);
        this.initLanguage(this.mSelfWorldNameTextBlock);
        this.initLanguage(this.mSelfWorldTimeTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
RankPanel_Generate = __decorate([
    UIBind('UI/module/RankModule/RankPanel.ui')
], RankPanel_Generate);
var RankPanel_Generate$1 = RankPanel_Generate;

var foreign76 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/RoomItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let RoomItem_Generate = class RoomItem_Generate extends UIScript {
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mRankTextBlock');
        }
        return this.mRankTextBlock_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mNameTextBlock');
        }
        return this.mNameTextBlock_Internal;
    }
    get mKillCountTextBlock() {
        if (!this.mKillCountTextBlock_Internal && this.uiWidgetBase) {
            this.mKillCountTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mKillCountTextBlock');
        }
        return this.mKillCountTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mKillCountTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
RoomItem_Generate = __decorate([
    UIBind('UI/module/RankModule/RoomItem.ui')
], RoomItem_Generate);
var RoomItem_Generate$1 = RoomItem_Generate;

var foreign77 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RoomItem_Generate$1
});

class RoomItem extends RoomItem_Generate$1 {
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
    }
    setData(ranking, roomData, isSelf) {
        this.mRankTextBlock.text = ranking.toString();
        this.mNameTextBlock.text = roomData.playerName;
        this.mKillCountTextBlock.text = roomData.score.toString();
        let fontColor = isSelf ? mw.LinearColor.green : mw.LinearColor.white;
        this.mRankTextBlock.fontColor = fontColor;
        this.mNameTextBlock.fontColor = fontColor;
        this.mKillCountTextBlock.fontColor = fontColor;
    }
}

var foreign41 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RoomItem
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/WorldItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let WorldItem_Generate = class WorldItem_Generate extends UIScript {
    get mRankTextBlock() {
        if (!this.mRankTextBlock_Internal && this.uiWidgetBase) {
            this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mRankTextBlock');
        }
        return this.mRankTextBlock_Internal;
    }
    get mNameTextBlock() {
        if (!this.mNameTextBlock_Internal && this.uiWidgetBase) {
            this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mNameTextBlock');
        }
        return this.mNameTextBlock_Internal;
    }
    get mTimeTextBlock() {
        if (!this.mTimeTextBlock_Internal && this.uiWidgetBase) {
            this.mTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/Canvas/mTimeTextBlock');
        }
        return this.mTimeTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mRankTextBlock);
        this.initLanguage(this.mNameTextBlock);
        this.initLanguage(this.mTimeTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
WorldItem_Generate = __decorate([
    UIBind('UI/module/RankModule/WorldItem.ui')
], WorldItem_Generate);
var WorldItem_Generate$1 = WorldItem_Generate;

var foreign78 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: WorldItem_Generate$1
});

class WorldItem extends WorldItem_Generate$1 {
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
    }
    setData(ranking, roomData, isSelf) {
        this.mRankTextBlock.text = ranking.toString();
        this.mNameTextBlock.text = roomData.playerName;
        this.mTimeTextBlock.text = roomData.time.toString();
        let fontColor = isSelf ? mw.LinearColor.green : mw.LinearColor.white;
        this.mRankTextBlock.fontColor = fontColor;
        this.mNameTextBlock.fontColor = fontColor;
        this.mTimeTextBlock.fontColor = fontColor;
    }
}

var foreign42 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: WorldItem
});

class RankPanel extends RankPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.rankModuleC = null;
        this.roomItems = [];
        this.worldItems = [];
    }
    get getRankModuleC() {
        if (!this.rankModuleC) {
            this.rankModuleC = ModuleService.getModule(RankModuleC);
        }
        return this.rankModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerTop;
        this.initUI();
        this.bindButton();
    }
    bindButton() {
        this.mOpenRoomRankButton.onClicked.add(this.bindOpenRoomRankButton.bind(this));
        this.mCloseRoomButton.onClicked.add(this.bindCloseRoomButton.bind(this));
        this.mCloseWorldButton.onClicked.add(this.bindCloseWorldButton.bind(this));
        this.getRankModuleC.onOpenWorldRankAction.add(this.addOpenWorldRankAction.bind(this));
    }
    initUI() {
        this.mRoomRankTextBlock.text = GameConfig.Language.Text_Ranking.Value;
        this.mRoomNameTextBlock.text = GameConfig.Language.Text_Nickname.Value;
        this.mRoomScoreTextBlock.text = GameConfig.Language.Text_Score.Value;
        this.mTitleTextBlock.text = StringUtil.format(GameConfig.Language.Text_TopInTermsOfDuration.Value, GlobalData.worldCount);
        this.mWorldRankTextBlock.text = GameConfig.Language.Text_Ranking.Value;
        this.mWorldNameTextBlock.text = GameConfig.Language.Text_Nickname.Value;
        this.mWorldTimeTextBlock.text = GameConfig.Language.Text_Duration.Value;
        Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mCloseWorldButton, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mWorldCanvas, mw.SlateVisibility.Collapsed);
    }
    bindOpenRoomRankButton() {
        if (!this.roomItems || this.roomItems?.length == 0) {
            Notice.showDownNotice(GameConfig.Language.Text_Rank1.Value);
            return;
        }
        Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    bindCloseRoomButton() {
        Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.SelfHitTestInvisible);
    }
    addOpenWorldRankAction() {
        Utils.setWidgetVisibility(this.mCloseWorldButton, mw.SlateVisibility.Visible);
        Utils.setWidgetVisibility(this.mWorldCanvas, mw.SlateVisibility.SelfHitTestInvisible);
    }
    bindCloseWorldButton() {
        Utils.setWidgetVisibility(this.mCloseWorldButton, mw.SlateVisibility.Collapsed);
        Utils.setWidgetVisibility(this.mWorldCanvas, mw.SlateVisibility.Collapsed);
    }
    refreshRankPanel_RoomWorld(roomDatas, curRoomIndex, worldDatas, curWorldIndex) {
        if (roomDatas && roomDatas?.length > 0) {
            this.refreshRoomRankPanel(roomDatas, curRoomIndex);
            Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.SelfHitTestInvisible);
        }
        if (worldDatas && worldDatas?.length > 0)
            this.refreshWorldRankPanel(worldDatas, curWorldIndex);
    }
    refreshRankPanel_Room(roomDatas, curRoomIndex) {
        if (roomDatas && roomDatas?.length > 0)
            this.refreshRoomRankPanel(roomDatas, curRoomIndex);
    }
    refreshRoomRankPanel(roomDatas, curRoomIndex) {
        if (roomDatas.length > this.roomItems.length) {
            for (let i = 0; i < this.roomItems.length; ++i) {
                this.roomItems[i].setData(i + 1, roomDatas[i], i == curRoomIndex);
                Utils.setWidgetVisibility(this.roomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.roomItems.length; i < roomDatas.length; ++i) {
                let redItem = UIService.create(RoomItem);
                redItem.setData(i + 1, roomDatas[i], i == curRoomIndex);
                this.mRoomContentCanvas.addChild(redItem.uiObject);
                this.roomItems.push(redItem);
            }
        }
        else {
            for (let i = 0; i < roomDatas.length; ++i) {
                this.roomItems[i].setData(i + 1, roomDatas[i], i == curRoomIndex);
                Utils.setWidgetVisibility(this.roomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = roomDatas.length; i < this.roomItems.length; ++i) {
                Utils.setWidgetVisibility(this.roomItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    refreshRankPanel_World(worldDatas, curWorldIndex) {
        if (worldDatas && worldDatas?.length > 0)
            this.refreshWorldRankPanel(worldDatas, curWorldIndex);
    }
    refreshWorldRankPanel(worldDatas, curWorldIndex) {
        if (worldDatas.length > this.worldItems.length) {
            for (let i = 0; i < this.worldItems.length; ++i) {
                this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.worldItems.length; i < worldDatas.length; ++i) {
                let worldItem = UIService.create(WorldItem);
                worldItem.setData(i + 1, worldDatas[i], i == curWorldIndex);
                this.mWorldContentCanvas.addChild(worldItem.uiObject);
                this.worldItems.push(worldItem);
            }
        }
        else {
            for (let i = 0; i < worldDatas.length; ++i) {
                this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = worldDatas.length; i < this.worldItems.length; ++i) {
                Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
    }
    refreshSelfWorldNameAndTimeUI(roomData) {
        this.mSelfWorldNameTextBlock.text = roomData.playerName;
        this.mSelfWorldTimeTextBlock.text = roomData.time.toString();
    }
    refreshSelfWorldRankUI(ranking) {
        if (ranking == -1) {
            this.mSelfWorldRankTextBlock.text = GameConfig.Language.Text_NoOnTheList.Value;
        }
        else {
            this.mSelfWorldRankTextBlock.text = (ranking + 1).toString();
        }
    }
}

var foreign40 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankPanel
});

class RankModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.rankPanel = null;
        this.userId = null;
        this.interactionData = null;
        this.onOpenWorldRankAction = new Action();
        this.roomDatas = [];
        this.recycleRoomDatas = [];
        this.curRoomIndex = -1;
        this.worldDatas = [];
        this.recycleWorldDatas = [];
        this.curWorldIndex = -1;
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getRankPanel() {
        if (!this.rankPanel) {
            this.rankPanel = UIService.getUI(RankPanel);
        }
        return this.rankPanel;
    }
    get currentUserId() {
        if (this.userId == "" || this.userId == null) {
            this.userId = this.localPlayer.userId;
        }
        return this.userId;
    }
    get getInteractionData() {
        if (this.interactionData == null) {
            this.interactionData = DataCenterC.getData(InteractionData);
        }
        return this.interactionData;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initEventAction();
    }
    initEventAction() {
        this.getHUDModuleC.onOpenRankAction.add(this.addOnOffRankPanelAction.bind(this));
        Event.addLocalListener(`OnOffMainUI`, this.addOnOffMainUI.bind(this));
    }
    addOnOffRankPanelAction() {
        this.onOpenWorldRankAction.call();
    }
    addOnOffMainUI(isShow) {
        console.error(`isShow: ${isShow}`);
        if (isShow) {
            this.getRankPanel.show();
        }
        else {
            this.getRankPanel.hide();
        }
    }
    onEnterScene(sceneType) {
        TimeUtil.delaySecond(5).then(() => {
            let nickName = mw.AccountService.getNickName();
            nickName = nickName ? nickName : "UserId：" + this.currentUserId;
            let bagIds = this.getInteractionData.bagIds;
            let score = (!bagIds) ? 0 : bagIds.length;
            let time = this.data.time;
            this.server.net_onEnterScene(nickName, score, time);
            TimeUtil.delaySecond(5).then(() => {
                this.getRankPanel.show();
            });
        });
    }
    updateRoomDatas(roomUserIds, roomNames, roomScores, roomTimes) {
        if (this.roomDatas.length > roomUserIds.length) {
            for (let i = 0; i < roomUserIds.length; ++i) {
                this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomScores[i], roomTimes[i]);
            }
            for (let i = roomUserIds.length; i < this.roomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.roomDatas[i]);
            }
            this.roomDatas.length = roomUserIds.length;
        }
        else {
            for (let i = 0; i < this.roomDatas.length; ++i) {
                this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomScores[i], roomTimes[i]);
            }
            for (let i = this.roomDatas.length; i < roomUserIds.length; ++i) {
                let tmpRoomData = null;
                if (this.recycleRoomDatas.length > 0)
                    tmpRoomData = this.recycleRoomDatas.pop();
                if (!tmpRoomData)
                    tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomScores[i], roomTimes[i]);
                this.roomDatas.push(tmpRoomData);
            }
        }
    }
    updateRoomIndex() {
        this.curRoomIndex = -1;
        for (let i = 0; i < this.roomDatas.length; ++i) {
            if (this.roomDatas[i].userId != this.currentUserId)
                continue;
            this.curRoomIndex = i;
            // console.error("wfz = " + this.curRoomIndex);
            this.getRankPanel.refreshSelfWorldNameAndTimeUI(this.roomDatas[i]);
            break;
        }
    }
    updateWorldDatas(worldUserIds, worldNames, worldScores) {
        if (this.worldDatas.length > worldUserIds.length) {
            for (let i = 0; i < worldUserIds.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldScores[i]);
            }
            for (let i = worldUserIds.length; i < this.worldDatas.length; ++i) {
                this.recycleWorldDatas.push(this.worldDatas[i]);
            }
            this.worldDatas.length = worldUserIds.length;
        }
        else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldScores[i]);
            }
            for (let i = this.worldDatas.length; i < worldUserIds.length; ++i) {
                let tmpWorldData = null;
                if (this.recycleWorldDatas.length > 0)
                    tmpWorldData = this.recycleWorldDatas.pop();
                if (tmpWorldData) {
                    tmpWorldData.setData(worldUserIds[i], worldNames[i], worldScores[i]);
                }
                else {
                    tmpWorldData = new WorldData(worldUserIds[i], worldNames[i], worldScores[i]);
                }
                this.worldDatas.push(tmpWorldData);
            }
        }
    }
    updateWorldIndex() {
        this.curWorldIndex = -1;
        for (let i = 0; i < this.worldDatas.length; ++i) {
            if (this.worldDatas[i].userId != this.currentUserId)
                continue;
            this.curWorldIndex = i;
            break;
        }
        this.getRankPanel.refreshSelfWorldRankUI(this.curWorldIndex);
    }
    net_syncRoomRankData(roomUserIds, roomNames, roomScores, roomTimes) {
        // console.error("wfz = " + roomUserIds.length);
        this.updateRoomDatas(roomUserIds, roomNames, roomScores, roomTimes);
        this.sortRoomData();
        this.updateRoomIndex();
        this.getRankPanel.refreshRankPanel_Room(this.roomDatas, this.curRoomIndex);
    }
    net_syncWorldRankData(worldUserIds, worldNames, worldScores) {
        this.updateWorldDatas(worldUserIds, worldNames, worldScores);
        this.updateWorldIndex();
        this.getRankPanel.refreshRankPanel_World(this.worldDatas, this.curWorldIndex);
    }
    net_syncRoomWorldRankData(roomUserIds, roomNames, roomScores, roomTimes, worldUserIds, worldNames, worldScores) {
        this.updateRoomDatas(roomUserIds, roomNames, roomScores, roomTimes);
        this.sortRoomData();
        this.updateRoomIndex();
        this.updateWorldDatas(worldUserIds, worldNames, worldScores);
        this.updateWorldIndex();
        this.getRankPanel.refreshRankPanel_RoomWorld(this.roomDatas, this.curRoomIndex, this.worldDatas, this.curWorldIndex);
    }
    sortRoomData() {
        this.roomDatas.sort((a, b) => {
            return b.score - a.score;
        });
    }
}

var foreign38 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: RankModuleC
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/SetModule/SetPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let SetPanel_Generate = class SetPanel_Generate extends UIScript {
    get mBgImage() {
        if (!this.mBgImage_Internal && this.uiWidgetBase) {
            this.mBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage');
        }
        return this.mBgImage_Internal;
    }
    get mSet1Button() {
        if (!this.mSet1Button_Internal && this.uiWidgetBase) {
            this.mSet1Button_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mSet1Button');
        }
        return this.mSet1Button_Internal;
    }
    get mSet1TextBlock() {
        if (!this.mSet1TextBlock_Internal && this.uiWidgetBase) {
            this.mSet1TextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mSet1Button/mSet1TextBlock');
        }
        return this.mSet1TextBlock_Internal;
    }
    get mContentCanvas() {
        if (!this.mContentCanvas_Internal && this.uiWidgetBase) {
            this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas');
        }
        return this.mContentCanvas_Internal;
    }
    get mQualityImage() {
        if (!this.mQualityImage_Internal && this.uiWidgetBase) {
            this.mQualityImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mQualityImage');
        }
        return this.mQualityImage_Internal;
    }
    get mQualityTextBlock() {
        if (!this.mQualityTextBlock_Internal && this.uiWidgetBase) {
            this.mQualityTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mQualityImage/mQualityTextBlock');
        }
        return this.mQualityTextBlock_Internal;
    }
    get mQualityProgressBar() {
        if (!this.mQualityProgressBar_Internal && this.uiWidgetBase) {
            this.mQualityProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mQualityImage/mQualityProgressBar');
        }
        return this.mQualityProgressBar_Internal;
    }
    get mSoundImage() {
        if (!this.mSoundImage_Internal && this.uiWidgetBase) {
            this.mSoundImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mSoundImage');
        }
        return this.mSoundImage_Internal;
    }
    get mSoundTextBlock() {
        if (!this.mSoundTextBlock_Internal && this.uiWidgetBase) {
            this.mSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mSoundImage/mSoundTextBlock');
        }
        return this.mSoundTextBlock_Internal;
    }
    get mSoundProgressBar() {
        if (!this.mSoundProgressBar_Internal && this.uiWidgetBase) {
            this.mSoundProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mSoundImage/mSoundProgressBar');
        }
        return this.mSoundProgressBar_Internal;
    }
    get mBgMusicImage() {
        if (!this.mBgMusicImage_Internal && this.uiWidgetBase) {
            this.mBgMusicImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mBgMusicImage');
        }
        return this.mBgMusicImage_Internal;
    }
    get mBgMusicTextBlock() {
        if (!this.mBgMusicTextBlock_Internal && this.uiWidgetBase) {
            this.mBgMusicTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mBgMusicImage/mBgMusicTextBlock');
        }
        return this.mBgMusicTextBlock_Internal;
    }
    get mBgMusicmProgressBar() {
        if (!this.mBgMusicmProgressBar_Internal && this.uiWidgetBase) {
            this.mBgMusicmProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mBgMusicImage/mBgMusicmProgressBar');
        }
        return this.mBgMusicmProgressBar_Internal;
    }
    get mViewAngleImage() {
        if (!this.mViewAngleImage_Internal && this.uiWidgetBase) {
            this.mViewAngleImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mViewAngleImage');
        }
        return this.mViewAngleImage_Internal;
    }
    get mViewAngleTextBlock() {
        if (!this.mViewAngleTextBlock_Internal && this.uiWidgetBase) {
            this.mViewAngleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mViewAngleImage/mViewAngleTextBlock');
        }
        return this.mViewAngleTextBlock_Internal;
    }
    get mViewAngleProgressBar() {
        if (!this.mViewAngleProgressBar_Internal && this.uiWidgetBase) {
            this.mViewAngleProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mViewAngleImage/mViewAngleProgressBar');
        }
        return this.mViewAngleProgressBar_Internal;
    }
    get mShowNickNameImage() {
        if (!this.mShowNickNameImage_Internal && this.uiWidgetBase) {
            this.mShowNickNameImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage');
        }
        return this.mShowNickNameImage_Internal;
    }
    get mShowNickNameTextBlock() {
        if (!this.mShowNickNameTextBlock_Internal && this.uiWidgetBase) {
            this.mShowNickNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameTextBlock');
        }
        return this.mShowNickNameTextBlock_Internal;
    }
    get mShowNickNameCanvas() {
        if (!this.mShowNickNameCanvas_Internal && this.uiWidgetBase) {
            this.mShowNickNameCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas');
        }
        return this.mShowNickNameCanvas_Internal;
    }
    get mShowNickNameButton() {
        if (!this.mShowNickNameButton_Internal && this.uiWidgetBase) {
            this.mShowNickNameButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mShowNickNameButton');
        }
        return this.mShowNickNameButton_Internal;
    }
    get mHideNickNameBgImage() {
        if (!this.mHideNickNameBgImage_Internal && this.uiWidgetBase) {
            this.mHideNickNameBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mHideNickNameBgImage');
        }
        return this.mHideNickNameBgImage_Internal;
    }
    get mShowNickNameBgImage() {
        if (!this.mShowNickNameBgImage_Internal && this.uiWidgetBase) {
            this.mShowNickNameBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mShowNickNameBgImage');
        }
        return this.mShowNickNameBgImage_Internal;
    }
    get mOnOffNickNameCanvas() {
        if (!this.mOnOffNickNameCanvas_Internal && this.uiWidgetBase) {
            this.mOnOffNickNameCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mOnOffNickNameCanvas');
        }
        return this.mOnOffNickNameCanvas_Internal;
    }
    get mOnOffNickNameBgImage() {
        if (!this.mOnOffNickNameBgImage_Internal && this.uiWidgetBase) {
            this.mOnOffNickNameBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mOnOffNickNameCanvas/mOnOffNickNameBgImage');
        }
        return this.mOnOffNickNameBgImage_Internal;
    }
    get mOnOffNickNameTextBlock() {
        if (!this.mOnOffNickNameTextBlock_Internal && this.uiWidgetBase) {
            this.mOnOffNickNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mOnOffNickNameCanvas/mOnOffNickNameTextBlock');
        }
        return this.mOnOffNickNameTextBlock_Internal;
    }
    get mResetButton() {
        if (!this.mResetButton_Internal && this.uiWidgetBase) {
            this.mResetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetButton');
        }
        return this.mResetButton_Internal;
    }
    get mResetTextBlock() {
        if (!this.mResetTextBlock_Internal && this.uiWidgetBase) {
            this.mResetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetButton/mResetTextBlock');
        }
        return this.mResetTextBlock_Internal;
    }
    get mResetPosButton() {
        if (!this.mResetPosButton_Internal && this.uiWidgetBase) {
            this.mResetPosButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetPosButton');
        }
        return this.mResetPosButton_Internal;
    }
    get mResetPosTextBlock() {
        if (!this.mResetPosTextBlock_Internal && this.uiWidgetBase) {
            this.mResetPosTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetPosButton/mResetPosTextBlock');
        }
        return this.mResetPosTextBlock_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mSet1Button.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mSet1Button");
        });
        this.mSet1Button.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mShowNickNameButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mShowNickNameButton");
        });
        this.mShowNickNameButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mResetButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mResetButton");
        });
        this.mResetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mResetPosButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mResetPosButton");
        });
        this.mResetPosButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mSet1TextBlock);
        this.initLanguage(this.mQualityTextBlock);
        this.initLanguage(this.mSoundTextBlock);
        this.initLanguage(this.mBgMusicTextBlock);
        this.initLanguage(this.mViewAngleTextBlock);
        this.initLanguage(this.mShowNickNameTextBlock);
        this.initLanguage(this.mOnOffNickNameTextBlock);
        this.initLanguage(this.mResetTextBlock);
        this.initLanguage(this.mResetPosTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
SetPanel_Generate = __decorate([
    UIBind('UI/module/SetModule/SetPanel.ui')
], SetPanel_Generate);
var SetPanel_Generate$1 = SetPanel_Generate;

var foreign79 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SetPanel_Generate$1
});

class SetPanel extends SetPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.setModuleC = null;
    }
    get getSetModuleC() {
        if (this.setModuleC == null) {
            this.setModuleC = ModuleService.getModule(SetModuleC);
        }
        return this.setModuleC;
    }
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mSet1TextBlock.text = GameConfig.Language.Text_SetUp1.Value;
        this.mQualityTextBlock.text = GameConfig.Language.Text_PictureQuality.Value;
        this.mSoundTextBlock.text = GameConfig.Language.Text_SoundEffects.Value;
        this.mBgMusicTextBlock.text = GameConfig.Language.Text_BackgroundMusic.Value;
        this.mViewAngleTextBlock.text = GameConfig.Language.Text_ViewAngleScaling.Value;
        this.mShowNickNameTextBlock.text = GameConfig.Language.Text_DisplayNicknames.Value;
        this.mResetPosTextBlock.text = GameConfig.Language.Text_ResetLocation.Value;
        this.mResetTextBlock.text = GameConfig.Language.Text_RestoringSettings.Value;
    }
    bindButton() {
        this.mCloseButton.onClicked.add(this.onCloseButtonClick.bind(this));
        this.mQualityProgressBar.onSliderValueChanged.add(this.onQualityChange.bind(this));
        this.mQualityProgressBar.sliderButtonReleaseDelegate.add(this.onSaveQuality.bind(this));
        this.mSoundProgressBar.onSliderValueChanged.add(this.onSoundChange.bind(this));
        this.mSoundProgressBar.sliderButtonReleaseDelegate.add(this.onSaveSound.bind(this));
        this.mBgMusicmProgressBar.onSliderValueChanged.add(this.onBgMusicChange.bind(this));
        this.mBgMusicmProgressBar.sliderButtonReleaseDelegate.add(this.onSaveBgMusic.bind(this));
        this.mViewAngleProgressBar.onSliderValueChanged.add(this.onViewAngleChange.bind(this));
        this.mViewAngleProgressBar.sliderButtonReleaseDelegate.add(this.onSaveViewAngle.bind(this));
        this.mShowNickNameButton.onClicked.add(this.onShowNickNameButtonClick.bind(this));
        this.mResetButton.onClicked.add(this.onResetButtonClick.bind(this));
        this.mResetPosButton.onClicked.add(this.onResetPosButtonClick.bind(this));
    }
    onCloseButtonClick() {
        this.hide();
    }
    onShowNickNameButtonClick() {
        this.getSetModuleC.onShowNickNameAction.call(this.updateNickNameUI.bind(this));
    }
    updateNickNameUI(isShowNickName) {
        if (isShowNickName) {
            Utils.setWidgetVisibility(this.mShowNickNameBgImage, mw.SlateVisibility.SelfHitTestInvisible);
            Utils.setWidgetVisibility(this.mHideNickNameBgImage, mw.SlateVisibility.Collapsed);
            this.mOnOffNickNameTextBlock.text = GameConfig.Language.Text_On.Value;
            this.mOnOffNickNameCanvas.position = new Vector2(46, -3.5);
        }
        else {
            Utils.setWidgetVisibility(this.mShowNickNameBgImage, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mHideNickNameBgImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mOnOffNickNameTextBlock.text = GameConfig.Language.Text_Off.Value;
            this.mOnOffNickNameCanvas.position = new Vector2(-14, -3.5);
        }
    }
    updateViewAngleUI(value) {
        this.mViewAngleProgressBar.currentValue = value;
    }
    onResetButtonClick() {
        this.getSetModuleC.onResetAction.call();
    }
    onResetPosButtonClick() {
        this.getSetModuleC.onResetPosAction.call();
    }
    onQualityChange(value) {
        this.getSetModuleC.onQualityChangeAction.call(value);
    }
    onSaveQuality(value) {
        this.getSetModuleC.onSaveQualityAction.call();
    }
    onSoundChange(value) {
        this.getSetModuleC.onSoundChangeAction.call(value);
    }
    onSaveSound(value) {
        this.getSetModuleC.onSaveSoundAction.call();
    }
    onBgMusicChange(value) {
        this.getSetModuleC.onBgMusicChangeAction.call(value);
    }
    onSaveBgMusic(value) {
        this.getSetModuleC.onSaveBgMusicAction.call();
    }
    onViewAngleChange(value) {
        this.getSetModuleC.onViewAngleChangeAction.call(value);
    }
    onSaveViewAngle(value) {
        this.getSetModuleC.onSaveViewAngleAction.call();
    }
    setDatas(quality, sound, bgMusic, viewAngle, isShowNickName) {
        this.updateNickNameUI(isShowNickName);
        this.mQualityProgressBar.currentValue = quality;
        this.mSoundProgressBar.currentValue = sound;
        this.mBgMusicmProgressBar.currentValue = bgMusic;
        this.mViewAngleProgressBar.currentValue = viewAngle;
    }
}

var foreign44 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SetPanel
});

class SetData extends Subdata {
    constructor() {
        super(...arguments);
        // @Decorator.persistence()
        // public quality: number = 0;
        this.sound = 1;
        this.bgMusic = 1;
        this.viewAngle = 350;
        this.isShowNickName = true;
    }
    // public setQuality(value: number): void {
    //     this.quality = value;
    //     this.save(false);
    // }
    setSound(value) {
        this.sound = value;
        this.save(false);
    }
    setBgMusic(value) {
        this.bgMusic = value;
        this.save(false);
    }
    setViewAngle(value) {
        this.viewAngle = value;
        this.save(false);
    }
    setIsShowNickName(value) {
        this.isShowNickName = value;
        this.save(false);
    }
    reset(sound, bgMusic, viewAngle, isShowNickName) {
        // this.quality = 0;
        this.sound = sound;
        this.bgMusic = bgMusic;
        this.viewAngle = viewAngle;
        this.isShowNickName = isShowNickName;
        this.save(false);
    }
}
__decorate([
    Decorator.persistence()
], SetData.prototype, "sound", void 0);
__decorate([
    Decorator.persistence()
], SetData.prototype, "bgMusic", void 0);
__decorate([
    Decorator.persistence()
], SetData.prototype, "viewAngle", void 0);
__decorate([
    Decorator.persistence()
], SetData.prototype, "isShowNickName", void 0);
class SetModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.setPanel = null;
        this.hudModuleC = null;
        this.onShowNickNameAction = new Action1();
        this.onResetAction = new Action();
        this.onResetPosAction = new Action();
        this.onQualityChangeAction = new Action1();
        this.onSaveQualityAction = new Action();
        this.onSoundChangeAction = new Action1();
        this.onSaveSoundAction = new Action();
        this.onBgMusicChangeAction = new Action1();
        this.onSaveBgMusicAction = new Action();
        this.onViewAngleChangeAction = new Action1();
        this.onSaveViewAngleAction = new Action();
        this.isHasSetData = false;
        this.quality = 0;
        this.sound = 0;
        this.bgMusic = 0;
        this.viewAngle = 0;
        this.isShowNickName = true;
    }
    get getSetPanel() {
        if (this.setPanel == null) {
            this.setPanel = UIService.getUI(SetPanel);
        }
        return this.setPanel;
    }
    get getHUDModuleC() {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.initEvent();
        InputUtil.onKeyDown(mw.Keys.K, () => {
            console.error(GraphicsSettings.getDefaultCPULevel());
            console.error(GraphicsSettings.getDefaultGPULevel());
            console.error(GraphicsSettings.getGPULevel());
            console.error(GraphicsSettings.getCPULevel());
        });
    }
    onEnterScene(sceneType) {
        this.initSetData();
    }
    initEvent() {
        this.getHUDModuleC.onOpenSetAction.add(this.addOpenSetAction.bind(this));
        this.onShowNickNameAction.add(this.addShowNickNameAction.bind(this));
        this.onResetAction.add(this.addResetAction.bind(this));
        this.onResetPosAction.add(this.addResetPosAction.bind(this));
        this.onQualityChangeAction.add(this.addQualityChangeAction.bind(this));
        this.onSaveQualityAction.add(this.addSaveQualityAction.bind(this));
        this.onSoundChangeAction.add(this.addSoundChangeAction.bind(this));
        this.onSaveSoundAction.add(this.addSaveSoundAction.bind(this));
        this.onBgMusicChangeAction.add(this.addBgMusicChangeAction.bind(this));
        this.onSaveBgMusicAction.add(this.addSaveBgMusicAction.bind(this));
        this.onViewAngleChangeAction.add(this.addViewAngleChangeAction.bind(this));
        this.onSaveViewAngleAction.add(this.addSaveViewAngleAction.bind(this));
        Event.addLocalListener(`OnOffMainUI`, this.addOnOffMainUI.bind(this));
    }
    addOnOffMainUI(isShow) {
        console.warn(`wfz - addOnOffMainUI - isShow:${isShow}`);
        if (isShow)
            return;
        if (UIService.getUI(SetPanel, false)?.visible)
            this.getSetPanel.hide();
    }
    addOpenSetAction() {
        if (!this.isHasSetData) {
            this.getSetPanel.setDatas(this.quality, this.sound, this.bgMusic, this.viewAngle, this.isShowNickName);
            this.isHasSetData = true;
        }
        if (Camera.currentCamera.springArm.length != this.viewAngle) {
            this.viewAngle = Camera.currentCamera.springArm.length;
            this.getSetPanel.updateViewAngleUI(this.viewAngle);
            this.server.net_sendSetViewAngle(this.viewAngle);
        }
        this.getSetPanel.show();
    }
    addShowNickNameAction(callBack) {
        this.isShowNickName = !this.isShowNickName;
        Character.nameVisible = this.isShowNickName;
        this.server.net_sendSetNickName(this.isShowNickName);
        if (callBack)
            callBack(this.isShowNickName);
    }
    addResetAction() {
        let isReset = false;
        if (this.quality != GraphicsSettings.getGPULevel()) {
            this.quality = GraphicsSettings.getDefaultGPULevel();
            GraphicsSettings.setGraphicsLevel(this.quality, this.quality);
            isReset = true;
        }
        if (this.sound != 1) {
            this.sound = 1;
            SoundService.volumeScale = this.sound;
            isReset = true;
        }
        if (this.bgMusic != 1) {
            this.bgMusic = 1;
            SoundService.BGMVolumeScale = this.bgMusic;
            isReset = true;
        }
        if (this.viewAngle != 350) {
            this.viewAngle = 350;
            Camera.currentCamera.springArm.length = this.viewAngle;
            isReset = true;
        }
        if (isReset) {
            this.getSetPanel.setDatas(this.quality, this.sound, this.bgMusic, this.viewAngle, this.isShowNickName);
            this.server.net_reset(this.sound, this.bgMusic, this.viewAngle, this.isShowNickName);
        }
    }
    addResetPosAction() {
        Utils.resetPlayerPos();
    }
    addQualityChangeAction(value) {
        this.quality = value;
    }
    addSaveQualityAction() {
        GraphicsSettings.setGraphicsLevel(this.quality, this.quality);
    }
    addSoundChangeAction(value) {
        this.sound = value;
        SoundService.volumeScale = this.sound;
    }
    addSaveSoundAction() {
        this.server.net_setSound(this.sound);
    }
    addBgMusicChangeAction(value) {
        this.bgMusic = value;
        SoundService.BGMVolumeScale = this.bgMusic;
    }
    addSaveBgMusicAction() {
        this.server.net_setBgMusic(this.bgMusic);
    }
    addViewAngleChangeAction(value) {
        this.viewAngle = value;
        Camera.currentCamera.springArm.length = value;
    }
    addSaveViewAngleAction() {
        this.server.net_sendSetViewAngle(this.viewAngle);
    }
    initSetData() {
        // this.quality = this.data.quality;
        this.quality = GraphicsSettings.getDefaultGPULevel();
        this.sound = this.data.sound;
        this.bgMusic = this.data.bgMusic;
        this.viewAngle = this.data.viewAngle;
        this.isShowNickName = this.data.isShowNickName;
        console.error(`quality:${this.quality}, sound:${this.sound}, bgMusic:${this.bgMusic}, viewAngle:${this.viewAngle}, isShowNickName:${this.isShowNickName}`);
        // GraphicsSettings.setGraphicsLevel(this.quality, this.quality);
        SoundService.volumeScale = this.sound;
        SoundService.BGMVolumeScale = this.bgMusic;
        Camera.currentCamera.springArm.length = this.viewAngle;
        Character.nameVisible = this.isShowNickName;
    }
}
class SetModuleS extends ModuleS {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    net_sendSetNickName(isShowNickName) {
        this.currentData.setIsShowNickName(isShowNickName);
    }
    net_setSound(sound) {
        this.currentData.setSound(sound);
    }
    net_setBgMusic(bgMusic) {
        this.currentData.setBgMusic(bgMusic);
    }
    net_sendSetViewAngle(viewAngle) {
        this.currentData.setViewAngle(viewAngle);
    }
    net_reset(sound, bgMusic, viewAngle, isShowNickName) {
        this.currentData.reset(sound, bgMusic, viewAngle, isShowNickName);
    }
}
__decorate([
    Decorator.noReply()
], SetModuleS.prototype, "net_sendSetNickName", null);
__decorate([
    Decorator.noReply()
], SetModuleS.prototype, "net_setSound", null);
__decorate([
    Decorator.noReply()
], SetModuleS.prototype, "net_setBgMusic", null);
__decorate([
    Decorator.noReply()
], SetModuleS.prototype, "net_sendSetViewAngle", null);
__decorate([
    Decorator.noReply()
], SetModuleS.prototype, "net_reset", null);

var foreign43 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SetData: SetData,
    SetModuleC: SetModuleC,
    SetModuleS: SetModuleS
});

class SignInData extends Subdata {
    constructor() {
        super(...arguments);
        this.day = 0;
        this.dayStr = "";
    }
    setDay(addDay) {
        this.day += addDay;
        this.save(false);
    }
    setDayStr(dayStr, addDay) {
        this.dayStr = dayStr;
        this.day += addDay;
        this.save(false);
    }
}
__decorate([
    Decorator.persistence()
], SignInData.prototype, "day", void 0);
__decorate([
    Decorator.persistence()
], SignInData.prototype, "dayStr", void 0);
class SignInUserData {
    constructor(data) {
        if (!data)
            return;
        this.shareId = data?.shareId;
        this.icon = data?.icon;
    }
}
class SignInConfigData {
    constructor(data) {
        this.signInUserDatas = [];
        if (!data)
            return;
        this.isOpen = data?.isOpen;
        this.totalDay = data?.totalDay;
        for (let i = 0; i < data?.signInUserDatas?.length; ++i) {
            this.signInUserDatas.push(new SignInUserData(data?.signInUserDatas[i]));
        }
    }
}

var foreign45 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SignInConfigData: SignInConfigData,
    SignInUserData: SignInUserData,
    default: SignInData
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/SignInModule/SignInPanel.ui
 * TIME: 2025.01.27-15.06.29
 */
let SignInPanel_Generate = class SignInPanel_Generate extends UIScript {
    get mTitleTextBlock() {
        if (!this.mTitleTextBlock_Internal && this.uiWidgetBase) {
            this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mTitleTextBlock');
        }
        return this.mTitleTextBlock_Internal;
    }
    get mScrollBox() {
        if (!this.mScrollBox_Internal && this.uiWidgetBase) {
            this.mScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mScrollBox');
        }
        return this.mScrollBox_Internal;
    }
    get mContentCanvas() {
        if (!this.mContentCanvas_Internal && this.uiWidgetBase) {
            this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mScrollBox/ContentCanvas/mContentCanvas');
        }
        return this.mContentCanvas_Internal;
    }
    get mTotalDayTextBlock() {
        if (!this.mTotalDayTextBlock_Internal && this.uiWidgetBase) {
            this.mTotalDayTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mTotalDayTextBlock');
        }
        return this.mTotalDayTextBlock_Internal;
    }
    get mCloseButton() {
        if (!this.mCloseButton_Internal && this.uiWidgetBase) {
            this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseButton');
        }
        return this.mCloseButton_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mCloseButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
        });
        this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mTitleTextBlock);
        this.initLanguage(this.mTotalDayTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
SignInPanel_Generate = __decorate([
    UIBind('UI/module/SignInModule/SignInPanel.ui')
], SignInPanel_Generate);
var SignInPanel_Generate$1 = SignInPanel_Generate;

var foreign83 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SignInPanel_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/SignInModule/SignInItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let SignInItem_Generate = class SignInItem_Generate extends UIScript {
    get mIconImage() {
        if (!this.mIconImage_Internal && this.uiWidgetBase) {
            this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage');
        }
        return this.mIconImage_Internal;
    }
    get mHasTextBlock() {
        if (!this.mHasTextBlock_Internal && this.uiWidgetBase) {
            this.mHasTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage/mHasTextBlock');
        }
        return this.mHasTextBlock_Internal;
    }
    get mDayTextBlock() {
        if (!this.mDayTextBlock_Internal && this.uiWidgetBase) {
            this.mDayTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDayTextBlock');
        }
        return this.mDayTextBlock_Internal;
    }
    get mSignInButton() {
        if (!this.mSignInButton_Internal && this.uiWidgetBase) {
            this.mSignInButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSignInButton');
        }
        return this.mSignInButton_Internal;
    }
    get mSignInTextBlock() {
        if (!this.mSignInTextBlock_Internal && this.uiWidgetBase) {
            this.mSignInTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSignInButton/mSignInTextBlock');
        }
        return this.mSignInTextBlock_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        this.mSignInButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "mSignInButton");
        });
        this.mSignInButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮多语言
        //文本多语言
        this.initLanguage(this.mHasTextBlock);
        this.initLanguage(this.mDayTextBlock);
        this.initLanguage(this.mSignInTextBlock);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
SignInItem_Generate = __decorate([
    UIBind('UI/module/SignInModule/SignInItem.ui')
], SignInItem_Generate);
var SignInItem_Generate$1 = SignInItem_Generate;

var foreign82 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SignInItem_Generate$1
});

class SignInItem extends SignInItem_Generate$1 {
    constructor() {
        super(...arguments);
        this.signInModuleC = null;
        this.signInUserData = null;
        this.day = 0;
        this.totalDay = 0;
    }
    get getSignInModuleC() {
        if (!this.signInModuleC) {
            this.signInModuleC = ModuleService.getModule(SignInModuleC);
        }
        return this.signInModuleC;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerMiddle;
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mHasTextBlock.text = GameConfig.Language.Text_SignIn_6.Value;
    }
    bindButton() {
        this.mSignInButton.onClicked.add(this.addSignInButton.bind(this));
    }
    addSignInButton() {
        this.getSignInModuleC.signInAction.call(this.day, this.signInUserData.shareId);
    }
    initItem(signInUserData, day, totalDay) {
        this.signInUserData = signInUserData;
        this.day = day;
        this.totalDay = totalDay;
        this.refreshUI();
    }
    refreshUI() {
        this.mDayTextBlock.text = StringUtil.format(GameConfig.Language.Text_SignIn_9.Value, this.day);
        if (this.signInUserData?.icon && this.signInUserData?.icon?.length > 0)
            this.mIconImage.imageGuid = this.signInUserData.icon;
        if (this.totalDay >= this.day) {
            this.mSignInTextBlock.text = GameConfig.Language.Text_SignIn_7.Value;
        }
        else {
            this.mSignInTextBlock.text = GameConfig.Language.Text_SignIn_8.Value;
            Utils.setWidgetVisibility(this.mHasTextBlock, mw.SlateVisibility.Collapsed);
        }
    }
}

var foreign48 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SignInItem
});

class SignInPanel extends SignInPanel_Generate$1 {
    constructor() {
        super(...arguments);
        this.signInItems = [];
        this.signInConfigData = null;
        this.day = 0;
    }
    /**
     * 构造UI文件成功后，在合适的时机最先初始化一次
     */
    onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = UILayerDialog;
        this.initUI();
        this.bindButton();
    }
    initUI() {
        this.mTitleTextBlock.text = GameConfig.Language.Text_SignIn_4.Value;
    }
    bindButton() {
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
    }
    addCloseButton() {
        this.hide();
    }
    initPanel(signInConfigData, day) {
        this.signInConfigData = signInConfigData;
        this.day = day;
        this.mTotalDayTextBlock.text = StringUtil.format(GameConfig.Language.Text_SignIn_5.Value, this.day);
        let totalDay = this.signInConfigData.totalDay;
        let signInUserDatas = this.signInConfigData.signInUserDatas;
        for (let i = 0; i < totalDay; ++i) {
            let signInItem = UIService.create(SignInItem);
            signInItem.initItem(signInUserDatas[i], i + 1, this.day);
            this.mContentCanvas.addChild(signInItem.uiObject);
            this.signInItems.push(signInItem);
        }
    }
}

var foreign49 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SignInPanel
});

class SignInModuleC extends ModuleC {
    constructor() {
        super(...arguments);
        this.hudModuleC = null;
        this.signInPanel = null;
        this.signInAction = new Action2();
        this.isInitSignInPanel = false;
        this.signInConfigData = null;
        this.day = 0;
    }
    get getHUDModuleC() {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    get getSignInPanel() {
        if (!this.signInPanel) {
            this.signInPanel = UIService.getUI(SignInPanel);
        }
        return this.signInPanel;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.bindAction();
    }
    bindAction() {
        this.getHUDModuleC.onOpenSignInAction.add(this.addOpenSignInAction.bind(this));
        this.signInAction.add(this.addSignInAction.bind(this));
    }
    addOpenSignInAction() {
        if (!this.signInConfigData || !this.signInConfigData?.isOpen || this.day <= 0) {
            Notice.showDownNotice(GameConfig.Language.Text_SignIn_1.Value);
            return;
        }
        if (!this.isInitSignInPanel) {
            this.getSignInPanel.initPanel(this.signInConfigData, this.day);
            this.isInitSignInPanel = true;
        }
        this.getSignInPanel.show();
    }
    addSignInAction(day, sharedId) {
        if (day <= this.day) {
            ExecutorManager.instance.pushAsyncExecutor(async () => {
                this.getSignInPanel.hide();
                if (sharedId && sharedId?.length > 0)
                    await Utils.applySharedId(this.localPlayer.character, sharedId);
                Notice.showDownNotice(GameConfig.Language.Text_SignIn_2.Value);
            });
        }
        else {
            Notice.showDownNotice(GameConfig.Language.Text_SignIn_3.Value);
        }
    }
    net_syncSignInConfigData(signInConfigData, day) {
        this.signInConfigData = signInConfigData;
        this.day = day;
        if (this.signInConfigData)
            return;
        let data = {
            "isOpen": true,
            "totalDay": 6,
            "signInUserDatas": [
                {
                    "shareId": "102EH33D",
                    "icon": ""
                },
                {
                    "shareId": "102EH2HF",
                    "icon": ""
                },
                {
                    "shareId": "102EH2DZ",
                    "icon": ""
                },
                {
                    "shareId": "102EH2ZR",
                    "icon": ""
                },
                {
                    "shareId": "102EH2II",
                    "icon": ""
                },
                {
                    "shareId": "102EH168",
                    "icon": ""
                }
            ]
        };
        this.signInConfigData = new SignInConfigData(data);
    }
}

var foreign46 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SignInModuleC
});

class SignInModuleS extends ModuleS {
    constructor() {
        super(...arguments);
        this.isInitSignInConfigData = false;
        this.signInConfigData = null;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
    }
    onPlayerEnterGame(player) {
        this.syncSignInConfigData(player);
    }
    async syncSignInConfigData(player) {
        if (!this.isInitSignInConfigData) {
            this.isInitSignInConfigData = true;
            await this.initSignInConfigData();
        }
        this.getClient(player).net_syncSignInConfigData(this.signInConfigData, this.getDay(player));
    }
    async initSignInConfigData() {
        let data = await Utils.getCustomdata("SignInConfigData");
        this.signInConfigData = new SignInConfigData(data);
    }
    getDay(player) {
        let signInData = DataCenterS.getData(player, SignInData);
        let dayStr = signInData.dayStr;
        let currentDayStr = Utils.getDay();
        if (dayStr != currentDayStr)
            signInData.setDayStr(currentDayStr, 1);
        return signInData.day;
    }
}

var foreign47 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SignInModuleS
});

let GameStart = class GameStart extends Script {
    constructor() {
        super(...arguments);
        this.languageId = -1;
        this.isOpenIAA = true;
        /**--------------------------------【服务端】-------------------------------- */
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        this.onStartCS();
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        }
        else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }
    onStartCS() {
        // GlobalData.isOpenIAA = !mw.SystemUtil.isPIE || this.isOpenIAA;
        GlobalData.isOpenIAA = false;
        this.registerModule();
    }
    registerModule() {
        ModuleService.registerModule(HUDModuleS, HUDModuleC, null);
        ModuleService.registerModule(DanMuModuleS, DanMuModuleC, null);
        ModuleService.registerModule(InteractionModuleS, InteractionModuleC, InteractionData);
        ModuleService.registerModule(NavigationModuleS, NavigationModuleC, null);
        ModuleService.registerModule(RankModuleS, RankModuleC, RankData);
        ModuleService.registerModule(SetModuleS, SetModuleC, SetData);
        ModuleService.registerModule(SignInModuleS, SignInModuleC, SignInData);
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    onUpdate(dt) {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        }
        else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**客户端的onStart */
    onStartC() {
        this.useUpdate = true;
        this.initLanguage();
    }
    initLanguage() {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        console.error(`wfz - language:${language}`);
        let languageId = -1;
        if (mw.SystemUtil.isPIE && this.languageId >= 0) {
            languageId = this.languageId;
        }
        else {
            if (!!language.match("en")) {
                languageId = 0;
            }
            else if (!!language.match("zh")) { //简体
                languageId = 1;
            }
            else if (!!language.match("ja")) {
                languageId = 3;
            }
            else if (!!language.match("ko")) {
                languageId = 4;
            }
            else { //繁体
                languageId = 2;
            }
        }
        GlobalData.languageId = languageId;
        console.error(`wfz - languageId:${languageId}`);
        GameConfig.initLanguage(languageId, (key) => {
            let ele = GameConfig.Language.getElement(key);
            if (ele == null)
                return "unknow_" + key;
            return ele.Value;
        });
        mw.UIScript.addBehavior("lan", (ui) => {
            let key = ui.text;
            if (!key)
                return;
            let languageElement = GameConfig.Language.getElement(key);
            if (languageElement)
                ui.text = languageElement.Value;
        });
    }
    /**客户端的onUpdate */
    onUpdateC(dt) {
        mw.TweenUtil.TWEEN.update();
        update();
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    onStartS() {
        this.useUpdate = false;
        DataStorage.setTemporaryStorage(SystemUtil.isPIE);
    }
    /**服务端的onUpdate */
    onUpdateS(dt) {
    }
};
__decorate([
    mw.Property({ displayName: "多语言", group: "脚本设置", enumType: { "系统默认": -1, "英语": 0, "简体中文": 1, "繁体中文": 2, "日语": 3, "韩语": 4 } })
], GameStart.prototype, "languageId", void 0);
__decorate([
    mw.Property({ displayName: "是否开启IAA", group: "脚本设置" })
], GameStart.prototype, "isOpenIAA", void 0);
GameStart = __decorate([
    Component
], GameStart);
var GameStart$1 = GameStart;

var foreign16 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GameStart$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/GMModule/GMHUD.ui
 * TIME: 2025.01.27-15.06.29
 */
let GMHUD_Generate = class GMHUD_Generate extends UIScript {
    get oKbutton() {
        if (!this.oKbutton_Internal && this.uiWidgetBase) {
            this.oKbutton_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/oKbutton');
        }
        return this.oKbutton_Internal;
    }
    get dropList() {
        if (!this.dropList_Internal && this.uiWidgetBase) {
            this.dropList_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/dropList');
        }
        return this.dropList_Internal;
    }
    get argText() {
        if (!this.argText_Internal && this.uiWidgetBase) {
            this.argText_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/argText');
        }
        return this.argText_Internal;
    }
    get cmdButton() {
        if (!this.cmdButton_Internal && this.uiWidgetBase) {
            this.cmdButton_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/cmdButton');
        }
        return this.cmdButton_Internal;
    }
    get pingText() {
        if (!this.pingText_Internal && this.uiWidgetBase) {
            this.pingText_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/pingText');
        }
        return this.pingText_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.oKbutton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "oKbutton");
        });
        this.initLanguage(this.oKbutton);
        this.oKbutton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        this.cmdButton.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "cmdButton");
        });
        this.initLanguage(this.cmdButton);
        this.cmdButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.pingText);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
GMHUD_Generate = __decorate([
    UIBind('UI/module/GMModule/GMHUD.ui')
], GMHUD_Generate);
var GMHUD_Generate$1 = GMHUD_Generate;

var foreign70 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GMHUD_Generate$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/GMModule/GMItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let GMItem_Generate = class GMItem_Generate extends UIScript {
    get button() {
        if (!this.button_Internal && this.uiWidgetBase) {
            this.button_Internal = this.uiWidgetBase.findChildByPath('MWCanvas_2147482460/button');
        }
        return this.button_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        this.button.onClicked.add(() => {
            Event.dispatchToLocal("PlayButtonClick", "button");
        });
        this.initLanguage(this.button);
        this.button.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
        //按钮添加点击
        //按钮多语言
        //文本多语言
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
GMItem_Generate = __decorate([
    UIBind('UI/module/GMModule/GMItem.ui')
], GMItem_Generate);
var GMItem_Generate$1 = GMItem_Generate;

var foreign71 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GMItem_Generate$1
});

var GMService_1;
const GMConfig = [];
function AddGMCommand(cmd) {
    GMConfig.push(cmd);
}
AddGMCommand({
    label: "applySharedId",
    clientCmd: async (player, value) => {
        Utils.applySharedId(player.character, value);
    },
    serverCmd: (player, value) => {
    }
});
AddGMCommand({
    label: "雪",
    clientCmd: async (player, value) => {
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(0, 0, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(0, 300, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(0, -300, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(300, 0, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(-300, 0, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(300, 300, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(300, -300, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(-300, 300, 0) });
        EffectService.playOnGameObject(`127013`, player.character, { slotType: mw.HumanoidSlotType.Root, loopCount: 0, position: new mw.Vector(-300, -300, 0) });
    },
    serverCmd: (player, value) => {
    }
});
let isPlayBGM = false;
AddGMCommand({
    label: "BGM",
    clientCmd: async (player, value) => {
        isPlayBGM = !isPlayBGM;
        if (isPlayBGM) {
            SoundService.playBGM(`63341`, 1);
        }
        else {
            SoundService.stopBGM();
        }
    },
    serverCmd: (player, value) => {
    }
});
let GMService = GMService_1 = class GMService extends mw.Script {
    /**
     * 初始化UI
     */
    createUI(dropDownList) {
        GMConfig.forEach(cmd => {
            dropDownList.addItem(cmd);
        });
    }
    onStart() {
        GMService_1.instance = this;
        if (mw.SystemUtil.isClient()) {
            console.log("[GM]：模块初始化");
            new GMBasePanel();
            let isOpen = false;
            mw.InputUtil.onKeyDown(mw.Keys.NumPadOne, () => {
                isOpen = !isOpen;
                isOpen ? OpenGMUI() : CloseGMUI();
            });
        }
    }
    /**
     * 调用命令
     * @param data
     */
    cmd(player, data, param) {
        if (mw.SystemUtil.isClient()) {
            if (data.clientCmd) {
                data.clientCmd(player, param);
            }
            if (data.serverCmd) {
                const index = GMConfig.indexOf(data);
                this.onServerCmd(player, index, param);
            }
        }
        else if (mw.SystemUtil.isServer()) {
            if (data.serverCmd) {
                data.serverCmd(player, param);
            }
            if (data.clientCmd) {
                const index = GMConfig.indexOf(data);
                this.onClientCmd(player, index, param);
            }
        }
    }
    onServerCmd(player, index, param) {
        GMConfig[index].serverCmd(player, param);
    }
    onClientCmd(player, index, param) {
        GMConfig[index].clientCmd(player, param);
    }
};
__decorate([
    RemoteFunction(mw.Server)
], GMService.prototype, "onServerCmd", null);
__decorate([
    RemoteFunction(mw.Client)
], GMService.prototype, "onClientCmd", null);
GMService = GMService_1 = __decorate([
    Component
], GMService);
var GMService$1 = GMService;
//主面板
class GMBasePanel {
    constructor() {
        this._view = mw.UIService.getUI(GMHUD_Generate$1);
        this.dropDownList = new DropdownList({ panel: this._view.dropList, button: this._view.oKbutton, label: this._view.cmdButton }, GMItem_Generate$1, (ui, data) => {
            ui.button.onClicked.add(() => {
                GMService.instance.cmd(Player.localPlayer, data, this._view.argText.text);
            });
            ui.button.text = data.label;
        }, 5);
        GMService.instance.createUI(this.dropDownList);
        this._view.cmdButton.onClicked.add(() => {
            if (this.dropDownList.selectItem) {
                GMService.instance.cmd(Player.localPlayer, this.dropDownList.selectItem.data, this._view.argText.text);
            }
        });
    }
}
function OpenGMUI() {
    mw.UIService.show(GMHUD_Generate$1);
}
function CloseGMUI() {
    mw.UIService.hide(GMHUD_Generate$1);
}
class DropdownList {
    constructor(_root, _itemCls, _onCreate, space = 0) {
        this._root = _root;
        this._itemCls = _itemCls;
        this._onCreate = _onCreate;
        this.space = space;
        this._cache = [];
        this._items = [];
        this.addExpandEvent();
    }
    /**
     * 添加展开按钮事件
     */
    addExpandEvent() {
        this._root.button.onClicked.add(() => {
            this._isDropdown = !this._isDropdown;
            this._invalidateLayout();
        });
    }
    /**
     * 获得选择项
     */
    get selectItem() {
        return this._select;
    }
    /**
     * 添加一个选项
     * @param node
     * @param index 索引
     */
    addItem(data, index = -1) {
        let itemUI = this._cache.length > 0 ? this._cache.shift() : mw.UIService.create(this._itemCls);
        if (!itemUI.list) {
            itemUI.list = this;
            itemUI.button.touchMethod = mw.ButtonTouchMethod.PreciseTap;
            // itemUI.button.SetTouchMethod(MWGameUI.EButtonTouchMethod.PreciseTap);
            itemUI.button.onClicked.add(() => {
                this._select = itemUI;
                this._root.label.text = data.label;
                this._isDropdown = !this._isDropdown;
                this._invalidateLayout();
            });
            this._root.panel.addChild(itemUI.uiObject);
        }
        itemUI.data = data;
        this._onCreate(itemUI, data);
        itemUI.rootCanvas.autoSizeEnable = true;
        if (!this._itemSize) {
            this._itemSize = itemUI.rootCanvas.size;
            const height = this._root.panel.size.y;
            this._root.panel.size = new mw.Vector2(this._itemSize.x, height);
        }
        if (index >= 0) {
            this._items.splice(index, 0, itemUI);
        }
        else {
            this._items.push(itemUI);
        }
        this._invalidateLayout();
    }
    /**
     * 删除一个选项
     * @param node
     */
    removeItem(node) {
        const index = this._items.indexOf(node);
        if (index >= 0) {
            node.visible = false;
            this._cache.push(...this._items.splice(index, 1));
            this._invalidateLayout();
        }
    }
    /**
     * 删除一个指定索引
     * @param index
     */
    removeItemAt(index) {
        const node = this.getItem(index);
        if (node) {
            this.removeItem(node);
        }
    }
    /**
     * 获取一个选项,超出范围则返回空
     * @param index
     */
    getItem(index) {
        if (index >= 0 && index < this._items.length)
            return this._items[index];
        return null;
    }
    /**
     * 重新对齐面板
     */
    _invalidateLayout() {
        if (this._isDropdown) {
            let offset = 0;
            this._root.panel.visibility = mw.SlateVisibility.SelfHitTestInvisible;
            for (let i = 0; i < this._items.length; i++) {
                this._items[i].uiObject.position = new mw.Vector2(0, offset);
                offset += this._itemSize.y + this.space;
            }
        }
        else {
            this._root.panel.visibility = mw.SlateVisibility.Collapsed;
        }
    }
}

var foreign33 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AddGMCommand: AddGMCommand,
    CloseGMUI: CloseGMUI,
    OpenGMUI: OpenGMUI,
    default: GMService$1
});

let CopyCharacter = class CopyCharacter extends Script {
    constructor() {
        super(...arguments);
        this.isCanTrigger = true;
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    onStart() {
        if (mw.SystemUtil.isServer())
            return;
        this.gameObject.onEnter.add((character) => {
            if (Player.localPlayer.character.gameObjectId != character.gameObjectId)
                return;
            if (!this.isCanTrigger)
                return;
            this.isCanTrigger = false;
            TimeUtil.delaySecond(60).then(() => { this.isCanTrigger = true; });
            console.error(`aaaaaaa2`);
            character.setDescription(this.gameObject.parent.getDescription());
            character.asyncReady().then(() => {
                character.syncDescription();
            });
        });
    }
};
CopyCharacter = __decorate([
    Component
], CopyCharacter);
var CopyCharacter$1 = CopyCharacter;

var foreign50 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: CopyCharacter$1
});

var FreeCamera_1;
let FreeCamera = FreeCamera_1 = class FreeCamera extends Script {
    constructor() {
        super(...arguments);
        /** 摄像机锚点移动速度 */
        this.speed = 500;
        /** 移动叠加向量 */
        this._moveDirection = Vector.zero;
        /** 移动临时位置 */
        this._moveLoc = Vector.zero;
        /** 比值用常量 */
        this.VECTOR_ZERO = Vector.zero;
        /** 是否处于自由视角状态 */
        this.isFreeCamera = false;
        this.isFirstChange = true;
    }
    onStart() {
        this.init();
    }
    async init() {
        if (SystemUtil.isServer())
            return;
        await (await Player.asyncGetLocalPlayer()).character.asyncReady();
        this.freeCamera = await GameObject.asyncSpawn("Camera");
        this.freeCamera.springArm.localTransform = Transform.identity;
        // Config
        this.freeCamera.upAngleLimit = 89.9;
        this.freeCamera.downAngleLimit = 89.9;
        this.freeCamera.localTransform = Transform.identity;
        this.freeCamera.springArm.localTransform = Transform.identity;
        this.freeCamera.springArm.length = 0;
        this.freeCamera.springArm.collisionEnabled = false;
        InputUtil.onKeyDown(Keys.F8, () => {
            if (this.isFreeCamera) {
                this.exitFreeCamera();
            }
            else {
                this.enterFreeCamera();
            }
        });
        InputUtil.onKeyDown(Keys.NumPadNine, () => {
            this.freeCamera.springArm.worldTransform.position = Player.localPlayer.character.worldTransform.position.clone();
            this._moveLoc = this.freeCamera.springArm.worldTransform.position.clone();
        });
        Event.addLocalListener(FreeCamera_1.EVENTS_JOYSTICK_INPUT, (dir) => {
            if (this.freeCamera) {
                const forward = this.freeCamera.worldTransform.clone().getForwardVector().clone();
                const right = this.freeCamera.worldTransform.clone().getRightVector().clone();
                this._moveDirection.set(forward.multiply(dir.y).add(right.multiply(dir.x)));
                Vector.add(this._moveLoc, this._moveDirection.normalized.multiply(this.speed * 0.02), this._moveLoc);
                this.freeCamera.springArm.worldTransform.position = this._moveLoc;
                // 避免重复使用
                if (this.useUpdate)
                    this.useUpdate = false;
            }
        });
        KeyActionManager.instance.add([Keys.W, Keys.S, Keys.A, Keys.D, Keys.E, Keys.Q]);
    }
    /**
     * 切换至自由视角摄像机（暂未提供触屏控制方式）
     */
    enterFreeCamera() {
        if (!this.originCamera) {
            this.originCamera = Camera.currentCamera;
        }
        if (this.isFirstChange) {
            this.freeCamera.springArm.worldTransform.position = Player.localPlayer.character.worldTransform.position.clone();
            this._moveLoc = this.freeCamera.springArm.worldTransform.position.clone();
            this.isFirstChange = false;
        }
        Camera.switch(this.freeCamera, 0);
        this.originCamera.springArm.useControllerRotation = false;
        this.freeCamera.springArm.useControllerRotation = true;
        Player.localPlayer.character.movementEnabled = false;
        this.isFreeCamera = true;
        this.useUpdate = true;
    }
    /**
     * 退出自由视角摄像机
     */
    exitFreeCamera() {
        if (!this.isFreeCamera)
            return;
        Camera.switch(this.originCamera, 0);
        this.originCamera.springArm.useControllerRotation = true;
        this.freeCamera.springArm.useControllerRotation = false;
        Player.localPlayer.character.movementEnabled = true;
        this.isFreeCamera = false;
        this.useUpdate = false;
    }
    onUpdate(dt) {
        // 监听按键并叠加控制锚点位移的向量
        if (KeyActionManager.instance.isPress(Keys.W)) {
            // 将三维向量压缩至二维使用
            const forward = this.freeCamera.worldTransform.clone().getForwardVector().clone();
            this._moveDirection.x += forward.x;
            this._moveDirection.y += forward.y;
        }
        if (KeyActionManager.instance.isPress(Keys.S)) {
            const back = this.freeCamera.worldTransform.clone().getForwardVector().clone().multiply(-1);
            this._moveDirection.x += back.x;
            this._moveDirection.y += back.y;
        }
        if (KeyActionManager.instance.isPress(Keys.A)) {
            const left = this.freeCamera.worldTransform.clone().getRightVector().clone().multiply(-1);
            this._moveDirection.x += left.x;
            this._moveDirection.y += left.y;
        }
        if (KeyActionManager.instance.isPress(Keys.D)) {
            const right = this.freeCamera.worldTransform.clone().getRightVector().clone();
            this._moveDirection.x += right.x;
            this._moveDirection.y += right.y;
        }
        if (KeyActionManager.instance.isPress(Keys.E)) {
            this._moveDirection.z += 1;
        }
        if (KeyActionManager.instance.isPress(Keys.Q)) {
            this._moveDirection.z -= 1;
        }
        // 为锚点设置叠加后向量，实现无限制位移
        if (!this._moveDirection.equals(this.VECTOR_ZERO)) {
            Vector.add(this._moveLoc, this._moveDirection.normalized.multiply(this.speed * dt), this._moveLoc);
            this.freeCamera.springArm.worldTransform.position = this._moveLoc;
            this._moveDirection.x = 0;
            this._moveDirection.y = 0;
            this._moveDirection.z = 0;
        }
    }
};
FreeCamera.EVENTS_JOYSTICK_INPUT = "FreeCamera.EVENTS_JOYSTICK_INPUT";
FreeCamera = FreeCamera_1 = __decorate([
    Component
], FreeCamera);
var FreeCamera$1 = FreeCamera;
/**
 * 按键状态管理器
 */
class KeyActionManager {
    constructor() {
        /** 初始化标记 */
        this.isReady = false;
        /** 按下状态表 */
        this._actionStates = new Map;
        this._btnStates = new Map;
    }
    static get instance() {
        if (!KeyActionManager._instance) {
            KeyActionManager._instance = new KeyActionManager();
        }
        return KeyActionManager._instance;
    }
    /**
     * 检测按键是否被按下，无延迟（需要在update中调用，留意性能开销）
     * @param action 项目内按键操作枚举
     * @returns 是否被按下
     */
    isPress(action) {
        if (action instanceof mw.Button) {
            return this._btnStates.get(action.guid);
        }
        else {
            return this._actionStates.get(action);
        }
    }
    /**
     * 为指定按钮添加状态监听
     * @param btn 需要监听状态的按钮
     */
    add(btn) {
        // 初始化按下状态 并设定状态改变监听
        if (btn instanceof Button) {
            this._btnStates.set(btn.guid, false);
            btn.onPressed.add(() => {
                this._btnStates.set(btn.guid, true);
            });
            btn.onReleased.add(() => {
                this._btnStates.set(btn.guid, false);
            });
        }
        else {
            btn.forEach(element => {
                this._actionStates.set(element, false);
                InputUtil.onKeyDown(element, () => {
                    this._actionStates.set(element, true);
                });
                InputUtil.onKeyUp(element, () => {
                    this._actionStates.set(element, false);
                });
            });
        }
    }
}

var foreign51 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: FreeCamera$1
});

/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/common/notice/SecondNoticeItem.ui
 * TIME: 2025.01.27-15.06.29
 */
let SecondNoticeItem_Generate = class SecondNoticeItem_Generate extends UIScript {
    get txt_context() {
        if (!this.txt_context_Internal && this.uiWidgetBase) {
            this.txt_context_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/txt_context');
        }
        return this.txt_context_Internal;
    }
    get icon() {
        if (!this.icon_Internal && this.uiWidgetBase) {
            this.icon_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/icon');
        }
        return this.icon_Internal;
    }
    get effect() {
        if (!this.effect_Internal && this.uiWidgetBase) {
            this.effect_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/effect');
        }
        return this.effect_Internal;
    }
    onAwake() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerBottom;
        this.initButtons();
    }
    initButtons() {
        //按钮添加点击
        //按钮添加点击
        //按钮多语言
        //文本多语言
        this.initLanguage(this.txt_context);
        //文本多语言
    }
    /*初始化多语言*/
    initLanguage(ui) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }
    onShow(...params) { }
    ;
    /*显示panel*/
    show(...param) {
        mw.UIService.showUI(this, this.layer, ...param);
    }
    /*隐藏panel*/
    hide() {
        mw.UIService.hideUI(this);
    }
};
SecondNoticeItem_Generate = __decorate([
    UIBind('UI/common/notice/SecondNoticeItem.ui')
], SecondNoticeItem_Generate);
var SecondNoticeItem_Generate$1 = SecondNoticeItem_Generate;

var foreign56 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: SecondNoticeItem_Generate$1
});

const MWModuleMap = { 
     '8844A03B4B6BEF9D15DCAAA48FB26A57': foreign1,
     'B0B4B657452A9DF4B7AD97B03BE71040': foreign2,
     '1EADC67E44A4E69AE0536FAD402CBF72': foreign3,
     '943D729E44EDCB8FC0E0E0A49FC4B81D': foreign4,
     '0D56B7DA4D6907D8A3A0E2B7D99243E5': foreign5,
     'D5187BC64D0F894014874CBD5C3B66FF': foreign6,
     'BC3299354D46FDA8CE4460B95AD095B5': foreign7,
     '0B74AAD24FE365CF49EE42887E1429E1': foreign8,
     '68B4676C4491BF748184D8B1C41C073C': foreign9,
     '5518D83E44C5548F0296A588F32A2EBA': foreign10,
     '3AB8E07248A4F10CBBD12990567959A3': foreign11,
     '243765004517AECC33492499B2B88CBC': foreign12,
     '1104309D4AC2F09410E3428603131405': foreign13,
     '2C6C1F5B41E266A6AEA9DE92728F56BA': foreign14,
     '9BC6EE924CE6A5778D6FAFBF640EED8C': foreign15,
     'D2DDF11D4BF0BEBBCE0F2B9CF42517EE': foreign16,
     '0FCAF0584709FBB39E590CAEA83B1217': foreign17,
     '7D98F77C457BD44550899198F36FDB9F': foreign18,
     '904D34A54E1F6197EF34B1892E35FC85': foreign19,
     'AA3586B64B181C63C928A1810CCA95E1': foreign20,
     '9C6A23FA4F6E9AAA9861F28F43A80CB7': foreign21,
     '837FD9D94CC2AE241B061DABC0E78B17': foreign22,
     '09C1929E4D5A6DC4B1C6DF8F280C0B8E': foreign23,
     '644F545245224887FB7893A799934F09': foreign24,
     '33E4306448F72B0C557086A691B9CBFF': foreign25,
     'F411D5434367FBC411D5629DE4530583': foreign26,
     '32887ABC4B678AD4708B3EAB42A38F87': foreign27,
     'D7B3EB9F492B14994EC537AEF4144580': foreign28,
     'E5070EED458C8754669EE78CB19176FE': foreign29,
     '0687D50F477374C7AB669BBD15E6FDF5': foreign30,
     '3340D31D4C01664F7F4F45A689890DBD': foreign31,
     'DCE2333D4CD32653F566BA81ED0419FF': foreign32,
     'ADCD102745EC6ADBA54B59A92A39C2DB': foreign33,
     '8846728C43298291A92B03A84C2B605C': foreign34,
     'A7352BD449067EB6E854E3AF902BC932': foreign35,
     'D8E6B9EF4DE0DF3088CC3C8599F76F45': foreign36,
     '7833C871441E612CC5B5CE9BDDA947C9': foreign37,
     'A12B8D524B602E750EB63288C79D32E2': foreign38,
     'F057824E4569A842D403858DC7D1D88B': foreign39,
     '9F1D50A144B07BFAFC552F925299CE71': foreign40,
     '3E1D070A4147D9A5B46E0EAF1E5FD4E1': foreign41,
     'F215908B4B4F40F5531DE4A01F660731': foreign42,
     'A8FB760F441C95AFACBAD78838B58528': foreign43,
     'DC56F3F94E062B2AD909F386B767436F': foreign44,
     '6688C3B84E092AFB395C0DB3E4331E3D': foreign45,
     '535BEEA64A7F529F52631FA182212718': foreign46,
     'B23852CE407E0A008F3BE78DDE49EB51': foreign47,
     'FAAFDA5E4A40291D72B0459742CD601A': foreign48,
     '1D10F64B4D38229D7655CC923071E9B2': foreign49,
     'BC6767CF4240176E5C9B6984BB540726': foreign50,
     '7EA40C8447FE422BDA45A6A15ACAB0C2': foreign51,
     '290BA293443A80CCA56170B9DA3D47C1': foreign52,
     '71EC5D03421DCEEEB4172C8C643D8019': foreign53,
     '0AEE9F474D44E77C3A083FBF0EFD7775': foreign54,
     '741B06144E25B4753E8005985816DAF8': foreign55,
     'EE3F354349BB041CD741FF84B745B113': foreign56,
     '8FA0EC3E442A57C1B550BB833E68DA90': foreign57,
     '100DA6744367634E7FFC0895CD98DDB9': foreign58,
     '67892EC847DCDABBB14451A8CDFD526C': foreign59,
     '486071A84887288700A7E297CBF6B438': foreign60,
     'BB12954A4FC0D5D00C29B0BFD73F83A2': foreign61,
     '50B679574FA404BE92C52CAD0436F5B1': foreign62,
     'BC28A8C5401B15E17AAEF482A8AA133E': foreign63,
     '4FBD7D6C429DD0F90494B5B35FD1AE7F': foreign64,
     '3A88620945CCB3EE5B699F9D35A5A28F': foreign65,
     '827757834BCFC569771BCB84A3609238': foreign66,
     'F58702064960960163820CB9C8D0F3C1': foreign67,
     'D92460FC43DFEF127C8EB39DECD67E58': foreign68,
     'C265D0BB488D0422A80DBBB6082E4CB4': foreign69,
     '2DB355DB4AE5EEA9FAD9E39C7071F66C': foreign70,
     '95C84A464FBF396210D6DAB0DFAF53C3': foreign71,
     'C067E1F649184B0F7FC5E0B9456BC72C': foreign72,
     '337A59B14A237973EEB178A260344C21': foreign73,
     'B9D019D74067C8F762132698D474BF63': foreign74,
     'C4E377B14812C09429E28988E62907DB': foreign75,
     '9E3A8E7D4942E24576FFE88DEBE534D2': foreign76,
     'A8E0593D477EC697B2559789990E0882': foreign77,
     'BF8FC10D4207BD4C47028EBC0D3ACF8F': foreign78,
     '559367EC4AA0BAE9AD25A694D5CA960C': foreign79,
     '2AD51BC848CD83DE2F0BA68674DE3EE1': foreign80,
     '52E3A8604FC761E6CC747FB22FD7160B': foreign81,
     '14F8E49D4B31DFAA50548BA206585CCA': foreign82,
     '656033E844C70FD925FC8F887EA9FA46': foreign83,
     '46D363B5455BBB5A2A9BB58A4E4A04D2': foreign84,
};
const MWFileMapping = new WeakMap([[foreign1 || {}, "JavaScripts/common/notice/Notice"],
[foreign2 || {}, "JavaScripts/common/notice/Tween"],
[foreign3 || {}, "JavaScripts/common/notice/UIPool"],
[foreign4 || {}, "JavaScripts/common/notice/Updater"],
[foreign5 || {}, "JavaScripts/configs/ActionConfig"],
[foreign6 || {}, "JavaScripts/configs/ActionProp"],
[foreign7 || {}, "JavaScripts/configs/Chat"],
[foreign8 || {}, "JavaScripts/configs/ConfigBase"],
[foreign9 || {}, "JavaScripts/configs/Expression"],
[foreign10 || {}, "JavaScripts/configs/GameConfig"],
[foreign11 || {}, "JavaScripts/configs/Interact"],
[foreign12 || {}, "JavaScripts/configs/Language"],
[foreign13 || {}, "JavaScripts/configs/Music"],
[foreign14 || {}, "JavaScripts/configs/ShareId"],
[foreign15 || {}, "JavaScripts/configs/Sit"],
[foreign16 || {}, "JavaScripts/GameStart"],
[foreign17 || {}, "JavaScripts/GlobalData"],
[foreign18 || {}, "JavaScripts/module/AdModule/ui/AdPanel"],
[foreign19 || {}, "JavaScripts/module/DanMuModule/Bubble"],
[foreign20 || {}, "JavaScripts/module/DanMuModule/Buff"],
[foreign21 || {}, "JavaScripts/module/DanMuModule/DanMuData"],
[foreign22 || {}, "JavaScripts/module/DanMuModule/DanMuModuleC"],
[foreign23 || {}, "JavaScripts/module/DanMuModule/DanMuModuleS"],
[foreign24 || {}, "JavaScripts/module/DanMuModule/ui/ActionItem"],
[foreign25 || {}, "JavaScripts/module/DanMuModule/ui/ActionTabItem"],
[foreign26 || {}, "JavaScripts/module/DanMuModule/ui/BagItem"],
[foreign27 || {}, "JavaScripts/module/DanMuModule/ui/BagTabItem"],
[foreign28 || {}, "JavaScripts/module/DanMuModule/ui/ChatItem1"],
[foreign29 || {}, "JavaScripts/module/DanMuModule/ui/ChatItem2"],
[foreign30 || {}, "JavaScripts/module/DanMuModule/ui/ChatPanel"],
[foreign31 || {}, "JavaScripts/module/DanMuModule/ui/DanMuPanel"],
[foreign32 || {}, "JavaScripts/module/DanMuModule/ui/ExpressionItem"],
[foreign33 || {}, "JavaScripts/module/GmModule/GMService"],
[foreign34 || {}, "JavaScripts/module/HUDModule/HUDModule"],
[foreign35 || {}, "JavaScripts/module/InteractionModule/InteractionModule"],
[foreign36 || {}, "JavaScripts/module/NavigationModule/NavigationModule"],
[foreign37 || {}, "JavaScripts/module/RankModule/RankData"],
[foreign38 || {}, "JavaScripts/module/RankModule/RankModuleC"],
[foreign39 || {}, "JavaScripts/module/RankModule/RankModuleS"],
[foreign40 || {}, "JavaScripts/module/RankModule/ui/RankPanel"],
[foreign41 || {}, "JavaScripts/module/RankModule/ui/RoomItem"],
[foreign42 || {}, "JavaScripts/module/RankModule/ui/WorldItem"],
[foreign43 || {}, "JavaScripts/module/SetModule/SetModule"],
[foreign44 || {}, "JavaScripts/module/SetModule/ui/SetPanel"],
[foreign45 || {}, "JavaScripts/module/SignInModule/SignInData"],
[foreign46 || {}, "JavaScripts/module/SignInModule/SignInModuleC"],
[foreign47 || {}, "JavaScripts/module/SignInModule/SignInModuleS"],
[foreign48 || {}, "JavaScripts/module/SignInModule/ui/SignInItem"],
[foreign49 || {}, "JavaScripts/module/SignInModule/ui/SignInPanel"],
[foreign50 || {}, "JavaScripts/tools/CopyCharacter"],
[foreign51 || {}, "JavaScripts/tools/FreeCamera"],
[foreign52 || {}, "JavaScripts/tools/ui/LoadingPanel"],
[foreign53 || {}, "JavaScripts/tools/Utils"],
[foreign54 || {}, "JavaScripts/tools/WaitingQueue"],
[foreign55 || {}, "JavaScripts/ui-generate/common/notice/NoticeView_generate"],
[foreign56 || {}, "JavaScripts/ui-generate/common/notice/SecondNoticeItem_generate"],
[foreign57 || {}, "JavaScripts/ui-generate/common/notice/TopNoticeItem_generate"],
[foreign58 || {}, "JavaScripts/ui-generate/module/AdModule/AdPanel_generate"],
[foreign59 || {}, "JavaScripts/ui-generate/module/AdModule/TipsPanel_generate"],
[foreign60 || {}, "JavaScripts/ui-generate/module/DanMuModule/ActionItem_generate"],
[foreign61 || {}, "JavaScripts/ui-generate/module/DanMuModule/ActionTabItem_generate"],
[foreign62 || {}, "JavaScripts/ui-generate/module/DanMuModule/BagItem_generate"],
[foreign63 || {}, "JavaScripts/ui-generate/module/DanMuModule/BagTabItem_generate"],
[foreign64 || {}, "JavaScripts/ui-generate/module/DanMuModule/BubbleItem_generate"],
[foreign65 || {}, "JavaScripts/ui-generate/module/DanMuModule/ChatItem1_generate"],
[foreign66 || {}, "JavaScripts/ui-generate/module/DanMuModule/ChatItem2_generate"],
[foreign67 || {}, "JavaScripts/ui-generate/module/DanMuModule/ChatPanel_generate"],
[foreign68 || {}, "JavaScripts/ui-generate/module/DanMuModule/DanMuPanel_generate"],
[foreign69 || {}, "JavaScripts/ui-generate/module/DanMuModule/ExpressionItem_generate"],
[foreign70 || {}, "JavaScripts/ui-generate/module/GMModule/GMHUD_generate"],
[foreign71 || {}, "JavaScripts/ui-generate/module/GMModule/GMItem_generate"],
[foreign72 || {}, "JavaScripts/ui-generate/module/HUDModule/HUDItem_generate"],
[foreign73 || {}, "JavaScripts/ui-generate/module/HUDModule/HUDPanel_generate"],
[foreign74 || {}, "JavaScripts/ui-generate/module/InteractionModule/GuidePanel_generate"],
[foreign75 || {}, "JavaScripts/ui-generate/module/InteractionModule/OnClickPanel_generate"],
[foreign76 || {}, "JavaScripts/ui-generate/module/RankModule/RankPanel_generate"],
[foreign77 || {}, "JavaScripts/ui-generate/module/RankModule/RoomItem_generate"],
[foreign78 || {}, "JavaScripts/ui-generate/module/RankModule/WorldItem_generate"],
[foreign79 || {}, "JavaScripts/ui-generate/module/SetModule/SetPanel_generate"],
[foreign80 || {}, "JavaScripts/ui-generate/module/ShareModule/SavePanel_generate"],
[foreign81 || {}, "JavaScripts/ui-generate/module/ShareModule/SharePanel_generate"],
[foreign82 || {}, "JavaScripts/ui-generate/module/SignInModule/SignInItem_generate"],
[foreign83 || {}, "JavaScripts/ui-generate/module/SignInModule/SignInPanel_generate"],
[foreign84 || {}, "JavaScripts/ui-generate/tools/LoadingPanel_generate"]]);

exports.MWFileMapping = MWFileMapping;
exports.MWModuleMap = MWModuleMap;
//# sourceMappingURL=game.js.map
