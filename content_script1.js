function trim(str) {
        return str.replace(/^\s+|\s+$/g,"");
    }
var rs=document.getElementsByTagName('font')[5].innerHTML;
var rs1=rs.split(' ').join('');
var myrs= trim(rs1);
document.getElementsByTagName('input')[2].value=myrs.toString();

