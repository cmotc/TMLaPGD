var urls= [];
for (var i= document.links.length; i-->0;)
        if (document.links[i].hostname===location.hostname)
                urls.push(document.links[i].href);
var privurls=[]
for (var i = 0, len = urls.length; i < len; i++) {
        if(urls[i].includes("priv")){
                privurls.push(urls[i]);
        }
}

privurls.sort(function(a, b){
        return a.length - b.length || // sort by length, if equal then
                a.localeCompare(b);    // sort by dictionary order
})

alert(privurls[0]);
