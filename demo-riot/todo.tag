<todo>
    <h3> {opts.title} </h3>
    <ul>
        <li each={ items }>
            <label class={ completed: done }>
                <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
            </label>
        </li>
    </ul>
    <form onsubmit={ add }>
        <input ref="input" onkeyup={ edit }>
        <button disabled={ !text }>Add #{ items.length + 1 }</button>
    </form>

    <p> Do I even Exist ?</p>

    <script>

        var OptsMixin = {
            init: function(){
                this.on('updated', function() { console.log('updated') })
            },

            getOpts: function() {
                return this.opts
            },

            setOpts: function(opts, update) {
                this.opts = opts
                if (!update) this.update()
                return this
            }
        }

        this.mixin(OptsMixin)

        this.items = opts.items

        edit(e) {
            this.text = e.target.value
        }

        add(e) {
            e.preventDefault();
            if (this.text) {
                this.items.push({
                    title: this.text
                })
                this.text = this.refs.input.value = ''
            }
        }

        toggle(e) {
            var item = e.item
            item.done = !item.done
            return true
        }

        this.on('mount', function() {
            $('p', this.root);
            console.log(this.root)
            console.log(this.root.querySelectorAll('p'))
        })

    </script>

    <style>
        h3 { font-size: 120%; }
    </style>
</todo>