const toast = {
    styles: {
        position: 'fixed',
        'min-width': '320px',
        top: '20px',
        left: '20px',
        'border-radius': '10px',
        padding: '15px 20px',
        color: '#fff',
        'background-color': '#999',
        'z-index': '1000',
    },

    show: function(text, type){
        this.hide();
        let style = '';
        for (let prop in this.styles){
            style += `${prop}:${this.styles[prop]};`
        }
        if(type==='info'){
            style += 'background-color: rgba(13, 202, 240, 0.9)';
        }else if(type==='success'){
            style += 'background-color: rgba(25, 135, 84, 0.9)';
        }
        else if(type==='danger'){
            style += 'background-color: rgba(220, 53, 70, 0.9)';
        }
        else if(type==='warning'){
            style += 'background-color: rgba(255, 193, 7, 0.9)';
        }


        document.body.insertAdjacentHTML('afterbegin', `<div id="my-toast" style="${style}">${text}</div>`)
    
        // const _this = this;
        setTimeout(()=>{
            this.hide();
        }, 3000);
    },
    hide: function(){
        if(document.getElementById('my-toast') !== null){
            document.getElementById('my-toast').remove();
        }
    },
    success: function(text){
        this.show(text, 'success');
    },
    warning: function(text){
        this.show(text, 'warning');
    },
    info: function(text){
        this.show(text, 'info');
    },
    danger: function(text){
        this.show(text, 'danger');
    }
    
}