var express = require('express');
var fs = require('fs');
var formidable = require('formidable');
var app = express();
app.use(express.static('www'))

//返回效果图所有信息
app.get('/getall', (req, res) => {
    fs.readFile('./data/data.json', (err, doc) => {
        // console.log(JSON.parse(doc))
        var headerList = JSON.parse(doc).headerList
        var SplitArray = function (N, Q) {
            var R = [], F;
            for (F = 0; F < Q.length;) R.push(Q.slice(F, F += N))
            return R
        }
        var mainImg = SplitArray(6, JSON.parse(doc).mainImg)
        var jianjie = JSON.parse(doc).jianjie
        // console.log({headerList,mainImg})
        // console.log(mainImg)
        res.json({ headerList, mainImg, jianjie })
    })
});
//返回工地所有信息

app.get('/getallW', (req, res) =>{
    fs.readFile('./data/site.json', (err, data) =>{
        var data = JSON.parse(data.toString())
        //console.log(data)
        res.json(data)
    })
})

//搜索
app.post('/search', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        arr = []
        var arr1 = []
        var obj1 = {}
        var obj2 = {}
        var value = fields.value
        fs.readFile('./data/data.json', (err, data) => {
            if(value==''){
                return
            }
            var headerList = JSON.parse(data).headerList;
            headerList.map(item => {
                item.children.map(i => {
                    if (value === i.title) {
                        return obj1 = { search: i }
                    } else {
                        return ''
                    }
                })
            })

            var mainImg = JSON.parse(data).mainImg
            mainImg.map(item => {
                if (item.jianshu.includes(value)) {
                    return arr1.push(item)
                } else {
                    return ''
                }
            })
            var SplitArray = function (N, Q) {
                var R = [], F;
                for (F = 0; F < Q.length;) R.push(Q.slice(F, F += N))
                return R
            }
            arr1 = SplitArray(6, arr1)
            obj2 = { mainImg: arr1 }
            // console.log(obj1)
            arr.push(obj1, obj2)
            //console.log(arr)
            res.send(arr)
        });
    });
});
//点击table
app.post('/table', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var title = ''
        arr = []
        var url = fields.url
        fs.readFile('./data/data.json', (err, data) => {
            var headerList = JSON.parse(data).headerList
            headerList.map(item => {
                item.children.map(i => {
                    if (url === i.url) {
                        return title = i.title
                    }
                })
            })
            var mainImg = JSON.parse(data).mainImg
            mainImg.map(item => {
                if (item.jianshu.includes(title)) {
                    return arr.push(item)
                } else {
                    return ''
                }
            })
            var SplitArray = function (N, Q) {
                var R = [], F;
                for (F = 0; F < Q.length;) R.push(Q.slice(F, F += N))
                return R
            }
            arr = SplitArray(6, arr) 
            // console.log(arr)
            res.json({ title,mainImg:arr })
        });
    });
});


app.listen(3000, () => {
    console.log(3000)
})