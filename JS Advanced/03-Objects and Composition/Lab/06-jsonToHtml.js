function jsonToHtml(dataAsJson) {
    const res = []
    res.push('<table>')
    const data = JSON.parse(dataAsJson);
    
    const props = Object.keys(data[0])
    result.pus( ` <tr>${props.map(p=> <th>p</th>.join(''))

    res.push('</table>')
}
jsonToHtml(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
