let data = [
    {
        name:'Export'
    },
    {
        name:'Size compressor'
    }
]
const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + '</div>';
});

info.innerHTML = details.join('\n');