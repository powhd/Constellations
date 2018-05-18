export function getConstellation(date){
    const month = date.getMonth()+1, //获取到月数
          sky = date.getDate()   //获取到一个月中的某一天
    var Constellation = '';//存储拿到的星座

    let Constellations = [
        "白羊座",
        "金牛座",
        "双子座",
        "巨蟹座",
        "狮子座",
        "处女座",
        "天秤座",
        "天蝎座",
        "射手座",
        "摩羯座",
        "水瓶座",
        "双鱼座"
    ];

    month == 3 ? sky < 21 ? Constellation = Constellations[11]: Constellation = Constellations[0] :
    month == 4 ? sky < 21 ? Constellation = Constellations[0]: Constellation = Constellations[1] :
    month == 5 ? sky < 22 ? Constellation = Constellations[1]: Constellation = Constellations[2] :
    month == 6 ? sky < 22 ? Constellation = Constellations[2]: Constellation = Constellations[3] :
    month == 7 ? sky < 23 ? Constellation = Constellations[3]: Constellation = Constellations[4] :
    month == 8 ? sky < 24 ? Constellation = Constellations[4]: Constellation = Constellations[5] :
    month == 9 ? sky < 24 ? Constellation = Constellations[5]: Constellation = Constellations[6] :
    month == 10 ? sky < 24 ? Constellation = Constellations[6]: Constellation = Constellations[7] :
    month == 11 ? sky < 23 ? Constellation = Constellations[7]: Constellation = Constellations[8] :
    month == 12 ? sky < 22 ? Constellation = Constellations[8]: Constellation = Constellations[9] :
    month == 1 ? sky < 21 ? Constellation = Constellations[9]: Constellation = Constellations[10] :
    month == 2 ? sky < 20 ? Constellation = Constellations[10]: Constellation = Constellations[11] : "" ;


    return Constellation;
}
