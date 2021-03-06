Vue.component("shrinker", {
    props: ["shrinker"],
    methods:
        {
            formatNumber: (n, prec, prec1000, lim) => functions.formatNumber(n, prec, prec1000, lim)
        },
    template: `<tr>
<td>{{shrinker.name}}</td>
<td>Lv. {{shrinker.level}}</td>
<td>+ {{formatNumber(shrinker.getProductionPS(), 2, 0, 1e6)}} &rho;<sub>p</sub>/s</td>
<td>&div;{{formatNumber(shrinker.getShrinkPower(), 2, 5)}}/s</td>
<td><button @click="shrinker.buy()">{{formatNumber(shrinker.getPrice(), 2, 0, 1e6)}} &rho;<sub>p</sub></button></td>
</tr>`
})