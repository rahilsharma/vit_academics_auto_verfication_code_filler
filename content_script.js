function trim(str) {
        return str.replace(/^\s+|\s+$/g,"");
    }
var rs=document.getElementsByTagName('font')[6].innerHTML;
var rs1=rs.split(' ').join('');
var myrs= trim(rs1);
document.getElementsByTagName('input')[3].value=myrs.toString();

