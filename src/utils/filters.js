// 使用方法  {{xxx  |  过滤器名称}}
// 转化为 12,345,345.845金钱的格式   TransformationNumber

// 转化为 12,345,345.845  金钱的格式。
export function TransformationNumber(vaule) {
    vaule = vaule.toString();
    var num = vaule;
    num = num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    return num;
}