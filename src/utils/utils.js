// 获取cookie    getCookie(name)
// 设置cookie    setCookie(c_name, value, expiredays)
// 删除cookie    delCookie(name)
// 获得当前年月格式时间(yyyy-mm)    getNowDateMonth()
// 获得当前年月日格式时间(yyyy-mm-dd)    getNowDateDay()
// 比较是否在时、分的范围段内    timeRange(beginTime, endTime, nowTime) 
// 深拷贝对象  jsonClone()

var util = {
    /**
     * 获取cookie
     * @param {传入的cookie名} name 
     */
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    /**
     * 设置cookie
     * @param {cookie名} c_name 
     * @param {cookie值} value 
     * @param {设置时间戳} expiredays 
     */
    setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    },

    /**
     * 删除cookie
     * @param {传入cookie的名字即可} name 
     */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    /**
     * 获得当前年月格式时间 （yyyy-mm）
     */
    getNowDateMonth() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month;
        return currentdate;
    },
    /**
     * 获得当前年月日格式时间 （ yyyy-mm-dd） 
     */
    getNowDateDay() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate; // yyyy-mm-dd
        return currentdate;
    },
    /**
     * 当判断的时间等于范围时间  也是属于范围内
     * var time = "09:09";  var beginTime = "20:00";  var endTime = "22:00";    
     * @param {范围的开始时间} beginTime  
     * @param {范围的结束时间} endTime    
     * @param {判断是否在范围段的时间} nowTime    
     */
    timeRange(beginTime, endTime, nowTime) {
        var arr = beginTime.split(":");
        var arr2 = endTime.split(":");
        var arr3 = nowTime.split(":");
        var flag = (arr[0] * 3600 + arr[1] * 60) - (arr2[0] * 3600 + arr2[1] * 60);
        var flag2 = (arr2[0] * 3600 + arr2[1] * 60) - (arr3[0] * 3600 + arr3[1] * 60);
        var flag3 = (arr3[0] * 3600 + arr3[1] * 60) - (arr[0] * 3600 + arr[1] * 60);

        if (flag == 0) {
            console.log('请给与正确的时间范围')
            return false;
        }

        if (flag2 == 0) {
            console.log("在时间范围")
            return true;
        }

        if (flag3 == 0) {
            console.log("在时间范围")
            return true;
        }

        if (flag < 0) {
            var strb = beginTime.split(":");
            if (strb.length != 2) {
                return false;
            }

            var stre = endTime.split(":");
            if (stre.length != 2) {
                return false;
            }

            var strn = nowTime.split(":");
            if (stre.length != 2) {
                return false;
            }
            var b = new Date();
            var e = new Date();
            var n = new Date();

            b.setHours(strb[0]);
            b.setMinutes(strb[1]);
            e.setHours(stre[0]);
            e.setMinutes(stre[1]);
            n.setHours(strn[0]);
            n.setMinutes(strn[1]);

            if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
                console.log("在时间范围")
                return true;
            } else {
                console.log("不在在时间范围")
                return false;
            }
        } else if (flag > 0) {
            if (flag3 > 0) {
                console.log("在时间范围")
                return true;
            } else if (flag2 > 0) {
                console.log("在时间范围")
                return true;
            } else {
                console.log("不在在时间范围")
                return false;
            }
        }
    },
    /**
     * 深拷贝对象 是为了处理原有对象 并且不改变原始对象。
     * 注意： 此方法只能 深拷贝 那些能够被 json 直接表示的数据格式。
     * @param {传入深拷贝的对象} obj 
     */
    jsonClone(obj) {
        return JSON.parse(JSON.stringify(onj));
    }
}

export default util;