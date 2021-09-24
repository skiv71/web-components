//@ts-check

import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'
import svelte from 'rollup-plugin-svelte';

var config = {
    _file(app, name, format) {
        return `${process.env.dist}/${app}/${name}.${format}.js`
    },
    get input() {
        return process.env.file

    },
    output(format) {
        console.log(this.input)
        var [file, app] = this.input
            .split(`/`)
            .reverse()
            .slice(0, -2)
        var name = file
            .split(`.`)
            .shift()
        var sourcemap = true
        var exports = `auto`
        return { exports, format, file: this._file(app, name, format), sourcemap, name }
    }
}

export default {
    input: config.input,
    get output() {
        return [`esm`, `umd`, `cjs`]
            .map(f => config.output(f))
    },
    plugins: [
        typescript(),
        svelte({ compilerOptions: { customElement: true }}),
        resolve()
    ]
};
